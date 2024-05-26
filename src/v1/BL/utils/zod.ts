import { z } from 'zod';

export const userRegistrationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(2),
});

export const userLoginSchema = z.object({
  name: z.string(),
  password: z.string().min(2),
});
