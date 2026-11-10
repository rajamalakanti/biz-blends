'use client';

export default function BarberAnnouncement() {
  return (
    <div className="w-full bg-espresso text-cream/85 text-center py-2.5 px-4">
      <p className="text-[11px] md:text-xs font-medium tracking-[0.12em] uppercase">
        <span className="text-clay-soft mr-2">New Location</span>
        Full-time Monday–Saturday at{' '}
        <strong className="text-cream font-semibold">Beauty Concepts</strong>
        {' '}— 4012 Fox Valley Center Dr.
      </p>
    </div>
  );
}
