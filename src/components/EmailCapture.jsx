import React from 'react';

const EmailCapture = () => {
  return (
    <section className="relative z-10 py-24 px-6 md:px-12 border-t border-border bg-surface">
      <div className="max-w-[680px] mx-auto text-center">
        
        <div className="font-mono text-[10px] tracking-[0.28em] text-accent uppercase mb-5">
          Early Access
        </div>
        
        <h2 className="font-display text-[clamp(38px,5vw,68px)] tracking-[0.04em] leading-none mb-5 text-text-main">
          GET IN<br/>
          <em className="not-italic text-accent">BEFORE</em><br/>
          THE FIELD
        </h2>
        
        <p className="text-[14px] text-text-dim max-w-[460px] mx-auto mb-9 leading-[1.75]">
          First release is limited. Join the waitlist and get founding-member pricing, field notes from our research team, and first access to the SS26 drop.
        </p>

        {/* Form Input */}
        <div className="flex border border-border transition-colors duration-300 focus-within:border-accent">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-1 bg-bg border-none px-5 py-4 text-text-main font-mono text-[12px] tracking-[0.1em] outline-none placeholder:text-muted"
          />
          <button className="font-mono text-[10px] tracking-[0.2em] uppercase bg-accent text-bg px-7 font-bold transition-opacity hover:opacity-85">
            Register
          </button>
        </div>
        
        <p className="font-mono text-[9px] tracking-[0.18em] text-muted uppercase mt-4">
          No spam. Field notes only. Unsubscribe anytime.
        </p>
        
      </div>
    </section>
  );
};

export default EmailCapture;