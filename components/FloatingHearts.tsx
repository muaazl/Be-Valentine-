import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { FloatingHeartProps } from '../types';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<FloatingHeartProps[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: FloatingHeartProps[] = [];
      for (let i = 0; i < 20; i++) {
        newHearts.push({
          id: i,
          left: `${Math.random() * 100}%`,
          delay: Math.random() * 10,
          duration: 5 + Math.random() * 10,
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ y: '-10vh', opacity: [0, 1, 1, 0] }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          style={{ left: heart.left }}
          className="absolute text-pink-200/50"
        >
          <Heart size={20 + Math.random() * 30} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;