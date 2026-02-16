import { z } from "zod";

// education Info
const DEGREES = {
  BS: "Bachelor's Degree",
  MS: "Master's Degree",
  PhD: "PhD/Doctorate",
} as const;

type DegreeType = keyof typeof DEGREES;

interface EducationItem {
  id: number;
  degreeType: DegreeType;
  degreeName: string;
  summary?: string;
  highlights?: string[];
  institution: string;
  startDate: string;
  endDate: string;
  keySkills: string;
}

export type { EducationItem };

// --- Zod Schemas ---

export const DegreeTypeSchema = z.enum(["BS", "MS", "PhD"] as const, {
  error: "Degree type must be BS, MS, or PhD",
});

export const EducationItemSchema = z.object({
  id: z.int({ error: "Education id must be a whole number" }),
  degreeType: DegreeTypeSchema,
  degreeName: z.string({ error: "Degree name is required" })
    .min(1, { error: "Degree name can not be empty" }),
  summary: z.string({ error: "Education summary must be text" }).optional(),
  highlights: z.array(
    z.string({ error: "Each highlight must be text" }),
    { error: "Highlights must be a list" }
  ).optional(),
  institution: z.string({ error: "Institution name is required" })
    .min(1, { error: "Institution name can not be empty" }),
  startDate: z.string({ error: "Education start date is required" })
    .min(1, { error: "Education start date can not be empty" }),
  endDate: z.string({ error: "Education end date is required" })
    .min(1, { error: "Education end date can not be empty" }),
  keySkills: z.string({ error: "Key skills field is required" })
    .min(1, { error: "Key skills can not be empty" }),
});


