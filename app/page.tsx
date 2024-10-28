import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import NavBar from '@/components/navbar'

const Home = () => {
  return (
    <div>
      <NavBar />
      <section className="flex flex-col items-center w-screen h-[calc(100vh-90px)] justify-center">
        <div className="rounded-full border-4 border-blue-700 overflow-hidden w-48 h-48 mb-6">
          <Image src="/barber-biz.jpeg" width={400} height={400} alt="Profile" className="w-full h-full object-cover scale-155" />
        </div>

        <div className="text-center">
          <p className="text-blue-700 text-lg font-semibold mb-1">HEY THERE,</p>
          <h1 className="text-4xl font-bold mb-4">I&apos;m Tim Medina (Biz).</h1>
          <p className="text-gray-600 max-w-lg">
            I&apos;m a barber based out of Naperville, IL. A cut with me is more than just a change to your hair. I want everyone&apos;s experience to be enjoyable, so I take pride in making my clients feel at home. I am always looking for opportunities to perfect my craft and pursue my passion!
          </p>
        </div>

        <div className="flex flex-row items-center justify-center mx-auto mt-10 gap-4">
          <Link href={'/book'}>
            <Button size="lg" className="bg-blue-700 font-bold tracking-tighter">Book Now</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home