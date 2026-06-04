"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { X } from "lucide-react";

type Course = {
  id?: string;
  title: string;
  instructor: string;
  category: string;
  difficulty: string;
  total_lessons: number;
  icon_name?: string;
  color?: string;
};

const empty: Course = {
  title: "", instructor: "", category: "Development",
  difficulty: "Beginner", total_lessons: 0,
  icon_name: "Code", color: "#4F46E5",
};

export default function CourseModal({ open, course, onClose, onSaved }: {
  open: boolean; course: Course | null; onClose: () => void; onSaved: () => void;
}) {
  const [form, setForm] = useState<Course>(empty);
  const [saving, setSaving] = useState(false);

  useEffect(() => { setForm(course ?? empty); }, [course, open]);

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    if (course?.id) {
      await supabase.from("courses").update(form).eq("id", course.id);
    } else {
      await supabase.from("courses").insert(form);
    }
    setSaving(false);
    onSaved();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
          <h2 className="font-semibold text-slate-900">
            {course ? "Edit course" : "New course"}
          </h2>
          <button onClick={onClose} className="rounded p-1 hover:bg-slate-100">
            <X className="h-4 w-4" />
          </button>
        </div>
        <form onSubmit={submit} className="space-y-3 p-5">
          <Field label="Title">
            <input required value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="input" />
          </Field>
          <Field label="Instructor">
            <input required value={form.instructor}
              onChange={(e) => setForm({ ...form, instructor: e.target.value })}
              className="input" />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Category">
              <select value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="input">
                <option>Development</option><option>Design</option>
                <option>Data Science</option><option>Marketing</option>
              </select>
            </Field>
            <Field label="Difficulty">
              <select value={form.difficulty}
                onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
                className="input">
                <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
              </select>
            </Field>
          </div>
          <Field label="Total lessons">
            <input type="number" min={0} value={form.total_lessons}
              onChange={(e) => setForm({ ...form, total_lessons: Number(e.target.value) })}
              className="input" />
          </Field>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50">
              Cancel
            </button>
            <button type="submit" disabled={saving}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-50">
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-slate-600">{label}</span>
      {children}
    </label>
  );
}
