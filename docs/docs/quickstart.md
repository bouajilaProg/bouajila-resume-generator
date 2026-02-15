---
sidebar_position: 2
---

# Quickstart

Get your professional resume ready in minutes.

## 1. Installation

First, install the generator and ensure you have [Typst](https://typst.app/docs/install/) installed on your system.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm">
    ```bash
    npm install bouajila-resume-generator
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash
    pnpm add bouajila-resume-generator
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```bash
    yarn add bouajila-resume-generator
    ```
  </TabItem>
  <TabItem value="bun" label="bun">
    ```bash
    bun add bouajila-resume-generator
    ```
  </TabItem>
</Tabs>

## 2. Define your Resume

Create a JSON or TypeScript object following the `Resume` structure.

```typescript
import { Resume, SectionType } from "bouajila-resume-generator";

const myResume: Resume = {
  name: "Jane Doe Resume",
  description: "Master Resume",
  template: "standard",
  lastUpdate: "2025-02-09",
  personalInfo: {
    name: "Jane Doe",
    location: "New York, NY",
    description: "Experienced Software Engineer with a passion for clean code.",
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
          highlights: [
            "Increased team velocity by 20%.",
            "Implemented new CI/CD pipeline."
          ],
          keywords: "React, Node.js"
        }
      ]
    }
  ]
};
```

## 3. Generate PDF

Use the `compile` function to produce your PDF. It returns a `Result` object to safely handle errors without throwing.

```typescript
import { compile } from "bouajila-resume-generator";

const result = await compile(myResume, { outputPath: "./resume.pdf" });

if (result.success) {
  console.log("PDF generated successfully!");
} else {
  console.error("Failed to generate PDF:", result.error.message);
}
```

Alternatively, if you prefer using `try/catch`, you can use `unsafeCompile`:

```typescript
import { unsafeCompile } from "bouajila-resume-generator";

try {
  await unsafeCompile(myResume, { outputPath: "./resume.pdf" });
} catch (error) {
  console.error(error);
}
```
