import { z } from "zod";
export const createTodoSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title should not be greater than 100 characters")
    .trim(),
  description: z
    .string()
    .max(500, "Description should not be more than 500 characters")
    .optional(),
  priority: z.enum(["low", "medium", "high"]),
});
