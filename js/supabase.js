// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://yitxwcsnvjfpcyftolqy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpdHh3Y3NudmpmcGN5ZnRvbHF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0MTM1NDYsImV4cCI6MjA2Nzk4OTU0Nn0.E0tsJfs1DvmFGzqJhb1nLicnXRrBXQD2cqmwiaCoMZw';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };