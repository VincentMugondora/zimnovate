# Database Setup for Zimnovate

This document outlines the database setup using PostgreSQL and Supabase for the Zimnovate application.

## Supabase Setup

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note your project URL and anon key

2. **Environment Variables**
   - Copy `.env.example` to `.env`
   - Fill in your Supabase credentials:
     ```
     VITE_SUPABASE_URL=your_supabase_project_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

## Database Schema

### Team Members Table
```sql
CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  tagline TEXT,
  image_url TEXT,
  bio TEXT,
  linkedin_url TEXT,
  twitter_url TEXT,
  portfolio_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Skills Table
```sql
CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL CHECK (type IN ('technical', 'soft')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Team Member Skills Junction Table
```sql
CREATE TABLE team_member_skills (
  team_member_id UUID REFERENCES team_members(id) ON DELETE CASCADE,
  skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
  PRIMARY KEY (team_member_id, skill_id)
);
```

### Projects Table
```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  link VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Team Member Projects Junction Table
```sql
CREATE TABLE team_member_projects (
  team_member_id UUID REFERENCES team_members(id) ON DELETE CASCADE,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  role VARCHAR(255),
  contribution_description TEXT,
  PRIMARY KEY (team_member_id, project_id)
);
```

### Contact Form Submissions Table
```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  message TEXT NOT NULL,
  submission_type VARCHAR(50) DEFAULT 'general',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Partnership Requests Table
```sql
CREATE TABLE partnership_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name VARCHAR(255) NOT NULL,
  contact_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  partnership_type VARCHAR(100),
  project_description TEXT,
  budget_range VARCHAR(100),
  timeline VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Row Level Security (RLS)

Enable RLS on all tables and create policies:

```sql
-- Enable RLS
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_member_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_member_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE partnership_requests ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Public can read team members" ON team_members FOR SELECT USING (true);
CREATE POLICY "Public can read skills" ON skills FOR SELECT USING (true);
CREATE POLICY "Public can read projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public can read team member skills" ON team_member_skills FOR SELECT USING (true);
CREATE POLICY "Public can read team member projects" ON team_member_projects FOR SELECT USING (true);

-- Insert policies for contact forms
CREATE POLICY "Anyone can submit contact form" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can submit partnership request" ON partnership_requests FOR INSERT WITH CHECK (true);
```

## Usage Examples

### Fetching Team Members
```javascript
import { supabase } from '../lib/supabase'

async function getTeamMembers() {
  const { data, error } = await supabase
    .from('team_members')
    .select(`
      *,
      team_member_skills (
        skills (*)
      ),
      team_member_projects (
        projects (*),
        role,
        contribution_description
      )
    `)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}
```

### Submitting Contact Form
```javascript
async function submitContactForm(formData) {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([formData])
    .select()
  
  if (error) throw error
  return data
}
```

### Submitting Partnership Request
```javascript
async function submitPartnershipRequest(formData) {
  const { data, error } = await supabase
    .from('partnership_requests')
    .insert([formData])
    .select()
  
  if (error) throw error
  return data
}
```

## Next Steps

1. Set up your Supabase project
2. Run the SQL schema in the Supabase SQL editor
3. Configure environment variables
4. Install the Supabase client library: `npm install @supabase/supabase-js`
5. Update your components to use the new database functions
6. Test the integration

## Migration from Static Data

To migrate from the current static `teamData.js` to the database:

1. Run the SQL schema
2. Create a migration script to insert existing team members
3. Update components to fetch from Supabase instead of static data
4. Remove the static data files once migration is complete
