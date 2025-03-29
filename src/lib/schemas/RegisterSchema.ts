import {z} from 'zod';

export const registerSchema=z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
})

export type RegisterSchema = z.infer<typeof registerSchema>;