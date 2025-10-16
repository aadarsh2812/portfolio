import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Spina from '@/assets/Spinacle.webp';
import Bigbang from '@/assets/BBBS.webp';
import GDG from '@/assets/GDG.webp';
// import san from '@/assets/santhosh.webp';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      date: "Apr 2024 - May 2024",
      title: "Project Intern",
      company: "Spinaces Technologies",
      description: "Developed and AIoT device for Real Time tracking based of Audio using ESP 32 and Azure. Implemented real-time data processing and cloud integration to enhance device functionality.",
      logo: Spina,
      link: "https://spinacle.net/"
    },
    {
      date: "August 2024 - Present",
      title: "Student Ambassador",
      company: "Center of Excellence for IOT.",
      description: "Leading a Center of 50 members and promoting IoT initiatives. Organizing workshops and events to foster innovation and collaboration among students. Mentoring junior members and facilitating partnerships with industry leaders.",
      logo: "/path/to/your/logo.png", // Replace with the actual path to your logo
      link: "#"
    },
    
    {
      date: "Jan 2025 - Jun 2025",
      title: "Research and Development Intern",
      company: "Spinaces Technologies",
      description: "Worked on the development of an IoT based innovative healthcare device. Engaging in the full product lifecycle from R&D to MVP.",
      logo: Spina,
      link: "https://spinacle.net/"
    },
    {
      date: "Jun 2025 - Sep 2025",
      title: "Drone Engineering Intern",
      company: "BigBangBoom Solutions",
      description: "Gained the Standards of Defence grade engineering quality, and worked on the development of Drone based projects. Involved in building, testing and quality assurance to ensure reliability and performance.",
      logo: Bigbang,
      link: "http://www.bigbangboom.com/"
    },
    {
      date: "Jan 2024 - Oct 2025",
      title: "IOT Expert",
      company: "Google Developer Groups",
      description: "Conducted workshops and sessions on IoT. Mentored students in developing IoT solutions using Google Cloud Platform.",
      logo: GDG,
      link: "https://www.linkedin.com/company/gdg-on-campus-rit-chennai/posts/?feedView=all"
    }
  ];

  /*const testimonials = [
    {
      quote: "Aadarsh is a highly motivated and skilled individual. His dedication to his work is truly commendable.",
      author: "Santhosh Kumar Ethiraj",
      title: "Founder & CEO, Spinacle Technologies | Entrepreneur-in-Residence Microheal",
      image: san,
      link: "https://www.linkedin.com/in/santhosh-kumar-ethiraj-986b66200/"
    }
  ];*/

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

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
    hidden: { y: 20, opacity: 0 },
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
    <div className="min-h-screen">
      <div
        className="min-h-screen pt-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">MY JOURNEY</span>
            </h1>
          </motion.div>

          <div ref={ref} className="relative w-full max-w-4xl mx-auto">
            <ol className="relative z-10">
              {experiences.map((experience, index) => (
                <motion.li
                  key={index}
                  className="mb-12"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex items-center`}>
                    <div className="flex flex-col items-center justify-center w-24">
                      <img src={experience.logo} alt={`${experience.company} logo`} className="w-20 h-20 rounded-full mb-2" />
                      <a href={experience.link} target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
                      </a>
                    </div>
                    <div className="flex-1">
                      <div className={`p-6 rounded-lg shadow-lg glass ml-8`}>
                        <h3 className="text-xl font-bold text-primary-foreground mb-2">
                          {experience.date}: <span className="text-primary">{experience.company}</span>
                        </h3>
                        <h4 className="text-lg font-semibold text-foreground">{experience.title}</h4>
                        <p className="text-muted-foreground mt-2">{experience.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      {/*<motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-0 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">Testimonials</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Card className="glass border-border/50 overflow-hidden h-full transition-smooth hover:glow-primary">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <img src={testimonial.image} alt={testimonial.author} className="w-32 h-24 rounded-md" />
                    <div>
                      <CardTitle>{testimonial.author}</CardTitle>
                      <CardDescription>{testimonial.title}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                    <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="text-primary mt-4 inline-flex items-center">
                      <link rel="stylesheet" href="" /> <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>*/}
    </div>
  );
};


export default Experience;