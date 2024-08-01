'use server';

import { createClient } from '@/utils/supabase/server';
import { CONTACT_SCHEMA } from '@/utils/zod/contact-schema';
import { parseWithZod } from '@conform-to/zod';

export const submitHeroForm = async (previouseState: any, formData: FormData) => {

    const SUPABASE = createClient();

    // Parse the form data using the Zod schema from conform-to.
    const submission = parseWithZod(formData, { schema: CONTACT_SCHEMA });

    if (submission.status !== 'success') return submission.reply();

    // Destructure the form data and assign it to variables.
    const { email, phone, zip } = Object.fromEntries(formData.entries());

    // Insert the form data into the 'contacts' table.
    const { data, error } = await SUPABASE.from('contacts').insert( { email, phone, zip } ).select().single();

    console.log(data, error);

    return { success: true };
};