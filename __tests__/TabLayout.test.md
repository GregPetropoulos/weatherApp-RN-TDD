// //GROK
// import { renderRouter, screen, fireEvent } from 'expo-router/testing-library';
// import { Text, View } from 'react-native';
// import TabLayout from '@/app/(tabs)/_layout';
// import RootLayout from '@/app/_layout';
// import TabHomeScreen from '@/app/(tabs)';
// // import 'expo-router';
// // import { View, Text } from '@/components/Themed';
// // import { Link } from 'expo-router';
// // import TabHomeScreen from '../app/(tabs)/home';
// // import TabCurrentWeatherScreen from '../app/(tabs)/currentWeather';

// //Mock screen components for testing
// // const MockHomeScreen = () => <Text testID='home-text'>Welcome!</Text>;
// const MockHomeScreen = () => <Text testID='home-text'>Home</Text>;
// const MockCurrentWeatherScreen = () => (
//   <Text testID='currentWeather'>Current Weather</Text>
// );
// const MockCurrentLocationScreen = () => (
//   <Text testID='currentLocation'>Current Location</Text>
// );
// // );
// const MockTabLayout = jest.fn(() => <TabLayout />);
// const MockHomeComponent = jest.fn(() => (
//   // <Text testID='home-text'>Welcome!</Text>
//   <Text testID='home-text'>Home</Text>
// ));
// const MockCurrentWeatherComponent = jest.fn(() => (
//   <Text testID='currentWeather'>Current Weather</Text>
// ));
// const MockCurrentLocationComponent = jest.fn(() => (
//   <Text testID='currentLocation'>Current Location</Text>
// ));

// //============For Debug============
// const MockScreen = () => <Text testID='test'>Test</Text>;
// const MockComponent = jest.fn(() => <View />);
// //============For Debug============

// describe('RootLayout', () => {
//   it('renders the bottom tabs', async () => {
//     const { getByTestId, findByText } = renderRouter({
//       index: TabLayout
//       //     '(tabs)/_layout': jest.fn(()=> <TabLayout/>),
//       //     // '(tabs)/home': () => null,
//       //     // '(tabs)/home': MockHomeComponent,
//       //     '(tabs)/home': MockHomeScreen,
//       //     // '(tabs)/currentWeather': MockCurrentWeatherComponent,
//       //     '(tabs)/currentWeather': MockCurrentWeatherScreen,
//       //     // '(tabs)/currentWeather': () => null,
//       //     '(tabs)/currentLocation': MockCurrentLocationScreen,
//       //     // '(tabs)/currentLocation': () => null
//       //   },
//       //   {
//       //     initialUrl: '/'
//     });
//     // expect(await findByText('Home')).toBeVisible();
//     // expect(await findByText('Current Weather')).toBeVisible();
//   });
// });

// // describe('Bottom Tab Navigator', () => {
// //   it('navigates between tabs', async() => {
// //     // renderRouter(
// //     //   // TabLayout,

// //     //   {
// //     //     // 'appDir':RootLayout,
// //     //     // '(tabs)/_layout': TabLayout,
// //     //     // '(tabs)/home': MockHomeScreen,
// //     //     // '(tabs)/currentWeather': MockCurrentWeatherScreen,
// //     //     // '(tabs)/currentLocation': MockCurrentLocationScreen
// //     //     '(tabs)/_layout': TabLayout,
// //     //     '(tabs)/home': MockHomeComponent,
// //     //     '(tabs)/currentWeather': MockCurrentWeatherComponent,
// //     //     '(tabs)/currentLocation': MockCurrentLocationComponent
// //     //   },
// //     //   {
// //     //     initialUrl: '/(tabs)/home'
// //     //   }
// //     // );
// //     //Initially Home screen should be visible

// //       const {getByTestId, getByText}=renderRouter(

// //         {
// //           // 'appDir':RootLayout,
// //           // index:MockComponent,
// //           // index:TabLayout,
// //           // index: MockTabLayout,
// //           '(tabs)/_layout': TabLayout,
// //           // '(tabs)/_layout': TabLayout,
// //           // '(tabs)/_layout': MockComponent,
// //           // '(tabs)/home': MockHomeScreen
// //           // '(tabs)/home': MockComponent
// //           // '(tabs)/home': MockHomeComponent
// //           //!'(tabs)/home': TabHomeScreen // will pick up with  expect(getByTestId('linearGradient-HomeScreen')).toBeTruthy();
// //           // '(tabs)/currentWeather': MockCurrentWeatherScreen,
// //           // '(tabs)/currentLocation': MockCurrentLocationScreen
// //           // '(tabs)/_layout': MockComponent,
// //           // '(tabs)/home': MockHomeScreen,
// //           // '(tabs)/currentWeather':MockCurrentWeatherScreen,
// //           // '(tabs)/currentLocation':MockCurrentLocationScreen
// //       //============For Debug============
// //           // index: MockScreen,
// //       //============For Debug============
// //         },
// //         {
// //           initialUrl: '/'
// //         }
// //       );

// //      expect(await screen.findByText('Home')).toBeVisible();

// //       // expect(getByTestId('linearGradient-HomeScreen')).toBeTruthy();
// //       // expect(getByTestId('home-text')).toBeTruthy();
// //       // expect(getByText('Welcome!')).toBeTruthy();
// //       // expect(getByText('Home')).toBeOnTheScreen()

// //     //============For Debug============
// //     // expect(screen.getByTestId('test')).toBeTruthy();
// //     //============For Debug============

// //     // Find the Current Weather Tab and press it
// //     // const currentWeatherTab = screen.getByText('Current Weather')
// //     // fireEvent.press(currentWeatherTab)
// //     // expect(screen.queryByTestId('linearGradient-HomeScreen')).toBeNull();
// //     // expect(screen.getByTestId('currentLocation')).toBeTruthy();
// //   });
// // });

// // jest.mock('../expo-router/src/useRouter', () => ({
// //   useRouter: () => ({
// //     push: jest.fn(),
// //     replace: jest.fn(),
// //     back: jest.fn(),
// //     forward: jest.fn(),
// //     canGoBack: jest.fn(),
// //     setParams: jest.fn(),
// //   }),
// // }));
// // //!STOPPED HERE
// // describe('TabLayout', () => {
// //   it('renders the bottom tabs', async () => {
// //     renderRouter(RootLayout, {
// //       '/tabs': () => null,
// //       // '/modal': () => null,
// //     });
// //     expect(await screen.findByText('Home')).toBeVisible();
// //     expect(await screen.findByText('Current Weather')).toBeVisible();
// //   });
// // });
