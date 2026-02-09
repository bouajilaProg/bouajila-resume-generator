---
sidebar_position: 3
---

# Functionality

The `bouajila-resume-generator` provides two primary ways to work with your resume data: compiling directly to PDF and generating raw Typst source code.

## Compiling to PDF

The most common use case is generating a PDF directly. This is handled by the `compile` function.

### `compile(resume: Resume, options?: CompileOptions)`

The `compile` function is an asynchronous function that takes your resume data and returns the compiled PDF.

#### Parameters

- **`resume`**: The structured resume data (see [Sections](/docs/category/resume-sections) for details).
- **`options`** (optional): An object to configure the output.
  - **`outputPath`**: (string) The file path where the PDF should be saved. If provided, the generator will write the file automatically.
  - **`format`**: (`"buffer"` | `"blob"`) Specifies the return type.
    - `"buffer"` (default): Returns a Node.js `Buffer`.
    - `"blob"`: Returns a `Blob` (useful for browser-based triggers).

### Example with Output Path

```typescript
import { compile } from "bouajila-resume-generator";

// This will create 'my-resume.pdf' in the current directory
await compile(myResume, { 
  outputPath: "./my-resume.pdf" 
});
```

### Example with Buffer Return

```typescript
const { buffer } = await compile(myResume);
// buffer is a Node.js Buffer containing the PDF data
```

## Generating Typst Source

If you want to customize the typesetting or debug the output, you can generate the raw Typst code.

```typescript
import { generateTypstSource } from "bouajila-resume-generator";

const typstCode = generateTypstSource(myResume);
console.log(typstCode);
```

This is useful if you have an existing Typst workflow or want to use the [Typst Web App](https://typst.app/).
