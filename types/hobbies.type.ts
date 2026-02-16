import { z } from "zod";

export interface Hobby {
  id: number;
  name: string;
  description?: string;
}

export type Hobbies = Hobby[];

// --- Zod Schemas ---

export const HobbySchema = z.object({
  id: z.int({ error: "Hobby id must be a whole number" }),
  name: z.string({ error: "Hobby name is required" })
    .min(1, { error: "Hobby name can not be empty" }),
  description: z.string({ error: "Hobby description must be text" }).optional(),
});

export const HobbiesSchema = z.array(HobbySchema, {
  error: "Hobbies must be a list",
});
