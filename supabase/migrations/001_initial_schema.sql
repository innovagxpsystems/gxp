-- ============================================================
-- innovagxpsystems Clone - Initial Database Schema
-- ============================================================

-- ============================================================
-- CONTACT SUBMISSIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  service_interest TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied'))
);

-- RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone can insert (submit a contact form)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

-- Only authenticated admins can read/update
CREATE POLICY "Admins can read contact submissions"
  ON contact_submissions FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can update contact submissions"
  ON contact_submissions FOR UPDATE
  USING (auth.role() = 'authenticated');

-- ============================================================
-- JOBS
-- ============================================================
CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('full-time', 'part-time', 'contract', 'remote')),
  description TEXT NOT NULL,
  requirements TEXT[] DEFAULT '{}',
  is_active BOOLEAN DEFAULT true
);

ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

-- Anyone can read active jobs
CREATE POLICY "Anyone can view active jobs"
  ON jobs FOR SELECT
  USING (is_active = true);

-- Only admins can manage jobs
CREATE POLICY "Admins can manage jobs"
  ON jobs FOR ALL
  USING (auth.role() = 'authenticated');

-- ============================================================
-- JOB APPLICATIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS job_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  linkedin_url TEXT,
  cover_letter TEXT,
  resume_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'interview', 'rejected', 'hired'))
);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Anyone can submit an application
CREATE POLICY "Anyone can apply for jobs"
  ON job_applications FOR INSERT
  WITH CHECK (true);

-- Only admins can read/update applications
CREATE POLICY "Admins can manage applications"
  ON job_applications FOR ALL
  USING (auth.role() = 'authenticated');

-- ============================================================
-- SEED DATA - Sample Jobs
-- ============================================================
INSERT INTO jobs (title, department, location, type, description, requirements) VALUES
(
  'GxP Quality Auditor',
  'Quality Services',
  'New York, CA / Remote',
  'full-time',
  'We are looking for an experienced GxP Quality Auditor to join our growing Quality Services team. You will conduct audits across pharmaceutical, biotechnology, and medical device clients ensuring regulatory compliance.',
  ARRAY[
    'Bachelor''s degree in Life Sciences, Pharmacy, or related field',
    '5+ years of GxP auditing experience',
    'Strong knowledge of FDA, EMA, and ICH guidelines',
    'Experience with GMP, GCP, GLP audits',
    'Excellent written and verbal communication skills',
    'Willingness to travel up to 50%'
  ]
),
(
  'Clinical Site Monitor (CRA)',
  'Clinical Services',
  'Remote - US',
  'full-time',
  'Join our Clinical Services team as a Clinical Research Associate. You will be responsible for monitoring clinical trial sites to ensure the safety of trial subjects and integrity of data.',
  ARRAY[
    'Bachelor''s degree in Life Sciences or Nursing',
    '3+ years of on-site monitoring experience',
    'ICH-GCP certification preferred',
    'Experience with eTMF systems (Veeva, Trial Interactive)',
    'Strong attention to detail and problem-solving skills'
  ]
),
(
  'Computer System Validation (CSV) Specialist',
  'CSV Services',
  'Hyderabad, India / Remote',
  'full-time',
  'We are seeking a CSV Specialist to support our IT and validation team. You will develop and execute validation protocols for computerized systems used in GxP environments.',
  ARRAY[
    'Bachelor''s in Computer Science, Engineering, or related field',
    '3+ years of CSV experience in pharma/biotech',
    'Knowledge of GAMP5, 21 CFR Part 11, EU Annex 11',
    'Experience with LIMS, MES, ERP validation',
    'Strong documentation skills'
  ]
),
(
  'Regulatory Affairs Consultant',
  'Quality Services',
  'North Carolina / Remote',
  'contract',
  'Contract opportunity for an experienced Regulatory Affairs professional to support clients with regulatory submissions, agency interactions, and compliance strategies.',
  ARRAY[
    'Advanced degree in Life Sciences or Regulatory Affairs',
    '7+ years regulatory affairs experience',
    'NDA/BLA submission experience preferred',
    'Strong understanding of FDA regulatory pathways',
    'Excellent project management skills'
  ]
);
