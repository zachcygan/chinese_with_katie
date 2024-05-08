import React from 'react'
import Link from 'next/link'

export default function ScheduleLessonButton() {
  return (
    <Link href="/services" className='fixed bottom-0 right-0 w-[17ch] bg-[#ea5050] rounded-lg p-2 m-2 font-semibold text-sm md:text-md lg:text-xl text-center text-white'>
      <button>
      Click here to schedule a lesson!
      </button> 
    </Link>
  )
}