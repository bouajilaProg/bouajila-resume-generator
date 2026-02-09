# Codebase Cleanup and Testing Plan

This plan outlines the steps to refactor the `yamlResume` project for better maintainability, type safety, and robust testing.

## Phase 1: Infrastructure & Path Cleanup
- **Install Vitest:** Replace manual testing scripts with a proper testing framework.
- **Remove `src/utils/path.ts`:** Move the project root resolution into `compile.ts` and use temporary directories for intermediate files.
- **Update Scripts:** Configure `package.json` with `test` and `test:watch` using Vitest.

## Phase 2: Core Refactoring
- **Refactor `ResumeBuilder`:**
  - Remove `any` types and non-null assertions.
  - Optimize the `addSection` handler dispatch.
  - Implement a `typstEscape` utility to safely handle special characters (e.g., `"`, `#`, `\`) in user input.
- **Block Standardization:**
  - Ensure all blocks follow a consistent signature and handle missing optional fields gracefully.

## Phase 3: Comprehensive Testing
- **Block Unit Tests:**
  - Create individual tests for `Header`, `Experience`, `Education`, etc.
  - Verify generated Typst syntax against expected strings.
- **Integration Tests:**
  - Test the `compile` function's end-to-end flow.
  - Mock the `typst` CLI or check for its presence to skip tests in environments without the binary.

## Phase 4: Final Verification
- **Strict Typechecking:** Run `pnpm run typecheck` to ensure no regressions.
- **Documentation:** Update `AGENTS.md` if any operational commands change.

## Task Breakdown (Committable)
1. [x] Setup Vitest and remove `src/utils/path.ts`.
2. [x] Refactor `ResumeBuilder` and implement Typst escaping.
3. [x] Add unit tests for all blocks in `src/compiler/blocks/`.
4. [x] Refactor `src/index.ts` and add integration tests.
5. [x] Cleanup `src/compiler/test/` (remove old manual tests).
6. [x] Setup Docusaurus documentation and `pnpm run docs` script.
