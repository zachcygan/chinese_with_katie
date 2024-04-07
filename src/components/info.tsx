'use client'
import Image from "next/image";
import DottedLine from "./dottedLine";
import VectorRight from "./vectorRight";
import VectorLeft from "./vectorLeft";
import Book from "./book";
import Whiteboard from "./whiteboard";
import Conversation from "./conversation";
import Expectations from "./expectations";

export default function Info() {
  return (
    <div>
      <div>
        <div className="text-center text-red-600 font-bold text-7xl pt-32">
          <div>
            Aiming to improve your
          </div>
          <div>
            grade or begin your
          </div>
          <div>
            learning journey?
          </div>
        </div>
        <div className="text-center pt-20 text-blue-900 text-3xl font-semibold">
          <div className="p-2">
            <span className="underline">In just a single 60 minute lesson</span>, students will be
          </div>
          <div className="p-2">
            able to communicate basic phrases and questions.
          </div>
          <div className="p-2">
            You'll be AMAZED at how much you can grow your skills!
          </div>
        </div>
        <div className="text-center text-blue-900 text-2xl p-20">
          <div>
            My tutoring sessions are designed to meet the needs of English-speaking learners. I
          </div>
          <div>
            guide beginning and intermediate Mandarin learners through language essentials to
          </div>
          <div>
            gain a strong foundation.
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mx-auto max-w-4xl p-2">
            <div className="flex-1 flex justify-center">
              <Image
                src='/assets/images/info1.png'
                width={250}
                height={250}
                alt='A+'
              />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start">
              <div className="flex items-center justify-between">
                <div className="py-2 text-3xl text-blue-900 font-semibold">Structured Lesson Plans</div>
              </div>
              <div>
                In my lessons, students can expect to learn with a lesson plan suited for their language level. To supplement, we'll additionally use workbooks and flashcards. Each student will have access to the lesson plan and notes used in our sessions and parents will receive personalized progress reports
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mx-auto max-w-4xl p-2">
            <div className="flex-1 flex flex-col justify-center items-start">
              <div className="flex items-center justify-between">
                <div className="py-2 text-3xl text-blue-900 font-semibold">Flexability</div>
              </div>
              <div>
                <div>
                  Being an online tutor makes it easy for me to be accommodating of your schedule! My hours for tutoring are  from Monday to Friday, 5:30pm -9pm MST .
                </div>
                <div className="p-1 italic font-semibold">
                  *Ensure to check availability and reserve your spot.
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center py-2">
              <Image
                src='/assets/images/info2.png'
                width={250}
                height={250}
                alt='A+'
              />
            </div>
          </div>
          <div className="flex justify-between items-center mx-auto max-w-4xl p-2">
            <div className="flex-1 flex justify-center">
              <Image
                src='/assets/images/info3.png'
                width={250}
                height={250}
                alt='A+'
              />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start">
              <div className="flex items-center justify-between">
                <div className="py-2 text-3xl text-blue-900 font-semibold">Homework Help</div>
                {/* <svg preserveAspectRatio="xMidYMid meet" data-bbox="24.1 24.2 151.8 151.8" viewBox="24.1 24.2 151.8 151.8" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="" className="scale-[.3]">
                  <g>
                    <path d="M100 176c-5.8 0-10.3-4.7-10.3-10.3 0-23.3-32-55.3-55.3-55.3-5.8 0-10.3-4.7-10.3-10.3 0-5.7 4.7-10.3 10.3-10.3 23.3 0 55.3-32 55.3-55.3 0-5.8 4.7-10.3 10.3-10.3 5.7 0 10.3 4.7 10.3 10.3 0 23.3 32 55.3 55.3 55.3 5.8 0 10.3 4.7 10.3 10.3 0 5.7-4.7 10.3-10.3 10.3-23.3 0-55.3 32-55.3 55.3 0 5.6-4.5 10.3-10.3 10.3zM66.4 99.9c13.2 8.2 25.5 20.3 33.6 33.6 8.2-13.2 20.3-25.5 33.6-33.6-13.2-8.2-25.5-20.3-33.6-33.6-8.2 13.3-20.3 25.4-33.6 33.6z" fill="#ffb600" data-color="1"></path>
                  </g>
                </svg> */}
              </div>
              <div>
                Need help on your homework? Feel free to send this to me before our lesson! We'll work through your problems and learn what areas to focus on.reports
              </div>
            </div>
          </div>
        </div>
      </div>
      <DottedLine />
      <div>
        <div>
          <div className="text-6xl text-red-600 text-center font-bold p-10">What to expect in our lessons</div>
        </div>
        <div className="flex justify-between">
          <Expectations component={Book} text='Supplemental Material' />
          <Expectations component={Whiteboard} text='Online Whiteboard' />
          <Expectations component={Conversation} text='Conversation Practice' />
        </div>
      </div>
      <div className="text-blue-900 text-center text-3xl pt-20">
        <div className="flex justify-between">
          <div className="ml-60">
            <VectorRight />
          </div>
          <div className="max-w-md mx-auto">
            We'll cover the fundamentals you need to succeed:
          </div>
          <div className="mr-60">
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
      <div className="text-center py-10">
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
              <div className="max-w-2xl mx-auto">
                To best  suit your learning needs, this is your chance to share what you are looking for in our lessons. Let's make sure its the right fit!
              </div>
              <div className="flex justify-around mx-40 text-white py-5">
                <button className="bg-blue-900 p-4 hover:scale-[1.05] transition">
                  New Student Form {`>`}
                </button>S
                <button className="bg-blue-900 p-4 hover:scale-[1.05] transition">
                  Free 15 Minutes Consultation Call {`>`}
                </button>
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
            <div className="max-w-2xl mx-auto">
              To sign up, select either a 30 minute or 1 hour lesson from my bookings page. The selection will navigate you to my calendar, where you can book a lesson based on my avaiablilty. After booking the lesson, you should receive a confirmation email, then you're all set!
            </div>
            <div className="text-white py-5">
              <button className="bg-blue-900 p-4 hover:scale-[1.05] transition">
                My Bookings Page {`>`}
              </button>S
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}