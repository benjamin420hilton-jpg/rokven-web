import React from 'react';

const PillarsSection = () => {
  return (
    <section className="relative z-10 py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
      
      {/* ── HEADER ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end mb-16">
        <div>
          <div className="font-mono text-[10px] tracking-[0.28em] text-accent uppercase mb-3">
            Design Principles
          </div>
          <h2 className="font-display text-[clamp(36px,4vw,56px)] leading-none tracking-[0.04em] text-text-main">
            ENGINEERED FROM THE INSIDE OUT
          </h2>
        </div>
        <p className="text-[14px] text-text-dim leading-[1.8]">
          Every ROKVEN piece begins as a field problem, not a design brief. We study how organisms in extreme environments regulate temperature, resist abrasion, and maintain structural integrity — then we build it.
        </p>
      </div>

      {/* ── 3-COLUMN GRID ── */}
      {/* The background color (bg-border) paired with the 1px gap (gap-px) creates the perfect internal borders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
        
        {/* CARD 01 */}
        <div className="bg-surface p-10 relative overflow-hidden transition-colors duration-300 hover:bg-[#111519] group">
          {/* Hidden Flower Icon that appears on hover */}
          <div className="absolute top-4 right-4 text-[12px] text-accent opacity-0 -rotate-[20deg] scale-50 transition-all duration-300 group-hover:opacity-70 group-hover:rotate-0 group-hover:scale-100">
            ✿
          </div>
          
          <div className="font-mono text-[10px] tracking-[0.22em] text-muted mb-6">01 — STRUCTURE</div>
          <span className="text-[28px] mb-5 block animate-breathe">🌿</span>
          <div className="font-display text-[24px] tracking-[0.06em] text-text-main mb-3">VASCULAR WEAVE</div>
          <p className="text-[13px] text-text-dim leading-[1.8]">
            Fabric architecture modelled on plant vascular systems — directional moisture movement, zone-specific tension, and load distribution that responds to the body in motion.
          </p>
        </div>

        {/* CARD 02 */}
        <div className="bg-surface p-10 relative overflow-hidden transition-colors duration-300 hover:bg-[#111519] group">
          <div className="absolute top-4 right-4 text-[12px] text-accent opacity-0 -rotate-[20deg] scale-50 transition-all duration-300 group-hover:opacity-70 group-hover:rotate-0 group-hover:scale-100">
            ✿
          </div>
          
          <div className="font-mono text-[10px] tracking-[0.22em] text-muted mb-6">02 — THERMALS</div>
          <span className="text-[28px] mb-5 block animate-breathe">🍂</span>
          <div className="font-display text-[24px] tracking-[0.06em] text-text-main mb-3">CANOPY LAYERING</div>
          <p className="text-[13px] text-text-dim leading-[1.8]">
            A three-layer system inspired by forest canopy stratification. Each layer performs a distinct microclimatic role — transpiration, insulation, and structural protection.
          </p>
        </div>

        {/* CARD 03 */}
        <div className="bg-surface p-10 relative overflow-hidden transition-colors duration-300 hover:bg-[#111519] group">
          <div className="absolute top-4 right-4 text-[12px] text-accent opacity-0 -rotate-[20deg] scale-50 transition-all duration-300 group-hover:opacity-70 group-hover:rotate-0 group-hover:scale-100">
            ✿
          </div>
          
          <div className="font-mono text-[10px] tracking-[0.22em] text-muted mb-6">03 — DURABILITY</div>
          <span className="text-[28px] mb-5 block animate-breathe">🪨</span>
          <div className="font-display text-[24px] tracking-[0.06em] text-text-main mb-3">RHIZOME BONDING</div>
          <p className="text-[13px] text-text-dim leading-[1.8]">
            Seam engineering based on how root networks distribute tensile force across soil. No single point bears maximum load. The system absorbs stress and redistributes it.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PillarsSection;