import { z } from "zod";

// projects info
interface Project {
  id: number;
  title: string;
  summary?: string;
  highlights?: string[];
  tools?: string,
  projectLink?: string,
}

export type { Project };

// --- Zod Schemas ---

export const ProjectSchema = z.object({
  id: z.int({ error: "Project id must be a whole number" }),
  title: z.string({ error: "Project title is required" })
    .min(1, { error: "Project title can not be empty" }),
  summary: z.string({ error: "Project summary must be text" }).optional(),
  highlights: z.array(
    z.string({ error: "Each highlight must be text" }),
    { error: "Highlights must be a list" }
  ).optional(),
  tools: z.string({ error: "Project tools field must be text" })
    .min(1, { error: "Project tools can not be empty" })
    .optional(),
  projectLink: z.string({ error: "Project link must be text" })
    .url({ error: "Project link must be a valid URL" })
    .optional(),
});
