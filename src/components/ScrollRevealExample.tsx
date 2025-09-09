import React from 'react';
import ScrollRevealWrapper from './ScrollRevealWrapper';

export const ScrollRevealExample = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Slide Up Animation */}
        <ScrollRevealWrapper animation="slide-up">
          <div className="text-center p-8 bg-card rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Slide Up Animation</h2>
            <p>This content slides up from the bottom when it comes into view.</p>
          </div>
        </ScrollRevealWrapper>

        {/* Slide Left Animation */}
        <ScrollRevealWrapper animation="slide-left">
          <div className="text-center p-8 bg-card rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Slide Left Animation</h2>
            <p>This content slides in from the left side of the screen.</p>
          </div>
        </ScrollRevealWrapper>

        {/* Slide Right Animation */}
        <ScrollRevealWrapper animation="slide-right">
          <div className="text-center p-8 bg-card rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Slide Right Animation</h2>
            <p>This content slides in from the right side of the screen.</p>
          </div>
        </ScrollRevealWrapper>

        {/* Scale Animation */}
        <ScrollRevealWrapper animation="scale">
          <div className="text-center p-8 bg-card rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Scale Animation</h2>
            <p>This content scales up from a smaller size when revealed.</p>
          </div>
        </ScrollRevealWrapper>

        {/* Bounce Animation */}
        <ScrollRevealWrapper animation="bounce">
          <div className="text-center p-8 bg-card rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Bounce Animation</h2>
            <p>This content bounces in with a fun spring effect.</p>
          </div>
        </ScrollRevealWrapper>

        {/* Rotate Animation */}
        <ScrollRevealWrapper animation="rotate">
          <div className="text-center p-8 bg-card rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Rotate Animation</h2>
            <p>This content rotates slightly as it comes into view.</p>
          </div>
        </ScrollRevealWrapper>

        {/* Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollRevealWrapper animation="slide-up" stagger={1}>
            <div className="p-6 bg-card rounded-lg text-center">
              <h3 className="font-semibold mb-2">Stagger 1</h3>
              <p className="text-sm text-muted-foreground">First item with 0.1s delay</p>
            </div>
          </ScrollRevealWrapper>
          
          <ScrollRevealWrapper animation="slide-up" stagger={2}>
            <div className="p-6 bg-card rounded-lg text-center">
              <h3 className="font-semibold mb-2">Stagger 2</h3>
              <p className="text-sm text-muted-foreground">Second item with 0.2s delay</p>
            </div>
          </ScrollRevealWrapper>
          
          <ScrollRevealWrapper animation="slide-up" stagger={3}>
            <div className="p-6 bg-card rounded-lg text-center">
              <h3 className="font-semibold mb-2">Stagger 3</h3>
              <p className="text-sm text-muted-foreground">Third item with 0.3s delay</p>
            </div>
          </ScrollRevealWrapper>
        </div>

      </div>
    </section>
  );
};

export default ScrollRevealExample;
