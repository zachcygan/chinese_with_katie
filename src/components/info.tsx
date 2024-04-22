'use client'
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DottedLine from "./dottedLine";
import VectorRight from "./vectorRight";
import VectorLeft from "./vectorLeft";
import Expectations from "./expectations";

export default function Info() {
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
      <div>
        <div className="text-center text-red-600 font-bold text-3xl xl:text-7xl pt-14 lg:pt-32 hiddenTransition">
          If you're looking to <span className="underline">raise your child's grade</span>, you've come to the right place
        </div>
        <div className="text-center pt-7 text-blue-900 text-2xl font-semibold">
          <div className="p-2 max-w-2xl mx-auto my-2 lg:my-10 hiddenTransition">
            With structured lessons,  students can have a clear pathway for continuous improvement. Strengthen:
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center text-white text-xl lg:text-3xl py-2 lg:py-10">
          <div className="hiddenTransitionLeft delayAnimation">
            <div className="max-w-sm lg:mx-5 my-1 flex-1 bg-red-600 p-3 rounded-lg text-center hover:scale-105">
              Correct Pronunciation
            </div>
          </div>
          <div className="hiddenTransitionLeft delayAnimation">
            <div className="max-w-sm lg:mx-5 my-1 flex-1 bg-red-600 p-3 rounded-lg text-center hover:scale-105">
              Conversational Skills
            </div>
          </div>
          <div className="hiddenTransitionLeft delayAnimation">
            <div className="max-w-sm lg:mx-5 my-1 flex-1 bg-red-600 p-3 rounded-lg text-center flex items-center justify-center hover:scale-105">
              Grammar
            </div>
          </div>
          <div className="hiddenTransitionLeft delayAnimation">
            <div className="max-w-sm lg:mx-5 my-1 flex-1 bg-red-600 p-3 rounded-lg text-center flex items-center justify-center hover:scale-105">
              Reading Skills
            </div>
          </div>
        </div>
        <div className="text-center text-blue-900 text-xl lg:text-4xl m-2 mt-10 lg:m-10 hiddenTransition">
          My tutoring service is designed for <span className="font-bold">beginning and intermediate Mandarin learners</span>, focusing on the needs of native English speakers.
        </div>
        <div>
          <div className="hiddenTransition lg:hiddenTransitionLeft delayAnimation">
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
                  <div className="py-2 text-2xl lg:text-3xl text-blue-900 font-semibold">Structured Lesson Plans</div>
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl m-1 text-center lg:text-left sm:m-0">
                  In my lessons, students can expect to learn with a lesson plan suited for their language level. To supplement, we'll additionally use workbooks and flashcards. Each student will have access to the lesson plan and notes used in our sessions and parents will receive personalized progress reports
                </div>
              </div>
            </div>
          </div>
          <div className="hiddenTransition lg:hiddenTransitionRight delayAnimation">
            <div className="md:flex justify-between flex-col lg:flex-row items-center mx-auto max-w-4xl p-2 hidden md:display-block">
              <div className="flex-1 flex flex-col justify-center items-start">
                <div className="mx-auto lg:mx-0">
                  <div className="py-2 text-2xl lg:text-3xl text-blue-900 font-semibold">Flexability</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl m-1 text-center lg:text-left sm:m-0">
                    Being an online tutor makes it easy for me to be accommodating of your schedule! My hours for tutoring are  from Monday to Friday, 5:30pm -9pm MST .
                  </div>
                  <div className="p-1 lg:text-md italic font-semibold">
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
          </div>
          {/* mobile view */}
          <div className="hiddenTransition delayAnimation">
            <div className="flex justify-between flex-col lg:flex-row items-center mx-auto max-w-4xl p-2 md:hidden">
              <div className="flex-1 flex justify-center py-2 hover:scale-[1.1] transition hiddenTransition">
                <Image
                  src='/assets/images/info2.png'
                  width={250}
                  height={250}
                  alt='A+'
                />
              </div>
              <div className="hiddenTransition">
                <div className="text-center lg:mx-0">
                  <div className="py-2 text-2xl lg:text-3xl text-blue-900 font-semibold">Flexability</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl lg:text-xl m-1 text-center lg:text-left sm:m-0">
                    Being an online tutor makes it easy for me to be accommodating of your schedule! My hours for tutoring are  from Monday to Friday, 5:30pm -9pm MST .
                  </div>
                  <div className="p-1 italic font-semibold text-sm sm:text-xl text-center">
                    *Ensure to check availability and reserve your spot.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hiddenTransition lg:hiddenTransitionLeft delayAnimation">
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
                  <div className="py-2 text-2xl lg:text-3xl text-blue-900 font-semibold">Homework Help</div>
                </div>
                <div className="text-lg sm:text-xl lg:text-3xl m-1 text-center lg:text-left sm:m-0">
                  Need help on your homework? Feel free to send this to me before our lesson! We'll work through your problems and learn what areas to focus on.reports
                </div>
              </div>
            </div>
          </div>
          <div className="hiddenTransition lg:hiddenTransitionRight delayAnimation">
            <div className="md:flex justify-between flex-col lg:flex-row items-center mx-auto max-w-4xl p-2 hidden md:display-block">
              <div className="flex-1 flex flex-col justify-center items-start">
                <div className="mx-auto lg:mx-0">
                  <div className="py-2 text-2xl lg:text-3xl text-blue-900 font-semibold">Student Feedback For Parents</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl m-1 text-center lg:text-left sm:m-0">
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
          </div>
          {/* mobile view */}
          <div className="hiddenTransition delayAnimation">
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
                  <div className="py-2 text-2xl lg:text-3xl text-blue-900 font-semibold">Student Feedback for Parents</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl m-1 text-center lg:text-left sm:m-0">
                    It's always important to view your child's progress. After each lesson, parents will receive personalized progress reports, identifying areas for improvement and displaying achievements.
                  </div>
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
        <div className="flex flex-col lg:flex-row items-center justify-between delay">
          <div className="hiddenTransitionLeft delayAnimation">
            <Expectations image='/assets/images/book.png' text='Supplemental Material Image' />
          </div>
          <div className="hiddenTransitionLeft delayAnimation">
            <Expectations image='/assets/images/whiteboard.png' text='Online Whiteboard Image' />
          </div>
          <div className="hiddenTransitionLeft delayAnimation">
            <Expectations image='/assets/images/conversation.png' text='Conversation Practice Image' />
          </div>
        </div>
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
        <div className="hiddenTransition">
          <div className="text-red-600 text-2xl lg:text-4xl font-bold py-5">
            Get Started in TWO Easy Steps
          </div>
          <div className="py-10">
            <div className="text-white text-7xl bg-red-500 max-w-min mx-auto p-2 rounded-xl m-2 hiddenTransition">
              01
            </div>
            <div className="text-red-600 font-semibold text-2xl p-2 hiddenTransition">
              Fill out the New Student Form OR sign up for a free consultation call
            </div>
            <div className="text-blue-900 text-xl">
              <div className="max-w-sm inline-block mx-auto font-semibold underline hover:scale-[1.05] transition hiddenTransition">
                This is for new students only
              </div>
              <div className="max-w-2xl mx-auto p-8 hiddenTransition">
                To best  suit your learning needs, this is your chance to share what you are looking for in our lessons. Let's make sure its the right fit!
              </div>
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
        </div>
        <div className="py-10">
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