'use server';

import { createClient } from '@/utils/supabase/server';

/**
 * Utility function for fetching all contacts from the 'contacts' table.
 * 
 * @returns contacts[] - An array of contact objects.
 */
export const getContacts = async () => {

    const SUPABASE = createClient();

    const { data, error } = await SUPABASE.from('contacts').select('*').order('id', { ascending: true });

    return { data, error };
}