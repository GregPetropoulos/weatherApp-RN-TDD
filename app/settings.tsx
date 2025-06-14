


import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useCustomThemeCtx } from '@/context/ThemeContext';
// import { ThemeType } from '@/constants/Theme';
import { ThemeType } from '@/types';

export default function SettingsScreen() {
  const { colors } = useTheme();
  const { themeType, setTheme } = useCustomThemeCtx();

  const themes: ThemeType[] = ['light', 'dark', 'blue', 'green'];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>Select Theme</Text>
      {themes.map((theme) => (
        <TouchableOpacity
          key={theme}
          style={[
            styles.button,
            {
              backgroundColor: colors.card,
              borderColor: themeType === theme ? colors.primary : colors.border,
            },
          ]}
          onPress={() => setTheme(theme)}
        >
          <Text style={[styles.buttonText, { color: colors.text }]}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
});
