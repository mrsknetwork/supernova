#!/usr/bin/env node
/**
 * Supernova Frontend Lint Script
 * Runs ESLint (JS/TS), tsc type-check, and checks for common bad patterns.
 * Usage: node .agents/skills/frontend/scripts/lint.js [--fix]
 */

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const args = process.argv.slice(2);
const fix = args.includes("--fix");
const root = process.cwd();

let exitCode = 0;

function run(label, cmd) {
    console.log(`\n▶ ${label}`);
    try {
        execSync(cmd, { stdio: "inherit", cwd: root });
        console.log(`✓ ${label} passed`);
    } catch (e) {
        console.error(`✗ ${label} FAILED`);
        exitCode = 1;
    }
}

// 1. TypeScript type check (no emit)
run("TypeScript strict check", "npx tsc --noEmit");

// 2. ESLint
const eslintFix = fix ? " --fix" : "";
run("ESLint", `npx eslint "src/**/*.{ts,tsx}"${eslintFix}`);

// 3. Check for forbidden patterns in all TSX files
console.log("\n▶ Custom pattern checks");
const tsxFiles = [];
function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory() && entry.name !== "node_modules" && entry.name !== ".next") walk(full);
        else if (entry.isFile() && (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts"))) tsxFiles.push(full);
    }
}
walk(path.join(root, "src"));

const forbidden = [
    { pattern: /: any/, label: "usage of 'any' type" },
    { pattern: /style=\{\{/, label: "inline style objects (use Tailwind classes instead)" },
    { pattern: /console\.log\(/, label: "console.log in production code" },
];

let patternErrors = 0;
for (const file of tsxFiles) {
    const rel = path.relative(root, file);
    const content = fs.readFileSync(file, "utf-8");
    const lines = content.split("\n");
    for (const { pattern, label } of forbidden) {
        lines.forEach((line, i) => {
            if (pattern.test(line)) {
                console.error(`  ✗ ${rel}:${i + 1} — ${label}`);
                patternErrors++;
                exitCode = 1;
            }
        });
    }
}

if (patternErrors === 0) console.log("✓ No forbidden patterns found");

console.log(`\n${exitCode === 0 ? "✅ All checks passed" : "❌ Lint failed — fix errors above"}`);
process.exit(exitCode);
