import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/PasinduRvp?tab=repositories', label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/pasindu-vidanapathirana-a3b9a1371/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Mail, href: 'mailto:rvppasindu@gmail.com', label: 'Email', color: 'hover:bg-red-500' },
    { icon: Instagram, href: 'https://www.instagram.com/__.rvp.pn.__/profilecard/?igsh=YW5tMmQ0MjB3YTRl/', label: 'Instagram', color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Pasindu Rvp</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Software Engineering student passionate about creating innovative 
              web solutions and learning cutting-edge technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, x: 50, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.3 + index * 0.2,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }}
                  className="relative group"
                >
                  {/* Hover background pulse effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.3, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Icon container */}
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.15,
                      y: -8,
                      rotateZ: 5
                    }}
                    whileTap={{ 
                      scale: 0.9,
                      rotateZ: -5
                    }}
                    className={`relative w-12 h-12 rounded-full bg-background ${social.color} flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-white/20 backdrop-blur-sm`}
                    aria-label={social.label}
                  >
                    {/* Icon glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Rotating border */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-transparent"
                      style={{
                        background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
                        mask: 'radial-gradient(circle, transparent 85%, black 86%, black 90%, transparent 91%)',
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Icon with bounce animation */}
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="relative z-10"
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.div>
                  </motion.a>
                  {/* Tooltip */}
                  <motion.div
                    className="absolute left-full ml-4 px-3 py-1 bg-foreground text-background text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                  >
                    {social.label}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-foreground" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>📍 Matara, Sri Lanka</p>
              <p>
                📧 <a href="mailto:rvppasindu@gmail.com" className="hover:underline">rvppasindu@gmail.com</a>
              </p>
              <p>🎓 SLIIT - Software Engineering</p>
            </div>
            
            <div className="mt-6 p-4 bg-background rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                💼 <strong>Currently:</strong> Open to internship opportunities 
                and collaborative projects
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border mt-8 pt-8"
        >
          <div className="w-full flex justify-center items-center text-muted-foreground text-sm mb-4 md:mb-0">
            <span>© {currentYear} Pasindu Vidanapathirana</span>
          </div>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
