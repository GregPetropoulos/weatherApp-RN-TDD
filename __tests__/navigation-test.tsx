import {
  fireEvent,
  render,
  renderRouter,
  screen,

} from 'expo-router/testing-library';

import { View, Text } from '@/components/Themed';
import { Link } from 'expo-router';
import TabLayout from '@/app/(tabs)/_layout';
import TabHomeScreen from '@/app/(tabs)';
import TabCurrentLocationScreen from '@/app/(tabs)/currentLocation';
import TabCurrentWeatherScreen from '@/app/(tabs)/currentWeather';


//Mock screen components for testing
// ============================≠≠≠≠≠≠≠≠≠=========
// ============================≠≠≠≠≠≠≠≠≠=========
// const MockTabHomeScreen= jest.fn(()=><Text testID='linearGradient-HomeScreen'>Welcome!</Text>)
// const MockTabCurrentWeatherScreen = jest.fn(() => (
//   <Text testID='currentWeather'>Current Weather</Text>
// ));
// const MockTabCurrentLocationScreen = jest.fn(() => (
//   <Text testID='currentLocation'>Current Location</Text>
// ));
// ============================≠≠≠≠≠≠≠≠≠=========
// ============================≠≠≠≠≠≠≠≠≠=========

const MockTabHomeScreen = jest.fn(() => <TabHomeScreen />);
const MockTabLayoutScreen = jest.fn(() => <TabLayout />);
const MockTabCurrentWeatherScreen = jest.fn(() => <TabCurrentWeatherScreen />);
const MockTabCurrentLocationScreen = jest.fn(() => (
  <TabCurrentLocationScreen />
));
import RootLayout from '@/app/_layout';

describe('Static Navigation', () => {
  it('navigates to Home Screen', async () => {
    renderRouter(
      {
        // _layout: () => <TabLayout />,
        // '/': () => <RootLayout />,
        // '(tabs)/_layout':MockTabLayoutScreen,
        // '(tabs)/index': MockTabHomeScreen,
        index: MockTabHomeScreen,
        // '(tabs)/currentWeather':MockTabCurrentWeatherScreen,
        // '(tabs)/currentLocation':MockTabCurrentLocationScreen
      },
      {
        initialUrl: '/'
      }
    );
    expect(await screen.getByText('Welcome!')).toBeOnTheScreen()
    expect(screen.getByText('Welcome!'))
    expect(await screen.getByText('Welcome!')).toBeVisible();
  });
  it('navigates to Current Weather Screen', async () => {
    renderRouter(
      {
        // _layout: () => <TabLayout />,
        // '/': () => <RootLayout />,
        // '(tabs)/_layout':MockTabLayoutScreen,
        // '(tabs)/index': MockTabHomeScreen,
        index: MockTabHomeScreen,
        '(tabs)/currentWeather':MockTabCurrentWeatherScreen,
        // '(tabs)/currentLocation':MockTabCurrentLocationScreen
      },
      {
        initialUrl: '/currentWeather'
      }
    );
    expect(await screen.getByText('Current Weather Screen')).toBeOnTheScreen()
    expect(screen.getByText('Current Weather Screen'))
    expect(await screen.getByText('Current Weather Screen')).toBeVisible();
  });
  it('navigates to Current Location Screen', async () => {
    renderRouter(
      {
        // _layout: () => <TabLayout />,
        // '/': () => <RootLayout />,
        // '(tabs)/_layout':MockTabLayoutScreen,
        // '(tabs)/index': MockTabHomeScreen,
        index: MockTabHomeScreen,
        '(tabs)/currentWeather':MockTabCurrentWeatherScreen,
        '(tabs)/currentLocation':MockTabCurrentLocationScreen
      },
      {
        initialUrl: '/currentLocation'
      }
    );
    expect(await screen.getByText('Current Location Screen')).toBeOnTheScreen()
    expect(screen.getByText('Current Location Screen'))
    expect(await screen.getByText('Current Location Screen')).toBeVisible();
  });
  
});

//!Work for links not tabs
// describe('Navigation', () => {
//   it('navigates to current weather screen', () => {
//     renderRouter({
//       index: () => (
//         <View>
//           <Text>Home</Text>
//           <Link href='/currentWeather'>Check Current Weather</Link>
//         </View>
//       ),
//       currentWeather: () => <Text>Current Weather</Text>
//     });
//     fireEvent.press(screen.getByText('Check Current Weather'));
//     expect(screen.getByText('Current Weather')).toBeOnTheScreen();
//   });
// });
