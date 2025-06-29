import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
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
    link.download = 'Pasindu_Vidanapathirana_CV.pdf'; // Name you want the downloaded file to have
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
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
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
                className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Software Engineering undergraduate at SLIIT with a passion for full-stack development and emerging technologies. Actively seeking an internship to apply my skills and gain hands-on industry experience.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              >
                {/* Update the Download CV button */}
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

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex justify-center space-x-6"
              >
                {[
                  { icon: Github, href: 'https://github.com/PasinduRvp?tab=repositories', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/pasindu-nimsara-vidanapathirana-133b04370/', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:rvppasindu@gmail.com', label: 'Email' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-muted hover:bg-primary flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right side - Profile Picture */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative pt-8 md:pt-31 md:pt-9"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blue-300/30 rounded-full blur-2xl opacity-70"></div>
                
                {/* Profile image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl w-full h-full"
                >
                  <img
                    src="/m5.jpg"
                    alt="Pasindu Vidanapathirana"
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>

                {/* Decorative circles */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/60 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-blue-900/50 rounded-full"></div>
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
