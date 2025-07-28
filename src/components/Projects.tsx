import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Hospital Management System',
      description: 'Developed a Hospital Management System with patient/staff management, appointment scheduling , pharmacy/lab systems , nursing school integration , and a secure role  based admin dashboard. Optimizes hospital operations for better efficiency.',
      image: '/pro2.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      demoUrl: '#',
      githubUrl: 'https://github.com/PasinduRvp/Hospital-Laboratory-Pharmacy_Management_System.git',
      featured: true
    },
    {
      id: 2,
      title: 'Financial Tracking App',
      description: 'Designed and developed a personal finance management Android app with income/expense tracking , budgeting , and spending insights. Includes smart notifications , data persistence , and optional backup/restore functionality.',
      image: '/f1.png',
      technologies: ['Kotlin', 'XML', 'SQLite'],
      demoUrl: '#',
      githubUrl: 'https://github.com/PasinduRvp/Financial_Tracking_Application.git',
      featured: true
    },
    {
      id: 3,
      title: 'NOURA Fashion Store',
      description: 'Developed a full-featured online fashion store with user account management , product catalog , shopping cart , Review system and secure session-based authentication.',
      image: '/fa1.png',
      technologies: ['PHP', 'CSS', 'JavaScript', 'MySQL'],
      demoUrl: '#',
      githubUrl: 'https://github.com/PasinduRvp/Fashion_Store.git',
      featured: false
    },
    {
      id: 4,
      title: 'Melody Mart Music Instrument Store',
      description: 'Developed a feature-rich mobile commerce app for musical instruments , with wishlist , cart , order tracking , secure authentication , and multi-option payment integration to enhance user shopping experience.',
      image: '/m1.png',
      technologies: ['Kotlin', 'XML', 'SQLite'],
      demoUrl: '#',
      githubUrl: 'https://github.com/PasinduRvp/Music_Instrument_Store.git',
      featured: false
    },
    {
      id: 5,
      title: 'PropertyLK Property Management System',
      description: 'Developed a feature-rich Property Management System with user account management , product catalog , Review system , Report generator and secure session-based authentication.',
      image: '/pro1.jpeg',
      technologies: ['JAVA', 'Tomcat'],
      demoUrl: '#',
      githubUrl: 'https://github.com/PasinduRvp/Property-Management-System.git',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Developed a my personal portfolio website to showcase my skills, projects, educations and contact options. The site features a modern design, responsive layout, and interactive elements to enhance user engagement.',
      image: '/pro7.png',
      technologies: ['React', 'Tailwind CSS'],
      demoUrl: '#',
      githubUrl: 'https://github.com/PasinduRvp/Portfolio.git',
      featured: true
    },
    {
      id: 7,
      title: 'Academic Performance Dashboard',
      description: 'A modern GPA calculator web app that allows students to input course grades, track academic performance visually, and download a personalized academic transcript with GPA summary.',
      image: '/gpa1.jpg',
      technologies: ['React', 'Tailwind CSS'],
      demoUrl: 'https://gpa-calculator-ten-woad.vercel.app/',
      githubUrl: 'https://github.com/PasinduRvp/GPA-Calculator.git',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">🌟 Newest Projects</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-6" >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="default"
                          size="sm"
                          className="flex-1 bg-primary hover:bg-primary/90"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Other Projects</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="default"
                          size="sm"
                          className="flex-1 bg-primary hover:bg-primary/90"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Github className="mr-1 h-3 w-3" />
                          GitHub
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 bg-card rounded-2xl border border-border shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These are just a few highlights from my portfolio. Check out my GitHub 
              for more projects and contributions to open-source repositories.
            </p>
            <a
              href="https://github.com/PasinduRvp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
