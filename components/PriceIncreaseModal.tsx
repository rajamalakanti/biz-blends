"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const PriceIncreaseModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem("price_notice_dismissed");
    if (!isDismissed) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("price_notice_dismissed", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-500">
      <div 
        className="relative bg-zinc-950/90 border border-white/10 p-8 md:p-12 max-w-xl w-full shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-8 duration-500"
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-zinc-500 text-xs font-medium tracking-[0.2em] uppercase">
              Important Business Update
            </p>
            <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-white tracking-tight">
              A Quick Notice
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-zinc-300 text-lg leading-relaxed font-light">
              Thank you for your continued support and loyalty—it truly means a lot to me and my business. I’m grateful for every client who trusts me with their time and style.
            </p>
            
            <div className="p-6 bg-white/5 border border-white/5 rounded-none space-y-4">
              <p className="text-white text-base font-medium"> New Pricing Effective 5/1/26 </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm pt-2">
                <div className="space-y-1">
                  <p className="text-zinc-500 uppercase tracking-widest text-[10px]">Haircut</p>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 line-through">$30</span>
                    <span className="text-white text-lg">$40</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-zinc-500 uppercase tracking-widest text-[10px]">Haircut + Beard</p>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 line-through">$35</span>
                    <span className="text-white text-lg">$45</span>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 text-xs leading-relaxed pt-2 border-t border-white/5">
                To continue providing the best service and experience, prices will be increasing starting May 1st.
              </p>
            </div>

            <p className="text-zinc-300 text-lg leading-relaxed font-light">
              Thank you so much for your support!
            </p>
          </div>

          <Button 
            onClick={handleClose}
            className="w-full border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none uppercase tracking-[0.15em] text-xs py-6 h-auto"
          >
            I Understand
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PriceIncreaseModal;
