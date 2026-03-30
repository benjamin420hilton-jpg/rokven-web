import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="font-display text-[26px] tracking-[0.12em] text-accent">
        ROKVEN
        <span className="block mt-[-4px] font-mono text-[11px] tracking-[0.25em] text-text-dim">
          Field Research Division
        </span>
      </div>
      
      <div className="hidden md:flex gap-8">
        <a href="#" className="font-mono text-[11px] tracking-[0.18em] text-text-dim uppercase transition-colors hover:text-accent">Field Notes</a>
        <a href="#" className="font-mono text-[11px] tracking-[0.18em] text-text-dim uppercase transition-colors hover:text-accent">Gear</a>
        <a href="#" className="font-mono text-[11px] tracking-[0.18em] text-text-dim uppercase transition-colors hover:text-accent">Research</a>
        <a href="#" className="font-mono text-[11px] tracking-[0.18em] text-text-dim uppercase transition-colors hover:text-accent">About</a>
      </div>
      
      <button className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase bg-accent text-bg px-5 py-2 hover:opacity-90 transition-opacity">
        Join Waitlist
      </button>
    </nav>
  );
};

export default Navbar;
