---
sidebar_position: 3
---

# Education

The `Education` section highlights your academic background.

## Why it's important

Education provides the foundation of your knowledge. For early-career professionals, it's often a primary indicator of potential. For seasoned professionals, it verifies that they have the necessary academic credentials required for certain positions.

## Schema

```typescript
interface EducationItem {
  id: number;
  degreeType: "BS" | "MS" | "PhD";
  degreeName: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  keySkills: string; // Comma-separated list
}
```

## Example

```json
{
  "type": "education",
  "body": [
    {
      "id": 1,
      "degreeType": "BS",
      "degreeName": "Computer Science",
      "institution": "University of Tech",
      "startDate": "2016",
      "endDate": "2020",
      "description": "Graduated with Honors.",
      "keySkills": "Algorithms, Data Structures"
    }
  ]
}
```
