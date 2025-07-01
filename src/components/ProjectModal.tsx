
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img 
              src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-orange-500 mb-2">Project Details</h3>
              <p className="text-muted-foreground">{project.details}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-1">Client</h4>
                <p className="text-muted-foreground">{project.client}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Year</h4>
                <p className="text-muted-foreground">{project.year}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            {project.link && (
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                View Live Project
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
