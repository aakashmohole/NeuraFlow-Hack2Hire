import { z } from "zod";

export const registerUserSchema = z
  .object({
    firstName: z.string().min(1, { message: "Required" }),
    lastName: z.string().min(1, { message: "Required" }),
    email: z.string().email({ message: "Invalid email address" }),
    mobileNo: z.string(),
    password: z.string().min(6, { message: "minimum 6 characters required" }),
    confirmPassword: z.string(),
    accountType: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginUserSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(),
});
