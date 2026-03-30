import React from 'react';

const FieldNotes = () => {
  return (
    <section id="notes" className="py-32 px-6 md:px-12 bg-black border-t border-white/5">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        
        {/* Left Side: Technical Specimen Placeholder */}
        <div className="relative aspect-square bg-white/5 border border-white/10 overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-white/20 uppercase tracking-[0.5em] group-hover:text-accent transition-colors">
            [ SYSTEM_SCAN_UNAVAILABLE ]
          </div>
        </div>

        {/* Right Side: The Protocol */}
        <div className="space-y-8">
          <div className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase">Global Protocol // R-105</div>
          <h2 className="font-display text-5xl text-white uppercase tracking-tight leading-none">
            Built for the <br/> <span className="italic text-accent">Transition</span>
          </h2>
          <p className="font-mono text-[12px] text-white/60 leading-relaxed uppercase tracking-wide">
            ROKVEN IS AN ADAPTIVE EQUIPMENT SYSTEM. DESIGNED FOR THE SEAMLESS TRANSITION BETWEEN HIGH-OUTPUT ACTIVITY AND URBAN ENVIRONMENTS. EVERY PIECE IS TESTED AGAINST RIGOROUS ENVIRONMENTAL STANDARDS TO ENSURE TOTAL CLIMATE CONTROL.
          </p>
          <div className="pt-6 border-t border-white/10">
            <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.3em]">
              Archive: ROKVEN_GEN_01 // Global Availability Pending
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FieldNotes;