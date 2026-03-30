import React from 'react';

const Ticker = () => {
  // We list your phrases once here...
  const phrases = [
    "Botanical Engineering",
    "Field-Tested Performance",
    "Ecological Intelligence",
    "Built for Researchers",
    "Plant Pathology Principles",
    "Canopy to Coast",
    "Survey-Grade Durability"
  ];

  // ...and double them up so the scrolling loop is completely seamless
  const tickerItems = [...phrases, ...phrases];

  return (
    <div className="relative z-10 border-y border-border bg-surface overflow-hidden py-3.5">
      <div className="flex w-max animate-ticker hover:[animation-play-state:paused] transition-all cursor-default">
        {tickerItems.map((item, index) => (
          <span key={index} className="font-mono text-[10px] tracking-[0.22em] uppercase text-text-dim px-8 whitespace-nowrap">
            <span className="text-accent mr-3">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;