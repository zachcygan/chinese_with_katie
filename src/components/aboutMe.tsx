'use client'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <div>
      <div className='flex border justify-items-center bg-pink-200'>
        <div className='w-full relative'>
          <div className='abosolute inset-0'>
            <Image
              src={'/assets/images/katie.webp'}
              fill={true}
              alt='Katie'
              className='w-full'
            />
          </div>
        </div>
        <div className='mx-auto w-full px-10'>
          <div className='text-5xl py-10'>
            About me
          </div>
          <div className='py-5'>
            大家好! It's Katie — your guide to learning Mandarin!
          </div>
          <div className='py-5 max-w-lg pb-24'>
            Ever since I was a child, I have always been fascinated by learning foreign languages and cultures. With a new perspective gained after graduating college, I recognized a crucial demand for more engaging and effective approaches to learning Chinese. As a non-native speaker,  I've experienced the challenges of learning Chinese first hand, making me uniquely suited to understand the learning needs of English speakers. My passion lies in helping others and making education accessible. I'm excited to make your language learning journey a enriching and enjoyable experience!
          </div>
        </div>
      </div>
      <div className=''>
        <div className='text-center py-10 text-5xl'>
          Qualifications
        </div>
        <div className='flex justify-around items-center pb-20'>
          <div className='py-10 border rounded-xl p-2 bg-pink-200 text-2xl'>
            Boise State BBA Graduate
          </div>
          <div className='py-10 text-center border rounded-xl p-2 bg-pink-200 text-2xl'>
            <div>
              Mandarin Certificate +
            </div>
            <div>
              Chinese Speaking Award Winner
            </div>
          </div>
          <div className='py-10 border rounded-xl p-2 bg-pink-200 text-2xl'>
            3 Years Experience Tutor
          </div>
        </div>
      </div>
    </div>
  )
}