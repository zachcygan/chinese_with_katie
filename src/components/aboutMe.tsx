'use client'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <div className='overflow-hidden'>
      <div className='bg-pink-200'>
        <div className='text-blue-900  text-5xl text-center py-10'>
          About Katie
        </div>
        <div className='inset-0 size-32 md:size-44 lg:size-52 relative float-start mx-5 my-1'>
          <Image
            src={'/assets/images/katie.webp'}
            fill
            alt='Katie'
            className='aspect-square rounded-full'
          />
        </div>
        <div className='text-blue-900'>
          <div className='text-xl lg:text-3xl'>
            <span className='text-xl font-semibold'>大家好!</span> It's Katie — your guide to learning Mandarin!
          </div>
          <div className='py-5 pb-10 mx-auto text-xl md:text-xl lg:text-2xl'>
            Ever since I was a child, I have always been fascinated by learning foreign languages and cultures. With a new perspective gained after graduating college, I recognized a crucial demand for more engaging and effective approaches to learning Chinese. As a non-native speaker,  I've experienced the challenges of learning Chinese first hand, making me uniquely suited to understand the learning needs of English speakers. My passion lies in helping others and making education accessible. I'm excited to make your language learning journey a enriching and enjoyable experience!
          </div>
        </div>
      </div>
      <div className='px-1 text-blue-900'>
        <div className='text-center py-10 text-5xl'>
          Qualifications
        </div>
        {/* make same size */}
        <div className='flex flex-col lg:flex-row justify-around items-center lg:pb-20 text-xl lg:text-2xl'>
          <div className=''>
            <div className='py-5 border text-center rounded-xl p-2 my-2 bg-pink-200'>
              Boise State BBA Graduate
            </div>
          </div>
          <div className=''>
            <div className='border text-center rounded-xl p-2 my-2 bg-pink-200'>
              <div>
                Mandarin Certificate + Chinese Speaking Award Winner
              </div>
            </div>
          </div>
          <div className=''>
            <div className='py-5 border text-center rounded-xl p-2 my-2 bg-pink-200'>
              3 Years Experience Tutor
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
