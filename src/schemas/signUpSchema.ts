import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be at least 2 charcters")
  .max(20, "Username must not contain special character")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must contain special charcter");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email Address" }),
  password: z.string().min(8,"Password should be 8 character").max(16),

});
