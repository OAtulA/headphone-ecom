import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealWrapperProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  distance?: number;
  duration?: number;
}

/**
 * A wrapper component for animating elements using ScrollReveal.
 * 
 * This component wraps child elements and applies ScrollReveal animation based on the provided props.
 * 
 * @param {ScrollRevealWrapperProps} props - The properties for configuring the animation.
 * @param {React.ReactNode} props.children - The child elements to animate.
 * 
 * @param {number} [props.delay=0] - The delay before the animation starts (in seconds).  
 * Default is 0.
 * 
 * @param {'top' | 'bottom' | 'left' | 'right'} [props.direction='bottom'] - The direction from which the element appears.  
 * Default is 'bottom'.
 * @param {number} [props.distance=60] - The distance the element moves during the animation (in pixels).   
 *  Default is 60.
 * @param {number} [props.duration=0.5] - The duration of the animation (in seconds).  
 *  Default is 0.5.
 * @returns {JSX.Element} A wrapper component that applies the ScrollReveal animation to its children.
 */
const ScrollRevealWrapper: React.FC<ScrollRevealWrapperProps> = ({
  children,
  delay = 0,
  direction = 'bottom',
  distance = 60,
  duration = 0.5,
}) => {
  // Using react-intersection-observer to detect visibility
  const { ref, inView } = useInView({
    triggerOnce: true, // Optional: trigger animation only once
    threshold: 0.1,    // Optional: how much of the element should be visible
  });

  const getInitialPosition = () => {
    switch (direction) {
      case 'top':
        return { opacity: 0, y: -distance };
      case 'bottom':
        return { opacity: 0, y: distance };
      case 'left':
        return { opacity: 0, x: -distance };
      case 'right':
        return { opacity: 0, x: distance };
      default:
        return { opacity: 0, y: distance };
    }
  };

  return (
    <motion.div
      ref={ref} // Attach ref to the motion.div
      className="reveal"
      initial={getInitialPosition()}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : getInitialPosition()}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealWrapper;
