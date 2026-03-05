import React from 'react';
import PricingCard from '@/components/pricingCard';

const BookPage = () => {
  return (
    <div className="flex-grow flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 bg-black min-h-screen text-white">

      {/* Pricing Section */}
      <div className="pt-10 max-w-5xl w-full text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <p className="text-zinc-400 text-xs md:text-sm font-medium tracking-[0.2em] uppercase">
          Services & Investment
        </p>
        <h2 className="text-5xl sm:text-6xl font-medium font-cormorant tracking-tight">Pricing & Selection</h2>
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Experience a tailored grooming session. Choose from our standard clean cut, or opt for full bespoke grooming care.
        </p>

        <div className='h-12' />

        {/* Responsive Grid for Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Haircut Pricing Card */}
          <PricingCard
            cut="Haircut"
            price="$30"
            address="Monday - Saturday"
            days="Beauty Concepts - 4012 Fox Valley Center Dr, Aurora, IL 60504"
            description="A clean, fresh haircut to keep you looking sharp."
          />

          {/* Haircut + Beard Care Pricing Card */}
          <PricingCard
            cut="Haircut + Beard Care"
            price="$35"
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