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
    <div className="flex flex-col group relative overflow-hidden text-left bg-cream border border-espresso/20 hover:border-espresso/45 transition-all duration-500 rounded-3xl shadow-[0_18px_40px_-28px_rgba(36,22,18,0.45)]">
      <div className="absolute top-0 inset-x-0 h-1.5 bg-espresso" aria-hidden />
      <div className="flex-grow grid gap-6 p-8 pt-9 relative z-10">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-3xl font-medium font-display text-espresso tracking-wide">{cut}</h3>
          <div className="text-xl font-light tracking-wider bg-espresso text-cream px-4 py-1.5 rounded-full shrink-0">
            {price}
          </div>
        </div>
        <p className="text-sm font-light leading-relaxed text-cocoa/75 min-h-[3rem]">{description}</p>

        <div className="grid gap-3 text-xs text-cocoa/65 mt-2 font-mono tracking-wider uppercase">
          <div className="w-8 h-px bg-espresso/35 mb-2"></div>
          <p className="leading-5 tracking-widest">{address}</p>
          <p className="leading-5 tracking-widest">{days}</p>
          {note && (
            <p className="leading-5 tracking-widest">{note}</p>
          )}
        </div>
      </div>
      <div className="p-8 pt-0 z-10">
        <Link href="/gcal">
          <Button
            variant="outline"
            className="w-full rounded-full border-espresso/40 bg-transparent text-espresso hover:bg-espresso hover:text-cream transition-all duration-300 uppercase tracking-[0.15em] text-[11px] py-6 h-auto"
          >
            Select Appointment
          </Button>
        </Link>
      </div>
    </div>
  );
}
