import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart } from 'lucide-react';

interface WelcomeScreenProps {
  onYes: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onYes }) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  // Make the No button run away when hovered or touched
  const moveNoButton = () => {
    const x = Math.random() * 200 - 100; // Random x between -100 and 100
    const y = Math.random() * 200 - 100; // Random y between -100 and 100
    setNoButtonPosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50 }}
      className="max-w-4xl w-full flex flex-col items-center justify-center text-center space-y-8"
    >
      {/* Decorative Hanging Hearts (Static representation) */}
      <div className="absolute top-0 left-10 hidden md:flex flex-col items-center gap-2 animate-bounce duration-1000 delay-100">
        <div className="h-20 w-1 bg-red-300/50"></div>
        <Heart className="text-red-400" fill="currentColor" size={40} />
      </div>
      <div className="absolute top-0 right-10 hidden md:flex flex-col items-center gap-2 animate-bounce duration-1000 delay-700">
        <div className="h-32 w-1 bg-red-300/50"></div>
        <Heart className="text-red-400" fill="currentColor" size={32} />
      </div>

      {/* Main Content */}
      <div className="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl border-4 border-white flex flex-col items-center max-w-lg w-full relative mx-4">
        
        {/* Calendar Date Badge */}
        <div className="absolute -top-6 -right-6 bg-pink-100 border-4 border-white p-3 md:p-4 rounded-xl shadow-lg transform rotate-12 z-30">
          <div className="flex flex-col items-center text-pink-600 font-bold">
            <span className="text-[10px] md:text-xs uppercase">Feb</span>
            <span className="text-2xl md:text-3xl">14</span>
          </div>
        </div>

        {/* Cute Image */}
        <div className="w-32 h-32 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden border-4 border-pink-200 bg-pink-100 flex items-center justify-center">
            {/* Using a placeholder that looks like a cute drawing or pixel art */}
            <img 
                src="https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif" 
                alt="Cute Bears" 
                className="w-full h-full object-cover" 
            />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-pink-600 mb-2 font-handwriting">
          Hey there,
        </h1>
        <h2 className="text-xl md:text-3xl font-bold text-gray-700 mb-8">
          Will you be my Valentine?
        </h2>

        <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center relative min-h-[60px]">
          <button
            onClick={onYes}
            className="px-8 py-3 bg-red-400 text-white font-bold rounded-full shadow-lg hover:bg-red-500 hover:scale-110 transition-all duration-200 active:scale-95 z-20 w-full md:w-auto"
          >
            YES OF COURSE
          </button>

          <motion.button
            animate={noButtonPosition}
            onHoverStart={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={moveNoButton}
            className="px-8 py-3 bg-gray-300 text-gray-600 font-bold rounded-full shadow-lg hover:bg-gray-400 z-10 w-full md:w-auto touch-manipulation"
          >
            NO THANK YOU
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;