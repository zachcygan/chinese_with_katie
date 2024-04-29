'use client'
import { useState, useEffect } from "react"
import SlideOver from "./slideOver";

const policies = [
  {
    name: 'Cancellation Policy',
    text: 'Students are required to cancel their scheduled lesson at least 24 hours in advance.  If a student fails to cancel within the 24-hour window more than 3 times, I reserve the right to discontinue providing services to that student.'
  },
  {
    name: 'Late Policy',
    text: 'Students who are more than 15 minutes late to their scheduled lesson will be considered a no-show, and the session will be forfeited without refund.'
  },
  {
    name: 'Rescheduling Policy',
    text: `Students may reschedule their lesson up to 2 days before the scheduled date. Rescheduled lessons must be completed within 3 weeks from the original scheduled date. For example, if a lesson is rescheduled from December 1st, it must be completed by December 21st. \nIn the event that I, the tutor, need to cancel, we\'ll reschedule at a time that is convenient for you. \nExceptions to this policy may be made at the discretion of the tutor. \nContact me here or at katieschineseguide@gmail.com  if you have any questions or concerns about cancellation and rescheduling.`
  },
]

export default function LessonPolicy() {
  const [isSlideOpen, setIsSlideOpen] = useState<boolean>(false)

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

    const transitionInElements = document.querySelectorAll('.transitionIn');
    transitionInElements.forEach((element) => {
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
      transitionInElements.forEach((element) => {
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
      <div className="text-center font-semibold text-3xl lg:text-5xl my-10 lg:p-10 text-blue-900 transitionIn">
        Lesson Policy
      </div>
      {policies.map((policy) => (
        <div className="max-w-4xl mx-auto px-2" key={policy.name}>
          <div className="pb-10">
            <div className="transitionIn delayTransition">
              <div className="font-bold text-2xl text-blue-950">
                {policy.name}:
              </div>
            </div>
            <div className="transitionIn delayTransition">
              <div className="text-2xl text-blue-900 transitionIn">
                {policy.text.split('\n').map((line, index) => (
                  <div key={index}>
                    {index > 0 && <br />}
                    {line.includes('here') ? (
                      <p>
                        {line.split(' ').map((word, idx) => (
                          <span key={idx}>
                            {word === 'here' ? (
                              <button
                                onClick={
                                  (e) => {
                                    e.preventDefault()
                                    setIsSlideOpen(true)
                                  }}
                                className="text-blue-500 underline focus:outline-none">{word}</button>
                            ) : (
                              ` ${word} `
                            )}
                          </span>
                        ))}
                      </p>
                    ) : (
                      <p>{line}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <SlideOver isOpen={isSlideOpen} onClose={() => setIsSlideOpen(false)} />
    </div>
  )
}