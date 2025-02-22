import WeatherCurrent from '../WeatherCurrent';
import { render } from '@testing-library/react-native';

describe('<WeatherCurrent/>', () => {
  test('Should render correctly', () => {
    const wrapper = render(<WeatherCurrent />);
    wrapper.getByTestId('weather-current');
  });
  test('Should navigate to Weather screen with location',()=>{
// This test will check the service (getting external data)

    // When we dont have the implementation use this error message
    throw new Error('Test not implemented')
  })
});
