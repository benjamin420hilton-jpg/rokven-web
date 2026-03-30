import React from 'react';
// 1. IMPORTING YOUR NEW TECHNICAL ASSETS
import shellImage from '../assets/field-shell-01.jpg';
import packImage from '../assets/utility-pack-01.jpg';
import pantImage from '../assets/tactical-pant-01.jpg';

const products = [
  {
    id: "RS-01",
    name: "Field Shell 01",
    desc: "3-Layer membrane. Optimized for high-moisture environments.",
    status: "In Development",
    tag: "A-TYPE",
    image: shellImage 
  },
  {
    id: "RB-22",
    name: "Utility Pack",
    desc: "18L Capacity. Integrated tool organization for global research.",
    status: "Prototype",
    tag: "B-TYPE",
    image: packImage
  },
  {
    id: "RT-05",
    name: "Tactical Over-Pant",
    desc: "Abrasion resistant. Reinforced knee articulation for transitions.",
    status: "Testing Phase",
    tag: "A-TYPE",
    image: pantImage
  }
];

const GearGallery = () => {
  return (
    <section id="gear" className="py-32 px-6 md:px-12 bg-black border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase mb-4">Current Inventory</div>
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-tighter uppercase leading-none">
              The <span className="italic text-accent">Equipment</span>
            </h2>
          </div>
          <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest max-w-[200px] text-right">
            ROKVEN SPECIFICATION // GLOBAL ADAPTIVE SYSTEMS
          </div>
        </div>

        {/* 2. THE PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {products.map((item) => (
            <div key={item.id} className="bg-black p-8 group hover:bg-white/5 transition-all duration-500 cursor-crosshair">
              
              {/* IMAGE CONTAINER */}
              <div className="aspect-[4/5] mb-8 overflow-hidden bg-white/5 border border-white/5 relative">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 brightness-90 contrast-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-mono text-[10px] text-white/20 uppercase tracking-widest">
                    Image Pending // {item.id}
                  </div>
                )}
                {/* TECHNICAL OVERLAY LOGO */}
                <div className="absolute top-4 right-4 font-mono text-[8px] text-white/20 uppercase tracking-tighter">
                  ROKVEN_SYS_V1
                </div>
              </div>

              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[10px] text-accent border border-accent/30 px-2 py-0.5">{item.tag}</span>
                <span className="font-mono text-[10px] text-white/20">ID: {item.id}</span>
              </div>
              
              <h3 className="font-display text-2xl text-white uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">
                {item.name}
              </h3>
              <p className="font-mono text-[11px] text-white/50 leading-relaxed mb-8 h-12 uppercase tracking-wide">
                {item.desc}
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                <span className="font-mono text-[9px] text-white/80 uppercase tracking-[0.2em]">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GearGallery;