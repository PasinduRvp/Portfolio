
import { motion } from 'framer-motion';
import { GraduationCap, Code, Coffee, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: GraduationCap, label: 'Education', value: '3rd Year Student' },
    { icon: Code, label: 'Projects', value: '6+ Completed' },
    { icon: Coffee, label: 'Coffee Cups', value: '500+ Consumed' },
    { icon: Users, label: 'Team Projects', value: '3+ Collaborations' }
  ];

  const interests = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Cloud Computing',
    'Machine Learning',
    'Artificial Intelligence'
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary"><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">About Me</span></span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and what drives my passion for technology
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full animate-pulse-slow"></div>
                
                {/* Profile image placeholder */}
                <div className="relative w-full h-full rounded-full shadow-2xl overflow-hidden">
                  <img
                      src="/pro6.jpeg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                </div>

                
                {/* Floating decorations */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-60"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-600 rounded-full opacity-60"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Software Engineering Student at SLIIT
              </h3>
              
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                <p>
                  I'm a passionate Software Engineering student at the Sri Lanka Institute of Information Technology (SLIIT), having completed two years and earned a diploma. I’m currently pursuing my degree with an expected graduation in 2027.
                </p>
                
                <p>
                  I specialize in full-stack web development with hands-on experience in technologies like React, Node.js, and cloud platforms. I also have a strong grasp of mobile app development using XML, Kotlin, and Android Studio, enabling me to create intuitive and responsive apps.
                </p>
                
                <p>
                  Beyond coding, I enjoy exploring emerging technologies, contributing to open-source projects, and collaborating on innovative solutions with fellow developers.
                </p>
              </div>

              {/* Interests */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-foreground mb-4">Interests & Focus Areas</h4>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-background rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
