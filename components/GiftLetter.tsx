import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart } from 'lucide-react';
import { LOVE_LETTER_TEXT } from '../constants';

interface GiftLetterProps {
  onBack: () => void;
}

const GiftLetter: React.FC<GiftLetterProps> = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: -90 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-2xl h-[85vh] md:h-[80vh] perspective-1000 flex items-center justify-center"
    >
      {/* Back Button - Responsive Positioning */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 md:top-0 md:-left-16 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 text-gray-600 z-50"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="w-full h-full bg-[#fdfbf7] p-6 md:p-12 shadow-2xl rounded-sm relative overflow-hidden flex flex-col border border-gray-200 pt-16 md:pt-12">
        {/* Paper Texture Effect (CSS gradients) */}
        <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:100%_2rem] opacity-20 pointer-events-none mt-16 md:mt-12"></div>
        <div className="absolute left-6 md:left-10 top-0 bottom-0 w-0.5 bg-red-100 opacity-50"></div>

        {/* Header */}
        <div className="flex justify-between items-center mb-6 z-10 pl-4 md:pl-0">
          <h2 className="text-xl md:text-2xl font-bold text-red-500 font-handwriting">Words from my Heart</h2>
          <div className="text-red-400 font-handwriting text-lg md:text-xl">XOXO</div>
        </div>

        {/* Content */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex-1 overflow-y-auto custom-scrollbar z-10 pr-2 pl-4 md:pl-0"
        >
          <p className="text-lg md:text-2xl text-gray-800 font-handwriting leading-loose whitespace-pre-line pb-8">
            {LOVE_LETTER_TEXT}
          </p>
        </motion.div>

        {/* Decorations */}
        <Heart className="absolute bottom-4 right-4 text-red-200 opacity-50 transform -rotate-12" size={60} fill="currentColor" />
        <Heart className="absolute top-20 right-10 text-pink-100 opacity-50 transform rotate-12" size={30} fill="currentColor" />
      </div>
    </motion.div>
  );
};

export default GiftLetter;