
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Creative
            <span className="text-gradient block">Designer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transforming ideas into stunning visual experiences through innovative design and creative storytelling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full hover-lift"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 rounded-full hover-lift"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-500/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-orange-500/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;
