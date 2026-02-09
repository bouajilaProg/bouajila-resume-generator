# bouajila-resume-generator 

`bouajila-resume-generator` is a TypeScript library designed to generate professional PDF resumes from structured data using [Typst](https://typst.app/). 

It provides a programmatic way to build resumes by defining content in a type-safe manner and compiling it into high-quality PDFs.

## Features

- **Type-Safe Resume Definition:** Use TypeScript interfaces to define your resume structure.
- **Typst-Powered:** Leverages the power and speed of the Typst typesetting system.
- **Customizable:** Easily extendable blocks and templates.

## Prerequisites

Before using `bouajila-resume-generator`, ensure you have the following installed:

1. **Node.js** (>= 18)
2. **pnpm** (recommended)
3. **Typst CLI:** The `typst` command must be available in your system's PATH.
   - [Installation Guide for Typst](https://github.com/typst/typst#installation)

## Installation

```bash
pnpm install bouajila-resume-generator
```

## Usage

### Basic Example

```typescript
import { compile, Resume, SectionType } from "bouajila-resume-generator";

const myResume: Resume = {
  name: "Jane Doe",
  description: "Software Engineer",
  template: "standard",
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
          startDate: "2018",
          endDate: "2022"
        }
      ]
    },
    // Add more sections like WorkExperience, Projects, Skills, etc.
  ]
};

// Compile to a file
await compile(myResume, { outputPath: "./resume.pdf" });

// Or get the buffer
const { buffer } = await compile(myResume);
```

### Advanced Usage: Generating Typst Source

If you want to handle the compilation yourself or debug the output, you can generate the Typst source code directly:

```typescript
import { generateTypstSource } from "bouajila-resume-generator";

const typstCode = generateTypstSource(myResume);
console.log(typstCode);
```

## Documentation

Detailed documentation and advanced guides will be available soon. We are currently building our documentation site using [Docusaurus](https://docusaurus.io/).

## Development

### Scripts

- **Build:** `pnpm run build` - Transpiles TypeScript to JavaScript in `dist/`.
- **Typecheck:** `pnpm run typecheck` - Runs the TypeScript compiler without emitting files.
- **Test Compile:** `pnpm run test` - Compiles a mock resume and outputs it to `output/resume.pdf`.
- **Watch Mode:** `pnpm run test:watch` - Watches for changes and re-runs the test compilation.

### Project Structure

- `src/compiler`: Core logic for generating Typst code and calling the CLI.
- `types/`: TypeScript definitions for the resume schema.
- `template/`: Typst library files and icons used for styling.
- `output/`: Default directory for generated files during tests.

## License

ISC
