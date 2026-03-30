import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 py-10 px-6 md:px-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
      <div className="font-display text-[20px] tracking-[0.12em] text-accent">
        ROKVEN
      </div>
      <p className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase">
        © 2026 ROKVEN — Field Research Division
      </p>
      <p className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase">
        Sydney, Australia
      </p>
    </footer>
  );
};

export default Footer;