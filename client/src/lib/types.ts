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

const emailSchema = z.string().email();
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long");

export const LoginInfoSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type LoginInfo = z.infer<typeof LoginInfoSchema>;

export const RegistrationInfoSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  firstName: z.string(),
  lastName: z.string(),
});

export type RegistrationInfo = z.infer<typeof RegistrationInfoSchema>;
