import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='w-full top-0 left-0 bg-white border-b z-50'>
      <div className='max-w-[1280px] flex flex-row justify-between mx-auto items-center p-6'>
        <h1 className='text-blue-700 text-2xl font-bold tracking-tighter'>BizBlends</h1>
        <div className='flex flex-row items-center justify-evenly'>
        <Link href={'/'}>
            <Button className='mr-5' variant={'link'}>Home</Button>
        </Link>
        <Link href={'/book'}>
          <Button>Book Now</Button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
