import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { ThemeProvider, useCustomTheme } from '@/context/ThemeContext';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

// https://reactnavigation.org/docs/drawer-navigator#installation
//import '../components/gesture-handler'; // For web to only see empty gesture handler

import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)'
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <RootLayoutNav />
    </ThemeProvider>
  );
}

function RootLayoutNav() {
  const { theme } = useCustomTheme();
  const router = useRouter();
  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <NavigationThemeProvider value={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack>
            <Stack.Screen name='(drawer)' options={{ headerShown: false }} />
            <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
            <Stack.Screen
              name='settings'
              options={{
                headerShown: true,
                headerBackButtonDisplayMode: 'minimal',
                headerLeft(props) {
                  return (
                    <MaterialIcons
                      name='arrow-back'
                      size={24}
                      color={props.tintColor}
                      onPress={handleGoBack}
                    />
                  );
                }
              }}
            />
          </Stack>
        </SafeAreaView>
      </GestureHandlerRootView>
    </NavigationThemeProvider>
  );
}
