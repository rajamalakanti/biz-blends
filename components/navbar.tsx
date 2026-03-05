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
    <div className='w-full top-0 left-0 bg-black/80 backdrop-blur-md border-b border-white/10 z-50 sticky'>
      <div className='max-w-[1280px] flex justify-between mx-auto items-center p-6'>
        <h1 className='text-white text-2xl font-cormorant font-medium'>Effect Hair Studio.</h1>

        {/* Hamburger Icon for Mobile View */}
        <div className="lg:hidden text-white cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Links for Desktop View */}
        <div className='hidden lg:flex flex-row items-center justify-evenly gap-8'>
          <Link href={'/'}>
            <span className='text-sm text-zinc-400 hover:text-white transition-colors uppercase tracking-widest'>Home</span>
          </Link>
          <Link href={'/book'}>
            <Button variant="outline" className='border-white/20 text-white hover:bg-white hover:text-black transition-colors rounded-none uppercase tracking-widest text-xs px-8'>Book Now</Button>
          </Link>
        </div>
      </div>

      {/* Dropdown Menu for Mobile View */}
      {menuOpen && (
        <div className='lg:hidden flex flex-col items-center bg-zinc-950 py-8 border-b border-white/10 gap-6'>
          <Link href={'/'} className='w-full text-center' onClick={toggleMenu}>
            <span className='text-sm text-zinc-400 hover:text-white transition-colors uppercase tracking-widest'>Home</span>
          </Link>
          <Link href={'/book'} className='w-full text-center' onClick={toggleMenu}>
            <Button variant="outline" className='border-white/20 text-white hover:bg-white hover:text-black transition-colors rounded-none uppercase tracking-widest text-xs px-8'>Book Now</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;