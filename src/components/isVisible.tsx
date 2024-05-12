import { useState, useEffect } from 'react';

interface IsVisibleProps {
  ref: React.RefObject<HTMLDivElement>;
}

export default function isVisible({ ref }: IsVisibleProps) {
  const [intersecting, setIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      setIntersecting(entries.isIntersecting)
    });
    
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [intersecting, ref]);

  return intersecting;
}
