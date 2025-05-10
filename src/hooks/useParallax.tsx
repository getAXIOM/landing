import { useEffect, RefObject } from 'react';

export const useParallax = (
  ref: RefObject<HTMLElement>,
  speed: number = 0.1
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const elementPosition = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Check if element is in view
      if (
        scrollTop + viewportHeight > elementPosition &&
        scrollTop < elementPosition + elementHeight
      ) {
        const distance = scrollTop - elementPosition;
        const parallaxOffset = distance * speed;
        
        // Apply the parallax effect
        element.style.backgroundPositionY = `${parallaxOffset}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, speed]);
};