'use client'
import { Fragment, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Disclosure, Transition, Popover } from '@headlessui/react'
import Link from 'next/link'
import SlideOver from './slideOver'

type NavItemProps = {
  href: string
  children: React.ReactNode
}
type SVGProps = React.SVGAttributes<SVGSVGElement>;

const navigation = [
  { name: `Katie's Chinese Guide`, href: '/', current: true },
  { name: 'Book a Lesson', href: '/services', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Policy', href: '/policy', current: false },
  { name: 'Contact', href: '', current: false },
]

function MobileNavItem({ href, children }: NavItemProps) {
  return (
    <li>
      <Link href={href}>
        <Popover.Button as={Link} href={href} className="block py-2">
          {children}
        </Popover.Button>
      </Link>
    </li>
  )
}

function CloseIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [isSlideOpen, setIsSlideOpen] = useState(false)

  return (
    <div className={`border-b-4 m-2 mx-auto text-center lg:py-10`}>
      <div>
        {/* LINK FOR HOME PAGE/LOGO GOES HERE */}
      </div>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto px-2 sm:px-6 lg:px-8 -z-10">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center min-[900px]:hidden">
                  <Popover>
                    <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                      Menu
                      <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
                    </Popover.Button>
                    <Transition.Root>
                      <Transition.Child
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="duration-150 ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
                      </Transition.Child>
                      <Transition.Child
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-150 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Popover.Panel
                          focus
                          className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
                        >
                          <div className="flex flex-row-reverse items-center justify-between">
                            <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                              <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                            </Popover.Button>
                            <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                              Navigation
                            </h2>
                          </div>
                          <nav className="mt-6">
                            <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                              <MobileNavItem href="/">Homepage</MobileNavItem>
                              <MobileNavItem href="/services">Book a Lesson</MobileNavItem>
                              <MobileNavItem href="/about">About</MobileNavItem>
                              <MobileNavItem href="/policy">Policy</MobileNavItem>
                              <div onClick={(e) => {
                                e.preventDefault(); // prevent navigation
                                setIsSlideOpen(true);
                              }}>
                                <MobileNavItem href="#">Contact</MobileNavItem>
                              </div>
                            </ul>
                          </nav>
                        </Popover.Panel>
                      </Transition.Child>
                    </Transition.Root>
                  </Popover>
                </div>
                <div className="text-black flex flex-shrink-0 items-center justify-center">
                  <Link
                    key={'Zach Cygan\'s Portfolio'}
                    href={'/'}
                    className='flex items-center justify-center'
                  >
                    {/* <Image
                    src="/assets/images/headIcon.png"
                    alt="Website Head Icon"
                    width={50}
                    height={50}
                  /> */}
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="hidden sm:ml-6 sm:block text-center">
                    <div className="inline-flex ring-1 ring-zinc-900/5 backdrop-blur rounded-full items-center justify-center max-[900px]:hidden shadow-lg">
                      {navigation.map((item) => {
                        // const isActive = item.href === pathname;
                        const home = item.href === '/';
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`px-5 py-2 rounded-md relative no-underline transition-all ease-in-out hover:scale-[1.05] ${home ? 'text-red-600 font-bold text-2xl' : 'text-xl font-semibold'}`}
                            aria-current={item.href === pathname ? 'page' : undefined}
                            onClick={(e) => {
                              if (item.name === 'Contact') {
                                e.preventDefault(); // prevent navigation
                                setIsSlideOpen(true);
                              }
                            }}
                          >
                            <span className=''>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                    <SlideOver isOpen={isSlideOpen} onClose={() => setIsSlideOpen(false)} />
                  </div>
                </div>
                <div className='w-[50px]'>
                  {/* dummby div to move navbar to center */}
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
      <SlideOver isOpen={isSlideOpen} onClose={() => setIsSlideOpen(false)} />
    </div>
  )
}