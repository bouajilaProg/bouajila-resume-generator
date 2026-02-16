import { z } from "zod";

// work experience info
interface WorkExperience {
  id: number;
  jobTitle: string,
  company: string,
  location: string,
  startDate: string,
  endDate: string,
  summary?: string,
  highlights?: string[],
  keywords?: string,
}

export type { WorkExperience };

// --- Zod Schemas ---

export const WorkExperienceSchema = z.object({
  id: z.int({ error: "Experience id must be a whole number" }),
  jobTitle: z.string({ error: "Job title is required" })
    .min(1, { error: "Job title can not be empty" }),
  company: z.string({ error: "Company name is required" })
    .min(1, { error: "Company name can not be empty" }),
  location: z.string({ error: "Work location is required" })
    .min(1, { error: "Work location can not be empty" }),
  startDate: z.string({ error: "Experience start date is required" })
    .min(1, { error: "Experience start date can not be empty" }),
  endDate: z.string({ error: "Experience end date is required" })
    .min(1, { error: "Experience end date can not be empty" }),
  summary: z.string({ error: "Experience summary must be text" }).optional(),
  highlights: z.array(
    z.string({ error: "Each highlight must be text" }),
    { error: "Highlights must be a list" }
  ).optional(),
  keywords: z.string({ error: "Keywords field must be text" })
    .min(1, { error: "Keywords can not be empty" })
    .optional(),
});
