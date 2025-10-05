import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import muscleSyncImage from '@/assets/musclesync.png';
import obstacleBotImage from '@/assets/obstacle-bot.png';
import gammaClassificationImage from '@/assets/gamma-classification.png';
import esp32AudioImage from '@/assets/esp32-audio.jpg';
import Gut_tracker from '@/assets/Gut_tracker.png';
import Ledseq from '@/assets/Ledsequence.jpg';  

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'MuscleSync - Real-Time EMG Control System',
      description: 'Designed an EMG signal processing system using AI and embedded systems to enable real-time control, achieving 85% signal accuracy. Techniques adaptable for secure UAV operator interfaces in defense applications.',
      image: muscleSyncImage,
      technologies: ['AI', 'Embedded Systems', 'Signal Processing', 'Python', 'C']
    },
    {
      id: 2,
      title: 'Gut Health Management System',
      description: 'Engineered a Raspberry Pi-based IoT system for real-time sensor integration and cloud-based AI analysis, achieving 80% detection accuracy. Adaptable for defense-grade environmental monitoring.',
      image: Gut_tracker,
      technologies: ['Raspberry Pi', 'IoT', 'Cloud Computing', 'AI Analysis', 'Python']
    },
    {
      id: 3,
      title: 'Obstacle Avoidance Bot',
      description: 'Developed an Arduino UNO-based navigation system with ultrasonic/IR sensors in Embedded C, achieving 95% detection accuracy. Applicable to collision avoidance systems.',
      image: obstacleBotImage,
      technologies: ['Arduino UNO', 'Embedded C', 'Ultrasonic Sensors', 'IR Sensors']
    },
    {
      id: 4,
      title: 'ESP32 Audio Monitoring System',
      description: 'Developed an ESP32-based audio monitoring system with Azure data integration and AI-driven pattern analysis for real-time alerts during AIOT internship at Spinacle Technologies.',
      image: esp32AudioImage,
      technologies: ['ESP32', 'Azure', 'Audio Processing', 'Embedded C', 'Python']
    },
    {
      id: 5,
      title: 'LED Sequence PCB Design',
      description: `Designed a compact PCB for an LED indicator using Altium, optimized for systems. Applicable 
      status displays.`,
      image: Ledseq,
      technologies: ['Altium Designer', 'PCB Design', 'Digital Electronics', 'Low-Power Design']
    },
    {
      id: 6,
      title: 'Gamma vs. Hadron Classification',
      description: 'Built a K-Nearest Neighbors (KNN) classifier to distinguish gamma rays from hadrons using the MAGIC Gamma Telescope dataset, achieving ~80% accuracy with strong recall for gamma events.',
      image: gammaClassificationImage,
      technologies: ['Python', 'KNN', 'Scikit-learn', 'Data Analysis', 'Machine Learning']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">My Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge 
            and showcases different aspects of my development skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass border-border/50 overflow-hidden h-full transition-smooth hover:glow-primary">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;