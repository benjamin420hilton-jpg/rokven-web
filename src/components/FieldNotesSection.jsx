import React from 'react';

const FieldNotesSection = () => {
  return (
    <section className="relative z-10 py-24 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* ── LEFT: FIELD CARD ── */}
        <div className="bg-surface border border-border p-10 relative overflow-hidden group">
          {/* Left Gradient Accent Line */}
          <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-accent to-accent2"></div>

          {/* Spinning Background Flower */}
          <svg className="absolute -bottom-5 -right-5 opacity-[0.07] animate-[spin_30s_linear_infinite]" width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="40" rx="18" ry="58" fill="#c8f542"/>
            <ellipse cx="100" cy="40" rx="18" ry="58" fill="#c8f542" transform="rotate(60 100 100)"/>
            <ellipse cx="100" cy="40" rx="18" ry="58" fill="#c8f542" transform="rotate(120 100 100)"/>
            <ellipse cx="100" cy="40" rx="18" ry="58" fill="#c8f542" transform="rotate(180 100 100)"/>
            <ellipse cx="100" cy="40" rx="18" ry="58" fill="#c8f542" transform="rotate(240 100 100)"/>
            <ellipse cx="100" cy="40" rx="18" ry="58" fill="#c8f542" transform="rotate(300 100 100)"/>
            <circle cx="100" cy="100" r="22" fill="#4af0c4"/>
          </svg>

          <div className="relative z-10">
            <div className="font-mono text-[9px] tracking-[0.24em] text-accent2 uppercase mb-5">
              Field Note — 001
            </div>
            <h3 className="font-display text-[32px] tracking-[0.04em] text-text-main leading-[1.1] mb-4">
              WHEN GEAR FAILS AT ALTITUDE
            </h3>
            <p className="text-[13px] text-text-dim leading-[1.85]">
              At 1,800m in the Blue Mountains during a six-week vegetation survey, three pieces of major-brand gear failed under sustained moisture and abrasion. ROKVEN was built to answer that specific question: <em className="italic text-text-main">what would researchers actually make?</em>
            </p>

            {/* Spec List */}
            <div className="mt-7 flex flex-col gap-3">
              <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.14em] pb-2.5 border-b border-border">
                <span className="text-text-dim uppercase">Elevation</span>
                <span className="text-accent">1,840m ASL</span>
              </div>
              <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.14em] pb-2.5 border-b border-border">
                <span className="text-text-dim uppercase">Duration</span>
                <span className="text-accent">41 Days</span>
              </div>
              <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.14em] pb-2.5 border-b border-border">
                <span className="text-text-dim uppercase">Biome</span>
                <span className="text-accent">Montane Wet Sclerophyll</span>
              </div>
              <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.14em] pb-2.5 border-b border-border">
                <span className="text-text-dim uppercase">Researcher</span>
                <span className="text-accent">R. Mercer — Plant Ecology</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: COPY ── */}
        <div>
          <div className="font-mono text-[10px] tracking-[0.28em] text-accent uppercase mb-3">
            Why Field Research
          </div>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] tracking-[0.04em] leading-none mb-6 text-text-main">
            MOST GEAR IS DESIGNED IN STUDIOS.<br/>
            <span className="text-accent">OURS ISN'T.</span>
          </h2>
          <p className="text-[14px] text-text-dim leading-[1.85] mb-7">
            The outdoor industry photographs terrain. We map it. Field researchers — ecologists, conservation surveyors, plant pathologists, remote sensing technicians — spend entire seasons in environments that destroy inferior equipment.
          </p>
          <p className="text-[14px] text-text-dim leading-[1.85] mb-9">
            ROKVEN exists because those researchers started building their own solutions. We formalised that knowledge into gear that works on day one and day forty-one.
          </p>
          <button className="font-mono text-[11px] tracking-[0.18em] uppercase bg-accent text-bg px-8 py-3.5 font-bold transition-all hover:opacity-90 hover:-translate-y-px">
            Read the Field Notes
          </button>
        </div>

      </div>
    </section>
  );
};

export default FieldNotesSection;