import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';

// Mock sponsor logos - in a real project these would be actual sponsor logo images
const sponsors = [
  { name: "Unstop", logo: "/unstop.jpeg", tier: "title" },
];

const tierStyles = {
  title: "text-6xl group-hover:scale-110 drop-shadow-lg",
};

const tierLabels = {
  title: "Title Sponsors",
};

export const SponsorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const groupedSponsors = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {} as Record<string, typeof sponsors>);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-background to-muted/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-10 sm:mb-14 lg:mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-accent/30 text-accent">
            Our Partners
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Sponsors & Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proudly supported by industry leaders who believe in empowering the next generation of cloud professionals
          </p>
        </div>

       

        {/* Sponsors */}
<div className="space-y-12">
  <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
    {/* Tier Label */}
    <div className="text-center mb-8">
      <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
        {tierLabels.title}
      </h3>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
    </div>

    {/* Title Sponsors Grid */}
    <div className="grid gap-8 justify-items-center grid-cols-1 ">
      {groupedSponsors.title?.map((sponsor, index) => (
        <div
          key={sponsor.name}
          className={`group relative p-8 rounded-2xl glass-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'animate-scale-in' : ''}`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Sponsor Logo/Icon */}
          <div className="text-center">
            <div className={`${tierStyles.title} transition-all duration-300 mb-4`}>
              {<img src={sponsor.logo} alt={sponsor.name} className="w-24 h-24" />}
            </div>
            <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {sponsor.name}
            </h4>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
    </section>
  );
};