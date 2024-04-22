'use client'

const policies = [
]

export default function LessonPolicy() {
  return (
    <div>
      <div className="text-center font-semibold text-3xl lg:text-5xl my-10 lg:p-10 text-blue-900">
        Lesson Policy
      </div>
      <div className="max-w-4xl mx-auto px-2">
        <div className="pb-10">
          <div className="font-bold text-2xl text-blue-950">
            Cancellation Policy:
          </div>
          <div className="text-2xl text-blue-900">
            Students are required to cancel their scheduled lesson at least 24 hours in advance.  If a student fails to cancel within the 24-hour window more than 3 times, I reserve the right to discontinue providing services to that student.
          </div>
        </div>
        <div className="pb-10">
          <div className="font-bold text-2xl text-blue-950">
            Late Policy:
          </div>
          <div className="text-2xl text-blue-900">
            Students who are more than 15 minutes late to their scheduled lesson will be considered a no-show, and the session will be forfeited without refund.
          </div>
        </div>
        <div className="pb-10">
          <div className="font-bold text-2xl text-blue-950">
            Rescheduling Policy:
          </div>
          <div className="text-blue-900 text-2xl pb-10">
            Students may reschedule their lesson up to 2 days before the scheduled date. Rescheduled lessons must be completed within 3 weeks from the original scheduled date. For example, if a lesson is rescheduled from December 1st, it must be completed by December 21st.
          </div>
          <div className="text-blue-900 text-2xl pb-10">
            In the event that I, the tutor, need to cancel,  we'll reschedule at a time that is convenient for you.
          </div>
          <div className="text-blue-900 text-2xl pb-10">
            Exceptions to this policy may be made at the discretion of the tutor.
          </div>
          <div className="text-blue-900 text-2xl pb-10">
            Contact me at chinesewithkatie@gmail.com  if you have any questions or concerns about cancellation and rescheduling
          </div>
        </div>
      </div>
    </div>
  )
}