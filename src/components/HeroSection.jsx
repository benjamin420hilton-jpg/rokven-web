import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 pt-32 pb-20 gap-16 z-10">
      
      {/* ── LEFT SIDE: COPY & BUTTONS ── */}
      <div className="z-10">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-accent uppercase border border-accent/25 px-3.5 py-1.5 mb-8 animate-fadeUp">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
          Field Research Series — SS26
        </div>
        
        <h1 className="font-display text-[clamp(64px,8vw,108px)] leading-[0.92] tracking-[0.04em] text-text-main mb-7 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
          BUILT<br/>FOR THE<br/><em className="not-italic text-accent block">FIELD.</em>
        </h1>
        
        <p className="text-[15px] text-text-dim max-w-[420px] leading-[1.75] mb-10 font-light animate-fadeUp" style={{ animationDelay: '0.22s' }}>
          Designed by <strong className="text-text-main font-medium">field researchers</strong> who spend their seasons in terrain that equipment companies only photograph. Ecologists, surveyors, plant pathologists — people who need gear that <strong className="text-text-main font-medium">actually holds up</strong> when there's no trail back.
        </p>
        
        <div className="flex items-center gap-5 flex-wrap animate-fadeUp" style={{ animationDelay: '0.36s' }}>
          <button className="font-mono text-[11px] tracking-[0.18em] uppercase bg-accent text-bg px-8 py-3.5 font-bold transition-all hover:opacity-90 hover:-translate-y-px">
            Join the Waitlist
          </button>
          <button className="font-mono text-[11px] tracking-[0.18em] uppercase bg-transparent text-text-dim border border-border px-8 py-3.5 transition-colors hover:border-accent2 hover:text-accent2">
            Field Notes →
          </button>
        </div>

        {/* Stats Row */}
        <div className="flex gap-10 mt-14 pt-8 border-t border-border animate-fadeUp" style={{ animationDelay: '0.5s' }}>
          <div>
            <div className="font-display text-[34px] text-accent leading-none">340+</div>
            <div className="font-mono text-[9px] tracking-[0.22em] text-text-dim uppercase mt-1">Field Hours Tested</div>
          </div>
          <div>
            <div className="font-display text-[34px] text-accent leading-none">18</div>
            <div className="font-mono text-[9px] tracking-[0.22em] text-text-dim uppercase mt-1">Biomes Surveyed</div>
          </div>
          <div>
            <div className="font-display text-[34px] text-accent leading-none">v0.1</div>
            <div className="font-mono text-[9px] tracking-[0.22em] text-text-dim uppercase mt-1">First Release</div>
          </div>
        </div>
      </div>

      {/* ── RIGHT SIDE: BOTANICAL MANDALA ── */}
      <div className="relative hidden md:flex items-center justify-center">
        <div className="relative w-[380px] h-[380px]">
          
          {/* Corner Ticks */}
          <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-accent opacity-60"></div>
          <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-accent opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b border-l border-accent opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-accent opacity-60"></div>
          
          {/* Rotating Rings */}
          <div className="absolute inset-0 rounded-full border border-accent opacity-[0.18] animate-[spin_32s_linear_infinite]"></div>
          <div className="absolute inset-[40px] rounded-full border border-accent2 opacity-[0.14] animate-[spin_20s_linear_infinite_reverse]"></div>
          <div className="absolute inset-[80px] rounded-full border border-accent opacity-[0.20] animate-[spin_14s_linear_infinite]"></div>
          
          {/* Center SVG Flower */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="animate-[spin_40s_linear_infinite] opacity-55" width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="100" cy="58" rx="14" ry="42" fill="#c8f542" opacity=".22"/>
              <ellipse cx="100" cy="58" rx="14" ry="42" fill="#c8f542" opacity=".22" transform="rotate(45 100 100)"/>
              <ellipse cx="100" cy="58" rx="14" ry="42" fill="#c8f542" opacity=".22" transform="rotate(90 100 100)"/>
              <ellipse cx="100" cy="58" rx="14" ry="42" fill="#c8f542" opacity=".22" transform="rotate(135 100 100)"/>
              <ellipse cx="100" cy="58" rx="14" ry="42" fill="#c8f542" opacity=".22" transform="rotate(180 100 100)"/>
              <ellipse cx="100" cy="58" rx="14" ry="42" fill="#c8f542" opacity=".22" transform="rotate(225 100 100)"/>
              <ellipse cx="100" cy="58" rx="14" ry="42" fill="#c8f542" opacity=".22" transform="rotate(270 100 100)"/>
              <ellipse cx="100" cy="58" rx="14" ry="42" fill="#c8f542" opacity=".22" transform="rotate(315 100 100)"/>
              <circle cx="100" cy="100" r="18" stroke="#4af0c4" strokeWidth="1" fill="none" opacity=".5"/>
              <circle cx="100" cy="100" r="7" fill="#c8f542" opacity=".8"/>
              <line x1="100" y1="20" x2="100" y2="180" stroke="#c8f542" strokeWidth="0.5" opacity=".18"/>
              <line x1="20" y1="100" x2="180" y2="100" stroke="#c8f542" strokeWidth="0.5" opacity=".18"/>
            </svg>
          </div>

          {/* Label */}
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-text-dim whitespace-nowrap uppercase">
            ROKVEN — BIO-FIELD SYSTEM
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;