'use client';

export default function BarberAnnouncement() {
  return (
    <div className="w-full bg-zinc-900 text-zinc-300 text-center py-3 px-4 border-b border-white/10 shadow-sm">
      <p className="text-xs md:text-sm font-medium tracking-[0.1em] uppercase">
        <span className="text-white mr-2">New Location</span> I&apos;m now full-time Monday–Saturday
        at <strong className="text-white font-semibold">Beauty Concepts</strong> — 4012 Fox Valley Center Dr.
      </p>
    </div>
  );
}
