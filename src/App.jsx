import React from 'react';
import Hero from './components/Hero';
import PlannerForm from './components/PlannerForm';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
