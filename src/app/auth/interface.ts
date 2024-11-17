import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string(),
  username: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
});

export const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const personalizeSchema = z.object({
  weight: z.number(),
  height: z.number(),
  hipSize: z.number(),
  waistSize: z.number(),
  frontRise: z.number(),
  thighSize: z.number(),
  name: z.string(),
  address: z.object({
    address: z.string(),
    notes: z.string(),
    name: z.string(),
  }),
});
