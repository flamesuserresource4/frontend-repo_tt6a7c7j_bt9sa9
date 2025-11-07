import React from 'react';
import { Rocket, Map, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <header className="relative isolate w-full min-h-[70vh] md:min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-neutral-950" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 py-24 text-center md:items-start md:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Sparkles size={14} />
          <span>Voyage-2.0 · AI Trip Planner</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Plan smart, travel farther.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Craft detailed, personalized itineraries powered by AI — flights, stays, daily plans, packing lists, and more.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#planner"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-white/90"
          >
            <Rocket size={18} />
            Start Planning
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <Map size={18} />
            Explore Features
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
