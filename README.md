# innovagxpsystems Clone — Next.js + Supabase

A production-ready pharma/life sciences website clone built with **Next.js 14** (App Router) and **Supabase**.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router, Server Components) |
| Database | Supabase (PostgreSQL) |
| Styling | Tailwind CSS |
| Forms | React Hook Form + Zod |
| Animations | CSS animations + react-intersection-observer |
| Icons | Lucide React |
| Fonts | Playfair Display + DM Sans (Google Fonts) |
| Notifications | Sonner |

---

## 📁 Project Structure

```
innovagxpsystems-clone/
├── app/
│   ├── about/page.tsx           # About + Leadership page
│   ├── careers/
│   │   ├── page.tsx             # Careers listing (reads from Supabase)
│   │   └── [id]/
│   │       ├── page.tsx         # Individual job detail
│   │       └── JobApplicationForm.tsx
│   ├── contact/
│   │   ├── page.tsx             # Contact page
│   │   └── ContactForm.tsx      # Form → Supabase
│   ├── services/
│   │   ├── quality/page.tsx
│   │   ├── clinical/page.tsx
│   │   └── it-csv/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                 # Home page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── AnimatedCounter.tsx
│       └── FadeInSection.tsx
├── lib/
│   └── supabase/
│       ├── client.ts            # Browser client
│       ├── server.ts            # Server component client
│       └── types.ts             # Database types
└── supabase/
    └── migrations/
        └── 001_initial_schema.sql
```

---

## ⚙️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Copy your **Project URL** and **Anon Key** from Settings → API

### 3. Configure Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4. Run Database Migrations

In the Supabase dashboard, go to **SQL Editor** and run:

```sql
-- Copy and paste the contents of:
-- supabase/migrations/001_initial_schema.sql
```

This creates:
- `contact_submissions` table (contact form data)
- `jobs` table (job listings)
- `job_applications` table (applications)
- Row Level Security policies
- Sample job data

### 5. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services preview, global presence, CTAs |
| `/about` | Company story, mission/vision/values, leadership team |
| `/services/quality` | Quality Services (GxP Auditing, QMS, Mock Inspection, etc.) |
| `/services/clinical` | Clinical Services (Site Monitoring, TMF Management) |
| `/services/it-csv` | CSV Services (CSV, SQA, Infrastructure Qualification) |
| `/careers` | Job listings from Supabase |
| `/careers/[id]` | Individual job detail + application form |
| `/contact` | Contact form → saves to Supabase |

---

## 🗄️ Supabase Tables

### `jobs`
Stores all job postings. Toggle `is_active` to hide/show listings.

### `job_applications`
Stores applications submitted via the careers form.
Check the Supabase dashboard under Table Editor to review applications.

### `contact_submissions`
Stores all contact form submissions.
Update `status` field to `read` or `replied` to track follow-ups.

---

## 🎨 Customization

### Branding
- Update company name throughout (search for "innovagxpsystems")
- Replace email: `info@innovagxpsystems.com`
- Replace phone: `+1 (214) 807-5554`
- Add your logo in `public/` and update `Navbar.tsx`

### Colors
Edit `tailwind.config.ts` — the palette uses `navy`, `teal`, and `gold`.

### Content
All content is in the page files — easy to edit without touching layout code.

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Add the same environment variables in the Vercel dashboard.

### Netlify / Other

Build command: `npm run build`  
Output directory: `.next`

---

## 📧 Email Notifications (Optional)

To send email notifications when contact forms are submitted, add a Supabase Database Webhook or use the `RESEND_API_KEY` with an API route:

1. Install Resend: `npm install resend`
2. Create `app/api/contact/route.ts` to handle form submissions server-side
3. Forward submissions to your team email

---

Built with ❤️ for the life sciences industry.
