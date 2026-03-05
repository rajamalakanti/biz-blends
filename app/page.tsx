import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
      <section className="relative w-full max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-16">

        {/* Content Side */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-zinc-400 text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-6">
            Master Barber • Naperville, IL
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-cormorant font-medium leading-none mb-6 tracking-tight">
            Tim Medina
          </h1>
          <p className="text-zinc-300 max-w-md text-base md:text-lg leading-relaxed mb-10 font-light">
            More than just a haircut. Experience a refined grooming session tailored to your style. I take pride in making my clients feel at home while delivering precision and professionalism.
          </p>

          <Link href={'/book'}>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none uppercase tracking-[0.15em] text-xs md:text-sm px-10 py-6 h-auto backdrop-blur-sm">
              Book Appointment
            </Button>
          </Link>
        </div>

        {/* Image Side */}
        <div className="flex-1 w-full max-w-xs md:max-w-md relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
          <div className="aspect-[4/5] relative rounded-t-full rounded-b-md overflow-hidden border border-white/10 shadow-2xl group">
            <div className="absolute inset-0 bg-neutral-950/20 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
            <Image
              src="/barber-biz.jpeg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Tim Medina"
              className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -z-10 top-6 -right-6 w-full h-full border border-zinc-800 rounded-t-full rounded-b-md hidden md:block"></div>
          <div className="absolute -z-10 -bottom-6 -left-6 w-24 h-24 border-l border-b border-zinc-700 hidden md:block"></div>
        </div>
      </section>
    </div>
  )
}

export default Home