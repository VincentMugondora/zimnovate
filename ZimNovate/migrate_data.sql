-- Migration script to populate database with existing team data

-- Insert skills first
INSERT INTO skills (name, type) VALUES
('React', 'technical'),
('Next.js', 'technical'),
('Node.js', 'technical'),
('Express', 'technical'),
('MongoDB', 'technical'),
('PostgreSQL', 'technical'),
('API Design', 'technical'),
('Cloud & DevOps', 'technical'),
('AWS', 'technical'),
('Docker', 'technical'),
('Kubernetes', 'technical'),
('Security', 'technical'),
('Figma', 'technical'),
('Adobe Creative Suite', 'technical'),
('Sketch', 'technical'),
('Prototyping', 'technical'),
('User Research', 'technical'),
('Wireframing', 'technical'),
('Design Systems', 'technical'),
('Responsive Design', 'technical'),
('Accessibility', 'technical'),
('Motion Design', 'technical'),
('Python', 'technical'),
('R', 'technical'),
('SQL', 'technical'),
('Excel', 'technical'),
('Tableau', 'technical'),
('Power BI', 'technical'),
('Google Analytics', 'technical'),
('Statistical Analysis', 'technical'),
('Data Visualization', 'technical'),
('Machine Learning Basics', 'technical'),
('Adobe Photoshop', 'technical'),
('Illustrator', 'technical'),
('InDesign', 'technical'),
('Social Media Marketing', 'technical'),
('Content Strategy', 'technical'),
('Email Marketing', 'technical'),
('Brand Identity', 'technical'),
('SEO/SEM', 'technical'),
('Google Analytics', 'technical'),
('Marketing Automation', 'technical'),
('Leadership', 'soft'),
('Strategic Thinking', 'soft'),
('Communication', 'soft'),
('Problem Solving', 'soft'),
('Project Management', 'soft'),
('Mentoring', 'soft'),
('Creativity', 'soft'),
('Empathy', 'soft'),
('Attention to Detail', 'soft'),
('Collaboration', 'soft'),
('Analytical Thinking', 'soft'),
('Time Management', 'soft'),
('Client Relations', 'soft'),
('Adaptability', 'soft'),
('Critical Thinking', 'soft');

-- Insert projects
INSERT INTO projects (name, slug, description, link) VALUES
('SwiftPay Mobile App', 'swiftpay', 'Mobile banking application with secure payment processing', '/portfolio/swiftpay'),
('ZimFresh E-Commerce Platform', 'zimfresh', 'E-commerce platform for fresh produce delivery', '/portfolio/zimfresh'),
('AfricaRise Platform', 'africarise', 'AI-powered business intelligence platform for African businesses', '/portfolio/africarise'),
('Royal Home Care Platform', 'royal-home-care', 'Caregiver matching platform for elderly care services', '/portfolio/royal-home-care'),
('AutoDocs System', 'autodocs', 'Document management system with automated processing', '/portfolio/autodocs'),
('ZimFarms Management System', 'zimfarms', 'Agricultural management and monitoring system', '/portfolio/zimfarms');

-- Insert team members
INSERT INTO team_members (slug, name, role, tagline, image_url, bio, linkedin_url, twitter_url, portfolio_url) VALUES
('d1', 'Vincent Mugondora', 'Founder & Software Engineer', 'Turning ideas into powerful digital products.', '/team/vincent-mugondora.png', 'Vincent Mugondora is the visionary founder of Zimnovate, bringing over 8 years of experience in software development and digital transformation. With a passion for solving complex problems through technology, Vincent has led the development of numerous enterprise-grade solutions for clients across Africa and beyond.

At Zimnovate, Vincent drives the technical vision and ensures every project meets the highest standards of quality, performance, and scalability. His expertise spans full-stack development, cloud architecture, and leading high-performing development teams.

Before founding Zimnovate, Vincent worked with several leading tech companies, honing his skills in building scalable systems and managing complex projects. Today, he is dedicated to empowering African businesses with world-class digital solutions.

Outside of work, Vincent enjoys mentoring young developers, contributing to open-source projects, and exploring emerging technologies in AI and blockchain.', 'https://linkedin.com/in/vincentmugondora', 'https://twitter.com/vincentmugondora', 'https://vincentmugondora.dev'),

('d2', 'Kayden Mamu', 'Senior Product Designer', 'Crafting beautiful product experiences from concept to launch.', '/team/kayden-mamu.png', 'Kayden Mamu is a Senior Product Designer with a passion for creating intuitive and visually stunning digital experiences. With over 6 years of experience in product design, Kayden has led design efforts for multiple successful product launches.

At Zimnovate, Kayden specializes in transforming complex requirements into elegant, user-friendly interfaces. He believes that great design is about understanding user needs and delivering solutions that exceed expectations.

Kayden''s design philosophy combines aesthetics with functionality. He conducts user research, creates wireframes and prototypes, and collaborates closely with developers to ensure designs are implemented perfectly.

Before joining Zimnovate, Kayden worked with startups and established companies, developing his expertise in design systems, user experience, and product strategy.

When not designing, Kayden enjoys photography, exploring art galleries, and staying current with design trends.', 'https://linkedin.com/in/kaydenmamu', 'https://twitter.com/kaydenmamu', 'https://kaydenmamu.design'),

('d3', 'Roy Makanjira', 'Digital Marketer and Graphic Designer', 'Creating compelling brand stories that resonate with audiences.', '/team/Roy-makanjira.jpeg', 'Roy Makanjira is a talented Digital Marketer and Graphic Designer who brings creativity and strategic thinking to every project. With 5 years of experience in digital marketing and visual design, Roy has helped numerous brands establish strong online presences.

At Zimnovate, Roy manages marketing campaigns, creates stunning visual assets, and ensures brand consistency across all touchpoints. He combines data-driven insights with creative excellence to deliver measurable results.

Roy''s expertise spans social media marketing, content creation, brand identity design, and campaign management. He stays ahead of digital trends to keep clients competitive in their markets.

Before Zimnovate, Roy worked with marketing agencies and as a freelance designer, building a diverse portfolio across various industries.

Roy is passionate about African creativity and regularly collaborates with local artists and creators.', 'https://linkedin.com/in/roymakanjira', 'https://twitter.com/roymakanjira', null),

('d4', 'Tawanda Muchenu', 'Data Analyst', 'Turning data into actionable business insights.', '/team/tawanda-muchenu.png', 'Tawanda Muchenu is a Data Analyst who specializes in transforming raw data into meaningful insights that drive business decisions. With a background in statistics and 4 years of professional experience, Tawanda helps clients understand their data and optimize their operations.

At Zimnovate, Tawanda analyzes user behavior, market trends, and business metrics to inform product strategy and marketing decisions. He creates dashboards, reports, and visualizations that make complex data accessible to stakeholders.

Tawanda''s analytical skills combined with business acumen enable him to identify opportunities for growth and efficiency improvements. He is proficient in various analytics tools and programming languages for data manipulation.

Before joining Zimnovate, Tawanda worked in finance and consulting, where he developed his expertise in data modeling, statistical analysis, and business intelligence.

Outside of work, Tawanda enjoys reading about economics, playing chess, and exploring data visualization techniques.', 'https://linkedin.com/in/tawandamuchenu', 'https://twitter.com/tawandamuchenu', null);

-- Link team members to projects (this would need the actual UUIDs from the inserted records)
-- You'll need to run SELECT queries to get the UUIDs and then update these INSERT statements

-- Example structure (replace with actual UUIDs):
-- INSERT INTO team_member_projects (team_member_id, project_id, role, contribution_description) VALUES
-- (vincent_uuid, swiftpay_uuid, 'Lead Developer', 'Built the core payment processing system handling thousands of transactions daily.'),
-- (vincent_uuid, zimfresh_uuid, 'System Architect', 'Designed scalable architecture supporting high traffic and real-time inventory.'),
-- (vincent_uuid, africarise_uuid, 'Technical Lead', 'Led development of an AI-powered business intelligence platform.');
