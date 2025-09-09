import React from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface ScrollRevealWrapperProps {
  children: React.ReactNode;
  animation?: 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'bounce' | 'rotate';
  stagger?: number;
  className?: string;
}

export const ScrollRevealWrapper: React.FC<ScrollRevealWrapperProps> = ({
  children,
  animation = 'slide-up',
  stagger,
  className = ''
}) => {
  const { ref, isVisible } = useScrollReveal({ triggerOnce: false });

  const getAnimationClass = () => {
    switch (animation) {
      case 'slide-up':
        return 'reveal-slide-up';
      case 'slide-left':
        return 'reveal-slide-left';
      case 'slide-right':
        return 'reveal-slide-right';
      case 'scale':
        return 'reveal-scale';
      case 'bounce':
        return 'reveal-bounce';
      case 'rotate':
        return 'reveal-rotate';
      default:
        return 'reveal-slide-up';
    }
  };

  const getStaggerClass = () => {
    if (stagger && stagger >= 1 && stagger <= 5) {
      return `reveal-stagger-${stagger}`;
    }
    return '';
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${getStaggerClass()} ${isVisible ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollRevealWrapper;
