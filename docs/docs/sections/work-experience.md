---
sidebar_position: 2
---

# Work Experience

The `WorkExperience` section describes your professional history.

## Why it's important

For most professionals, this is the core of the resume. It provides evidence of your skills and accomplishments in a professional setting. It allows recruiters to see your career progression and the impact you've made in previous roles.

## Schema

```typescript
interface WorkExperience {
  id: number;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  summary?: string;
  highlights?: string[];
  keywords: string; // Comma-separated list
}
```

## Example

```json
{
  "type": "work_experience",
  "body": [
    {
      "id": 1,
      "jobTitle": "Software Engineer",
      "company": "Tech Corp",
      "location": "San Francisco, CA",
      "startDate": "Jan 2020",
      "endDate": "Present",
      "summary": "Full-stack development using Node.js and React.",
      "highlights": [
        "Architected a microservices-based system reducing latency by 40%.",
        "Mentored 5 junior developers."
      ],
      "keywords": "TypeScript, React, AWS"
    }
  ]
}
```
