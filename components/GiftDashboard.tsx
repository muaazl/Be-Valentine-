import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { AppScreen } from '../types';

interface GiftDashboardProps {
  onSelectGift: (gift: AppScreen) => void;
  onBack: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const GiftDashboard: React.FC<GiftDashboardProps> = ({ onSelectGift, onBack }) => {
  
  useEffect(() => {
    // Trigger confetti on mount
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
    
    // Also do a big burst at the center start
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F472B6', '#EF4444', '#EC4899']
    });

  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl px-4 relative py-8 md:py-0">
       {/* Back Button */}
       <button
        onClick={onBack}
        className="absolute top-0 left-4 md:left-0 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white text-gray-600 z-50 transition-all hover:scale-110"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Celebration Header */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="text-center mb-8 md:mb-12 mt-12 md:mt-0"
      >
        <div className="relative inline-block">
          <Heart className="text-red-500 w-20 h-20 md:w-32 md:h-32 animate-pulse" fill="currentColor" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-5xl font-bold">
            :)
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-red-500 mt-6 font-handwriting">
          Yay, you said yes!
        </h1>
        <p className="text-pink-400 mt-2 text-base md:text-lg">I made all these for you hehe</p>
      </motion.div>

      {/* Gifts Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-sm md:max-w-none pb-20 md:pb-0"
      >
        <GiftCard
          title="My Love"
          delay={0}
          onClick={() => onSelectGift(AppScreen.GIFT_BOUQUET)}
          color="bg-red-100"
          hoverColor="group-hover:bg-red-200"
          iconColor="text-red-400"
        />
        <GiftCard
          title="For You"
          delay={1}
          onClick={() => onSelectGift(AppScreen.GIFT_LETTER)}
          color="bg-pink-100"
          hoverColor="group-hover:bg-pink-200"
          iconColor="text-pink-400"
        />
        <GiftCard
          title="Our Song"
          delay={2}
          onClick={() => onSelectGift(AppScreen.GIFT_MUSIC)}
          color="bg-rose-100"
          hoverColor="group-hover:bg-rose-200"
          iconColor="text-rose-400"
        />
      </motion.div>
    </div>
  );
};

interface GiftCardProps {
  title: string;
  onClick: () => void;
  color: string;
  hoverColor: string;
  iconColor: string;
  delay: number;
}

const GiftCard: React.FC<GiftCardProps> = ({ title, onClick, color, hoverColor, iconColor }) => {
  return (
    <motion.button
      variants={itemVariants}
      whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`group relative h-40 md:h-48 rounded-3xl border-4 border-white shadow-xl flex flex-col items-center justify-center gap-4 ${color} transition-colors duration-300 w-full`}
    >
      <div className={`p-4 bg-white rounded-full shadow-sm ${iconColor}`}>
        <Gift size={32} className="md:w-10 md:h-10" />
      </div>
      <span className="font-bold text-lg md:text-xl text-gray-700">{title}</span>
      <div className={`absolute inset-0 rounded-3xl bg-white opacity-0 ${hoverColor} mix-blend-multiply transition-opacity duration-300`} />
    </motion.button>
  );
};

export default GiftDashboard;