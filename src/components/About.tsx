
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Awards Won" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate graphic designer with over 5 years of experience creating compelling visual stories. 
              My journey began with a love for art and evolved into a career dedicated to helping brands 
              communicate their message through innovative design.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              I believe that great design is not just about making things look beautiful, but about solving 
              problems and creating meaningful connections between brands and their audiences. Every project 
              is an opportunity to push creative boundaries while delivering results that exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.label}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="text-3xl font-bold text-orange-500 mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="overflow-hidden hover-lift">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="Profile"
                  className="w-full h-96 object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
