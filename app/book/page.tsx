import React from 'react';
import NavBar from '@/components/navbar';
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";

const CombinedPage = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar at the top */}
      <NavBar />

      {/* Main Content Area with responsive layout */}
      <div className="flex-grow flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-300">
        
        {/* Pricing Section */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-4">
          <div className="max-w-md w-full space-y-6 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Pricing</h2>
            <p className="text-gray-600">
              Choose from a clean cut or full grooming care.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {/* Haircut Pricing Card */}
              <Card className="p-4 flex flex-col items-center">
                <CardTitle className="text-xl">Haircut</CardTitle>
                <CardContent>
                  <p className="text-4xl font-extrabold text-blue-700">$30</p>
                  <p className="text-sm text-gray-500 mt-2">Location: Main Salon</p>
                  <p className="text-sm text-gray-500">Time: Check Calendar</p>
                </CardContent>
                <CardDescription className="text-sm">
                  A clean, fresh haircut to keep you looking sharp.
                </CardDescription>
              </Card>

              {/* Haircut + Beard Care Pricing Card */}
              <Card className="p-4 flex flex-col items-center">
                <CardTitle className="text-xl">Haircut + Beard Care</CardTitle>
                <CardContent>
                  <p className="text-4xl font-extrabold text-blue-700">$35</p>
                  <p className="text-sm text-gray-500 mt-2">Location: Main Salon</p>
                  <p className="text-sm text-gray-500">Time: Check Calendar</p>
                </CardContent>
                <CardDescription className="text-sm">
                  Premium grooming with haircut and beard care.
                </CardDescription>
              </Card>

              {/* Haircut at School */}
              <Card className="p-4 flex flex-col items-center">
                <CardTitle className="text-xl">Haircut at Champions Barber and Beauty</CardTitle>
                <CardContent>
                  <p className="text-4xl font-extrabold text-blue-700">$20</p>
                  <p className="text-sm text-gray-500 mt-2">Address: 4374 E New York St Aurora, IL 60504</p>
                  <p className="text-sm text-gray-500">Time: 10:00 AM - 4:00 PM</p>
                  <p className='text-sm text-gray-500'>Days: Monday - Thursday</p>
                </CardContent>
                <CardDescription className="text-sm">
                  A clean, fresh haircut at a discounted price at the barber school.
                </CardDescription>
              </Card>
              
            </div>
          </div>
        </div>

        {/* Appointment Scheduling Section */}
        <div className="flex-1 flex items-center justify-center bg-blue-700 p-4">
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0kGoH4C_qhaUb7QbcDpVjQm_XqndscWcPvM--WuT5mzkuVtMPJjWNIIvVSd6JSwOxxmDSemJwE?gv=true"
              width="100%"
              height="450"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedPage;
