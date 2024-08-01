'use server';

import { createClient } from '@/utils/supabase/server';

export const getContacts = async () => {

    const SUPABASE = createClient();

    const { data, error } = await SUPABASE.from('contacts').select('*').order('id', { ascending: true });

    return { data, error };
}