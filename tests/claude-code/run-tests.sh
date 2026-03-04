#!/bin/bash
# Supernova Test Runner for Claude Code
# Usage: ./run-tests.sh [test-file]
#
# Runs Jest tests for guard and modify skill validation.
# These tests verify security scanning patterns and safe modification logic.

set -e

TESTS_DIR="$(cd "$(dirname "$0")/.." && pwd)"

if [ -n "$1" ]; then
    echo "Running: $1"
    npx jest "$TESTS_DIR/$1" --verbose
else
    echo "Running all Supernova tests..."
    npx jest "$TESTS_DIR/test-guard.js" "$TESTS_DIR/test-modify.js" --verbose
    echo ""
    echo "All tests passed."
fi
