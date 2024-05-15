import { z } from "zod";


// identifier means 
export const signInSchema = z.object({
  identifier: z.string().length(6, "Code must be 6 characters"),
});
