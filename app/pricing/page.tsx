import React from 'react';
import NavBar from '@/components/navbar';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const Pricing = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] bg-gray-50 px-4 sm:px-6 min-h-screen ">
        <div className="max-w-3xl w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Pricing</h2>
            <p className="mt-2 text-gray-600">
              Whether you're just looking for a clean cut or complete grooming care, I have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {/* Haircut Pricing Card */}
            <Card className='p-6 flex flex-col items-center'>
              <CardTitle className="text-2xl">Haircut</CardTitle>
              <CardContent>
                <p className="text-5xl font-extrabold text-blue-700 mt-4">$30</p>
              </CardContent>
              <CardDescription className='text-center'>
                A clean and fresh haircut, tailored to keep you looking sharp.
              </CardDescription>
              <CardFooter className='mt-5'>
                <Link href="/book">
                <Button size="lg" className="mt-6 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 font-semibold tracking-tighter">
                  Book Now
                </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Haircut + Beard Care Pricing Card */}
            <Card className='p-6 flex flex-col items-center'>
              <CardTitle className="text-2xl">Haircut + Beard Care</CardTitle>
              <CardContent>
                <p className="text-5xl font-extrabold text-blue-700 mt-4">$35</p>
              </CardContent>
              <CardDescription className='text-center'>
                A premium grooming experience with both haircut and beard care.
              </CardDescription>
              <CardFooter className='mt-5'>
                <Link href='/book'>
                <Button size="lg" className="mt-6 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 font-semibold tracking-tighter">
                  Book Now
                </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
