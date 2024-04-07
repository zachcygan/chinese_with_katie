'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import SlideOver from './slideOver'

const navigation = [
  { name: 'Chinese with Katie', href: '/', current: true},
  { name: 'Book a Lesson', href: '/services', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Policy', href: '/policy', current: false },
  { name: 'Contact', href: '', current: false },
]

type NavItemProps = {
  href: string
  children: React.ReactNode
}

export default function Navbar() {
  const pathname = usePathname()
  const [isSlideOpen, setIsSlideOpen] = useState(false)

  return (
    <div className={`border-b-4 m-2 mx-auto text-center py-10 mb-14`}>
      <div>
        {/* LINK FOR HOME PAGE/LOGO GOES HERE */}
      </div>
      <div className='flex justify-between'>
        {navigation.map((item) => {
          // const isActive = item.href === pathname;
          const home = item.href === '/';
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`px-5 py-2 rounded-md relative no-underline transition-all delay-150 hover:delay-0 ease-in-out ${home ? 'text-red-600 font-bold text-2xl' : 'text-xl font-semibold'}`}
              aria-current={item.href === pathname ? 'page' : undefined}
              onClick={(e) => {
                if (item.name === 'Contact') {
                  e.preventDefault(); // prevent navigation
                  setIsSlideOpen(true);
                }
              }}
            >
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
      <SlideOver isOpen={isSlideOpen} onClose={() => setIsSlideOpen(false)} />
    </div>
  )
}