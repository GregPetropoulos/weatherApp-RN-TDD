import {
  fireEvent,
  render,
  renderRouter,
  screen,
  waitFor
} from 'expo-router/testing-library';

import { View, Text } from '@/components/Themed';
import { Link } from 'expo-router';
import TabLayout from '@/app/(tabs)/_layout';
import TabHomeScreen from '@/app/(tabs)';
import TabWeatherScreen from '@/app/(tabs)/weather';

// MOCKS FOR ROUTES
// const MockHomeScreen = jest.fn(() => <View><Text>Welcome!</Text></View>);
// const MockWeatherScreen = jest.fn(() => <View><Text>My Weather Screen</Text></View>);

describe('Static Navigation', () => {
  it('Initial Home Screen with / pathname', async () => {
    renderRouter(
      {
        // Notice the pathname for the tabs layout? possible bug can use variations of _layout
        //'(tabs)/_layout/': () => <TabLayout />,

        '/app/_layout/(tabs)/_layout/': () => <TabLayout />,
        '(tabs)/': () => <TabHomeScreen />,
        '(tabs)/weather': () => <TabWeatherScreen />
      },
      {
        initialUrl: '/'
      }
    );
    expect(await screen.getByText('Welcome!')).toBeOnTheScreen();
    expect(await screen.findByTestId('DateDayComponent'));
    expect(await screen.findByTestId('WeatherCurrentComponent'));
    expect(await screen.findByTestId('WeatherCoordinatesComponent'));
    expect(screen).toHavePathname('/');
  });

  it('Weather Tab Navigation has weather pathname', async () => {
    renderRouter(
      {
        'app/_layout': () => <TabLayout />,
        // 'app/_layout/(tabs)/_layout': () => <TabLayout />,
        '(tabs)/': () => <TabHomeScreen />,
        '(tabs)/weather': () => <TabWeatherScreen />
      },
      {
        initialUrl: '(tabs)/weather'
      }
    );

    expect(await screen.getByText('My Weather Screen')).toBeOnTheScreen();
    expect(await screen.getByTestId('WeatherScreen'));
    expect(screen).toHavePathname('/weather');
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
