
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            Portfolio
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Hero', 'Projects', 'Skills', 'About', 'Blog', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
