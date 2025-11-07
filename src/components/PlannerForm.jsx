import React, { useState } from 'react';
import { Calendar, DollarSign, Globe2, Heart } from 'lucide-react';

const Input = ({ label, children }) => (
  <label className="block">
    <span className="mb-1 block text-sm text-white/80">{label}</span>
    {children}
  </label>
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // For this UI stub we just simulate a short delay
    setTimeout(() => {
      alert('This is a UI preview. Backend AI generation will be wired in next.');
      setSubmitting(false);
    }, 900);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 shadow-2xl backdrop-blur-md">
      <h2 className="text-xl font-semibold text-white">Build your itinerary</h2>
      <p className="mt-1 text-sm text-white/70">Tell us the basics — we\'ll handle the details.</p>

      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input label={
          <span className="inline-flex items-center gap-2"><Globe2 size={16} /> Destination</span>
        }>
          <input
            type="text"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            placeholder="e.g., Tokyo, Japan"
            required
            className="w-full rounded-md border border-white/10 bg-neutral-800 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
          />
        </Input>

        <Input label={
          <span className="inline-flex items-center gap-2"><DollarSign size={16} /> Budget (USD)</span>
        }>
          <input
            type="number"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            min="0"
            placeholder="1500"
            className="w-full rounded-md border border-white/10 bg-neutral-800 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
          />
        </Input>

        <Input label={
          <span className="inline-flex items-center gap-2"><Calendar size={16} /> Start date</span>
        }>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-white/10 bg-neutral-800 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
          />
        </Input>

        <Input label={
          <span className="inline-flex items-center gap-2"><Calendar size={16} /> End date</span>
        }>
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-white/10 bg-neutral-800 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
          />
        </Input>

        <div className="md:col-span-2">
          <Input label={
            <span className="inline-flex items-center gap-2"><Heart size={16} /> Interests</span>
          }>
            <input
              type="text"
              name="interests"
              value={form.interests}
              onChange={handleChange}
              placeholder="food, culture, hiking"
              className="w-full rounded-md border border-white/10 bg-neutral-800 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
            />
          </Input>
        </div>

        <div className="md:col-span-2 mt-2 flex items-center justify-between">
          <p className="text-xs text-white/60">We\'ll use AI to generate a detailed plan with stays, daily activities, and packing tips.</p>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-white/90 disabled:opacity-60"
          >
            {submitting ? 'Generating…' : 'Generate Itinerary'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlannerForm;
