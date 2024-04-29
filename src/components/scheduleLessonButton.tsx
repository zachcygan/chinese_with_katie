'use client'
import React from 'react'
import Link from 'next/link'

export default function ScheduleLessonButton() {
  return (
    <div className="fixed right-0 bottom-0 z-20">
      <Link href="/">
        <button className="rounded-lg bg-red-600 p-2 m-2 font-semibold text-sm md:text-md lg:text-lg">
          Schedule a Lesson
        </button>
      </Link>
    </div>
  )
}