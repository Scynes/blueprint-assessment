import { createBrowserClient } from '@supabase/ssr'

/**
 * Creates a safe client instance for use in the browser.
 */
export const createClient = () => {

    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
}