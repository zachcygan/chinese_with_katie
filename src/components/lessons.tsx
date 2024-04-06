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
    <div>
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
          <div>{duration}</div>
          <div>{price}</div>
        </div>
      </div>
    </div>
  )
}