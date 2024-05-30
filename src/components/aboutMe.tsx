'use client'
import { useEffect } from 'react'
import Image from 'next/image'

export default function AboutMe() {
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
      <div className='bg-pink-200'>
        <div className='mx-auto w-full px-1 text-blue-900 max-w-5xl'>
          <div className='inset-0 size-60 mt-10 relative float-start'>
            <Image
              src={'/assets/images/katie.webp'}
              fill
              alt='Katie'
              className='absolute aspect-square imageAnimation rounded-full'
            />
          </div>
          <div className='text-5xl text-center lg:text-left py-10'>
            About me
          </div>
          <div className='py-5 text-xl lg:text-xl'>
            <span className='text-xl font-semibold'>大家好!</span> It's Katie — your guide to learning Mandarin!
          </div>
          <div className='hiddenTransitionRight delayAnimation'>
            <div className='py-5 max-w-lg pb-10 mx-auto text-xl md:text-xl lg:text-lg hiddenTransitionRight'>
              Ever since I was a child, I have always been fascinated by learning foreign languages and cultures. With a new perspective gained after graduating college, I recognized a crucial demand for more engaging and effective approaches to learning Chinese. As a non-native speaker,  I've experienced the challenges of learning Chinese first hand, making me uniquely suited to understand the learning needs of English speakers. My passion lies in helping others and making education accessible. I'm excited to make your language learning journey a enriching and enjoyable experience!
            </div>
          </div>
        </div>
      </div>
      <div className='px-1 text-blue-900'>
        <div className='text-center py-10 text-5xl hiddenTransition'>
          Qualifications
        </div>
        {/* make same size */}
        <div className='flex flex-col lg:flex-row justify-around items-center pb-20 text-xl lg:text-2xl'>
          <div className='hiddenTransitionRight delayAnimation'>
            <div className='py-5 border text-center rounded-xl p-2 my-2 bg-pink-200'>
              Boise State BBA Graduate
            </div>
          </div>
          <div className='hiddenTransitionRight delayAnimation'>
            <div className='border text-center rounded-xl p-2 my-2 bg-pink-200'>
              <div>
                Mandarin Certificate + Chinese Speaking Award Winner
              </div>
            </div>
          </div>
          <div className='hiddenTransitionRight delayAnimation'>
            <div className='py-5 border text-center rounded-xl p-2 my-2 bg-pink-200'>
              3 Years Experience Tutor
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
