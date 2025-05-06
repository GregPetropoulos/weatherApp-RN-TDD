import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme } from '@react-navigation/native';
import { CustomThemes, ThemeType } from '../constants/Theme';

interface ThemeContextType {
  theme: Theme;
  themeType: ThemeType;
  setTheme: (themeType: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeType, setThemeType] = useState<ThemeType>('light');
  const [theme, setThemeState] = useState<Theme>(CustomThemes.light);

  useEffect(() => {
    // Load saved theme from AsyncStorage
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme && savedTheme in CustomThemes) {
          setThemeType(savedTheme as ThemeType);
          setThemeState(CustomThemes[savedTheme as ThemeType]);
        }
      } catch (error) {
        console.error('Failed to load theme:', error);
      }
    };
    loadTheme();
  }, []);

  const setTheme = async (newTheme: ThemeType) => {
    try {
      await AsyncStorage.setItem('theme', newTheme);
      setThemeType(newTheme);
      setThemeState(CustomThemes[newTheme]);
    } catch (error) {
      console.error('Failed to save theme:', error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, themeType, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useCustomTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useCustomTheme must be used within a ThemeProvider');
  }
  return context;
};