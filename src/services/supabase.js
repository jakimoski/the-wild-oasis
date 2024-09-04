import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uappdqszkifrmkmlvyac.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhcHBkcXN6a2lmcm1rbWx2eWFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyODY5MTMsImV4cCI6MjA0MDg2MjkxM30.d8ulcT81RSos33xAVPJ9ZusGQ4JCDVi0T-4Avz2EO8A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
