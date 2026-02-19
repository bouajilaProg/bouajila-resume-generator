# bouajila-resume-generator

[![GitHub stars](https://img.shields.io/github/stars/bouajilaprog/bouajila-resume-generator?style=flat&logo=github)](https://github.com/bouajilaprog/bouajila-resume-generator) [![Issues](https://img.shields.io/github/issues/bouajilaprog/bouajila-resume-generator?style=flat&logo=github)](https://github.com/bouajilaprog/bouajila-resume-generator/issues) [![License: ISC](https://img.shields.io/badge/license-ISC-brightgreen?style=flat)](LICENSE) [![Build Status](https://img.shields.io/github/actions/workflow/status/bouajilaprog/bouajila-resume-generator/ci.yml?branch=main&style=flat&logo=github)](https://github.com/bouajilaprog/bouajila-resume-generator/actions) [![TypeScript](https://img.shields.io/badge/TypeScript-%234785CC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![npm](https://img.shields.io/npm/v/bouajila-resume-generator?style=flat&logo=npm)](https://www.npmjs.com/package/bouajila-resume-generator)

License: ISC

`bouajila-resume-generator` is a TypeScript toolkit that turns structured data into polished PDF resumes using Typst. It focuses on type-safe schemas, composable sections, and a clean API for generating PDFs or Typst source.

Table of contents

- About
- Features
- Technical stack
- Setup
- Development
- Contributing
- License

About

This package provides a programmatic way to build resumes by defining content in TypeScript and compiling it into Typst-powered PDFs. It is built for repeatable outputs, shared templates, and automation-friendly workflows.

Features

- Typst-based rendering: fast PDF generation with modern typesetting.
- Type-safe schemas: structured resume data with strict TypeScript types.
- Composable sections: extend, reorder, and template with minimal glue.
- CLI-friendly: works well in CI/CD for automated resume builds.

Technical stack

| Component   | Technology |
|-------------|------------|
| Runtime     | Node.js (ESM) |
| Language    | TypeScript |
| PDF Engine  | Typst CLI |
| Testing     | Vitest |

Setup

Requirements

- Node.js v18 or higher
- pnpm (preferred package manager)
- Typst CLI (must be available on PATH)

Install

```bash
pnpm install bouajila-resume-generator
```

Usage

```typescript
import { compile, Resume, SectionType } from "bouajila-resume-generator";

const myResume: Resume = {
  name: "Jane Doe",
  description: "Software Engineer",
  lastUpdate: "2025-02-09",
  personalInfo: {
    name: "Jane Doe",
    location: "New York, NY",
    contact: [
      { id: 1, type: "Email", value: "jane.doe@example.com" },
      { id: 2, type: "LinkedIn", value: "linkedin.com/in/janedoe" }
    ]
  },
  sections: [
    {
      type: SectionType.Education,
      body: [
        {
          id: 1,
          degreeName: "Computer Science",
          degreeType: "B.S.",
          institution: "State University",
          summary: "Graduated with Honors, GPA: 3.8/4.0",
          highlights: ["Dean's List 2017-2019", "Thesis on Distributed Hash Tables"],
          startDate: "2018",
          endDate: "2022"
        }
      ]
    }
  ]
};

await compile(myResume, { outputPath: "./resume.pdf" });
```

Generate Typst source

```typescript
import { generateTypstSource } from "bouajila-resume-generator";

const typstCode = generateTypstSource(myResume);
console.log(typstCode);
```

Development

Scripts

- Build: `pnpm run build`
- Typecheck: `pnpm run typecheck`
- Dev (single run): `pnpm run dev`
- Dev (watch): `pnpm run dev:watch`
- Test: `pnpm run test`
- Docs: `pnpm run docs`

Project structure

- `src/compiler`: Typst generation and CLI execution.
- `types/`: Resume schema types.
- `template/`: Typst libraries and assets.
- `output/`: Default output for dev/test.

Contributing

This repository is optimized for agentic workflows. Read `AGENTS.md` for contribution conventions and TypeScript rules.

License

ISC
