'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Lessons from './lessons'
import VectorLeft from './vectorLeft'
import VectorRight from './vectorRight'

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const leftToRightVariants = {
  hidden: { opacity: 0, translateX: -50, filter: 'blur(2px)' },
  visible: { opacity: 1, translateX: 0, filter: 'blur(0px)', transition: { duration: 0.6 } },
};

export default function BookLesson() {
  return (
    <div className='relative overflow-hidden'>
      <div className='w-full'>
        <motion.div
          className="text-3xl lg:text-5xl text-red-500 text-center my-10 lg:p-10 font-bold"
          initial={{ opacity: 0, scale: 0.75, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: .5 }}
        >
          Book a Lesson Today!
        </motion.div>
        <div className='flex justify-center items-center mb-3 lg:mb-10'>
          <motion.div
            className='lg:scale-[1.75]'
            initial={{ translateX: -50 }}
            whileInView={{ translateX: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
          >
            <VectorRight />
          </motion.div>
          <motion.div
            className="text-center text-3xl lg:text-4xl lg:max-w-xl text-blue-900"
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
          >
            <span className='underline font-semibold'>If you are new to my services</span>, please ensure to sign up for a free consultation
          </motion.div>
          <motion.div
            className='lg:scale-[1.75]'
            initial={{ translateX: 50 }}
            whileInView={{ translateX: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
          >
            <VectorLeft />
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-around max-w-2xl mx-auto lg:py-10"
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
        >
          <Link href="https://tidycal.com/chinesewithkatie/15-minute-free-consultation-call" target='_blank'>
            <button className="text-2xl text-white lg:text-3xl bg-red-600 p-5 my-2 rounded-xl hover:scale-[1.05] active:scale[.95] transition px-1">
              Free Consultation Call
            </button>
          </Link>
          <Link href=''>
            <button className="text-2xl lg:text-3xl text-white bg-red-600 p-5 rounded-xl hover:scale-[1.05] transition px-1">
              New Student Form
            </button>
          </Link>
        </motion.div>
      </div>
      <div>
        <Lessons duration={oneHour.duration} price={oneHour.price} image={oneHour.image} link={oneHour.link} />
        <Lessons duration={thirtyMinutes.duration} price={thirtyMinutes.price} image={thirtyMinutes.image} link={thirtyMinutes.link} />
      </div>
      <div className='relative -m-22 bg-[#d2d2d2] diagonal-split-background left-0 top-0'>
        <div className='lg:w-xl'>
          <motion.div
            className='max-w-lg mx-auto text-center text-2xl lg:text-4xl text-blue-900 my-5 lg:my-20 px-2'
            initial='hidden'
            whileInView='visible'
            variants={leftToRightVariants}
            viewport={{ once: true }}
          >
            Availability is displayed on my calendar when booking a lesson. I suggest booking in advance to reserve your desired time slot
          </motion.div>
          <div className='mt-10 lg:my-0'>
            <div className='absolute left-0 top-0 w-screen h-full'>
              <Image
                src='/assets/images/confetti.webp'
                fill
                alt='Confetti'
                className='z-1'
              />
            </div>
            <motion.div
              className='p-10'
              initial='hidden'
              whileInView='visible'
              variants={containerVariants}
              viewport={{ once: true }}
            >
              <motion.div
                className='text-blue-900 text-2xl lg:text-3xl font-semibold'
                variants={leftToRightVariants}
                viewport={{ once: true }}
              >
                Bundle and Save!
              </motion.div>
              <motion.div
                className='text-3xl lg:text-5xl text-red-600'
                variants={leftToRightVariants}
                viewport={{ once: true }}
              >
                New Student Sale
              </motion.div>
              <motion.div
                className='text-xl lg:text-3xl text-blue-900 mt-6 font-semibold'
                variants={leftToRightVariants}
                viewport={{ once: true }}
              >
                Book a total of 4 lessons as a bundle receive 25% off!
              </motion.div>
              <motion.div
                className='mt-2 lg:mt-14 text-xl lg:text-3xl text-blue-900'
                variants={leftToRightVariants}
                viewport={{ once: true }}
              >
                To receive this deal, please specify that you are interested in this sale during our conversation call or in the "New Student Form"
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}