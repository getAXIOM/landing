import { useEffect, useRef } from 'react';

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<any>(null);

  useEffect(() => {
    const initLocomotive = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
      const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;
      
      if (!scrollRef.current && scrollContainer) {
        scrollRef.current = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
          multiplier: 1,
          class: 'is-revealed'
        });
      }
    };

    initLocomotive();

    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }
    };
  }, []);

  const updateScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.update();
    }
  };

  const scrollTo = (target: string | HTMLElement, options?: any) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(target, options);
    }
  };

  return {
    scrollInstance: scrollRef.current,
    updateScroll,
    scrollTo
  };
}; 