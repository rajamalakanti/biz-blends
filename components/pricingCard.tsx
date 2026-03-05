import { Button } from "@/components/ui/button";
import Link from "next/link";

type CardProps = {
  cut: string;
  price: string;
  address: string;
  days: string;
  description: string;
  note?: string;
};

export default function PricingCard({
  cut,
  price,
  address,
  days,
  description,
  note,
}: CardProps) {
  return (
    <div className="flex flex-col group relative overflow-hidden text-left bg-zinc-950/30 border border-white/5 hover:border-white/20 transition-all duration-500 rounded-none backdrop-blur-sm">
      <div className="flex-grow grid gap-6 p-8 relative z-10">
        <div className="flex justify-between items-start">
          <h3 className="text-3xl font-medium font-cormorant text-white tracking-wide">{cut}</h3>
          <div className="text-2xl font-light text-zinc-300 tracking-wider bg-white/5 px-4 py-1 border border-white/10 rounded-full">{price}</div>
        </div>
        <p className="text-sm font-light leading-relaxed text-zinc-400 min-h-[3rem]">{description}</p>

        <div className="grid gap-3 text-xs text-zinc-500 mt-2 font-mono tracking-wider uppercase">
          <div className="w-8 h-[1px] bg-white/10 mb-2"></div>
          <p className="flex items-start gap-3">
            <span className="text-zinc-700">L</span>
            <span className="leading-5 tracking-widest">{address}</span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-zinc-700">T</span>
            <span className="leading-5 tracking-widest">{days}</span>
          </p>
          {note && (
            <p className="flex items-start gap-3">
              <span className="text-zinc-700">I</span>
              <span className="leading-5 tracking-widest">{note}</span>
            </p>
          )}
        </div>
      </div>
      <div className="p-8 pt-0 z-10">
        <Link href="/gcal">
          <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none uppercase tracking-[0.15em] text-xs py-6 h-auto">
            Select Appointment
          </Button>
        </Link>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
    </div>
  );
}
