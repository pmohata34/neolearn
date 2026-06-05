# NeoLearn

NeoLearn is a dark, responsive student dashboard built with Next.js App Router, Supabase, Tailwind CSS, Framer Motion, and Lucide React. It shows a student welcome card, active course cards, progress bars, and a learning activity section in a Bento-style layout.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in the browser.

Create a `.env.local` file with your Supabase keys:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Supabase

The dashboard reads course data from a Supabase table named `courses`. Each course has a title, progress value, Lucide icon name, and creation date.

```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamp with time zone default now()
);

insert into courses (title, progress, icon_name)
values
  ('AI/ML Foundations', 72, 'BrainCircuit'),
  ('Data Structures and Algorithms', 64, 'Network'),
  ('Full Stack Web Development', 81, 'Layers'),
  ('Database Management Systems', 58, 'Database');
```

## Architecture Choices

I kept the project component-based so each part of the dashboard has a clear responsibility. The main layout is split into reusable pieces like the sidebar, hero tile, course cards, activity tile, and loading skeleton. This made the dashboard easier to adjust for desktop, tablet, and mobile views.

The UI uses a Bento grid because it works well for showing different types of learning information together without making the page feel like a plain list. I used Tailwind CSS for layout, spacing, colors, and responsive behavior.

## Server and Client Component Split

Course data is fetched on the server through the Supabase helper before rendering the dashboard. This keeps the database request out of the browser and lets the page receive course data as props.

Framer Motion animations are handled in client components because hover effects, progress bar animations, and active navigation highlights need browser-side interaction. This keeps the server side focused on data and the client side focused on motion and interactivity.

## Challenges

One challenge was keeping the animations smooth without causing layout shifts. I handled this by using transform and opacity-based animations instead of changing layout properties like width, margin, or position.

Another challenge was keeping the dashboard responsive while still preserving the Bento layout. The sidebar changes from a full sidebar on desktop to an icon-focused navigation on smaller screens, and the grid stacks cleanly on mobile.