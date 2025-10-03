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
        { name: 'DSP Processor', level: 75, icon: '📊' },
      ]
    },
    {
      title: 'Programming',
      skills: [
        { name: 'C', level: 95, icon: '💻' },
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'Embedded C', level: 95, icon: '⚡' },
        { name: 'Machine Learning', level: 75, icon: '🤖' },
        { name: 'IoT Development', level: 90, icon: '🌐' },
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

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={category.title} variants={itemVariants}>
                <Card className="glass border-border/50 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="flex items-center gap-2 font-medium">
                            <span className="text-lg">{skill.icon}</span>
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="bg-gradient-primary h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + 0.5 }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Featured Articles & Publications Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <motion.div key={article.title} variants={itemVariants} whileHover={{ y: -5 }}>
                <Card className="glass border-border/50 hover:glow-primary transition-smooth h-full">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                        <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      </div>
                      <CardDescription className="flex justify-between">
                        <span>{article.platform}</span>
                        <span>{article.date}</span>
                      </CardDescription>
                    </CardHeader>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <motion.div key={cert.name} variants={itemVariants}>
                <Card className="glass border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.year}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;