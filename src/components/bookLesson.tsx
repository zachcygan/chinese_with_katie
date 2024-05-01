'use client'
import React from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Lessons from '../components/lessons'
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

export default function BookLesson() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hiddenTransition');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    const transitionInElements = document.querySelectorAll('.transitionIn');
    transitionInElements.forEach((element) => {
      observer.observe(element);
    });

    const hiddenElementsRight = document.querySelectorAll('.hiddenTransitionRight'); // Use separate variable for hiddenTransitionRight
    hiddenElementsRight.forEach((element) => {
      observer.observe(element);
    });

    const hiddenElementsLeft = document.querySelectorAll('.hiddenTransitionLeft'); // Use separate variable for hiddenTransitionLeft
    hiddenElementsLeft.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
      transitionInElements.forEach((element) => {
        observer.unobserve(element);
      });
      hiddenElementsRight.forEach((element) => {
        observer.unobserve(element);
      });
      hiddenElementsLeft.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div>
      <div>
        <div className="text-3xl lg:text-5xl text-red-500 text-center my-10 lg:p-10 font-bold transitionIn">
          Book a Lesson Today!
        </div>
        <div className='flex justify-center items-center mb-3 lg:mb-10'>
          <div className='scale-105 lg:scale-[1.75] hiddenTransitionLeft'>
            <VectorRight />
          </div>
          <div className="text-center text-3xl lg:text-4xl lg:max-w-xl text-blue-900 transitionIn">
            <span className='underline font-semibold'>If you are new to my services</span>, please ensure to sign up for a free consultation
          </div>
          <div className='scale-1050 lg:scale-[1.75] hiddenTransitionRight'>
            <VectorLeft />
          </div>
        </div>
        {/* make buttons same size */}
        <div className="flex flex-col lg:flex-row items-center justify-around max-w-2xl mx-auto lg:py-10">
          <Link href="https://tidycal.com/chinesewithkatie/15-minute-free-consultation-call" target='_blank'>
            <button className="text-2xl text-white lg:text-3xl bg-red-600 p-5 my-2 rounded-xl hover:scale-[1.05] active:scale[.95] transition px-1 transitionIn">
              Free Consultation Call
            </button>
          </Link>
          <button className="text-2xl lg:text-3xl text-white bg-red-600 p-5 rounded-xl hover:scale-[1.05] transition px-1 transitionIn">
            New Student Form
          </button>
        </div>
      </div>
      <div>
        <Lessons duration={oneHour.duration} price={oneHour.price} image={oneHour.image} link={oneHour.link} />
        <Lessons duration={thirtyMinutes.duration} price={thirtyMinutes.price} image={thirtyMinutes.image} link={thirtyMinutes.link} />
      </div>
      <div className='relative overflow-visible'>
        <div className='bg-[#d2d2d2] diagonal-split-background p- w-xl'>
          <div className='max-w-lg mx-auto text-center text-2xl lg:text-4xl text-blue-900 my-5 lg:my-20 px-2 transitionIn'>
            Availability is displayed on my calendar when booking a lesson. I suggest booking in advance to reserve your desired time slot
          </div>
          <div className='relative my-10 lg:my-0'>
            <Image
              src='/assets/images/confetti.webp'
              fill
              alt='Confetti'
              className='absolute z-1'
            />
            <div className='p-10'>
              <div className='hiddenTransitionRight delayAnimation'>
                <div className='text-blue-900 text-2xl lg:text-3xl font-semibold'>
                  Bundle and Save!
                </div>
              </div>
              <div className='hiddenTransitionRight delayAnimation'>
                <div className='text-3xl lg:text-5xl text-red-600'>
                  New Student Sale
                </div>
              </div>
                <div className='hiddenTransitionRight delayAnimation'>
                  <div className='text-xl lg:text-3xl text-blue-900 mt-6 font-semibold'>
                    Book a total of 4 lessons as a bundle receive 25% off!
                  </div>
                </div>
                <div className='hiddenTransitionRight delayAnimation'>
                  <div className='mt-2 lg:mt-14 text-xl lg:text-3xl text-blue-900'>
                    To receive this deal, please specify that you are interested in this sale during our conversation call or in the "New Student Form"
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}