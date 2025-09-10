import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, Zap } from 'lucide-react';
// Fallback to placeholder since asset is missing
const heroBackground = '/cloud.jpeg';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRegisterClick = () => {
    window.open('https://unstop.com/p/azure-xplore-2k25-wce-mlscmicrosoft-learn-students-club-1554683#tab-discussion', '_blank');
  };

  return (
    <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animated-bg"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="hidden md:block absolute top-20 left-10 animate-float">
        <Cloud className="w-8 h-8 text-primary/30" />
      </div>
      <div className="hidden md:block absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Zap className="w-6 h-6 text-accent/40" />
      </div>
      <div className="hidden md:block absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Cloud className="w-10 h-10 text-secondary/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* MLSC Logo with Floating Animation */}
          <div className="flex justify-center mb-4 -mt-8">
            <img 
              src="/mlsclogo.png" 
              alt="MLSC Logo" 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 animate-float logo-glow"
            />
          </div>

          {/* Badge */}
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-8 animate-pulse-glow">
            <span className="text-sm font-medium gradient-text">Cloud Excellence Awaits</span>
          </div>gradient */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-8 animate-pulse-glow">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-700 via-purple-700 to-blue-700 text-transparent bg-clip-text glow-text">
              Cloud Excellence Awaits
            </span>
          </div>


          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text glow-text">AzureXplore</span>
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl text-foreground/90">2K25</span>
          </h1>

          {/* Subtitle */}

          {/* Description
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join industry experts and fellow developers for an immersive Azure learning experience. 
            Master cloud technologies, build scalable solutions, and advance your career.
          </p> */}

          {/* CTA Button */}
          <div className={`transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Button
              onClick={handleRegisterClick}
              size="lg"
              className="group relative px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 glow hover:scale-105 transition-all duration-300"
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          {/* <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">4</div>
              <div className="text-sm text-muted-foreground">Expert Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">500+</div>
              <div className="text-sm text-muted-foreground">Attendees Expected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">2 Days</div>
              <div className="text-sm text-muted-foreground">Intensive Learning</div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};