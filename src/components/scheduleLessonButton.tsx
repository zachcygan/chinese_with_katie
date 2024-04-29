'use client'
import React from 'react'
import Link from 'next/link'

export default function ScheduleLessonButton() {
  return (
    <div className="">
      <Link href="/">
        <button className="rounded-lg bg-red-600 p-2 m-2 font-semibold text-sm md:text-md lg:text-lg text-white">
          Schedule a Lesson
        </button>
      </Link>
    </div>
  )
}