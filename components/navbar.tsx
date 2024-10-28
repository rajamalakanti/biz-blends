"use client"
import React, { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full top-0 left-0 bg-white border-b z-50'>
      <div className='max-w-[1280px] flex justify-between mx-auto items-center p-6'>
        <h1 className='text-blue-700 text-2xl font-bold tracking-tighter'>BizBlends</h1>
        
        {/* Hamburger Icon for Mobile View */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Links for Desktop View */}
        <div className='hidden lg:flex flex-row items-center justify-evenly'>
          <Link href={'/'}>
            <Button className='mr-5' variant={'link'}>Home</Button>
          </Link>
          <Link href={'/pricing'}>
            <Button className='mr-5' variant={'link'}>Pricing</Button>
          </Link>
          <Link href={'/book'}>
            <Button>Book Now</Button>
          </Link>
        </div>
      </div>

      {/* Dropdown Menu for Mobile View */}
      {menuOpen && (
        <div className='lg:hidden flex flex-col items-center bg-white py-4'>
          <Link href={'/'} className='w-full text-center mb-2'>
            <Button variant={'link'} onClick={toggleMenu}>Home</Button>
          </Link>
          <Link href={'/book'} className='w-full text-center'>
            <Button onClick={toggleMenu}>Book Now</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;