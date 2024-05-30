'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface LessonsProps {
  duration: string
  price: string
  image: string
  link: string
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

const itemVariants = {
  hidden: { opacity: 0, translateX: -50, filter: 'blur(10px)' },
  visible: { opacity: 1, translateX: 0, filter: 'blur(0px)', transition: { duration: 0.5 } },
};

export default function Lessons({ duration, price, image, link }: LessonsProps) {
  return (
    <div className='py-10'>
      <div className='flex justify-between flex-col items-center lg:flex-row'>
        <motion.div
          className='px-1'
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={image}
            width={500}
            height={500}
            alt="lesson image"
          />
        </motion.div>
        <motion.div
          className='text-center mx-auto'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className='text-5xl text-blue-950 font-semibold mt-10 lg:mt-0'
            variants={itemVariants}
          >
            {duration} Lesson
          </motion.div>
          <motion.div
            className='text-blue-900 text-xl'
            variants={itemVariants}
          >
            <div>
              Designed for Beginners / Intermediate
            </div>
            <div className='my-2 lg:py-5'>
              <div>
                Monday - Friday,
              </div>
              <div>
                5:30pm - 9pm MST
              </div>
            </div>
            <div className='py-2 text-3xl'>
              {price}
            </div>
            <Link href={link} target='_blank'>
              <motion.button
                className='p-3 mt-5 bg-red-600 text-white max-w-sm hover:scale-[1.05]'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Sign Up Now
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
