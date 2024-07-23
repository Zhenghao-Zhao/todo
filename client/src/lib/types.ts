import { z } from "zod";

export enum PRIORITY {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export const Priority = [PRIORITY.LOW, PRIORITY.MEDIUM, PRIORITY.HIGH] as const;
const PriorityTypeSchema = z.enum(Priority);

export const TaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  due: z.date(),
  priority: PriorityTypeSchema,
  done: z.boolean(),
});

export type Task = z.infer<typeof TaskSchema>;
