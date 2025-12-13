import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      title: 'BSc(Hons) in Information Technology Specializing in Software Engineering',
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      year: '2023 - Present',
      description: 'Specializing in Software Engineering with hands-on experience in full-stack development, Mobile application development and project management.',
      logo: '/sliit-logo.png', // Replace with actual logo path
      icon: '🎓'
    },
    {
      title: 'Secondary Education',
      institution: 'MR/Telijjawila Central College',
      year: '2013 - 2022',
      description: 'G.C.E. Advanced Level (Physical Science Stream)',
      logo: '/central-college-logo.png', // Replace with actual logo path
      icon: '🏫'
    },
    {
      title: 'Primary Education',
      institution: 'Godapitiya M.V. Akuressa',
      year: '2008 - 2012',
      description: 'Foundation education with focus on academics and co-curricular activities.',
      logo: '/godapitiya-logo.png', // Replace with actual logo path
      icon: '📚'
    }
  ];

  // Handle logo image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const parent = target.parentElement;
    if (parent) {
      // Hide the image
      target.style.display = 'none';
      
      // Get appropriate emoji based on institution
      let emoji = '🎓';
      const text = parent.textContent || '';
      if (text.includes('SLIIT')) emoji = '🎓';
      else if (text.includes('Central')) emoji = '🏫';
      else if (text.includes('Godapitiya')) emoji = '📚';
      
      // Add emoji
      const emojiSpan = document.createElement('span');
      emojiSpan.className = 'text-2xl';
      emojiSpan.textContent = emoji;
      parent.appendChild(emojiSpan);
    }
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">Education & Qualifications</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Here is a Summary of My Academic Qualifications & Achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10 rounded-full shadow-sm"
          />
          
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex gap-6"
              >
                {/* Logo Container */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 overflow-hidden border border-primary/20">
                    {item.logo ? (
                      <img 
                        src={item.logo} 
                        alt={`${item.institution} logo`}
                        className="w-8 h-8 object-contain"
                        onError={handleImageError}
                      />
                    ) : (
                      <span className="text-2xl text-primary">{item.icon}</span>
                    )}
                  </div>
                </div>
                
                {/* Content Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.01,
                    transition: { duration: 0.2 }
                  }}
                  className="flex-grow bg-card hover:bg-card/80 p-6 rounded-xl border border-border transition-colors duration-300 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-primary font-medium mb-2">{item.institution}</p>
                  <p className="text-muted-foreground text-sm mb-2">{item.year}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                  
                  
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;