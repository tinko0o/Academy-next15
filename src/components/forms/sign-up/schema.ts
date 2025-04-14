import { z } from "zod";

export const SignUpSchema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: "first name must be atleast 3 characters" }),
    lastName: z
      .string()
      .min(3, { message: "last name must be atleast 3 characters" }),
    email: z.string().email("You must give a valid email"),
    password: z
      .string()
      .min(6, { message: "Your password must be atleast 6 characters long" })
      .max(64, {
        message: "Your password can not be longer than 64 characters",
      })
      .refine(
        (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ""),
        "Password should contain only alphabets and numbers"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
