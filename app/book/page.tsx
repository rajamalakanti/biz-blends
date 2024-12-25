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
            {/* Haircut Pricing Card */}
                    <div className="flex flex-col rounded-lg border border-gray-200">
        <div className="grid gap-4 p-6">
          <h3 className="text-2xl font-bold">Haircut</h3>
          <p className="text-sm leading-6 text-gray-500">A clean, fresh haircut to keep you looking sharp.</p>
          <div className="text-4xl font-semibold text-blue-700">$25</div>
          <div className="grid gap-2 text-sm">
            <p className="flex items-center gap-2">
              <CircleCheckIcon className="w-4 h-4" />
              739 Violet Circle, Naperville, IL, 60540
            </p>
            <p className="flex items-center gap-2">
              <CircleCheckIcon className="w-4 h-4" />
              Friday - Saturday
            </p>
            <p className="flex items-center gap-2">
              <CircleCheckIcon className="w-4 h-4" />
              Please text or DM me when you arrive
            </p>
          </div>
        </div>
        <div className="p-4 border-t grid gap-2">
          <Link href='/gcal'>
          <Button className="bg-blue-700 w-full">Book Now</Button>
          </Link>
        </div>
      </div>

            {/* Haircut + Beard Care Pricing Card */}
            <PricingCard 
              cut="Haircut + Beard Care" 
              price="$35" 
              address="739 Violet Circle, Naperville, IL, 60540" 
              days="Friday - Saturday" 
              description="Premium grooming with haircut and beard care."
            />

            {/* Haircut at School */}

            <PricingCard 
              cut="Haircut at Champions" 
              price="$25" 
              address="2011 S IL-59 Plainfield, IL, 60586" 
              days="Monday - Thursday" 
              description="Support my career by getting a cut at the barber school."
            /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;