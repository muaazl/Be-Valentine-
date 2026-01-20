import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AppScreen } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import GiftDashboard from './components/GiftDashboard';
import GiftBouquet from './components/GiftBouquet';
import GiftLetter from './components/GiftLetter';
import GiftMusic from './components/GiftMusic';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.WELCOME);

  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreen.WELCOME:
        return <WelcomeScreen onYes={() => setCurrentScreen(AppScreen.DASHBOARD)} />;
      case AppScreen.DASHBOARD:
        return (
          <GiftDashboard 
            onSelectGift={(gift) => setCurrentScreen(gift)} 
            onBack={() => setCurrentScreen(AppScreen.WELCOME)}
          />
        );
      case AppScreen.GIFT_BOUQUET:
        return <GiftBouquet onBack={() => setCurrentScreen(AppScreen.DASHBOARD)} />;
      case AppScreen.GIFT_LETTER:
        return <GiftLetter onBack={() => setCurrentScreen(AppScreen.DASHBOARD)} />;
      case AppScreen.GIFT_MUSIC:
        return <GiftMusic onBack={() => setCurrentScreen(AppScreen.DASHBOARD)} />;
      default:
        return <WelcomeScreen onYes={() => setCurrentScreen(AppScreen.DASHBOARD)} />;
    }
  };

  return (
    <div className="relative w-full h-[100dvh] bg-pink-50 overflow-hidden flex flex-col items-center justify-center text-gray-800 selection:bg-pink-200">
      {/* Background Ambience */}
      <FloatingHearts />
      
      {/* Background Music */}
      <MusicPlayer />
      
      {/* Main Content Area - Added overflow-y-auto for landscape phones */}
      <div className="z-10 w-full h-full flex items-center justify-center p-4 overflow-y-auto overflow-x-hidden">
        <AnimatePresence mode="wait">
          {renderScreen()}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;