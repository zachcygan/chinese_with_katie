'use client'
import { useEffect } from "react";
import { motion, stagger } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import DottedLine from "./dottedLine";
import VectorRight from "./vectorRight";
import VectorLeft from "./vectorLeft";

const intro = [
  {
    text: 'Correct Pronunciation',
  },
  {
    text: 'Conversational Skills',
  },
  {
    text: 'Grammar',
  },
  {
    text: 'Reading Skills',
  }
]

const sideBySide = [
  {
    title: 'Structured Lesson Plans',
    text: 'In my lessons, students can expect to learn with a lesson plan suited for their language level. We\'ll additionally use workbooks and flashcards. Each student will have access to the lesson plan and notes used in our sessions and parents will receive personalized progress reports',
    image: '/assets/images/info1.png',
  },
  {
    title: 'Flexability',
    text: 'Being an online tutor makes it easy for me to be accommodating of your schedule! My hours for tutoring are  from Monday to Friday, 5:30pm -9pm MST .',
    image: '/assets/images/info2.png',
    astericks: '*Ensure to check availability and reserve your spot.'
  },
  {
    title: 'Homework Help',
    text: 'Need help on your homework? Feel free to send this to me before our lesson! We\'ll work through your problems and learn what areas to focus on.',
    image: '/assets/images/info3.png',
  },
  {
    title: 'Student Feedback',
    text: 'It\'s always important to view your child\'s progress. After each lesson,  parents will receive personalized progress reports, identifying areas for improvement and displaying achievements.',
    image: '/assets/images/info4.png',
  }
]

const expectations = [
  {
    text: 'Supplemental Material',
    image: '/assets/images/book.png',
  },
  {
    text: 'Online Whiteboard',
    image: '/assets/images/whiteboard.png',
  },
  {
    text: 'Conversation Practice',
    image: '/assets/images/conversation.png',
  }
]

const introVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: .6,
      staggerChildren: .2
    }
  }
}

export default function Info() {
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('show');
  //       }
  //     });
  //   });

  //   const hiddenElements = document.querySelectorAll('.hiddenTransition');
  //   hiddenElements.forEach((element) => {
  //     observer.observe(element);
  //   });

  //   const hiddenElementsRight = document.querySelectorAll('.hiddenTransitionRight'); // Use separate variable for hiddenTransitionRight
  //   hiddenElementsRight.forEach((element) => {
  //     observer.observe(element);
  //   });

  //   const hiddenElementsLeft = document.querySelectorAll('.hiddenTransitionLeft'); // Use separate variable for hiddenTransitionLeft
  //   hiddenElementsLeft.forEach((element) => {
  //     observer.observe(element);
  //   });

  //   // Cleanup observer on component unmount
  //   return () => {
  //     hiddenElements.forEach((element) => {
  //       observer.unobserve(element);
  //     });
  //     hiddenElementsRight.forEach((element) => {
  //       observer.unobserve(element);
  //     });
  //     hiddenElementsLeft.forEach((element) => {
  //       observer.unobserve(element);
  //     });
  //   };
  // }, []);

  return (
    <div>
      <div>
        <div className="text-center text-red-600 font-bold text-2xl xl:text-6xl pt-14 px-1 lg:pt-32 hiddenTransition">
          If you're looking to raise your child's grade, you've come to the right place
        </div>
        <div className="text-center pt-7 text-blue-900 text-xl lg:text-3xl">
          <div className="p-2 max-w-3xl mx-auto my-2 lg:my-10 hiddenTransition">
            With structured lessons, students can have a clear pathway for continuous improvement. Strengthen:
          </div>
        </div>
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 justify-center items-stretch text-white text-xl lg:text-3xl py-2 lg:py-10 gap-2 mx-2 lg:mx-0 max-w-11/12 overflow-hidden"
          initial={{ opacity: 0, translateX: -150, filter: 'blur(2px)' }}
          whileInView={{ opacity: 1, translateX: 0, filter: 'blur(0px)' }}
          transition={{ duration: .6, staggerChildren: .2, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          {intro.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, translateX: -150, filter: 'blur(2px)' }}
              whileInView={{ opacity: 1, translateX: 0, filter: 'blur(0px)' }}
              transition={{ duration: .6, delay: index * .2 }}
              viewport={{ once: true }}
              className="max-w-sm lg:mx-5 my-1 bg-red-600 p-3 rounded-lg text-center content-center hover:scale-105 h-20"
            >
              {item.text}
            </motion.div>
          ))}
        </motion.div>
        {/* make into 2 lines */}
        <div className="text-center text-blue-900 text-md w-5xl lg:text-4xl m-2 mt-10 lg:m-10 hiddenTransition">
          My tutoring service is designed for <span className="font-bold">beginning and intermediate Mandarin learners</span>, focusing on the needs of native English speakers.
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6, staggerChildren: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          {sideBySide.map((item, index) => (
            <motion.div
              key={index}
              className={`flex justify-between items-center mx-auto max-w-6xl p-2 overflow-hidden ${index % 2 != 0 ? 'flex-row-reverse' : ''}`}
              initial={index % 2 != 0 ? { opacity: 0, translateX: -100 } : { opacity: 0, translateX: 100 }}
              whileInView={index % 2 != 0 ? { opacity: 1, translateX: 0 } : { opacity: 1, translateX: 0 }}
              transition={{ duration: .6, delay: index * .2, staggerChildren: 1 }}
              viewport={{ once: true }}
            >
              <div
                className={`flex-1 flex justify-center transition relative size-36 md:size-48 lg:size-80 aspect-square ${item.image == '/assets/images/info2.png' ? 'scale-[.8] lg:scale-[.6] hove:scale-[.85] lg:hover:scale-[.65]' : 'scale:[.6] lg:scale-[.7] hove:scale-[.65] lg:hover:scale-[.75]'}`}
              >
                <Image
                  src={item.image}
                  fill
                  className={`absolute`}
                  alt='A+'
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className={`py-2 text-md md:text-2xl lg:text-3xl text-blue-900 font-semibold ${index % 2 != 0 ? 'text-right' : 'text-left'}`}>
                  {item.title}
                </div>
                <div className={`text-xs sm:text-xl lg:text-2xl ${index % 2 != 0 ? 'text-right' : 'text-left'}`}>
                  {item.text}
                </div>
                {item.astericks && (
                  <div className="p-1 text-xs lg:text-lg italic font-semibold">
                    *Ensure to check availability and reserve your spot.
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <DottedLine />
      <div>
        <div>
          <div className="text-3xl lg:text-6xl text-red-600 text-center font-bold p-10">What to expect in our lessons</div>
        </div>
        <motion.div
          className="flex items-center justify-between delay overflow-hidden"
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: .6, staggerChildren: 1 }}
          viewport={{ once: true }}
        >
          {expectations.map((item, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: .6, delay: index * .2 }}
              viewport={{ once: true }}
            >
              <motion.div className="flex flex-col">
                <div className="py-2 sm:py-10 md:py-14 mx-auto hover:scale-[1.2] transition">
                  {item.image &&
                    <div className={`relative size-16 md:size-20 lg:size-28 `}>
                      <Image
                        src={item.image}
                        fill
                        sizes='(min-width: 640px) 640px, 25vw'
                        className={`${item.image == '/assets/images/book.png' ? 'mt-2 lg:mt-0' : ''}`}
                        alt="A+"
                      />
                    </div>}
                </div>
                <div className="text-lg lg:text-2xl text-center mt-1 text-blue-900 px-3 lg:px-0">
                  {item.text}
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
      <div className="text-blue-900 text-center text-xl lg:text-3xl pt-20">
        <div className="flex justify-center hiddenTransition">
          <div className="">
            <VectorRight />
          </div>
          <div>
            <div className="text-2xl lg:text-3xl">
              We'll cover the fundamentals
            </div>
            <div className="text-2xl lg:text-3xl">
              you need to succeed:
            </div>
          </div>
          <div className="">
            <VectorLeft />
          </div>
        </div>
        <div className="max-w-md mx-auto pt-10">
          <ul className="list-disc inline-block text-start hiddenTransitionLeft delayAnimation">
            <li>Pronunciation</li>
            <li>Pinyin Tones</li>
            <li>HSK Vocabulary</li>
            <li>Sentence Structure</li>
          </ul>
        </div>
      </div>
      <DottedLine />
      <div className="text-center py-10" id='gettingStarted'>

        <motion.div
          className="text-red-600 text-2xl lg:text-4xl font-bold py-5"
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
        >
          Get Started in TWO Easy Steps
        </motion.div>
        <div className="py-10">
          <motion.div
            className="text-white text-7xl bg-red-500 max-w-min mx-auto p-2 rounded-xl m-2"
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
          >
            01
          </motion.div>
          <motion.div
            className="text-red-600 font-semibold text-2xl p-2"
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
          >
            Fill out the New Student Form OR sign up for a free consultation call
          </motion.div>
          <div className="text-blue-900 text-xl">
            <motion.div
              className="max-w-sm inline-block mx-auto font-semibold underline"
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: .5 }}
              viewport={{ once: true }}
            >
              This is for new students only
            </motion.div>
            <motion.div
              className="max-w-2xl mx-auto p-8"
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: .5 }}
              viewport={{ once: true }}
            >
              To best  suit your learning needs, this is your chance to share what you are looking for in our lessons. Let's make sure its the right fit!
            </motion.div>
            {/* make buttons same size */}
            <div className="flex flex-col md:flex-row justify-center text-white py-5">
              <div>
                <button className="bg-blue-900 p-4 my-2 md:my-0 mx-10 hover:scale-[1.05] transition hiddenTransition">
                  New Student Form {`>`}
                </button>
              </div>
              <div>
                <Link href='https://tidycal.com/chinesewithkatie/15-minute-free-consultation-call' target="_blank">
                  <button className="bg-blue-900 p-4 mx-10 hover:scale-[1.05] transition hiddenTransition">
                    Free 15 Minutes Consultation Call {`>`}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:py-10">
          <div className="text-white text-7xl bg-red-500 max-w-min mx-auto p-2 rounded-xl m-2 hiddenTransition">
            02
          </div>
          <div className="text-red-600 font-semibold text-2xl p-2 hiddenTransition">
            Sign up for a lesson!
          </div>
          <div className="text-blue-900 text-xl hiddenTransition">
            <div className="max-w-2xl mx-auto p-2">
              To sign up, select either a 30 minute or 1 hour lesson from my bookings page. The selection will navigate you to my calendar, where you can book a lesson based on my avaiablilty. After booking the lesson, you should receive a confirmation email, then you're all set!
            </div>
            <div className="text-white py-5">
              <Link href='/services'>
                <button className="bg-blue-900 p-4 hover:scale-[1.05] transition hiddenTransition">
                  My Bookings Page {`>`}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}