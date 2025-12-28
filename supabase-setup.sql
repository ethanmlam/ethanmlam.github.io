-- Create newsletter_subscribers table
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);

-- Enable Row Level Security (RLS)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (subscribe)
-- but only you can read (via service role key in Supabase dashboard)
CREATE POLICY "Allow public inserts" ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Optional: Create a policy that allows authenticated users to read
-- (if you want to add admin functionality later)
-- CREATE POLICY "Allow authenticated reads" ON newsletter_subscribers
--   FOR SELECT
--   TO authenticated
--   USING (true);

