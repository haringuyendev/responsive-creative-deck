
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  details: string;
  client: string;
  year: string;
  link?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Brand Identity Design",
      description: "Complete brand identity for a tech startup",
      image: "photo-1488590528505-98d2b5aba04b",
      tags: ["Branding", "Logo", "Identity"],
      category: "Branding",
      details: "Developed a comprehensive brand identity including logo design, color palette, typography, and brand guidelines for a innovative tech startup in the AI space.",
      client: "TechFlow Inc.",
      year: "2024",
      link: "https://example.com"
    },
    {
      id: 2,
      title: "Mobile App UI/UX",
      description: "User interface design for fitness tracking app",
      image: "photo-1461749280684-dccba630e2f6",
      tags: ["UI/UX", "Mobile", "App"],
      category: "UI/UX",
      details: "Created an intuitive and engaging user interface for a fitness tracking mobile application, focusing on user experience and modern design principles.",
      client: "FitTrack Pro",
      year: "2024"
    },
    {
      id: 3,
      title: "Website Redesign",
      description: "Complete website overhaul for e-commerce platform",
      image: "photo-1486312338219-ce68d2c6f44d",
      tags: ["Web Design", "E-commerce", "Responsive"],
      category: "Web Design",
      details: "Redesigned an entire e-commerce website with focus on conversion optimization, user experience, and mobile responsiveness.",
      client: "ShopEasy",
      year: "2023"
    },
    {
      id: 4,
      title: "Print Design Campaign",
      description: "Marketing materials for fashion brand",
      image: "photo-1498050108023-c5249f4df085",
      tags: ["Print", "Marketing", "Fashion"],
      category: "Print Design",
      details: "Designed a comprehensive print campaign including brochures, posters, and packaging materials for a luxury fashion brand's seasonal collection.",
      client: "Luxe Fashion",
      year: "2023"
    },
    {
      id: 5,
      title: "Digital Illustration",
      description: "Custom illustrations for children's book",
      image: "photo-1487058792275-0ad4aaf24ca7",
      tags: ["Illustration", "Digital Art", "Book"],
      category: "Illustration",
      details: "Created a series of whimsical digital illustrations for a children's book, bringing characters and scenes to life with vibrant colors and engaging compositions.",
      client: "Little Stories Publishing",
      year: "2024"
    },
    {
      id: 6,
      title: "Corporate Presentation",
      description: "Investor pitch deck design",
      image: "photo-1488590528505-98d2b5aba04b",
      tags: ["Presentation", "Corporate", "Design"],
      category: "Presentation",
      details: "Designed a compelling investor pitch deck with clear data visualization and professional aesthetics to help secure funding for a startup.",
      client: "InnovateCorp",
      year: "2024"
    }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my best work showcasing creativity, technical skills, and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group cursor-pointer hover-lift overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <Badge className="bg-orange-500 text-white mb-2">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Projects;
