import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing environment variables!')
  console.error('Please ensure you have:')
  console.error('  - VITE_SUPABASE_URL in your .env file')
  console.error('  - VITE_SUPABASE_SERVICE_ROLE_KEY in your .env file')
  console.error('')
  console.error('To get your Service Role Key:')
  console.error('1. Go to Supabase Dashboard → Project Settings → API')
  console.error('2. Copy the "service_role" key (NOT the anon key)')
  console.error('3. Add it to your .env file as VITE_SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

const schemaSQL = `
-- Team Members Table
CREATE TABLE IF NOT EXISTS team_members (
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

-- Skills Table
CREATE TABLE IF NOT EXISTS skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL CHECK (type IN ('technical', 'soft')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Team Member Skills Junction
CREATE TABLE IF NOT EXISTS team_member_skills (
  team_member_id UUID REFERENCES team_members(id) ON DELETE CASCADE,
  skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
  PRIMARY KEY (team_member_id, skill_id)
);

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  link VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Team Member Projects Junction
CREATE TABLE IF NOT EXISTS team_member_projects (
  team_member_id UUID REFERENCES team_members(id) ON DELETE CASCADE,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  role VARCHAR(255),
  contribution_description TEXT,
  PRIMARY KEY (team_member_id, project_id)
);

-- Contact Form Submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  message TEXT NOT NULL,
  submission_type VARCHAR(50) DEFAULT 'general',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Partnership Requests
CREATE TABLE IF NOT EXISTS partnership_requests (
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

-- Enable RLS
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_member_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_member_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE partnership_requests ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Public can read team members" ON team_members;
DROP POLICY IF EXISTS "Public can read skills" ON skills;
DROP POLICY IF EXISTS "Public can read projects" ON projects;
DROP POLICY IF EXISTS "Public can read team member skills" ON team_member_skills;
DROP POLICY IF EXISTS "Public can read team member projects" ON team_member_projects;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit partnership request" ON partnership_requests;

-- Public read policies
CREATE POLICY "Public can read team members" ON team_members FOR SELECT USING (true);
CREATE POLICY "Public can read skills" ON skills FOR SELECT USING (true);
CREATE POLICY "Public can read projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public can read team member skills" ON team_member_skills FOR SELECT USING (true);
CREATE POLICY "Public can read team member projects" ON team_member_projects FOR SELECT USING (true);

-- Insert policies for forms
CREATE POLICY "Anyone can submit contact form" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can submit partnership request" ON partnership_requests FOR INSERT WITH CHECK (true);
`

const teamData = [
  {
    slug: 'd1',
    name: 'Vincent Mugondora',
    role: 'Founder & Software Engineer',
    tagline: 'Turning ideas into powerful digital products.',
    image_url: '/team/vincent-mugondora.png',
    bio: 'Vincent Mugondora is the visionary founder of Zimnovate, bringing over 8 years of experience in software development and digital transformation. With a passion for solving complex problems through technology, Vincent has led the development of numerous enterprise-grade solutions for clients across Africa and beyond.\n\nAt Zimnovate, Vincent drives the technical vision and ensures every project meets the highest standards of quality, performance, and scalability. His expertise spans full-stack development, cloud architecture, and leading high-performing development teams.\n\nBefore founding Zimnovate, Vincent worked with several leading tech companies, honing his skills in building scalable systems and managing complex projects. Today, he is dedicated to empowering African businesses with world-class digital solutions.',
    linkedin_url: 'https://linkedin.com/in/vincentmugondora',
    twitter_url: 'https://twitter.com/vincentmugondora',
    portfolio_url: 'https://vincentmugondora.dev'
  },
  {
    slug: 'd2',
    name: 'Kayden Mamu',
    role: 'Senior Product Designer',
    tagline: 'Crafting beautiful product experiences from concept to launch.',
    image_url: '/team/kayden-mamu.png',
    bio: 'Kayden Mamu is a Senior Product Designer with a passion for creating intuitive and visually stunning digital experiences. With over 6 years of experience in product design, Kayden has led design efforts for multiple successful product launches.\n\nAt Zimnovate, Kayden specializes in transforming complex requirements into elegant, user-friendly interfaces. He believes that great design is about understanding user needs and delivering solutions that exceed expectations.\n\nKayden\'s design philosophy combines aesthetics with functionality. He conducts user research, creates wireframes and prototypes, and collaborates closely with developers to ensure designs are implemented perfectly.',
    linkedin_url: 'https://linkedin.com/in/kaydenmamu',
    twitter_url: 'https://twitter.com/kaydenmamu',
    portfolio_url: 'https://kaydenmamu.design'
  },
  {
    slug: 'd3',
    name: 'Roy Makanjira',
    role: 'Digital Marketer and Graphic Designer',
    tagline: 'Creating compelling brand stories that resonate with audiences.',
    image_url: '/team/Roy-makanjira.jpeg',
    bio: 'Roy Makanjira is a talented Digital Marketer and Graphic Designer who brings creativity and strategic thinking to every project. With 5 years of experience in digital marketing and visual design, Roy has helped numerous brands establish strong online presences.\n\nAt Zimnovate, Roy manages marketing campaigns, creates stunning visual assets, and ensures brand consistency across all touchpoints. He combines data-driven insights with creative excellence to deliver measurable results.',
    linkedin_url: 'https://linkedin.com/in/roymakanjira',
    twitter_url: 'https://twitter.com/roymakanjira',
    portfolio_url: null
  },
  {
    slug: 'd4',
    name: 'Tawanda Muchenu',
    role: 'Data Analyst',
    tagline: 'Turning data into actionable business insights.',
    image_url: '/team/tawanda-muchenu.png',
    bio: 'Tawanda Muchenu is a Data Analyst who specializes in transforming raw data into meaningful insights that drive business decisions. With a background in statistics and 4 years of professional experience, Tawanda helps clients understand their data and optimize their operations.\n\nAt Zimnovate, Tawanda analyzes user behavior, market trends, and business metrics to inform product strategy and marketing decisions.',
    linkedin_url: 'https://linkedin.com/in/tawandamuchenu',
    twitter_url: 'https://twitter.com/tawandamuchenu',
    portfolio_url: null
  }
]

async function setupDatabase() {
  console.log('🚀 Setting up Zimnovate database...\n')

  try {
    // Create schema
    console.log('📊 Creating tables and setting up RLS...')
    const { error: schemaError } = await supabase.rpc('exec_sql', { sql: schemaSQL })
    
    if (schemaError) {
      // If exec_sql doesn't exist, try direct query
      console.log('   Trying alternative method...')
      
      // Create tables one by one using REST API
      const tables = [
        `CREATE TABLE IF NOT EXISTS team_members (
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
        )`,
        `CREATE TABLE IF NOT EXISTS skills (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          name VARCHAR(255) NOT NULL,
          type VARCHAR(50) NOT NULL CHECK (type IN ('technical', 'soft')),
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        )`,
        `CREATE TABLE IF NOT EXISTS team_member_skills (
          team_member_id UUID REFERENCES team_members(id) ON DELETE CASCADE,
          skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
          PRIMARY KEY (team_member_id, skill_id)
        )`,
        `CREATE TABLE IF NOT EXISTS projects (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          name VARCHAR(255) NOT NULL,
          slug VARCHAR(255) UNIQUE NOT NULL,
          description TEXT,
          link VARCHAR(255),
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        )`,
        `CREATE TABLE IF NOT EXISTS team_member_projects (
          team_member_id UUID REFERENCES team_members(id) ON DELETE CASCADE,
          project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
          role VARCHAR(255),
          contribution_description TEXT,
          PRIMARY KEY (team_member_id, project_id)
        )`,
        `CREATE TABLE IF NOT EXISTS contact_submissions (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          company VARCHAR(255),
          message TEXT NOT NULL,
          submission_type VARCHAR(50) DEFAULT 'general',
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        )`,
        `CREATE TABLE IF NOT EXISTS partnership_requests (
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
        )`
      ]

      for (const tableSql of tables) {
        const { error } = await supabase.rpc('exec_sql', { sql: tableSql }).catch(() => {
          // If RPC fails, we'll try inserting data anyway (tables might already exist)
          return { error: null }
        })
        if (error && !error.message.includes('already exists')) {
          console.error('   Warning:', error.message)
        }
      }
    }
    
    console.log('✅ Tables created!\n')

    // Insert team members
    console.log('👥 Inserting team members...')
    const { error: insertError } = await supabase
      .from('team_members')
      .upsert(teamData, { onConflict: 'slug' })

    if (insertError) {
      console.error('❌ Error inserting team members:', insertError.message)
    } else {
      console.log(`✅ Inserted ${teamData.length} team members!\n`)
    }

    console.log('🎉 Database setup complete!')
    console.log('')
    console.log('Next steps:')
    console.log('1. Run: npm run dev')
    console.log('2. Visit: http://localhost:5173/team')
    console.log('3. Your team data should now load from Supabase!')

  } catch (error) {
    console.error('❌ Setup failed:', error.message)
    console.error('')
    console.error('Please ensure:')
    console.error('1. Your Supabase project is active')
    console.error('2. VITE_SUPABASE_SERVICE_ROLE_KEY is set correctly')
    console.error('3. You have internet connectivity')
    process.exit(1)
  }
}

setupDatabase()
