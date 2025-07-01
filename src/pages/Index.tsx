
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
