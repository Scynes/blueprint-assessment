'use server';

import { createClient } from '@/utils/supabase/server';

export const submitHeroForm = async (previouseState: any, formData: FormData): Promise<{ success: boolean }> => {

    const SUPABASE = createClient();

    // Destructure the form data and assign it to variables.
    const { email, phone, zip } = Object.fromEntries(formData.entries());

    // Insert the form data into the 'contacts' table.
    const { data, error } = await SUPABASE.from('contacts').insert( { email, phone, zip } ).select().single();

    console.log(data, error);

    return { success: true };
};