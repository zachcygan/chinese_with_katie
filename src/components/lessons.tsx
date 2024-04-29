'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface LessonsProps {
  duration: string
  price: string
  image: string
  link: string
}

export default function Lessons({ duration, price, image, link }: LessonsProps) {
  return (
    <div className='py-10'>
      <div className='flex justify-between flex-col items-center lg:flex-row'>
        <div className='px-1'>
          <Image
            src={image}
            width={500}
            height={500}
            alt="lesson image"
            className='imageAnimation'
          />
        </div>
          <div className='text-center mx-auto'>
            <div className='text-5xl text-blue-950 font-semibold mt-10 lg:mt-0 transitionIn'>
              {duration} Lesson
            </div>
            <div className='text-blue-900 text-xl'>
              <div className='transitionIn'>
                Designed for Beginners / Intermediate
              </div>
              <div className='my-2 lg:py-5 transitionIn'>
                <div className=''>
                  Monday - Friday,
                </div>
                <div className='transitionIn'>
                  5:30pm - 9pm MST
                </div>
              </div>
              <div className='py-2 text-3xl transitionIn'>
                {price}
              </div>
              <Link href={link} target='_black'>
                <button className='p-3 mt-5 bg-red-600 text-white max-w-sm hover:scale-[1.05] transition transitionIn'>
                  Sign Up Now
                </button>
              </Link>
            </div>
          </div>
      </div>
    </div >
  )
}