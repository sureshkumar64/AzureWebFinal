import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
import ScrollRevealWrapper from './ScrollRevealWrapper';
// Fallback placeholders since assets are missing


const sessions = [
  {
    id: 1,
    title: "Session 1: Head in the Cloud ",
    description: "This session introduces Cloud Computing and Microsoft Azure, explaining its importance and impact. It covers data centers, scalability, cloud models (IaaS, PaaS, SaaS), deployment types, comparisons with AWS and GCP, and an overview of the Azure Portal with key services like Virtual Machines, Storage, Networking, and App Services.",
    date: "September 27, 2025",
    time: "10:00 AM - 1:00 PM",
    color: "from-primary to-primary/60"
  },
  {
    id: 2,
    title: "Session 2: Inside the Azure Engine",
    description: "This session explores Azure’s core: Compute, Storage, and Networking. Learn how Virtual Machines, serverless functions, Blob Storage, and Virtual Networks power businesses, understand Azure Resource Manager, and watch a live demo deploying a Resource Group and Storage through the Portal.",
    date: "September 27, 2025", 
    time: "2:00 PM - 5:00 PM",
    color: "from-secondary to-secondary/60"
  },
  {
    id: 3,
    title: "Session 3: Deploy. Run. Wow.",
    description: "In this fully practical session, you’ll deploy your first Virtual Machine, set up a basic Web App with Azure App Service, and explore Azure Storage Services. This is your chance to apply what you’ve learned and see your work live on the cloud.",
    time: "10:00 AM - 1:00 PM", 
    date: "September 28, 2025", 
    color: "from-accent to-accent/60"
  },
  {
    id: 4,
    title: "Session 4: Hack4Azure: Innovate to Elevate",
    description: "The final session of AzureXplore brings the thrill of a hackathon with a unique twist.Participants will face fast-paced challenges designed to test their Azure skills in real time.Every round will push them further, and only the best will advance.At the end, the top three will emerge as the true Hack4Azure champions.",
    time: "2:00 PM - 5:00 PM",
    date: "September 28, 2025",
    color: "from-primary to-accent"
  }
];

export const SessionsSection = () => {
  const [visibleSessions, setVisibleSessions] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sessionIndex = parseInt(entry.target.getAttribute('data-session') || '0');
            setVisibleSessions(prev => [...new Set([...prev, sessionIndex])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sessionCards = sectionRef.current?.querySelectorAll('[data-session]');
    sessionCards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollRevealWrapper animation="slide-up">
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30 text-primary">
              Workshop Sessions
            </Badge>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four comprehensive sessions designed to take your Azure expertise to the next level
            </p>
          </div>
        </ScrollRevealWrapper>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {sessions.map((session, index) => (
            <ScrollRevealWrapper
              key={session.id}
              animation={index % 3 === 0 ? 'slide-up' : index % 3 === 1 ? 'slide-left' : 'slide-right'}
              stagger={index + 1}
            >
              <Card className="group h-full glass-card hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${session.color}`} />
                
                <CardContent className="p-8">
                  {/* Session Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {session.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {session.description}
                      </p>
                    </div>
                  </div>

                  {/* Session Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{session.time}</span>
                    </div>
                  </div>

                  {/* Speaker Info */}
                  {/* <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 border border-muted/30">
                    <div className="relative">
                      <img
                        src={session.speaker.image}
                        alt={session.speaker.name}
                        loading="lazy"
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-4 h-4 text-primary/60" />
                        <span className="font-semibold">{session.speaker.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{session.speaker.designation}</p>
                    </div>
                  </div> */}
                </CardContent>
              </Card>
            </ScrollRevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};