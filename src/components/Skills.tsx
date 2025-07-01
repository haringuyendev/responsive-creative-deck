
import { Progress } from '@/components/ui/progress';

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

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-orange-500">
                {category.title}
              </h3>
              <div className="space-y-4">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
