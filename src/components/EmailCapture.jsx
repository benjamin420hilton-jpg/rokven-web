import React, { useState } from 'react';

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleRegister = async () => {
    if (!email) return;
    setStatus("loading");

    try {
      // CONNECTING TO YOUR LIVE RENDER BACKEND
      const response = await fetch('https://rokven-backend.onrender.com/api/join-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
      });

      if (response.ok) {
        setStatus("success");
        setEmail(""); 
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Connection error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="relative z-10 py-32 px-6 md:px-12 border-t border-white/10 bg-black">
      <div className="max-w-[680px] mx-auto text-center">
        <div className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase mb-6 opacity-60">
          Global Protocol
        </div>
        
        <h2 className="font-display text-[clamp(40px,6vw,80px)] tracking-tight leading-[0.9] mb-12 text-white uppercase">
          Join the<br/>
          <span className="text-accent italic">Inner Field</span>
        </h2>
        
        <div className="relative group">
          {status !== "success" ? (
            <div className="flex flex-col md:flex-row border border-white/20 transition-all duration-500 focus-within:border-accent/50 bg-white/5 backdrop-blur-sm">
              <input 
                type="email" 
                placeholder="ENTER EMAIL ADDRESS" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border-none px-6 py-5 text-white font-mono text-[11px] outline-none placeholder:text-white/20 uppercase tracking-widest"
              />
              <button 
                onClick={handleRegister}
                disabled={status === "loading"}
                className="bg-white text-black px-10 py-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-300 disabled:opacity-50"
              >
                {status === "loading" ? "Processing..." : "Secure Access"}
              </button>
            </div>
          ) : (
            <div className="py-6 border border-accent/30 bg-accent/5 animate-pulse">
              <p className="font-mono text-accent text-[11px] tracking-[0.3em] uppercase text-center">
                ✦ Registration Confirmed. Welcome to ROKVEN.
              </p>
            </div>
          )}

          {status === "error" && (
            <p className="absolute -bottom-10 left-0 w-full text-center font-mono text-[9px] text-red-500 uppercase tracking-widest">
              Error: Connection failed. (Try again in 30s)
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;