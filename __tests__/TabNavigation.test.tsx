import { renderRouter, screen, userEvent } from 'expo-router/testing-library';

import RootLayout from '@/app/_layout';
import TabLayout from '@/app/(tabs)/_layout';
import TabHomeScreen from '@/app/(tabs)/index';
import TabWeatherScreen from '@/app/(tabs)/weather';

describe('Expo Router Bottom Tabs Navigation', () => {
  // No Mocking the file system, test directly
  it('Renders the index tab and user navigates to the weather screen and back to home screen', async () => {
    renderRouter(
      {
        '/apps/_layout': () => <RootLayout />,
        '(tabs)/_layout': () => <TabLayout />,
        '(tabs)/index': () => <TabHomeScreen />,
        '(tabs)/weather': () => <TabWeatherScreen />
      },
      {
        initialUrl: '/'
      }
    );
    // Sanity check testId, Text content, pathname on initial screen
    expect(screen.getByTestId('HomeScreen')).toBeTruthy();
    expect(screen.getByText('Welcome!')).toBeOnTheScreen();
    expect(screen.getByTestId('DateDayComponent')).toBeTruthy();
    expect(screen.getByTestId('WeatherCurrentComponent')).toBeTruthy();
    expect(screen.getByTestId('WeatherCoordinatesComponent')).toBeTruthy();
    expect(screen).toHavePathname('/');

    // User Tab Navigates to weather screen
    // Check testId, Text content, pathname on weather screen
    const user = userEvent.setup();
    await user.press(screen.getByText('Weather'));
    expect(screen).toHavePathname('/weather');
    expect(screen.getByTestId('WeatherScreen')).toBeTruthy();
    expect(screen.getByText('My Weather Screen')).toBeOnTheScreen();

    // User Tab Navigates to back to home screen
    // Check testId, Text content, pathname on weather screen
    await user.press(screen.getByText('Home'))
    expect(screen).toHavePathname('/');
    expect(screen.getByText('Welcome!')).toBeOnTheScreen();


  });
});
