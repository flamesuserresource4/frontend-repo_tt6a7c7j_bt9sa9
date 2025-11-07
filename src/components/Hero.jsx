import React from 'react';
import { Rocket, Map, Sparkles, Star, ShieldCheck } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <header className="relative isolate w-full min-h-[76vh] md:min-h-[88vh] overflow-hidden">
      {/* Interactive Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-neutral-950" />
      </div>

      {/* Top navigation */}
      <div className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-white" />
            <span className="text-sm font-semibold tracking-tight">Voyage-2.0</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#planner" className="hover:text-white">Planner</a>
            <a href="#" className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-white/10">
              <ShieldCheck size={14} /> Secure
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#planner" className="hidden rounded-md px-3 py-2 text-sm text-white/80 hover:text-white md:inline">Sign in</a>
            <a href="#planner" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-white/90">
              <Rocket size={16} /> Get started
            </a>
          </div>
        </div>
      </div>

      {/* Hero copy */}
      <div className="relative z-10 mx-auto flex h-[calc(100%-72px)] max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-6 text-center md:items-start md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
        >
          <Sparkles size={14} />
          <span>AI Trip Planner · Next-gen</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="mt-6 bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Plan smart, travel farther.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7 }}
          className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Craft detailed, personalized itineraries powered by AI — flights, stays, daily plans, packing lists, and more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.7 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#planner"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-[0_8px_30px_rgba(255,255,255,0.15)] transition hover:-translate-y-0.5 hover:bg-white/95"
          >
            <Rocket size={18} />
            Start Planning
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <Map size={18} />
            Explore Features
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5 md:justify-start"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Star size={14} className="text-yellow-300" />
              Rated 4.9/5 by travelers
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
