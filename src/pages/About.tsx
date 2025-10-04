import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">About Me</span>
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Creative Developer from Chennai</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm Aadarsh K A S, a passionate B.E. Electronics Engineering student 
                  specializing in IoT, embedded systems, and PCB design for secure, real-time defense 
                  applications. Currently pursuing my degree at Rajalakshmi Institute of Technology 
                  with a CGPA of 8.7/10.0.
                </p>
                <p>
                  My journey in electronics and embedded systems started during my college years when I 
                  discovered the power of IoT and embedded technologies to solve real-world problems. 
                  I've been privileged to intern at Spinacle Technologies, where I developed mission-critical 
                  IoT systems and worked on healthcare devices using embedded systems.
                </p>
                <p>
                  As a published researcher in IEEE, I've presented my work on smart wheelchair systems 
                  based on voice recognition for physically disabled people. My expertise spans across 
                  IoT development, PCB design using Altium, and embedded programming with various 
                  development boards including Arduino, Raspberry Pi, STM32, and ESP32.
                </p>
                <p>
                  I'm passionate about contributing to innovative defense technologies and anti-drone 
                  systems. When I'm not working on embedded projects, you can find me leading IoT 
                  workshops, mentoring juniors, or exploring new technologies in machine learning 
                  and digital electronics.
                </p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="glow-primary group">
                <Download className="h-5 w-5 mr-2 transition-transform group-hover:translate-y-1" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative glass rounded-2xl p-2 border border-border/50">
                <img
                  src="/api/placeholder/500/600"
                  alt="Aadarsh K A S"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary">Fresher</div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-xl font-bold text-primary">VLSI & AI</div>
                <div className="text-sm text-muted-foreground">Enthusiast</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;