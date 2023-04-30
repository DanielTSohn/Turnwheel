import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gajdlwaxpryfjoxgbraw.supabase.co'
const supabaseKey =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhamRsd2F4cHJ5ZmpveGdicmF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjMwMjMwNywiZXhwIjoxOTk3ODc4MzA3fQ.2eBNXVo1RidRcfbhzF5rwsjeu5E1XXMF7ISgyccRXno"

export const supabaseClient = createClient(supabaseUrl, supabaseKey)