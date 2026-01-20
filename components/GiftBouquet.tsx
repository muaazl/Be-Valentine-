import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { IMAGES, BOUQUET_MESSAGES } from '../constants';

interface GiftBouquetProps {
  onBack: () => void;
}

const GiftBouquet: React.FC<GiftBouquetProps> = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="relative w-full max-w-4xl h-[85vh] md:h-[80vh] flex flex-col items-center justify-center bg-white/30 backdrop-blur-md rounded-3xl border-4 border-white shadow-2xl p-4 overflow-hidden"
    >
      <button
        onClick={onBack}
        className="absolute top-4 left-4 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 z-50 text-gray-600"
      >
        <ArrowLeft size={24} />
      </button>

      <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4 md:mb-8 font-handwriting z-10 bg-white/80 px-6 py-2 rounded-full shadow-sm mt-12 md:mt-0">
        Your Rose Bouquet
      </h2>

      <div className="relative w-full h-full flex items-center justify-center">
        {/* Main Bouquet Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-48 md:w-80"
        >
          <img
            src={IMAGES.BOUQUET}
            alt="Bouquet of Roses"
            className="w-full h-auto drop-shadow-2xl rounded-2xl border-4 border-white transform -rotate-3"
          />
        </motion.div>

        {/* Floating Messages - Responsive sizing */}
        {BOUQUET_MESSAGES.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.3, type: "spring" }}
            style={{
              top: msg.top,
              left: msg.left,
              right: msg.right,
              bottom: msg.bottom,
              rotate: msg.rotate,
            }}
            className="absolute z-20 bg-pink-50 border-2 border-pink-200 p-2 md:p-4 rounded-xl shadow-lg max-w-[120px] md:max-w-[200px] text-center"
          >
            <p className="text-[10px] md:text-md text-pink-700 font-medium leading-tight">
              {msg.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GiftBouquet;