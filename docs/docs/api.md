# API Reference

The `yamlResume` package provides a simple API to compile structured resume data into PDF format using Typst.

## `compile(resume: Resume, options?: CompileOptions)`

The main function to generate a PDF.

### Parameters

- `resume`: A `Resume` object containing all the data.
- `options`:
  - `format`: `"buffer"` (default) or `"blob"`.
  - `outputPath`: Optional path to write the PDF directly to disk.

### Returns

A `Promise<CompileResult>` containing either a `buffer` or a `blob`.

```typescript
import { compile, Resume } from "yaml-resume";

const resume: Resume = { ... };

// Write directly to file
await compile(resume, { outputPath: "./my-resume.pdf" });

// Get as Buffer
const { buffer } = await compile(resume);
```

## `generateTypstSource(resume: Resume)`

Generates the Typst source code without compiling it to PDF.

### Returns

A string containing the Typst source.

## Types

### `Resume`

The main data structure for your resume.

### `SectionType`

An enum-like object defining supported sections:
- `Education`
- `Project`
- `WorkExperience`
- `Skills`
- `Certification`
- `ExtraCurricular`
- `Hobbies`
- `Languages`
