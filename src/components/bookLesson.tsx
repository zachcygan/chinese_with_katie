'use client'
import React from 'react'
import Lessons from '../components/lessons'

const oneHour = {
  duration: 'One Hour',
  price: '$50',
  image: '/assets/images/oneHourImage.webp'
}

const thirtyMinutes = {
  duration: 'Thirty Minutes',
  price: '$30',
  image: '/assets/images/thirtyMinutesImage.webp'
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
            <button className="border border-red-500 p-5 rounded-xl hover:scale-[1.05] active:scale[.95] transition">
              Free Consultation Call
            </button>
            <button className="border border-red-500 p-5 rounded-xl hover:scale-[1.05] transition">
              New Student Form
            </button>
          </div>
        </div>
      </div>
      <div>
        <Lessons duration={oneHour.duration} price={oneHour.price} image={oneHour.image} />
        <Lessons duration={thirtyMinutes.duration} price={thirtyMinutes.price} image={thirtyMinutes.image} />
      </div>
    </div>
  )
}