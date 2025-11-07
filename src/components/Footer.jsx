import React from 'react';
import { Github, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 bg-neutral-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-white/70 sm:flex-row">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
