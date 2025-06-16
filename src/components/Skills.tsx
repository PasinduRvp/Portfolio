
import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' },
        { name: 'Next.js', level: 80, color: 'bg-gray-800' },
        { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
        { name: 'JavaScript', level: 88, color: 'bg-yellow-500' }
      ]
    },
    
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-600' },
        { name: 'Express.js', level: 82, color: 'bg-gray-700' },
        { name: 'MongoDB', level: 78, color: 'bg-green-500' },
        { name: 'PostgreSQL', level: 75, color: 'bg-blue-700' },
        { name: 'REST APIs', level: 88, color: 'bg-purple-600' },
        { name: 'GraphQL', level: 70, color: 'bg-pink-600' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 90, color: 'bg-gray-800' },
        { name: 'VS Code', level: 95, color: 'bg-blue-600' },
        { name: 'Docker', level: 72, color: 'bg-blue-500' },
        { name: 'AWS', level: 68, color: 'bg-orange-600' },
        { name: 'Figma', level: 85, color: 'bg-purple-500' },
        { name: 'Postman', level: 88, color: 'bg-orange-500' }
      ]
    }
  };

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>;

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-primary">Technologies</span>
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {skillCategories[category].title}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className={`h-full ${skill.color} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 bg-muted/50 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Always Learning</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with the latest 
              technologies. Currently exploring advanced React patterns, microservices 
              architecture, and cloud-native development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
