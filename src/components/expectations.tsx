import Image from 'next/image'

interface ExpectationsProps {
  component?: React.ComponentType<any>;
  text: string;
  image?: string;
}

export default function Expectations({ component: Component, text, image }: ExpectationsProps) {
  return (
    <div className="flex flex-col">
      <div className="py-20 scale-50 hover:scale-75 transition">
        {image &&
          <div className='relative size-52'>
            <Image
              src={image}
              fill
              sizes='(min-width: 640px) 640px, 100vw'
              alt="A+"
            />
          </div>}
        {!!Component && <Component />}
      </div>
      <div className="">
        <div className="text-2xl text-blue-900">{text}</div>
      </div>
    </div>
  )
}