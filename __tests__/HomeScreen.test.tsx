import { render } from '@testing-library/react-native';

// import HomeScreen, { CustomText } from '@/app/index';
import HomeScreen from '@/app/(drawer)/(tabs)';
import WeatherCoordinates from '@/components/WeatherCoordinates';
import WeatherCurrent from '@/components/WeatherCurrent';
import { View } from '@/components/Themed';
import moment from 'moment';
// describe('pseudotest', () => {
//   test('pSeudo for now', () => {});
// });
//Create a mock of child component with file path jest.fn
// This is testing the functional component exists on the screen, don't need the value of the component
//prettier-ignore
jest.mock('../components/WeatherCoordinates', () => jest.fn().mockReturnValue(null));
//prettier-ignore
jest.mock('../components/WeatherCurrent', () =>jest.fn().mockReturnValue(null));

describe('<HomeScreen />', () => {
  test('Text renders correctly on HomeScreen', () => {
    const { getByText } = render(<HomeScreen />);
    getByText('Welcome!');

    //todo SNAPSHOT FOR UI CONSISTENCY
    // const tree = render(<HomeScreen />).toJSON();
    // expect(tree).toMatchSnapshot();
  });
  describe('Title Section', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      //jest.setSystemTime(946684800000); //Fri Dec 31 1999 19:00:00 GMT-0500 (Eastern Standard Time
      jest.setSystemTime(Date.now()); //Fri Dec 31 1999 19:00:00 GMT-0500 (Eastern Standard Time
    });
    afterEach(() => {
      jest.useRealTimers();
    });
    test('Should contain current date', () => {
      const wrapper = render(<HomeScreen />);
      const now = moment(new Date());
      wrapper.getByText(now.format('MMM DD, YYYY'));
    });
    test('Should contain day of the week', () => {
      const wrapper = render(<HomeScreen />);
      const now = moment(new Date());
      wrapper.getByText(now.format('dddd'));
    });
    test('Should contain Title', () => {
      const wrapper = render(<HomeScreen />);
      wrapper.getByText('Welcome!');
    });
  });

  test('Should contain a divider', () => {
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('home-screen-divider');
  });

  // ===============================================================
  // Checking the child components show up on the HomeScreen
  // In the components folder each child has their own specified test
  // ===============================================================

  test('Should contain a section to get current weather', () => {
    (WeatherCurrent as jest.Mock).mockReturnValue(
      <View testID='mock-weather-current' />
    );
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('mock-weather-current');
  });
  test('Should contain a section to get weather at given latitude and longitude', () => {
    (WeatherCoordinates as jest.Mock).mockReturnValue(
      <View testID='mock-weather-coordinates' />
    );
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('mock-weather-coordinates');
  });
  // ===============================================================
  // ===============================================================
});
