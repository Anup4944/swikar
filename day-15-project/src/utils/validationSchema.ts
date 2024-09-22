import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be atleast 2 characters")
    .max(20, "Name must be less than 20 characters"),
  email: z.string().email(),
  role: z
    .string()
    .min(4, "Role must be atleast 4 characters")
    .max(12, "Role must be less than 12 characters"),
  status: z
    .string()
    .min(4, "Status must be atleast 4 characters")
    .max(12, "Status must be less than 12 characters"),
});

export type FormUser = z.infer<typeof formSchema>;
