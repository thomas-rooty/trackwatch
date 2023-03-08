import {createClient} from '@supabase/supabase-js'

const supaurl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supakey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const supabase = createClient(supaurl, supakey)

export {supabase}
