'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Chinese with Katie', href: '/', current: true},
  { name: 'Book a Lesson', href: '/services', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Policy', href: '/policy', current: false },
]

type NavItemProps = {
  href: string
  children: React.ReactNode
}

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className={`border-b-4 m-2 mx-auto text-center py-10`}>
      <div>
        {/* LINK FOR HOME PAGE/LOGO GOES HERE */}
      </div>
      <div className='flex justify-between'>
        {navigation.map((item) => {
          // const isActive = item.href === pathname;
          const home = item.href === 'Chinese with Katie';
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`px-5 py-2 rounded-md text-lg lg:text-2xl relative no-underline transition-all delay-150 hover:delay-0 ease-in-out ${home ? 'text-red-800' : ''}`}
              aria-current={item.href === pathname ? 'page' : undefined}
            >
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  )
}