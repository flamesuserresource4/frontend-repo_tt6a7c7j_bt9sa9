import React from 'react';
import { Github, Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 bg-neutral-950/80">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-white" />
              <span className="text-sm font-semibold tracking-tight text-white">Voyage-2.0</span>
            </div>
            <p className="mt-3 text-sm text-white/70">AI-powered planning for effortless, unforgettable trips.</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white/70">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a className="hover:text-white" href="#features">Features</a></li>
              <li><a className="hover:text-white" href="#planner">Planner</a></li>
              <li><a className="hover:text-white" href="#">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white/70">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a className="hover:text-white" href="#">About</a></li>
              <li><a className="hover:text-white" href="#">Careers</a></li>
              <li><a className="hover:text-white" href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-white/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Voyage-2.0. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 hover:text-white">
              <Github size={16} />
              GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-2 hover:text-white">
              <Globe size={16} />
              Docs
            </a>
            <a href="#" className="inline-flex items-center gap-2 hover:text-white">
              <Mail size={16} />
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
