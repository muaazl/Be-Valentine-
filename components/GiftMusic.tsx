import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw, Disc, Heart } from 'lucide-react';
import { IMAGES } from '../constants';

interface GiftMusicProps {
  onBack: () => void;
}

const GiftMusic: React.FC<GiftMusicProps> = ({ onBack }) => {
  const [rotationKey, setRotationKey] = useState(0);

  const restartAnimation = () => {
    setRotationKey(prev => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="relative w-full max-w-3xl flex flex-col md:flex-row items-center justify-center gap-8 bg-white/40 backdrop-blur-xl rounded-3xl border-4 border-white shadow-2xl p-6 md:p-12 pt-16 md:pt-12 overflow-y-auto max-h-[90vh]"
    >
       <button
        onClick={onBack}
        className="absolute top-4 left-4 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 text-gray-600 z-50"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Left Side: QR Code */}
      <div className="flex flex-col items-center gap-4 bg-white p-4 md:p-6 rounded-2xl shadow-lg transform -rotate-2">
        <h3 className="text-xl md:text-2xl font-bold text-red-500 font-handwriting">A song for you</h3>
        <p className="text-gray-500 text-xs md:text-sm">Scan the QR code!</p>
        <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-200 rounded-lg overflow-hidden">
            <img src={IMAGES.QR_CODE} alt="Spotify QR Code" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Right Side: Vinyl Player Animation */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-48 h-48 md:w-80 md:h-80 flex items-center justify-center bg-gray-900 rounded-full shadow-2xl border-4 border-gray-800">
             {/* The Vinyl Disc */}
            <motion.div
                key={rotationKey}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-full h-full rounded-full overflow-hidden absolute inset-0 opacity-80"
            >
                <img 
                    src={IMAGES.VINYL} 
                    alt="Vinyl Record" 
                    className="w-full h-full object-cover" 
                />
            </motion.div>
            
            {/* Center Label */}
            <div className="absolute w-16 h-16 md:w-24 md:h-24 bg-red-400 rounded-full border-4 border-white flex items-center justify-center z-10">
                <Heart fill="white" className="text-white" size={24} />
            </div>
        </div>

        <button 
            onClick={restartAnimation}
            className="flex items-center gap-2 text-red-500 font-bold hover:text-red-600 transition-colors text-sm md:text-base"
        >
            <RefreshCw size={18} />
            click to restart!
        </button>
      </div>
    </motion.div>
  );
};

export default GiftMusic;