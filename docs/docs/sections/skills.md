---
sidebar_position: 4
---

# Skills

The `Skills` section allows you to categorize your technical and soft skills.

## Why it's important

This section provides a quick way for recruiters and Applicant Tracking Systems (ATS) to identify if you have the specific technical requirements for a job. Grouping them by category makes it easier to read and highlights your versatility.

## Schema

```typescript
interface Skills {
  languages: SkillItem[];
  technologies: SkillItem[];
  softSkills: SkillItem[];
}

interface SkillItem {
  id: number;
  name: string;
  type: "LANG" | "TECH" | "SOFT";
}
```

## Example

```json
{
  "type": "skills",
  "body": {
    "languages": [{ "id": 1, "name": "TypeScript", "type": "LANG" }],
    "technologies": [{ "id": 2, "name": "React", "type": "TECH" }],
    "softSkills": [{ "id": 3, "name": "Leadership", "type": "SOFT" }]
  }
}
```
