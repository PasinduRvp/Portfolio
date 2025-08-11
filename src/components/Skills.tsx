import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowDown } from 'lucide-react'; // Import ArrowDown
import { Button } from '@/components/ui/button';

const skillIcon = (name: string) => (
  // Placeholder for icons, replace with actual icons as needed
  <span className="inline-block w-6 h-6 mr-2 rounded-full bg-white/30 flex items-center justify-center text-xs font-bold text-foreground/70">
    {name[0]}
  </span>
);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90, color: 'bg-red-600' },
        { name: 'HTML', level: 95, color: 'bg-green-600' },
        { name: 'Tailwind CSS', level: 95, color: 'bg-gray-700' },
        { name: 'CSS', level: 95, color: 'bg-pink-700' },
        { name: 'JavaScript', level: 90, color: 'bg-indigo-700' }
      ]
    },
    
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90, color: 'bg-red-600' },
        { name: 'Express.js', level: 90, color: 'bg-green-600' },
        { name: 'Java', level: 90, color: 'bg-gray-700' },
        { name: 'PHP', level: 90, color: 'bg-pink-700' }
      ]
    },
    mobile: {
      title: 'Mobile Development',
      skills: [
        { name: 'XML', level: 95, color: 'bg-red-600' },
        { name: 'Kotlin', level: 90, color: 'bg-green-600' },
        
      ]
    },
    database: {
      title: 'Database Management',
      skills: [
        { name: 'MongoDB', level: 95, color: 'bg-red-600' },
        { name: 'MySQL', level: 95, color: 'bg-green-600' },
        { name: 'Tomcat', level: 95, color: 'bg-gray-700' },
        { name: 'SQLite', level: 95, color: 'bg-pink-700' },
        
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'GitHub', level: 90, color: 'bg-red-600' },
        { name: 'VS Code', level: 95, color: 'bg-green-600' },
        { name: 'Andoid Studio', level: 95, color: 'bg-gray-700' },
        { name: 'Eclipse', level: 95, color: 'bg-pink-700' },
        { name: 'Figma', level: 95, color: 'bg-indigo-700' },
      ]
    }
  };

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>;

  // Add scroll to next section
  const scrollToNext = () => {
    const nextSection = document.querySelector('#projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-background/80 to-primary/10 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12 relative"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${activeCategory === category
                    ? 'bg-primary/90 text-primary-foreground shadow-xl scale-110'
                    : 'bg-muted/70 text-muted-foreground hover:bg-muted/90 hover:text-foreground'
                  } overflow-hidden`}
                style={{ zIndex: 1 }}
              >
                <span className="relative z-10">{skillCategories[category].title}</span>
                {activeCategory === category && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute left-0 right-0 bottom-0 h-1 rounded-b-full bg-primary"
                    style={{ zIndex: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.97, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 30 }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.18 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.08, type: 'spring', bounce: 0.22 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] group relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {skillIcon(skill.name)}
                      <h3 className="text-lg font-semibold text-foreground drop-shadow">{skill.name}</h3>
                    </div>
                    <span className="text-sm font-medium text-primary">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-muted/60 rounded-full h-3 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.08 + 0.2, type: 'spring', bounce: 0.3 }}
                      viewport={{ once: true }}
                      className={`h-full ${skill.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse group-hover:opacity-60 transition-opacity"></div>
                    </motion.div>
                  </div>
                  {/* Glass shine effect */}
                  <motion.div
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '120%' }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    className="absolute top-0 left-0 w-1/3 h-full bg-white/10 pointer-events-none rotate-12"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring', bounce: 0.18 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Always Learning</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I am continuously expanding my technical expertise and staying current with emerging technologies. My current focus includes advanced React patterns, Java development, and cloud-native architecture.
            </p>
          </motion.div>
        </div>
      </div>

     
    </section>
  );
};

export default Skills;
