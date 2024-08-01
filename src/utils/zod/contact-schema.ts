// schema.ts
import { z } from 'zod';

// THANK YOU STACK OVERFLOW - =D
const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const CONTACT_SCHEMA = z.object(
    {
        email: z.string().email(),
        phone: z.string().regex(phoneRegex, 'Invalid Number!'),
        zip: z.string().min(5).max(5),
    }
);