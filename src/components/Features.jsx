import React from 'react';
import { ShieldCheck, Cloud, Smartphone, Save } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-5">
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
        <Icon size={18} />
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-white/70">{desc}</p>
  </div>
);

const Features = () => {
  const items = [
    {
      icon: Cloud,
      title: 'AI-generated itineraries',
      desc: 'Get daily schedules, stays, transport, costs and packing lists tailored to your budget and interests.'
    },
    {
      icon: Save,
      title: 'Save & manage trips',
      desc: 'Keep multiple trips safely stored, revisit and update them anytime.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure accounts',
      desc: 'Protected with modern authentication. Your data stays yours.'
    },
    {
      icon: Smartphone,
      title: 'Responsive & fast',
      desc: 'Beautiful on mobile and desktop, with smooth, subtle animations.'
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-white">Why Voyage-2.0?</h2>
      <p className="mt-1 text-sm text-white/70">Designed for effortless planning and delightful travel.</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <Feature key={it.title} icon={it.icon} title={it.title} desc={it.desc} />
        ))}
      </div>
    </div>
  );
};

export default Features;
