import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
// Fallback placeholders since assets are missing


const sessions = [
  {
    id: 1,
    title: "Session 1: Before Cloud was Cool ",
    description: "This session introduces you to the basics of Cloud Computing and Microsoft Azure—what it is, why it matters, and how it changed everything. Learn about data centers, scalability, cloud models (IaaS, PaaS, SaaS), deployment types, and why Azure stands out against AWS and GCP. We’ll also walk you through the Azure Portal and its key services like Virtual Machines, Storage, Networking, and App Services.",
    date: "September 27, 2025",
    time: "10:00 AM - 1:00 PM",
    color: "from-primary to-primary/60"
  },
  {
    id: 2,
    title: "Session 2: Inside the Azure Engine",
    description: "This session dives into the heart of Azure: Compute, Storage, and Networking. You’ll understand how Virtual Machines, serverless functions, Blob Storage, and Virtual Networks actually power businesses. We’ll also cover Azure Resource Manager (ARM)—the brain that manages everything in Azure. Plus, you’ll see a live demo of deploying a Resource Group + Storage using the Portal.",
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
    description: "In the final session, you’ll participate in Hack4Azure, an exciting hackathon where you’ll put your Azure skills to the test. This is all about teamwork, creativity, and innovation—building real-world solutions powered by the cloud. Compete, learn, and showcase your ideas as you bring them to life with Azure.",
    date: "September 28, 2025", 
    time: "2:00 PM - 5:00 PM",
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
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30 text-primary">
            Workshop Sessions
          </Badge>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four comprehensive sessions designed to take your Azure expertise to the next level
          </p>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {sessions.map((session, index) => (
            <div
              key={session.id}
              data-session={index}
              className={`transform transition-all duration-700 ${
                visibleSessions.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};