'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SlideOver from './slideOver'

const navigation = [
  { name: `Katie's Chinese Guide`, href: '/' },
  { name: 'Book a Lesson', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Policy', href: '/policy' },
  { name: 'Contact', href: '#' },
]

export default function Footer() {
  const [isSlideOpen, setIsSlideOpen] = useState<boolean>(false)

  return (
    <footer className="bg-blue-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 lg:py-20 sm:py-24 lg:px-8 ">
        <nav className="-mb-6 grid grid-col-2 sm:grid-cols-5 sm:space-x-12 sm:items-center" aria-label="Footer">
          {navigation.map((item) => (
            <div key={item.name} className={`pb-6 ${item.name === `Katie's Chinese Guide` ? 'col-span-2 sm:col-span-1' : 'col-span-1' }`}>
              <Link href={item.href}>
                <div
                  className={`leading-6  text-center text-xl ${item.name === `Katie's Chinese Guide` ? 'text-red-500' : 'text-white'}`}
                  onClick={(e) => {
                    if (item.name === 'Contact') {
                      e.preventDefault();
                      setIsSlideOpen(true);
                    }
                  }}
                >
                  {item.name}
                </div>
              </Link>
            </div>
          ))}
        </nav>
        <nav className='lg:hidden'>
          <div>

          </div>
        </nav>
        <div className='text-center'>
          <p className="mt-10 text-center text-2xl leading-5 text-white">
            &copy; Katie's Chinese Guide, Inc. All rights reserved.
          </p>
          <div className='mt-5 text-xl text-white'>
            Private Chinese Tutor
          </div>
        </div>
        <Image
          src={'/assets/images/dragon.png'}
          alt='Chinese Dragon'
          width={300}
          height={300}
          className='mx-auto'
        />
      </div>
      <SlideOver isOpen={isSlideOpen} onClose={() => setIsSlideOpen(false)} />
    </footer>
  )
}