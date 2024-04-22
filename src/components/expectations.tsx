import Image from 'next/image'
import { useEffect } from 'react'

interface ExpectationsProps {
  text: string;
  image?: string;
}

export default function Expectations({ text, image }: ExpectationsProps) {
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