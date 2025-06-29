import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      title: 'BSc(Hons) inInformation Technology Specializing in Software Engineering',
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      year: '2023 - Present',
      description: 'Specializing in Software Engineering with hands-on experience in full-stack development , Mobile application development and project management.',
      icon: '🎓'
    },
    {
      title: 'Secondary Education',
      institution: 'MR/Telijjawila Central Collage',
      year: '2013 - 2022',
      description: 'G.C.E. Advanced Level (Physical Science Stream)',
      icon: '🏫'
    },
    {
      title: 'Primary Education',
      institution: 'Godapitiya M.V. Akuressa',
      year: '2008 - 2012',
      description: 'Foundation education with focus on academics and co-curricular activities.',
      icon: '📚'
    }
  ];

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
            Here is a summary of my academic qualifications and achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10 rounded-full shadow-sm"></div>
          
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
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl bg-primary/10 text-primary rounded-full">
                  {item.icon}
                </div>
                
                {/* Content Card */}
                <div className="flex-grow bg-card hover:bg-card/80 p-6 rounded-xl border border-border transition-colors duration-300 shadow-lg">
                  <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-primary font-medium mb-2">{item.institution}</p>
                  <p className="text-muted-foreground text-sm mb-2">{item.year}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;