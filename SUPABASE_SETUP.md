# Supabase Setup Instructions

## 1. Create Supabase Project

Use Supabase MCP or go to [supabase.com](https://supabase.com) to create a new project.

## 2. Create the Database Table

Run the SQL script in `supabase-setup.sql` in your Supabase SQL Editor, or use Supabase MCP to create the table.

The table schema:
- `id` (uuid, primary key, auto-generated)
- `email` (text, unique, not null)
- `created_at` (timestamp, default now())

## 3. Set Up Environment Variables

Create a `.env.local` file in the root directory with:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project settings under API.

## 4. Test the Newsletter Signup

Once the environment variables are set, the newsletter signup form on your website will be functional.

