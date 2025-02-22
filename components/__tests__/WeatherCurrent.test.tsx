import WeatherCurrent from '../WeatherCurrent';
import { render } from '@testing-library/react-native';

describe('<WeatherCurrent/>', () => {
  test('Should render correctly', () => {
    const wrapper = render(<WeatherCurrent />);
    wrapper.getByTestId('weather-current');
  });
});
