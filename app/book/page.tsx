import React from 'react';
import PricingCard from '@/components/pricingCard';

const BookPage = () => {
  return (
    <div className="flex-grow flex flex-col items-center py-16 md:py-20 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-8rem)]">

      <div className="pt-4 max-w-5xl w-full text-center space-y-6 animate-fade-rise">
        <p className="text-espresso/60 font-display text-lg md:text-xl font-light tracking-wide">
          Effect
        </p>
        <h2 className="text-5xl sm:text-6xl font-medium font-display tracking-tight text-espresso leading-none">
          Pricing & Selection
        </h2>
        <p className="text-cocoa/70 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Choose a clean cut or full bespoke grooming — every session is tailored with care by Tim Medina.
        </p>

        <div className="max-w-2xl mx-auto w-full rounded-full bg-espresso px-6 py-3 shadow-[0_12px_28px_-18px_rgba(36,22,18,0.7)]">
          <p className="text-cream/90 text-[11px] md:text-xs tracking-[0.12em] uppercase">
            Please note: holiday cuts may include an additional fee
          </p>
        </div>

        <div className='h-4' />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <PricingCard
            cut="Haircut"
            price="$40"
            address="Monday - Saturday"
            days="Beauty Concepts - 4012 Fox Valley Center Dr, Aurora, IL 60504"
            description="A clean, fresh haircut to keep you looking sharp."
          />

          <PricingCard
            cut="Haircut + Beard Care"
            price="$45"
            address="Monday - Saturday"
            days="Beauty Concepts - 4012 Fox Valley Center Dr, Aurora, IL 60504"
            description="Premium grooming with haircut and beard care."
          />
        </div>
      </div>
    </div>
  );
};

export default BookPage;
