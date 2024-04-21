'use client'
import Image from "next/image";
import Link from "next/link";
import DottedLine from "./dottedLine";
import VectorRight from "./vectorRight";
import VectorLeft from "./vectorLeft";
import Conversation from "./conversation";
import Expectations from "./expectations";

export default function Info() {
  return (
    <div>
      <div>
        <div className="text-center text-red-600 font-bold text-4xl xl:text-7xl pt-32 px-1">
          If you're looking to <span className="underline">raise your child's grade</span>, you've come to the right place
        </div>
        <div className="text-center pt-7 text-blue-900 text-3xl font-semibold">
          <div className="p-2 max-w-xl mx-auto my-10">
            With structured lessons,  students can have a clear pathway for continuous improvement.  Strengthen:
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center text-white text-2xl py-10">
          <div className="mx-5 flex-1 items-center bg-red-600 p-3 rounded-lg text-center hover:scale-105 transition">Correct Pronunciation</div>
          <div className="mx-5 flex-1 bg-red-600 p-3 rounded-lg text-center hover:scale-105 transition">Conversational Skills</div>
          <div className="mx-5 flex-1 bg-red-600 p-3 rounded-lg text-center flex items-center justify-center hover:scale-105 transition">Grammar</div>
          <div className="mx-5 flex-1 bg-red-600 p-3 rounded-lg text-centerr flex items-center justify-center hover:scale-105 transition"> Reading Skills</div>
        </div>
        <div className="text-center text-blue-900 text-2xl xl:text-4xl m-2 xl:m-10">
          My tutoring service is designed for <span className="font-bold">beginning and intermediate Mandarin learners</span>, focusing on the needs of native English speakers.
        </div>
        <div>
          <div className="flex justify-between flex-col lg:flex-row items-center mx-auto max-w-4xl p-2">
            <div className="flex-1 flex justify-center hover:scale-[1.1] transition">
              <Image
                src='/assets/images/info1.png'
                width={250}
                height={250}
                alt='A+'
              />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start">
              <div className="mx-auto lg:mx-0">
                <div className="py-2 text-3xl text-blue-900 font-semibold">Structured Lesson Plans</div>
              </div>
              <div className="text-xl sm:text-2xl lg:text-xl m-2 text-center lg:text-left sm:m-0">
                In my lessons, students can expect to learn with a lesson plan suited for their language level. To supplement, we'll additionally use workbooks and flashcards. Each student will have access to the lesson plan and notes used in our sessions and parents will receive personalized progress reports
              </div>
            </div>
          </div>
          <div className="md:flex justify-between flex-col lg:flex-row items-center mx-auto max-w-4xl p-2 hidden md:display-block">
            <div className="flex-1 flex flex-col justify-center items-start">
              <div className="mx-auto lg:mx-0">
                <div className="py-2 text-3xl text-blue-900 font-semibold">Flexability</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-xl m-2 text-center lg:text-left sm:m-0">
                  Being an online tutor makes it easy for me to be accommodating of your schedule! My hours for tutoring are  from Monday to Friday, 5:30pm -9pm MST .
                </div>
                <div className="p-1 italic font-semibold">
                  *Ensure to check availability and reserve your spot.
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center py-2 hover:scale-[1.1] transition">
              <Image
                src='/assets/images/info2.png'
                width={250}
                height={250}
                alt='A+'
              />
            </div>
          </div>
          {/* mobile view */}
          <div className="flex justify-between flex-col lg:flex-row items-center mx-auto max-w-4xl p-2 md:hidden">
            <div className="flex-1 flex justify-center py-2 hover:scale-[1.1] transition">
              <Image
                src='/assets/images/info2.png'
                width={250}
                height={250}
                alt='A+'
              />
            </div>
            <div className="">
              <div className="text-center lg:mx-0">
                <div className="py-2 text-3xl text-blue-900 font-semibold">Flexability</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-xl m-2 text-center lg:text-left sm:m-0">
                  Being an online tutor makes it easy for me to be accommodating of your schedule! My hours for tutoring are  from Monday to Friday, 5:30pm -9pm MST .
                </div>
                <div className="p-1 italic font-semibold text-lg sm:text-xl text-center">
                  *Ensure to check availability and reserve your spot.
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-col lg:flex-row items-center mx-auto max-w-4xl p-2">
            <div className="flex-1 flex justify-center hover:scale-[1.1] transition">
              <Image
                src='/assets/images/info3.png'
                width={250}
                height={250}
                alt='A+'
              />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start">
              <div className="mx-auto lg:mx-0">
                <div className="py-2 text-3xl text-blue-900 font-semibold">Homework Help</div>
              </div>
              <div className="text-xl sm:text-2xl lg:text-xl m-2 text-center lg:text-left sm:m-0">
                Need help on your homework? Feel free to send this to me before our lesson! We'll work through your problems and learn what areas to focus on.reports
              </div>
            </div>
          </div>
          <div className="md:flex justify-between flex-col lg:flex-row items-center mx-auto max-w-4xl p-2 hidden md:display-block">
            <div className="flex-1 flex flex-col justify-center items-start">
              <div className="mx-auto lg:mx-0">
                <div className="py-2 text-3xl text-blue-900 font-semibold">Student Feedback For Parents</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-xl m-2 text-center lg:text-left sm:m-0">
                  It's always important to view your child's progress. After each lesson,  parents will receive personalized progress reports, identifying areas for improvement and displaying achievements.
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center py-2 hover:scale-[1.1] transition">
              <Image
                src='/assets/images/info4.png'
                width={250}
                height={250}
                alt='A+'
              />
            </div>
          </div>
          {/* mobile view */}
          <div className="flex justify-between flex-col lg:flex-row items-center mx-auto max-w-4xl p-2 md:hidden">
            <div className="flex-1 flex justify-center py-2 hover:scale-[1.1] transition">
              <Image
                src='/assets/images/info4.png'
                width={250}
                height={250}
                alt='A+'
              />
            </div>
            <div className="">
              <div className="text-center lg:mx-0">
                <div className="py-2 text-3xl text-blue-900 font-semibold">Student Feedback for Parents</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-xl m-2 text-center lg:text-left sm:m-0">
                  It's always important to view your child's progress. After each lesson, parents will receive personalized progress reports, identifying areas for improvement and displaying achievements.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DottedLine />
      <div>
        <div>
          <div className="text-3xl lg:text-6xl text-red-600 text-center font-bold p-10">What to expect in our lessons</div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Expectations image='/assets/images/book.png' text='Supplemental Material Image' />
          <Expectations image='/assets/images/whiteboard.png' text='Online Whiteboard Image' />
          <Expectations image='/assets/images/conversation.png' text='Conversation Practice Image' />
        </div>
      </div>
      <div className="text-blue-900 text-center text-xl lg:text-3xl pt-20">
        <div className="flex justify-center">
          <div className="">
            <VectorRight />
          </div>
          <div>
            <div className="mx-auto max-wd">
              We'll cover the fundamentals
            </div>
            <div>
              you need to succeed:
            </div>
          </div>
          <div className="">
            <VectorLeft />
          </div>
        </div>
        <div className="max-w-md mx-auto pt-10">
          <ul className="list-disc inline-block text-start">
            <li>Pronunciation</li>
            <li>Pinyin Tones</li>
            <li>HSK Vocabulary</li>
            <li>Sentence Structure</li>
          </ul>
        </div>
      </div>
      <DottedLine />
      <div className="text-center py-10" id='gettingStarted'>
        <div>
          <div className="text-red-600 text-5xl font-bold py-5">
            Get Started in TWO Easy Steps
          </div>
          <div className="py-10">
            <div className="text-white text-7xl bg-red-500 max-w-min mx-auto p-2 rounded-xl m-2">
              01
            </div>
            <div className="text-red-600 font-semibold text-2xl p-2">
              Fill out the New Student Form OR sign up for a free consultation call
            </div>
            <div className="text-blue-900 text-xl">
              <div className="max-w-sm inline-block mx-auto font-semibold underline hover:scale-[1.05] transition">
                This is for new students only
              </div>
              <div className="max-w-2xl mx-auto p-8">
                To best  suit your learning needs, this is your chance to share what you are looking for in our lessons. Let's make sure its the right fit!
              </div>
              <div className="flex flex-col md:flex-row justify-center text-white py-5">
                <div>
                  <button className="bg-blue-900 p-4 my-2 md:my-0 mx-10 hover:scale-[1.05] transition">
                    New Student Form {`>`}
                  </button>
                </div>
                <div>
                  <Link href='https://tidycal.com/chinesewithkatie/15-minute-free-consultation-call' target="_blank">
                    <button className="bg-blue-900 p-4 mx-10 hover:scale-[1.05] transition">
                      Free 15 Minutes Consultation Call {`>`}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="text-white text-7xl bg-red-500 max-w-min mx-auto p-2 rounded-xl m-2">
            02
          </div>
          <div className="text-red-600 font-semibold text-2xl p-2">
            Sign up for a lesson!
          </div>
          <div className="text-blue-900 text-xl">
            <div className="max-w-2xl mx-auto p-2">
              To sign up, select either a 30 minute or 1 hour lesson from my bookings page. The selection will navigate you to my calendar, where you can book a lesson based on my avaiablilty. After booking the lesson, you should receive a confirmation email, then you're all set!
            </div>
            <div className="text-white py-5">
              <Link href='/services'>
                <button className="bg-blue-900 p-4 hover:scale-[1.05] transition">
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