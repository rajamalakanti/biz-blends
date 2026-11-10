import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] overflow-hidden">
      <section className="relative w-full max-w-6xl mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-28 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">

        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10 animate-fade-rise">
          <h1 className="text-7xl md:text-8xl lg:text-[9.5rem] font-display font-medium leading-[0.85] tracking-tight text-espresso mb-5">
            Effect
          </h1>

          <p className="text-espresso/70 font-display text-xl md:text-2xl font-light tracking-wide mb-3">
            Tim Medina
          </p>

          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <span className="hidden md:block w-8 h-px bg-espresso/40" aria-hidden />
            <p className="text-espresso/50 text-[11px] md:text-xs tracking-[0.22em] uppercase">
              Master Barber · Naperville, IL
            </p>
          </div>

          <p className="text-cocoa/80 max-w-md text-base md:text-lg leading-relaxed mb-10 font-light">
            More than a haircut — a refined grooming session tailored to your style, with precision and care.
          </p>

          <Link href={'/book'}>
            <Button
              size="lg"
              className="rounded-full bg-espresso text-cream hover:bg-cocoa transition-all duration-300 uppercase tracking-[0.18em] text-[11px] md:text-xs px-10 py-6 h-auto shadow-[0_16px_32px_-16px_rgba(36,22,18,0.65)]"
            >
              Book Appointment
            </Button>
          </Link>
        </div>

        <div className="flex-1 w-full max-w-sm md:max-w-md relative animate-draw-in [animation-delay:180ms]">
          <div
            className="absolute -inset-6 md:-inset-10 organic-blob bg-espresso -z-10 animate-float-soft"
            aria-hidden
          />
          <div
            className="absolute -inset-2 md:-inset-4 organic-blob-alt border border-cream/20 -z-0 pointer-events-none"
            aria-hidden
          />

          <div className="relative aspect-[4/5] organic-blob overflow-hidden shadow-[0_30px_60px_-20px_rgba(36,22,18,0.45)]">
            <Image
              src="/barber-biz.jpeg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Tim Medina at Effect Hair Studio"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/35 via-transparent to-espresso/10" />
          </div>

          <p className="mt-6 text-center font-display text-sm text-cocoa/60 tracking-wide">
            Made by Effect
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
