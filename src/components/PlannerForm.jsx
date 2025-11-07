import React, { useMemo, useState } from 'react';
import { Calendar, DollarSign, Globe2, Heart, Sparkles, Users, BedDouble, Plane, Hotel, Wallet, ListChecks } from 'lucide-react';
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

const NumberInput = ({ name, value, onChange, min = 0, step = 1 }) => (
  <input
    type="number"
    name={name}
    value={value}
    onChange={onChange}
    min={min}
    step={step}
    className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
  />
);

const Select = ({ name, value, onChange, children }) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white outline-none focus:border-white/20"
  >
    {children}
  </select>
);

const PlannerForm = () => {
  const [form, setForm] = useState({
    origin: '',
    destination: '',
    startDate: '',
    endDate: '',
    budget: '', // total budget if user prefers
    dailyBudget: '', // alternative to compute estimates
    currency: 'USD',
    adults: 2,
    children: 0,
    rooms: 1,
    interests: '',
    activities: '', // comma separated optional
    pace: 'balanced',
    accommodation: 'hotel-4',
    flightClass: 'economy',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const nights = useMemo(() => {
    if (!form.startDate || !form.endDate) return 0;
    const s = new Date(form.startDate);
    const e = new Date(form.endDate);
    const diff = Math.max(0, (e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24));
    return Math.round(diff);
  }, [form.startDate, form.endDate]);

  const travelers = useMemo(() => Number(form.adults || 0) + Number(form.children || 0), [form.adults, form.children]);

  const estimate = useMemo(() => {
    const nightsCount = Math.max(1, nights);
    const ppl = Math.max(1, travelers);
    const daily = Number(form.dailyBudget || 0);
    const totalBudget = Number(form.budget || 0);

    // Prefer explicit total budget if provided; otherwise compute from dailyBudget
    const total = totalBudget > 0 ? totalBudget : daily > 0 ? daily * nightsCount * ppl : 0;
    const perPerson = total > 0 ? total / ppl : 0;
    return { total, perPerson };
  }, [form.dailyBudget, form.budget, travelers, nights]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      alert('This is a UI preview. Next step: connect to backend AI to generate a full itinerary with activities, lodging, and costs.');
      setSubmitting(false);
    }, 900);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-950/60 p-6 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-white">Build your itinerary</h2>
          <p className="mt-1 text-sm text-white/70">Tell us everything — people, rooms, activities, and budget. We’ll handle the rest.</p>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 sm:inline-flex">
          <Sparkles size={14} /> AI-assisted
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Left column */}
        <div className="space-y-4 md:col-span-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field>
              <Label>
                <span className="inline-flex items-center gap-2"><Globe2 size={14} /> Origin</span>
              </Label>
              <input
                type="text"
                name="origin"
                value={form.origin}
                onChange={handleChange}
                placeholder="e.g., New York, USA"
                className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
              />
            </Field>

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
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Field>
              <Label>
                <span className="inline-flex items-center gap-2"><Users size={14} /> Adults</span>
              </Label>
              <NumberInput name="adults" value={form.adults} onChange={handleChange} min={1} />
            </Field>
            <Field>
              <Label>
                <span className="inline-flex items-center gap-2"><Users size={14} /> Children</span>
              </Label>
              <NumberInput name="children" value={form.children} onChange={handleChange} min={0} />
            </Field>
            <Field>
              <Label>
                <span className="inline-flex items-center gap-2"><BedDouble size={14} /> Rooms</span>
              </Label>
              <NumberInput name="rooms" value={form.rooms} onChange={handleChange} min={1} />
            </Field>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Field>
              <Label>
                <span className="inline-flex items-center gap-2"><Wallet size={14} /> Total budget ({form.currency})</span>
              </Label>
              <NumberInput name="budget" value={form.budget} onChange={handleChange} min={0} />
            </Field>
            <Field>
              <Label>
                <span className="inline-flex items-center gap-2"><DollarSign size={14} /> Daily budget ({form.currency})</span>
              </Label>
              <NumberInput name="dailyBudget" value={form.dailyBudget} onChange={handleChange} min={0} />
            </Field>
            <Field>
              <Label>Currency</Label>
              <Select name="currency" value={form.currency} onChange={handleChange}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                <option value="INR">INR</option>
              </Select>
            </Field>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Field>
              <Label>
                <span className="inline-flex items-center gap-2"><Hotel size={14} /> Accommodation</span>
              </Label>
              <Select name="accommodation" value={form.accommodation} onChange={handleChange}>
                <option value="hotel-3">Hotel · 3★</option>
                <option value="hotel-4">Hotel · 4★</option>
                <option value="hotel-5">Hotel · 5★</option>
                <option value="apartment">Apartment</option>
                <option value="hostel">Hostel</option>
              </Select>
            </Field>
            <Field>
              <Label>
                <span className="inline-flex items-center gap-2"><Plane size={14} /> Flight class</span>
              </Label>
              <Select name="flightClass" value={form.flightClass} onChange={handleChange}>
                <option value="economy">Economy</option>
                <option value="premium">Premium Economy</option>
                <option value="business">Business</option>
                <option value="first">First</option>
              </Select>
            </Field>
            <Field>
              <Label>
                <span className="inline-flex items-center gap-2"><ListChecks size={14} /> Pace</span>
              </Label>
              <Select name="pace" value={form.pace} onChange={handleChange}>
                <option value="relaxed">Relaxed</option>
                <option value="balanced">Balanced</option>
                <option value="packed">Packed</option>
              </Select>
            </Field>
          </div>

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

          <Field>
            <Label>
              <span className="inline-flex items-center gap-2"><ListChecks size={14} /> Activities (optional)</span>
            </Label>
            <input
              type="text"
              name="activities"
              value={form.activities}
              onChange={handleChange}
              placeholder="Sushi class, Mt. Fuji day trip, teamLab, onsen, ramen crawl"
              className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
            />
          </Field>

          <Field>
            <Label>Notes or requirements (dietary, accessibility, celebrations)</Label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              placeholder="e.g., vegetarian, wheelchair access, honeymoon, avoid red-eye flights"
              className="w-full resize-y rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/20"
            />
          </Field>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/60">
              {nights > 0
                ? `${nights} night${nights === 1 ? '' : 's'} for ${travelers} traveler${travelers === 1 ? '' : 's'} · ${form.rooms} room${form.rooms === 1 ? '' : 's'}`
                : "We'll use AI to generate a detailed plan with stays, daily activities, and packing tips."}
            </p>
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-[0_8px_30px_rgba(255,255,255,0.15)] transition hover:-translate-y-0.5 hover:bg-white/90 disabled:opacity-60"
            >
              {submitting ? 'Generating…' : 'Generate Itinerary'}
            </motion.button>
          </div>
        </div>

        {/* Summary column */}
        <div className="md:sticky md:top-6 md:h-fit">
          <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-4">
            <h3 className="text-sm font-semibold text-white">Trip summary</h3>
            <p className="mt-1 text-xs text-white/70">Live estimate updates as you type.</p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-white/70">Nights</span>
                <span>{nights}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Travelers</span>
                <span>{travelers}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Rooms</span>
                <span>{form.rooms}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Pace</span>
                <span className="capitalize">{form.pace}</span>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-white/10 bg-neutral-950/60 p-3">
              <div className="flex items-center justify-between text-sm">
                <span className="inline-flex items-center gap-2 text-white/70"><Wallet size={14} /> Est. total ({form.currency})</span>
                <span className="font-medium">{estimate.total > 0 ? estimate.total.toLocaleString() : '—'}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-white/70">
                <span>Per person</span>
                <span>{estimate.perPerson > 0 ? estimate.perPerson.toLocaleString() : '—'}</span>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-xs text-white/60">
              <p className="inline-flex items-center gap-2"><Hotel size={14} /> {form.accommodation.replace('-', ' ')}</p>
              <p className="inline-flex items-center gap-2"><Plane size={14} /> {form.flightClass}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlannerForm;
