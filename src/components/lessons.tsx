'use client'
import React from 'react'
import Image from 'next/image'

interface LessonsProps {
  duration: string
  price: string
  image: string
}

export default function Lessons({ duration, price, image }: LessonsProps) {
  return (
    <div className='py-10'>
      <div className='flex justify-between'>
        <div >
          <Image
            src={image}
            width={500}
            height={500}
            alt="lesson image"
          />
        </div>
          <div className='text-center mx-auto'>
            <div className='text-5xl text-blue-950 font-semibold'>
              {duration} Lesson
            </div>
            <div className='text-blue-900 text-xl'>
              <div>
                Designed for Beginners / Intermediate
              </div>
              <div className='pt-5'>
                Monday - Friday,
              </div>
              <div>
                5:30pm - 9pm MST
              </div>
              <div className='py-2 text-3xl'>
                {price}
              </div>
              <button className='p-3 mt-5 bg-red-600 text-white max-w-sm hover:scale-[1.05] transition'>
                Sign Up Now
              </button>
            </div>
          </div>
      </div>
    </div >
  )
}