import { motion } from 'framer-motion';
import { GraduationCap, Code, Coffee, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: GraduationCap, label: 'Education', value: '4th Year Student' },
    { icon: Code, label: 'Projects', value: '30+ Completed' },
    { icon: Coffee, label: 'Coffee Cups', value: '1000+ Consumed' },
    { icon: Users, label: 'Team Projects', value: '10+ Collaborations' }
  ];

  const interests = [
    'Data & AI Research',
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Cloud Computing',
    'Machine Learning',
  ];

  return (
    <section id="about" className="py-16 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Compact Layout - Single Column on Mobile, Two Columns on Desktop */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Profile Image - More Compact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1 flex justify-center"
            >
              <div className="relative w-64 h-64">
                {/* Holographic Ring Effect */}
                <motion.div
                  animate={{ 
                    rotateZ: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-full border-3 border-transparent"
                  style={{
                    background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ef4444, #3b82f6)',
                    WebkitMask: 'radial-gradient(circle at center, transparent 75%, black 76%, black 100%)',
                    mask: 'radial-gradient(circle at center, transparent 75%, black 76%, black 100%)'
                  }}
                />

                {/* Floating Card */}
                <motion.div
                  animate={{
                    rotateX: [0, 3, 0, -3, 0],
                    rotateY: [0, 2, 0, -2, 0],
                    y: [0, -8, 0, 8, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative w-full h-full"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.2))'
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-black/5 backdrop-blur-sm border border-white/20" />
                  
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/30">
                    <img
                      src="/pro6.jpeg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                    
                    <motion.div
                      animate={{
                        background: [
                          'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
                          'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
                          'linear-gradient(225deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
                          'linear-gradient(315deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)'
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content - Takes 2 columns on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Software Engineering Undergraduate | Associate AI Engineer at Allianz
                </h3>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
                  <p className="text-base">
                    I am a Software Engineering undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), 
                    currently working as an Associate AI Engineer at Allianz Insurance Lanka Limited, following
                    my experience as an Associate Software Engineer and Data & AI Research Intern.
                    I have completed two years of academic study and earned a diploma, and 
                    I am continuing my degree with an expected graduation in 2027.
                  </p>
                  
                  <p className="text-base">
                    My technical interests focus on software engineering, cloud-native development, and practical
                    applications of artificial intelligence. I have hands-on experience building full-stack systems
                    with AWS, Spring Boot, Angular, Next.js, MERN, Java, and PHP. This experience supports my work
                    in developing scalable backend services, cloud automation solutions, and modern web applications.
                  </p>
                  
                  <p className="text-base">
                    In addition, I have a strong foundation in mobile application development using Flutter, Kotlin, 
                    XML, and Android Studio, and I have applied AI concepts in projects involving data analysis, 
                    automation, and intelligent decision-making.
                  </p>
                </div>
              </div>

              {/* Compact Interests Section */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">Interests & Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid - More Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.03, y: -3 }}
                className="text-center p-5 bg-background rounded-xl shadow-md border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;