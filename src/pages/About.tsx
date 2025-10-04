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
              <h2 className="text-3xl font-bold">Electronics Engineering Student</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm Aadarsh K A S, an Electronics Engineering student at Rajalakshmi Institute of Technology with a deep focus on creating secure and reliable embedded systems.
                </p>
                <p>
                  My passion lies in building solutions for high-stakes environments. This was put into practice during my internship at Spinacle Technologies, where I developed mission-critical IoT systems for healthcare. I further deepened my understanding of high-reliability systems at BigBangBoom Solutions, gaining valuable insights into quality assurance and technology standards for defense-grade drone systems. My commitment to impactful technology is also reflected in my IEEE-published research on a voice-controlled smart wheelchair.
                </p>
                <p>
                  My technical expertise includes full-stack IoT development, PCB design with Altium, and programming on platforms like Arduino, Raspberry Pi, STM32, and ESP32. I am driven to apply my skills to solve complex engineering problems and enjoy sharing my knowledge by leading workshops and mentoring fellow students.
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