import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  direction?: 'up' | 'down' | 'both';
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = false, // Changed to false for bidirectional reveal
    direction = 'both'
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Utility function to add reveal classes to elements
export const addRevealClasses = (element: HTMLElement, animationType: string, stagger?: number) => {
  if (!element) return;

  // Remove any existing reveal classes
  element.classList.remove(
    'reveal-slide-up', 'reveal-slide-left', 'reveal-slide-right',
    'reveal-scale', 'reveal-bounce', 'reveal-rotate',
    'reveal-stagger-1', 'reveal-stagger-2', 'reveal-stagger-3', 'reveal-stagger-4', 'reveal-stagger-5'
  );

  // Add the animation class
  element.classList.add(animationType);

  // Add stagger class if provided
  if (stagger && stagger >= 1 && stagger <= 5) {
    element.classList.add(`reveal-stagger-${stagger}`);
  }

  // Add revealed class when element comes into view
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('revealed');
      } else {
        element.classList.remove('revealed');
      }
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  observer.observe(element);
};

// Predefined animation types for easy use
export const REVEAL_ANIMATIONS = {
  SLIDE_UP: 'reveal-slide-up',
  SLIDE_LEFT: 'reveal-slide-left',
  SLIDE_RIGHT: 'reveal-slide-right',
  SCALE: 'reveal-scale',
  BOUNCE: 'reveal-bounce',
  ROTATE: 'reveal-rotate',
} as const;

export type RevealAnimationType = typeof REVEAL_ANIMATIONS[keyof typeof REVEAL_ANIMATIONS];
