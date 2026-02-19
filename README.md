# bouajila-resume-generator

[![GitHub stars](https://img.shields.io/github/stars/bouajilaprog/bouajila-resume-generator?style=flat&logo=github)](https://github.com/bouajilaprog/bouajila-resume-generator) [![Issues](https://img.shields.io/github/issues/bouajilaprog/bouajila-resume-generator?style=flat&logo=github)](https://github.com/bouajilaprog/bouajila-resume-generator/issues) [![License: ISC](https://img.shields.io/badge/license-ISC-brightgreen?style=flat)](LICENSE) [![Build Status](https://img.shields.io/github/actions/workflow/status/bouajilaprog/bouajila-resume-generator/ci.yml?branch=main&style=flat&logo=github)](https://github.com/bouajilaprog/bouajila-resume-generator/actions) [![Docs](https://img.shields.io/github/actions/workflow/status/bouajilaprog/bouajila-resume-generator/docs.yml?branch=main&style=flat&logo=docusaurus&label=docs)](https://bouajilaprog.github.io/bouajila-resume-generator/) [![TypeScript](https://img.shields.io/badge/TypeScript-%234785CC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![npm](https://img.shields.io/npm/v/bouajila-resume-generator?style=flat&logo=npm)](https://www.npmjs.com/package/bouajila-resume-generator)

License: ISC

`bouajila-resume-generator` is a TypeScript toolkit that turns structured data into polished PDF resumes using Typst. It focuses on type-safe schemas, composable sections, and a clean API for generating PDFs or Typst source.

## Table of contents

- [About](#about)
- [Features](#features)
- [Technical stack](#technical-stack)
- [Quickstart](#quickstart)
- [Documentation](#documentation)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## About

This package provides a programmatic way to build resumes by defining content in TypeScript and compiling it into Typst-powered PDFs. It is built for repeatable outputs, shared templates, and automation-friendly workflows.

## Features

- **Typst-based rendering:** fast PDF generation with modern typesetting.
- **Type-safe schemas:** structured resume data validated with Zod.
- **Composable sections:** extend, reorder, and template with minimal glue.
- **CLI-friendly:** works well in CI/CD for automated resume builds.

## Technical stack

| Component   | Technology |
|-------------|------------|
| Runtime     | Node.js (ESM) |
| Language    | TypeScript |
| PDF Engine  | Typst CLI |
| Validation  | Zod |
| Testing     | Vitest |
| Docs        | Docusaurus |

## Quickstart

### 1. Install

```bash
pnpm add bouajila-resume-generator
```

Make sure the [Typst CLI](https://typst.app/docs/install/) is installed and available on your PATH.

### 2. Define your resume

```typescript
import { Resume, SectionType } from "bouajila-resume-generator";

const myResume: Resume = {
  name: "Jane Doe Resume",
  description: "Master Resume",
  lastUpdate: "2025-02-09",
  personalInfo: {
    name: "Jane Doe",
    location: "New York, NY",
    description: "Experienced Software Engineer.",
    contact: [
      { id: 1, type: "Email", value: "jane.doe@example.com" },
      { id: 2, type: "LinkedIn", value: "linkedin.com/in/janedoe" }
    ]
  },
  sections: [
    {
      type: SectionType.WorkExperience,
      body: [
        {
          id: 1,
          jobTitle: "Senior Developer",
          company: "Tech Corp",
          location: "Remote",
          startDate: "2020",
          endDate: "Present",
          summary: "Building amazing things.",
          highlights: ["Increased team velocity by 20%."],
          keywords: "React, Node.js"
        }
      ]
    }
  ]
};
```

### 3. Generate PDF

```typescript
import { compile } from "bouajila-resume-generator";

const result = await compile(myResume, { outputPath: "./resume.pdf" });

if (result.success) {
  console.log("PDF generated!");
} else {
  console.error(result.error.message);
}
```

For the full API reference, all resume sections, and advanced usage, see the **[Documentation](https://bouajilaprog.github.io/bouajila-resume-generator/)**.

## Documentation

Full docs are hosted on GitHub Pages:

**[https://bouajilaprog.github.io/bouajila-resume-generator/](https://bouajilaprog.github.io/bouajila-resume-generator/)**

Run the docs site locally:

```bash
pnpm run docs
```

## Development

### Scripts

- **Build:** `pnpm run build`
- **Typecheck:** `pnpm run typecheck`
- **Dev (single run):** `pnpm run dev`
- **Dev (watch):** `pnpm run dev:watch`
- **Test:** `pnpm run test`
- **Docs:** `pnpm run docs`

### Project structure

- `src/compiler` -- Typst generation and CLI execution.
- `types/` -- Resume schema types and Zod validation.
- `template/` -- Typst libraries and assets.
- `docs/` -- Docusaurus documentation site.
- `output/` -- Default output for dev/test.

## Contributing

This repository is optimized for agentic workflows. Read `AGENTS.md` for contribution conventions and TypeScript rules.

1. Run `pnpm run typecheck` and `pnpm run test` before opening a PR.
2. If you add a new resume section, update the docs in `docs/docs/sections/`.
3. For PDF troubleshooting, verify your local Typst installation is available on PATH.

## License

ISC
