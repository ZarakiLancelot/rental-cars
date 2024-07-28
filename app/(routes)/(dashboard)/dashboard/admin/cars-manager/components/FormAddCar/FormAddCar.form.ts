import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  hp: z.string().min(6).max(50),
  transmission: z.string().min(6).max(50),
  seats: z.string().min(6).max(50),
  photo: z.string().min(6).max(50),
  price: z.string().min(6).max(50),
  type: z.string().min(6).max(50),
  mileage: z.string().min(6).max(50),
  fuel: z.string().min(6).max(50),
  year: z.string().min(6).max(50),
  isPublish: z.boolean(),
});
