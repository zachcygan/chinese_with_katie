import React from 'react'
import Link from 'next/link'

export default function ScheduleLessonButton() {
  return (
    <div className=''>
      <Link href="/services" className=''>
        <button className="bg-[#ea5050] rounded-lg p-2 m-2 font-semibold text-sm md:text-md lg:text-xl text-white" style={{ whiteSpace: 'pre-wrap' }}>
          Click here to schedule{'\n'}a lesson!
        </button>
      </Link>
    </div>
  )
}