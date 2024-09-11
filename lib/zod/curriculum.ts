// schema.ts
import { z } from "zod";

export const departmentSchema = z.object({
  organizationVision: z.string().min(2, "Organization vision is required."),
  organizationMission: z.string().min(2, "Organization mission is required."),
  year: z.string().min(4, "Year is required."),
  departmentVision: z.string().min(2, "Department vision is required."),
  departmentMission: z.string().min(2, "Department mission is required."),
});
