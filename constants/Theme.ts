import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Colors } from './Colors';

export const CustomThemes = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.light.background,
      text: Colors.light.text,
      primary: Colors.light.primary,
      card: Colors.light.card,
      border: Colors.light.border,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: Colors.dark.background,
      text: Colors.dark.text,
      primary: Colors.dark.primary,
      card: Colors.dark.card,
      border: Colors.dark.border,
    },
  },
  blue: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.blue.background,
      text: Colors.blue.text,
      primary: Colors.blue.primary,
      card: Colors.blue.card,
      border: Colors.blue.border,
    },
  },
  green: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.green.background,
      text: Colors.green.text,
      primary: Colors.green.primary,
      card: Colors.green.card,
      border: Colors.green.border,
    },
  },
};
