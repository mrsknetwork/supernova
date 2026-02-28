/**
 * Modify Agent Tests
 * Tests for safe delete, rename, and bulk update operations
 */

const { describe, test, expect } = require('@jest/globals');

// Mock the modify agent
const modifyAgent = {
  analyzeImpact(filePath, codebase) {
    const references = [];

    for (const [path, content] of Object.entries(codebase)) {
      if (content.includes(filePath) || content.includes(filePath.replace('.js', '').replace('.py', ''))) {
        references.push(path);
      }
    }

    const impactLevel = references.length > 5 ? 'HIGH' : references.length > 0 ? 'MEDIUM' : 'LOW';

    return {
      file: filePath,
      references,
      impactLevel,
      safeToDelete: references.length === 0
    };
  },

  previewRename(oldName, newName, codebase) {
    const changes = [];

    for (const [path, content] of Object.entries(codebase)) {
      const occurrences = (content.match(new RegExp(oldName, 'g')) || []).length;
      if (occurrences > 0) {
        changes.push({
          file: path,
          occurrences,
          preview: content.replace(new RegExp(oldName, 'g'), newName).substring(0, 200)
        });
      }
    }

    return {
      oldName,
      newName,
      totalFiles: changes.length,
      totalOccurrences: changes.reduce((sum, c) => sum + c.occurrences, 0),
      changes
    };
  },

  previewBulkUpdate(search, replace, codebase) {
    const matches = [];

    for (const [path, content] of Object.entries(codebase)) {
      const occurrences = (content.match(new RegExp(search, 'g')) || []).length;
      if (occurrences > 0) {
        matches.push({
          file: path,
          occurrences,
          preview: content.substring(0, 100).replace(new RegExp(search, 'g'), replace)
        });
      }
    }

    return {
      search,
      replace,
      totalFiles: matches.length,
      totalOccurrences: matches.reduce((sum, m) => sum + m.occurrences, 0),
      matches
    };
  },

  validateOperation(operation, target, context) {
    const validations = [];

    if (operation === 'delete') {
      if (!context.gitTracked) {
        validations.push({ type: 'WARNING', message: 'File not tracked in git' });
      }
      if (context.references > 0) {
        validations.push({ type: 'ERROR', message: `${context.references} references found` });
      }
    }

    if (operation === 'bulk-update') {
      if (context.totalFiles > 50) {
        validations.push({ type: 'WARNING', message: 'Large number of files affected' });
      }
    }

    return {
      valid: !validations.some(v => v.type === 'ERROR'),
      validations
    };
  }
};

describe('Modify Agent - Impact Analysis', () => {
  const mockCodebase = {
    'src/main.js': 'import { helper } from "./utils/helper"',
    'src/api.js': 'const result = helper.doSomething()',
    'src/utils/helper.js': 'export const helper = {}',
    'tests/helper.test.js': 'import { helper } from "../src/utils/helper"'
  };

  test('detects HIGH impact for heavily referenced file', () => {
    const impact = modifyAgent.analyzeImpact('src/utils/helper.js', mockCodebase);
    expect(impact.impactLevel).toBe('HIGH');
    expect(impact.references).toHaveLength(3);
  });

  test('detects LOW impact for unreferenced file', () => {
    const impact = modifyAgent.analyzeImpact('src/orphan.js', mockCodebase);
    expect(impact.impactLevel).toBe('LOW');
    expect(impact.safeToDelete).toBe(true);
  });

  test('lists all referencing files', () => {
    const impact = modifyAgent.analyzeImpact('src/utils/helper.js', mockCodebase);
    expect(impact.references).toContain('src/main.js');
    expect(impact.references).toContain('src/api.js');
    expect(impact.references).toContain('tests/helper.test.js');
  });
});

describe('Modify Agent - Rename Preview', () => {
  const mockCodebase = {
    'src/utils.js': 'export function getUserData() { return {} }',
    'src/auth.js': 'import { getUserData } from "./utils"',
    'src/api.js': 'const user = getUserData()',
    'tests/utils.test.js': 'test("getUserData", () => {})'
  };

  test('calculates correct totals for rename', () => {
    const preview = modifyAgent.previewRename('getUserData', 'getUser', mockCodebase);
    expect(preview.totalFiles).toBe(3);
    expect(preview.totalOccurrences).toBe(3);
  });

  test('shows all files to be modified', () => {
    const preview = modifyAgent.previewRename('getUserData', 'getUser', mockCodebase);
    const files = preview.changes.map(c => c.file);
    expect(files).toContain('src/auth.js');
    expect(files).toContain('src/api.js');
    expect(files).toContain('tests/utils.test.js');
  });

  test('counts occurrences per file', () => {
    const mockWithMultiple = {
      'src/api.js': 'getUserData(); getUserData(); getUserData()'
    };
    const preview = modifyAgent.previewRename('getUserData', 'getUser', mockWithMultiple);
    expect(preview.changes[0].occurrences).toBe(3);
  });
});

describe('Modify Agent - Bulk Update Preview', () => {
  const mockCodebase = {
    'src/config.js': 'const API_VERSION = "v1"',
    'src/client.js': 'const url = `/api/${API_VERSION}/users`',
    'src/docs.md': 'API version: v1'
  };

  test('finds all files matching pattern', () => {
    const preview = modifyAgent.previewBulkUpdate('v1', 'v2', mockCodebase);
    expect(preview.totalFiles).toBe(2);
  });

  test('counts total occurrences', () => {
    const mockWithMultiple = {
      'src/api.js': 'v1 v1 v1'
    };
    const preview = modifyAgent.previewBulkUpdate('v1', 'v2', mockWithMultiple);
    expect(preview.totalOccurrences).toBe(3);
  });

  test('returns empty for non-matching pattern', () => {
    const preview = modifyAgent.previewBulkUpdate('v3', 'v2', mockCodebase);
    expect(preview.totalFiles).toBe(0);
  });
});

describe('Modify Agent - Operation Validation', () => {
  test('rejects delete with references', () => {
    const context = { gitTracked: true, references: 5 };
    const validation = modifyAgent.validateOperation('delete', 'file.js', context);
    expect(validation.valid).toBe(false);
    expect(validation.validations.some(v => v.type === 'ERROR')).toBe(true);
  });

  test('allows delete of orphaned file', () => {
    const context = { gitTracked: true, references: 0 };
    const validation = modifyAgent.validateOperation('delete', 'orphan.js', context);
    expect(validation.valid).toBe(true);
  });

  test('warns on untracked file delete', () => {
    const context = { gitTracked: false, references: 0 };
    const validation = modifyAgent.validateOperation('delete', 'new.js', context);
    expect(validation.validations.some(v => v.type === 'WARNING')).toBe(true);
  });

  test('warns on large bulk update', () => {
    const context = { totalFiles: 100 };
    const validation = modifyAgent.validateOperation('bulk-update', '', context);
    expect(validation.validations.some(v => v.message.includes('Large'))).toBe(true);
  });
});

module.exports = { modifyAgent };
