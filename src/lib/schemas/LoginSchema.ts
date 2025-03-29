import {z} from 'zod';

export const loginSchema= z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
})

export  type LoginSchema = z.infer<typeof loginSchema>;
//what is infer and how does it work?
// Infer is a TypeScript utility type that allows you to extract the type of a value. In this case, it extracts the type of the loginSchema object, which is a Zod schema. The resulting type LoginSchema will have the same shape as the schema defined in loginSchema. This means that LoginSchema will have two properties: email and password, both of which are strings with specific validation rules.