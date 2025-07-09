import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'Mobile Application Developer',
    'Problem Solver'
  ];

  // Typewriter effect
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, roles]);

  // Floating particles animation variants
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleDownloadCV = () => {
    // Replace 'your-cv.pdf' with your actual CV file path in the public folder
    const cvUrl = '/Pasindu Vidanapathirana.pdf';
    
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Pasindu_Vidanapathirana_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{
              delay: Math.random() * 2,
              duration: 3 + Math.random() * 2,
              repeat: Infinity
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left side content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <span className="text-primary font-medium text-lg">Hello, I'm</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-foreground mb-6"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">Pasindu</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
                  Vidanapathirana
                </span>
              </motion.h1>

              {/* Typewriter text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8 h-8"
              >
                <span>{displayText}</span>
                <span className="animate-pulse">|</span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Software Engineering undergraduate at SLIIT with a passion for full-stack development and emerging technologies. Actively seeking an internship to apply my skills and gain hands-on industry experience.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
                  onClick={handleDownloadCV}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="mailto:rvppasindu@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Center - Animated Profile Picture */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative pt-8 md:pt-0 lg:-ml-8 xl:-ml-12"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                {/* Dark background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-full opacity-20"></div>
                
                {/* Animated outer ring segments */}
                <div className="absolute inset-0">
                  {/* Top arc */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-transparent"
                    style={{
                      borderTopColor: '#00008B',
                      borderRightColor: '#00008B',
                      borderTopWidth: '6px',
                      borderRightWidth: '6px',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Bottom arc */}
                  <motion.div
                    className="absolute inset-4 rounded-full border-4 border-transparent"
                    style={{
                      borderBottomColor: '#708090',
                      borderLeftColor: '#708090',
                      borderBottomWidth: '4px',
                      borderLeftWidth: '4px',
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Inner rotating segments */}
                  <motion.div
                    className="absolute inset-8 rounded-full border-2 border-transparent"
                    style={{
                      borderTopColor: '#0000CD',
                      borderRightColor: '#0000CD',
                      borderTopWidth: '3px',
                      borderRightWidth: '3px',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                
                {/* Profile image container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl z-10"
                >
                  {/* Profile image */}
                  <img
                    src="/p1.png"
                    alt="Pasindu Vidanapathirana"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </motion.div>
                
                {/* Floating particles around the image */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-800 rounded-full"
                      style={{
                        left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
                        top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
                      }}
                      animate={{
                        scale: [0.5, 1, 0.5],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: (i * 0.2),
                      }}
                    />
                  ))}
                </div>
                
                {/* Decorative arc segments */}
                <div className="absolute -inset-4">
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent 0deg, #3b82f6 60deg, transparent 120deg)',
                      mask: 'radial-gradient(circle, transparent 85%, black 86%, black 90%, transparent 91%)',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                
                {/* Static decorative circles */}
                <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-blue-700/40 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 border-2 border-cyan-800/30 rounded-full"></div>
                <div className="absolute top-4 -left-8 w-8 h-8 border-2 border-purple-700/40 rounded-full"></div>
              </div>
            </motion.div>

            {/* Right side - Social Links with Vertical Line */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative flex flex-col items-center"
            >
              {/* Animated vertical line */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-px h-96 bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent"
                initial={{ height: 0 }}
                animate={{ height: '24rem' }}
                transition={{ duration: 1.5, delay: 1.5 }}
              />
              
              {/* Social icons */}
              <div className="flex flex-col space-y-6 relative z-10">
                {[
                  { icon: Github, href: 'https://github.com/PasinduRvp?tab=repositories', label: 'GitHub', color: 'hover:bg-gray-800' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/pasindu-nimsara-vidanapathirana-a3b9a1371/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                  { icon: Mail, href: 'mailto:rvppasindu@gmail.com', label: 'Email', color: 'hover:bg-red-500' },
                  { icon: Instagram, href: 'https://www.instagram.com/__.rvp.pn.__/profilecard/?igsh=YW5tMmQ0MjB3YTRl/', label: 'Instagram', color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500' },
                  
                ].map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      delay: 1.8 + index * 0.2,
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
                        x: -8,
                        rotateZ: 5
                      }}
                      whileTap={{ 
                        scale: 0.9,
                        rotateZ: -5
                      }}
                      className={`relative w-14 h-14 rounded-full bg-muted ${social.color} flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-white/20 backdrop-blur-sm`}
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
                        <social.icon className="h-6 w-6" />
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
              
              
              
              {/* Floating particles around social icons */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/40 rounded-full"
                    style={{
                      left: `${30 + Math.random() * 40}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 5, 0],
                      opacity: [0.2, 0.8, 0.2],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
