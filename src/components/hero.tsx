'use client'

export default function Hero() {
  return (
    <div>
      <div className="border-2 border-red-700 p-2 bg-red-600">
        <div className="text-white font-bold">
          <div className="pt-20 pb-10">
            <div className="text-center text-7xl text-wrap">
              Are you New to
            </div>
            <div className="text-center text-7xl">
              Learning Mandarin?
            </div>
          </div>
          <div className="text-center text-3xl pb-10">
            Elevate your skills FAST with personalized tutoring
          </div>
        </div>
        <div className="text-center text-white pb-20">
          <button type="button" className="rounded-full bg-blue-800 p-5 text-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  )
}