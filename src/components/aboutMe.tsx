'use client'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <div>
      <div className='flex flex-col md:flex-row border justify-items-center bg-pink-200'>
        <div className='relative w-full'>
          <div className='inset-0 size-80'>
            <Image
              src={'/assets/images/katie.webp'}
              fill
              alt='Katie'
              className='absolute aspect-square'
            />
          </div>
        </div>
        <div className='max-w-xl mx-auto w-full px-10 text-blue-900'>
          <div className='text-5xl py-10'>
            About me
          </div>
          <div className='py-5 '>
            <span className='text-2xl font-semibold'>大家好!</span> It's Katie — your guide to learning Mandarin!
          </div>
          <div className='py-5 max-w-lg pb-24 mx-auto'>
            Ever since I was a child, I have always been fascinated by learning foreign languages and cultures. With a new perspective gained after graduating college, I recognized a crucial demand for more engaging and effective approaches to learning Chinese. As a non-native speaker,  I've experienced the challenges of learning Chinese first hand, making me uniquely suited to understand the learning needs of English speakers. My passion lies in helping others and making education accessible. I'm excited to make your language learning journey a enriching and enjoyable experience!
          </div>
        </div>
      </div>
      <div className='px-1 text-blue-900'>
        <div className='text-center py-10 text-5xl'>
          Qualifications
        </div>
        <div className='flex flex-col lg:flex-row justify-around items-center pb-20'>
          <div className='py-10 border text-center rounded-xl p-2 my-2 bg-pink-200 text-2xl'>
            Boise State BBA Graduate
          </div>
          <div className='py-10 text-center border rounded-xl p-2 my-2 bg-pink-200 text-2xl'>
            <div>
              Mandarin Certificate + Chinese Speaking Award Winner
            </div>
          </div>
          <div className='py-10 border rounded-xl text-center p-2 my-2 bg-pink-200 text-2xl'>
            3 Years Experience Tutor
          </div>
        </div>
      </div>
    </div>
  )
}
