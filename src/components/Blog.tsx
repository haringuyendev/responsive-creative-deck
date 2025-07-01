
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Design: Trends to Watch in 2024",
      excerpt: "Exploring the latest design trends that are shaping the digital landscape and how to implement them effectively.",
      image: "photo-1488590528505-98d2b5aba04b",
      category: "Design Trends",
      date: "Dec 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Effective Brand Identity: A Complete Guide",
      excerpt: "Learn the essential elements of creating a memorable brand identity that resonates with your target audience.",
      image: "photo-1461749280684-dccba630e2f6",
      category: "Branding",
      date: "Dec 10, 2024",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Color Psychology in Digital Design",
      excerpt: "Understanding how colors influence user behavior and decision-making in digital interfaces.",
      image: "photo-1486312338219-ce68d2c6f44d",
      category: "Psychology",
      date: "Dec 5, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-gradient">Blog Posts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on design, creativity, and the ever-evolving world of visual communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group cursor-pointer hover-lift overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="group-hover:text-orange-500 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
