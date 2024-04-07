'use client'
import Image from 'next/image'
import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Chinese with Kaite', href: '/'},
    { name: 'Book a Lesson', href: '/about' },
    { name: 'About', href: '/support' },
    { name: 'Policy', href: '/donate' },
  ],
}

export default function Footer() {
  return (
    <footer className="top-[100vh] bg-blue-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8 ">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href}>
                <div 
                  className="leading-6 text-white dark:text-dark text-3xl"
                >
                  {item.name}
                </div>
              </Link>
            </div>
          ))}
        </nav>
        <div className='text-center'>
          <p className="mt-10 text-center text-2xl leading-5 text-white">
            &copy; Chinese with Katie, Inc. All rights reserved.
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
    </footer>
  )
}