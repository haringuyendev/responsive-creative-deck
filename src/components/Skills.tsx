
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Software",
      skills: [
        { name: "Adobe Photoshop", level: 95 },
        { name: "Adobe Illustrator", level: 90 },
        { name: "Figma", level: 88 },
        { name: "Adobe InDesign", level: 85 }
      ]
    },
    {
      title: "Web Technologies", 
      skills: [
        { name: "HTML/CSS", level: 92 },
        { name: "JavaScript", level: 78 },
        { name: "React", level: 75 },
        { name: "WordPress", level: 80 }
      ]
    },
    {
      title: "Design Skills",
      skills: [
        { name: "UI/UX Design", level: 90 },
        { name: "Brand Identity", level: 95 },
        { name: "Print Design", level: 88 },
        { name: "Typography", level: 92 }
      ]
    }
  ];

  const toolsAndPlatforms = [
    "Adobe Creative Suite",
    "Sketch",
    "InVision",
    "Principle",
    "Webflow", 
    "Framer",
    "Canva",
    "Procreate",
    "Blender",
    "Cinema 4D",
    "After Effects",
    "Premiere Pro"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of design skills and technologies I use to bring creative visions to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="relative group animate-fade-in overflow-hidden"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="absolute top-0 left-full w-full h-0.5 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 group-hover:animate-[slide-border_1s_ease-out] opacity-0 group-hover:opacity-100"></div>
              <div className="absolute right-0 top-full w-0.5 h-full bg-gradient-to-b from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 group-hover:animate-[slide-border-vertical_1s_ease-out_0.25s] opacity-0 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 right-full w-full h-0.5 bg-gradient-to-l from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 group-hover:animate-[slide-border_1s_ease-out_0.5s] opacity-0 group-hover:opacity-100"></div>
              <div className="absolute left-0 bottom-full w-0.5 h-full bg-gradient-to-t from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 group-hover:animate-[slide-border-vertical_1s_ease-out_0.75s] opacity-0 group-hover:opacity-100"></div>
              
              <Card className="relative hover-lift bg-background">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-500">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        style={{
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1 + 0.5}s`
                        }}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            Tools & <span className="text-gradient">Platforms</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {toolsAndPlatforms.map((tool, index) => (
              <Badge 
                key={tool} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-orange-100 hover:text-orange-700 dark:hover:bg-orange-900 dark:hover:text-orange-300 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
