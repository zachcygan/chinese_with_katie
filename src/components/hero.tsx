'use client'
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const scrollToGettingStarted = () => {
    document.getElementById('gettingStarted')?.scrollIntoView({ behavior: 'smooth' });
  };
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('show')
  //       }
  //     })
  //   });
  //   const hiddenElements = document.querySelectorAll('.hiddenTransition');
  //   hiddenElements.forEach((element) => {
  //     observer.observe(element);
  //   });

  //   // Cleanup observer on component unmount
  //   return () => {
  //     hiddenElements.forEach((element) => {
  //       observer.unobserve(element);
  //     });
  //   };
  // }, []);

  return (
    <div className="border-2 border-red-700 p-2 bg-red-600 relative overflow-x-clip">
      <motion.div
        className="rotate-[-9deg] absolute size-40 sm:size-44 md:size-48 z-5 -top-10 right-0"
        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
      >
        <Image
          src='/assets/images/globe.webp'
          fill
          alt='Globe with Chinese flag'
          className="rotate-[-10deg] overflow-y-hidden"
        />
      </motion.div>
      <motion.div
        className="text-white font-bold"
        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
      >
        <div className="pt-20 pb-10">
          <div className="text-center text-5xl lg:text-8xl text-wrap mt-10">
            Raise Your Child's Grade Today!
          </div>
        </div>
        <div className="text-center text-xl lg:text-4xl 2xl:text-3xl pb-10">
          Personalized tutoring can make all the difference
        </div>
      </motion.div>
      <motion.div
        className="absolute size-36 sm:size-44 md:size-60 -bottom-8 md:-bottom-12 -left-4"
        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
      >
        <Image
          src='/assets/images/fan.webp'
          fill
          alt='Fan'
          className="absolute"
        />
      </motion.div>
      <motion.div
        className="absolute right-0 w-48 sm:w-72 md:w-96 aspect-video -bottom-6 md:-bottom-12 lg:-bottom-12"
        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
      >
        <Image
          src='/assets/images/dragon.png'
          fill
          alt='Dragon'
          className="rotate-[-20deg]"
        />
      </motion.div>
      <motion.div
        className="text-center text-white pb-20"
        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
      >
        <button
          type="button"
          className="rounded-full bg-blue-800 p-5 text-md lg:text-lg xl:text-2xl"
          onClick={scrollToGettingStarted}
        >
          Book a Lesson Now!
        </button>
      </motion.div>
    </div>
  )
}