
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: "Email",
      value: "hello@designer.com",
      icon: "✉️"
    },
    {
      title: "Phone",
      value: "+1 (555) 123-4567",
      icon: "📱"
    },
    {
      title: "Location",
      value: "New York, NY",
      icon: "📍"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#", icon: "💼" },
    { name: "Dribbble", url: "#", icon: "🏀" },
    { name: "Instagram", url: "#", icon: "📸" },
    { name: "Twitter", url: "#", icon: "🐦" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <Input
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full hover-lift"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-center gap-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <div className="font-semibold">{info.title}</div>
                        <div className="text-muted-foreground">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-xl hover:bg-orange-500 hover:text-white transition-colors hover-lift"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Available for Freelance</h4>
                  <p className="text-muted-foreground mb-4">
                    I'm currently available for freelance projects and collaborations. 
                    Let's create something extraordinary together!
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Available Now</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
