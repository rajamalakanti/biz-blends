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
    <header className='w-full top-0 left-0 sticky z-50 bg-cream/90 backdrop-blur-md border-b-2 border-espresso/20'>
      <div className='max-w-[1280px] mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-5'>
        <div className='justify-self-start'>
          <Link href={'/book'} className='hidden lg:inline-flex'>
            <Button
              variant="outline"
              className='rounded-full border-espresso/50 bg-espresso text-cream hover:bg-cocoa hover:text-cream transition-colors uppercase tracking-[0.18em] text-[11px] px-7 h-10'
            >
              Book
            </Button>
          </Link>
        </div>

        <Link href={'/'} className='justify-self-center text-center group'>
          <span className='block text-espresso text-3xl md:text-4xl font-display font-medium tracking-tight leading-none group-hover:opacity-80 transition-opacity'>
            Effect
          </span>
          <span className='block text-espresso/55 text-[10px] md:text-[11px] tracking-[0.28em] uppercase mt-1 font-light'>
            Hair Studio
          </span>
        </Link>

        <div className='justify-self-end flex items-center gap-4'>
          <Link href={'/'} className='hidden lg:block'>
            <span className='text-[11px] text-cocoa/70 hover:text-espresso transition-colors uppercase tracking-[0.2em]'>
              Home
            </span>
          </Link>
          <button
            type="button"
            className="lg:hidden text-espresso cursor-pointer p-1"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className='lg:hidden flex flex-col items-center bg-cream-deep/90 py-8 border-b border-espresso/10 gap-6'>
          <Link href={'/'} className='w-full text-center' onClick={toggleMenu}>
            <span className='text-[11px] text-cocoa hover:text-espresso transition-colors uppercase tracking-[0.2em]'>
              Home
            </span>
          </Link>
          <Link href={'/book'} className='w-full text-center' onClick={toggleMenu}>
            <Button
              variant="outline"
              className='rounded-full border-espresso/50 bg-espresso text-cream hover:bg-cocoa hover:text-cream transition-colors uppercase tracking-[0.18em] text-[11px] px-8 h-10'
            >
              Book Now
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
