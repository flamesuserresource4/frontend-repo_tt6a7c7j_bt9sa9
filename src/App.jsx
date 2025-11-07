import React from 'react';
import Hero from './components/Hero';
import PlannerForm from './components/PlannerForm';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-white/20 selection:text-white">
      {/* Background accents */}
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-10%] h-72 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.08),transparent)] blur-2xl" />
      </div>

      <Hero />

      <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section id="planner" className="py-12 md:py-16">
          <PlannerForm />
        </section>
        <section id="features" className="py-12 md:py-16">
          <Features />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
