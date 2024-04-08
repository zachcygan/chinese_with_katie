'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Lessons from '../components/lessons'

const oneHour = {
  duration: 'One Hour',
  price: '$50',
  image: '/assets/images/oneHourImage.webp',
  link: 'https://tidycal.com/chinesewithkatie/60-minute-tutoring-session'
}

const thirtyMinutes = {
  duration: 'Thirty Minutes',
  price: '$30',
  image: '/assets/images/thirtyMinutesImage.webp',
  link: 'https://tidycal.com/chinesewithkatie/30-minute-tutoring-session'
}

export default function BookLesson() {
  return (
    <div>
      <div>
        <div className="text-5xl text-red-500 text-center p-10 font-bold">
          Book a Lesson Today!
        </div>
        <div className="text-center text-2xl p-10 text-blue-900">
          <div>
            <div className=" font-semibold underline">
              If you are new to my services<span>,</span>
            </div>
            <div className="">
              please ensure to sign up for a free consultation
            </div>
            <div className="">
              call OR fill out a new student form
            </div>
          </div>
          <div className="flex justify-around mx-40 pt-10">
            <Link href="https://tidycal.com/chinesewithkatie/15-minute-free-consultation-call" target='_blank'>
              <button className="border border-red-500 p-5 rounded-xl hover:scale-[1.05] active:scale[.95] transition">
                Free Consultation Call
              </button>
            </Link>
            <button className="border border-red-500 p-5 rounded-xl hover:scale-[1.05] transition">
              New Student Form
            </button>
          </div>
        </div>
      </div>
      <div>
        <Lessons duration={oneHour.duration} price={oneHour.price} image={oneHour.image} link={oneHour.link} />
        <Lessons duration={thirtyMinutes.duration} price={thirtyMinutes.price} image={thirtyMinutes.image} link={thirtyMinutes.link} />
      </div>
      <div>
        <div className='diagonal-split-background'>
          <div className='max-w-3xl mx-auto text-center text-2xl text-blue-900 py-20'>
            Availability is displayed on my calendar when booking a lesson. I suggest booking in advance to reserve your desired time slot
          </div>
        </div>
        <div className='flex bg-[#dedede]'>
          <div>
            <Image
              src='/assets/images/confetti.webp'
              width={500}
              height={500}
              alt=''
              className='h-full'
            />
          </div>
          <div className='p-10 '>
            <div className='text-blue-900 text-3xl'>
              Bundle and Save!
            </div>
            <div className='text-5xl text-red-600'>
              New Student Sale
            </div>
            <div className='text-blue-900'>
              <div className='text-3xl pt-14 font-semibold'>
                Book a total of 4 lessons as a bundle recieve 25%
              </div>
              <div className='pt-14 text-xl'>
                To receive this deal, please specify that you are interetsed in this sale during our conversation call or in the "New Student Form"
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}