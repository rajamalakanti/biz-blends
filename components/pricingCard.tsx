import { Button } from "@/components/ui/button"
import Link from "next/link";
import { JSX, SVGProps } from "react"

type CardProps = {
    cut: string,
    price: string,
    address: string,
    days: string,
    description: string
};

export default function PricingCard({cut, price, address, days, description }: CardProps) {
  return (
      <div className="flex flex-col rounded-lg border border-gray-200">
        <div className="grid gap-4 p-6">
          <h3 className="text-2xl font-bold">{cut}</h3>
          <p className="text-sm leading-6 text-gray-500">{description}</p>
          <div className="text-4xl font-semibold text-blue-700">{price}</div>
          <div className="grid gap-2 text-sm">
            <p className="flex items-center gap-2">
              <CircleCheckIcon className="w-4 h-4" />
              {address}
            </p>
            <p className="flex items-center gap-2">
              <CircleCheckIcon className="w-4 h-4" />
              {days}
            </p>
          </div>
        </div>
        <div className="p-4 border-t grid gap-2">
          <Link href='/gcal'>
          <Button className="bg-blue-700 w-full">Book Now</Button>
          </Link>
        </div>
      </div>
  )
}

function CircleCheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}