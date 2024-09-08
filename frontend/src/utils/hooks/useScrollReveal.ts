import { useEffect, useState } from "react";

/**
 * This hook is used to check if the element is visible or not
 * 
 * @param options
 * @returns isVisible to check if the element is visible or not
 */
const useScrollReveal = (
  options: IntersectionObserverInit = { threshold: 0.1 }
) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const element = document.querySelector(".reveal");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return isVisible;
};

export default useScrollReveal;
