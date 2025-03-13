import { render } from '@testing-library/react-native';
// import WeatherCoordinates from '../WeatherCoordinates';
import CurrentLocationScreen from '../app/(tabs)/currentLocation'

describe('<CurrentLocationScreen/>', () => {
  test('Should render correctly', () => {
    const wrapper = render(<CurrentLocationScreen />);
    wrapper.getByTestId('CurrentLocationScreen');
  });
});
