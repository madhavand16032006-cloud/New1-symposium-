import React, { createContext, useContext, useState, useEffect } from 'react';
import { audioFX } from '../utils/audioFX';

export type ThemeType = 'glass' | 'cyber' | 'matrix' | 'synthwave';
export type AnimationSpeed = 'smooth' | 'hyper' | 'minimal';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  animationSpeed: AnimationSpeed;
  setAnimationSpeed: (speed: AnimationSpeed) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  interactiveCursor: boolean;
  toggleInteractiveCursor: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    try {
      const saved = localStorage.getItem('it_spectrum_theme');
      if (saved && ['glass', 'cyber', 'matrix', 'synthwave'].includes(saved)) {
        return saved as ThemeType;
      }
    } catch {
      // ignore
    }
    return 'cyber'; // Default to cyber neon animated theme as requested!
  });

  const [animationSpeed, setAnimationSpeedState] = useState<AnimationSpeed>('hyper');
  const [soundEnabled, setSoundEnabledState] = useState<boolean>(true);
  const [interactiveCursor, setInteractiveCursor] = useState<boolean>(true);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('it_spectrum_theme', newTheme);
    } catch {
      // ignore
    }
    audioFX.playLaserWhoosh();
  };

  const setAnimationSpeed = (speed: AnimationSpeed) => {
    setAnimationSpeedState(speed);
    audioFX.playClick();
  };

  const toggleSound = () => {
    const updated = audioFX.toggleSound();
    setSoundEnabledState(updated);
  };

  const toggleInteractiveCursor = () => {
    setInteractiveCursor((prev) => !prev);
    audioFX.playClick();
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-animation', animationSpeed);
  }, [theme, animationSpeed]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        animationSpeed,
        setAnimationSpeed,
        soundEnabled,
        toggleSound,
        interactiveCursor,
        toggleInteractiveCursor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
