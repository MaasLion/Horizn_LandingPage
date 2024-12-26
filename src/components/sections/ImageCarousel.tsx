import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80",
    title: "Dream Job Scene"
  },
  {
    url: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2850&q=80",
    title: "Peer Recognition"
  },
  {
    url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2850&q=80",
    title: "Mentorship"
  },
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2850&q=80",
    title: "Career Growth"
  }
];

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={image.url}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentIndex === index ? 0.6 : 0,
            scale: currentIndex === index ? 1 : 1.1
          }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#091235]/80 via-[#091235]/60 to-[#091235]" />
        </motion.div>
      ))}
    </div>
  );
};