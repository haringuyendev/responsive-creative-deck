
const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold text-gradient">
            Portfolio
          </div>
          
          <div className="text-muted-foreground text-center">
            © 2024 Creative Designer. All rights reserved.
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
