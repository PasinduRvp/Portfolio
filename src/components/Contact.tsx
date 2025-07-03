import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, MapPin, Phone, Mail, Github, Linkedin, Instagram, FacebookIcon, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    if (!form.current) return;

    emailjs
      .sendForm(
        'service_dlvmpgr',      // Replace with your EmailJS service ID
        'template_09mru0n',     // Replace with your EmailJS template ID
        form.current,
        'csZd2z4jno7I0lAv1'       // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus('success');
          toast({
            title: "Message sent successfully!",
            description: "Thank you for your message. I'll get back to you soon!",
          });
        },
        () => {
          setStatus('error');
          toast({
            title: "Error",
            description: "There was an error sending your message. Please try again later.",
            variant: "destructive",
          });
        }
      );
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Matara, Sri Lanka',
      color: 'text-red-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 76 040 0525',
      color: 'text-green-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'rvppasindu@gmail.com',
      color: 'text-blue-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/PasinduRvp?tab=repositories',
      color: 'hover:bg-gray-900 hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pasindu-vidanapathirana-a3b9a1371',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:rvppasindu@gmail.com',
      color: 'hover:bg-red-500 hover:text-white'
    },
    {
      icon:Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/__.rvp.pn.__/profilecard/?igsh=YW5tMmQ0MjB3YTRl/',
      color: 'hover:bg-pink-500 hover:text-white'
    },
    {
      icon:Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/share/16rmG2nMNe/',
      color: 'hover:bg-blue-700 hover:text-white'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-foreground mb-8">Let's Connect</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development. Feel free to 
                reach out through any of the channels below.
              </p>

              {/* Contact Information */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-full bg-background flex items-center justify-center ${info.color}`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, x: 50, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ 
                        delay: 0.3 + index * 0.2,
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
                          y: -8,
                          rotateZ: 5
                        }}
                        whileTap={{ 
                          scale: 0.9,
                          rotateZ: -5
                        }}
                        className={`relative w-12 h-12 rounded-full bg-muted ${social.color} flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-white/20 backdrop-blur-sm`}
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
                          <social.icon className="h-5 w-5" />
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
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="user_name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell me about your project or say hello!"
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium"
                  >
                    {status === 'sending' ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  🚀 <strong>Quick Response:</strong> I typically respond within 24 hours
                </p>
              </div>

              {status === 'success' && (
                <p className="text-green-600 text-center mt-2">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center mt-2">Failed to send message. Try again.</p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
