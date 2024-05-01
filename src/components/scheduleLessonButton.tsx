'use client'
import React from 'react'
import Link from 'next/link'

export default function ScheduleLessonButton() {
  return (
      <Link href="/services">
        <button className="bg-[#ea5050] rounded-lg p-2 m-2 font-semibold text-sm md:text-md lg:text-xl text-white w-3/5">
          Click here to schedule a lesson!
        </button>
      </Link>
  )
}