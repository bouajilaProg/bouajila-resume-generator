import { z } from "zod";

// extra-curricular activities info
interface ExtraCurricularActivity {
  id: number;
  activityName: string;
  startDate: string;
  endDate?: string;
}

export type { ExtraCurricularActivity };

// --- Zod Schemas ---

export const ExtraCurricularActivitySchema = z.object({
  id: z.int({ error: "Activity id must be a whole number" }),
  activityName: z.string({ error: "Activity name is required" })
    .min(1, { error: "Activity name can not be empty" }),
  startDate: z.string({ error: "Activity start date is required" })
    .min(1, { error: "Activity start date can not be empty" }),
  endDate: z.string({ error: "Activity end date must be text" }).optional(),
});
