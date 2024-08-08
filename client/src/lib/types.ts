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

const EmailSchema = z.string().email();
export type Email = z.infer<typeof EmailSchema>;

const PasswordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long");
export type Password = z.infer<typeof PasswordSchema>;

export const EmailFormSchema = z.object({
  email: EmailSchema,
});
export type EmailForm = z.infer<typeof EmailFormSchema>;

export const LoginFormSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
});

export type LoginInfo = z.infer<typeof LoginFormSchema>;

export const RegistrationFormSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
  firstName: z.string(),
  lastName: z.string(),
});

export type RegistrationInfo = z.infer<typeof RegistrationFormSchema>;
