import React, { useMemo, useState } from 'react';
import { Calendar, DollarSign, Globe2, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Label = ({ children }) => (
  <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-white/70">
    {children}
  </span>
);

const Field = ({ children }) => (
  <div className="group rounded-xl border border-white/10 bg-neutral-900/50 p-3 transition hover:border-white/20">
    {children}
  </div>
);

const PlannerForm = () => {
  const [form, setForm] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    interests: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const nights = useMemo(() => {
    if (!form.startDate || !form.endDate) return 0;
    const s = new Date(form.startDate);
    const e = new Date(form.endDate);
    const diff = Math.max(0, (e - s) / (1000 * 60 * 60 * 24));
    return Math.round(diff);
  }, [form.startDate, form.endDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      alert('This is a UI preview. Backend AI generation will be wired in next.');
      setSubmitting(false);
    }, 900);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-950/60 p-6 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-white">Build your itinerary</h2>
          <p className="mt-1 text-sm text-white/70">Tell us the basics — we\'ll handle the details.</p>
        </div>
        <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 sm:inline-flex items-center gap-2">
          <Sparkles size={14} /> AI-assisted
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field>
          <Label>
            <span className="inline-flex items-center gap-2"><Globe2 size={14} /> Destination</span>
          </Label>
          <input
            type="text"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            placeholder="e.g., Tokyo, Japan"
            required
            className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
          />
        </Field>

        <Field>
          <Label>
            <span className="inline-flex items-center gap-2"><DollarSign size={14} /> Budget (USD)</span>
          </Label>
          <input
            type="number"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            min="0"
            placeholder="1500"
            className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
          />
        </Field>

        <Field>
          <Label>
            <span className="inline-flex items-center gap-2"><Calendar size={14} /> Start date</span>
          </Label>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
          />
        </Field>

        <Field>
          <Label>
            <span className="inline-flex items-center gap-2"><Calendar size={14} /> End date</span>
          </Label>
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
          />
        </Field>

        <div className="md:col-span-2">
          <Field>
            <Label>
              <span className="inline-flex items-center gap-2"><Heart size={14} /> Interests</span>
            </Label>
            <input
              type="text"
              name="interests"
              value={form.interests}
              onChange={handleChange}
              placeholder="food, culture, hiking"
              className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
            />
          </Field>
        </div>

        <div className="md:col-span-2 mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/60">{nights > 0 ? `${nights} night${nights === 1 ? '' : 's'} in ${form.destination || 'your destination'}` : 'We\'ll use AI to generate a detailed plan with stays, daily activities, and packing tips.'}</p>
          <motion.button
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-[0_8px_30px_rgba(255,255,255,0.15)] transition hover:-translate-y-0.5 hover:bg-white/90 disabled:opacity-60"
          >
            {submitting ? 'Generating…' : 'Generate Itinerary'}
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default PlannerForm;
