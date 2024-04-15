import Image from 'next/image'

interface ExpectationsProps {
  text: string;
  image?: string;
}

export default function Expectations({ text, image }: ExpectationsProps) {
  return (
    <div className="flex flex-col">
      <div className="py-2 sm:py-10 md:py-14 mx-auto hover:scale-[1.2] transition">
        {image &&
          <div className='relative size-28'>
            <Image
              src={image}
              fill
              sizes='(min-width: 640px) 640px, 25vw'
              alt="A+"
            />
          </div>}
      </div>
      <div className="">
        <div className="text-2xl text-blue-900">{text}</div>
      </div>
    </div>
  )
}