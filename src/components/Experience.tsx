import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Software Engineer',
      institution: 'Allianz Insurance Lanka Limited',
      year: 'May 2026 - Present',
      description: 'Designing and developing software solutions that power insurance operations. Building scalable applications and integrating AI-driven features to modernize internal systems and enhance customer-facing platforms.',
      logo: '/alogo.png',
      icon: '💻',
      badge: 'Full-Time',
      badgeColor: 'from-primary/10 to-blue-600/10 text-primary border-primary/20',
      isLatest: true,
    },
    {
      title: 'Data and AI Research',
      institution: 'Allianz Insurance Lanka Limited',
      year: 'Nov 2025 - May 2026 · 6 mos',
      description: 'Conducted Research & Development in Data Analytics & Artificial Intelligence Applications for Insurance Solutions. Worked on innovative projects that leveraged AI to enhance insurance processes & customer experiences.',
      logo: '/alogo.png',
      icon: '🤖',
      badge: 'Internship',
      badgeColor: 'from-primary/10 to-blue-600/10 text-primary border-primary/20',
      isLatest: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -4,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const logoVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const parent = target.parentElement;
    if (parent) {
      parent.innerHTML = '🤖';
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-blue-700">
                Work Experience
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground"
          >
            My Professional Journey & Industry Experience
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Animated Timeline Line */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: '100%', opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full shadow-sm"
          />

          <div className="space-y-8">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="relative flex gap-6"
              >
                {/* Logo/Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    variants={logoVariants}
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 overflow-hidden shadow-lg"
                  >
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        className="w-8 h-8 object-contain"
                        onError={handleImageError}
                      />
                    ) : (
                      <span className="text-2xl">{item.icon}</span>
                    )}

                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary/30"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  variants={cardHoverVariants}
                  className="flex-grow relative overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div
                    className="relative bg-card p-6 rounded-xl border border-border backdrop-blur-sm"
                  >
                    {/* Promoted badge — top right corner */}
                    {item.isLatest && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="absolute top-4 right-4"
                      >
                        <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 tracking-wide">
                          ✦ Promoted
                        </span>
                      </motion.div>
                    )}

                    {/* Title */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring' as const, stiffness: 400 }}
                    >
                      <h3 className="text-xl font-bold text-foreground mb-1 inline-block">
                        {item.title}
                      </h3>
                    </motion.div>

                    {/* Institution */}
                    <motion.p
                      whileHover={{ scale: 1.02 }}
                      className="font-medium mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
                    >
                      {item.institution}
                    </motion.p>

                    {/* Year */}
                    <motion.p
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                      className="text-muted-foreground text-sm mb-2"
                    >
                      {item.year}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {item.description}
                    </motion.p>

                    {/* Divider */}
                    <motion.div
                      className="mt-4 pt-4 border-t border-border/50"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      viewport={{ once: true }}
                    />

                    {/* Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: 'spring' as const,
                        stiffness: 200,
                        delay: 0.6,
                      }}
                      className="mt-4 inline-block"
                    >
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full border bg-gradient-to-r ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Background floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/5 rounded-full blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;