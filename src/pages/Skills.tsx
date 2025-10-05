import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Embedded Systems',
      skills: [
        { name: 'Arduino', level: 95, icon: '🔧' },
        { name: 'Raspberry Pi', level: 90, icon: '🍓' },
        { name: 'ESP32/ESP8266', level: 95, icon: '📡' },
        { name: 'STM32', level: 85, icon: '💾' },
      ]
    },
    {
      title: 'Programming',
      skills: [
        { name: 'C', level: 95, icon: '💻' },
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'Embedded C', level: 95, icon: '⚡' },
        { name: 'Verilog', level: 85, icon: '🔌' },
      ]
    },
    {
      title: 'Tools & Design',
      skills: [
        { name: 'Altium Designer', level: 85, icon: '🔧' },
        { name: 'Arduino IDE', level: 95, icon: '💡' },
        { name: 'Visual Studio', level: 85, icon: '📝' },
        { name: 'Git/GitHub', level: 90, icon: '🔀' },
      ]
    }
  ];

  const codingProfiles = [];

  const articles = [
    {
      title: 'Smart Wheelchair Based on Voice Recognition for Physically Disabled People',
      platform: 'IEEE Xplore',
      url: 'https://ieeexplore.ieee.org/document/10780365',
      date: '2024'
    }
  ];

  const certificates = [
    { name: 'Digital Circuits - NPTEL (IIT Kharagpur)', year: '2024' },
    { name: 'Electronics Foundation - LinkedIn', year: '2024' },
    { name: 'Data Visualization - Kaggle', year: '2024' },
    { name: 'PCB Design Course - Altium Education', year: '2024' },
    { name: 'All From Basics to GenAI Practice - NVIDIA', year: '2024' },
    { name: 'AWS IoT - Amazon Web Services', year: '2024' },
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
            <span className="text-gradient-primary">Skills & Profiles</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My technical expertise in embedded systems, IoT development, and PCB design. 
            Published IEEE researcher with hands-on experience in defense applications.
          </p>
        </motion.div>



        {/* Technical Expertise Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['IoT', 'Embedded Systems', 'Sensor Fusion', 'PCB Design', 'Digital Electronics', 'Drone Assembly', 'Machine Learning'].map((expertise) => (
              <motion.div key={expertise} variants={itemVariants}>
                <Badge variant="secondary" className="text-lg px-4 py-2">{expertise}</Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Altium', 'Visual Studio', 'Scilab', 'Arduino IDE', 'Multisim', 'TinkerCAD', 'Webench', 'TI Developer Zone', 'Logic Circuit Simulator'].map((tool) => (
              <motion.div key={tool} variants={itemVariants}>
                <Badge variant="secondary" className="text-lg px-4 py-2">{tool}</Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Version Control Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Version Control</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'GitHub'].map((tool) => (
              <motion.div key={tool} variants={itemVariants}>
                <Badge variant="secondary" className="text-lg px-4 py-2">{tool}</Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Skills;