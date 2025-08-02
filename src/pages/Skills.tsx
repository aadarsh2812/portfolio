import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '📘' },
        { name: 'JavaScript', level: 95, icon: '💛' },
        { name: 'HTML/CSS', level: 98, icon: '🎨' },
        { name: 'Tailwind CSS', level: 85, icon: '🌪️' },
        { name: 'Next.js', level: 80, icon: '▲' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 80, icon: '🚀' },
        { name: 'Python', level: 75, icon: '🐍' },
        { name: 'Django', level: 70, icon: '🎯' },
        { name: 'REST APIs', level: 85, icon: '🔌' },
        { name: 'GraphQL', level: 65, icon: '📊' },
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'PostgreSQL', level: 75, icon: '🐘' },
        { name: 'Git', level: 90, icon: '📝' },
        { name: 'Docker', level: 70, icon: '🐳' },
        { name: 'AWS', level: 65, icon: '☁️' },
        { name: 'Firebase', level: 75, icon: '🔥' },
      ]
    }
  ];

  const codingProfiles = [
    { name: 'LeetCode', username: 'aadarsh_ka', solved: '250+', url: 'https://leetcode.com/aadarsh_ka' },
    { name: 'HackerRank', username: 'aadarsh_ka', stars: '5⭐', url: 'https://hackerrank.com/aadarsh_ka' },
    { name: 'GeeksforGeeks', username: 'aadarsh_ka', score: '1500+', url: 'https://auth.geeksforgeeks.org/user/aadarsh_ka' },
    { name: 'CodeChef', username: 'aadarsh_ka', rating: '1800+', url: 'https://codechef.com/users/aadarsh_ka' },
  ];

  const articles = [
    {
      title: 'Building Scalable React Applications with TypeScript',
      platform: 'Medium',
      url: 'https://medium.com/@aadarsh/react-typescript',
      date: '2024'
    },
    {
      title: 'Advanced CSS Animations and Micro-Interactions',
      platform: 'Dev.to',
      url: 'https://dev.to/aadarsh/css-animations',
      date: '2024'
    },
    {
      title: 'Modern State Management in React Applications',
      platform: 'Medium',
      url: 'https://medium.com/@aadarsh/state-management',
      date: '2023'
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
            <span className="text-gradient-primary">Skills & Profiles</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My technical expertise spans across various technologies and platforms. 
            Here's an overview of my skills and coding profiles.
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

        {/* Coding Profiles Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Coding Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {codingProfiles.map((profile) => (
              <motion.div key={profile.name} variants={itemVariants} whileHover={{ y: -5 }}>
                <Card className="glass border-border/50 hover:glow-primary transition-smooth cursor-pointer">
                  <a href={profile.url} target="_blank" rel="noopener noreferrer" className="block p-6">
                    <div className="text-center space-y-2">
                      <h3 className="font-bold text-lg">{profile.name}</h3>
                      <p className="text-muted-foreground">@{profile.username}</p>
                      <div className="flex items-center justify-center gap-2">
                        <Badge variant="secondary">
                          {profile.solved || profile.stars || profile.score || profile.rating}
                        </Badge>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Articles Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
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
      </div>
    </div>
  );
};

export default Skills;