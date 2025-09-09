import React, { useEffect, useState } from 'react';
import { Cloud, Zap } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide welcome screen after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Call onComplete after fade out animation
      setTimeout(onComplete, 500);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className={`welcome-screen ${!isVisible ? 'fade-out' : ''}`}>
      {/* Main Content */}
      <div className="text-center">  
        {/* Big Cloud Below Loader */}
        <div className="flex justify-center mt-8">
          <Cloud className="w-24 h-24 text-primary/40 animate-float" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
