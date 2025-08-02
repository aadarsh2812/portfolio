import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import ParticleBackground from './ParticleBackground';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      {/* Background gradient overlay */}
      <div className="fixed inset-0 -z-5 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-20 relative z-10"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default PageLayout;