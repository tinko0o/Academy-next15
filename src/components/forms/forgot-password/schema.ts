import { z } from "zod";

export const EmailSchema = z.object({
  email: z.string().email("You must give a valid email"),
});
