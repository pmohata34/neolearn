drop table public.courses;
create table if not exists courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamp with time zone default now()
);

insert into courses (id, title, progress, icon_name, created_at)
values
  (gen_random_uuid(), 'AI/ML Foundations', 72, 'BrainCircuit', now()),
  (gen_random_uuid(), 'Data Structures and Algorithms', 64, 'Network', now()),
  (gen_random_uuid(), 'Full Stack Web Development', 81, 'Layers', now()),
  (gen_random_uuid(), 'Database Management Systems', 58, 'Database', now());

alter table courses enable row level security;

create policy "Courses are readable"
on courses for select
to anon
using (true);