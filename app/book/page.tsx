import React from 'react';
import NavBar from '@/components/navbar';
import PricingCard from '@/components/pricingCard';
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { CircleCheckIcon } from 'lucide-react';

const BookPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <NavBar />

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col items-center py-6 px-4 sm:px-6 lg:px-8">
        
        {/* Pricing Section */}
        <div className="pt-10 max-w-[1280px] w-full text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Pricing</h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Choose from a clean cut or full grooming care.
          </p>

          <div className='h-6'/>

          {/* Responsive Grid for Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Haircut at School */}

            <PricingCard 
              cut="Haircut at Champions" 
              price="$25" 
              address="Monday - Thursday" 
              days="2011 S IL-59 Plainfield, IL, 60586" 
              description="Support my career by getting a cut at the barber school."
              note ="Ask for Tim at the front desk"
            /> 

            {/* Haircut Pricing Card */}
            <PricingCard 
              cut="Haircut" 
              price="$25" 
              address="Friday - Saturday" 
              days="739 Violet Circle, Naperville, IL, 60540" 
              description="A clean, fresh haircut to keep you looking sharp."
              note="Please text or DM me upon arrival"
            />

            {/* Haircut + Beard Care Pricing Card */}
            <PricingCard 
              cut="Haircut + Beard Care" 
              price="$35" 
              address="Monday - Thursday: 2011 S IL-59 Plainfield, IL, 60586" 
              days="Friday - Saturday: 739 Violet Circle, Naperville, IL, 60540" 
              description="Premium grooming with haircut and beard care."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;