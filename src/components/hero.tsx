'use client'
import Image from "next/image";

export default function Hero() {
  const scrollToGettingStarted = () => {
    document.getElementById('gettingStarted')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div className="border-2 border-red-700 p-2 bg-red-600">
        <div className="flex justify-end rotate-[-9deg]">
          <Image
            src='/assets/images/globe.webp'
            width={180}
            height={180}
            alt='Globe with Chinese flag'
            className="absolute rotate-[-10deg]"
          />
        </div>
        <div className="text-white font-bold">
          <div className="pt-20 pb-10">
            <div className="text-center sm:text-3xl lg:text-4xl 2xl:text-7xl text-wrap">
              Are you New to
            </div>
            <div className="text-center sm:text-3xl lg:text-4xl 2xl:text-7xl">
              Learning Mandarin?
            </div>
          </div>
          <div className="text-center sm:text-2xl lg:text-4xl 2xl:text-3xl pb-10">
            Elevate your skills FAST with personalized tutoring
          </div>
        </div>
        <div className="flex justify-start items-start">
          <Image
            src='/assets/images/fan.webp'
            width={200}
            height={200}
            alt='Fan'
            className="absolute"
          />
        </div>
        <div className="flex justify-end items-start">
          <Image
            src='/assets/images/dragon.png'
            width={350}
            height={350}
            alt='Dragon'
            className="absolute rotate-[-20deg]"
          />
        </div>
        <div className="text-center text-white pb-20">
          <button
            type="button"
            className="rounded-full bg-blue-800 p-5 sm:text-xs lg:text-lg xl:text-xl"
            onClick={scrollToGettingStarted}
          >
            Get Started Today
          </button>
        </div>
      </div>
  )
}