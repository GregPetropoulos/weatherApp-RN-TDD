import { render } from '@testing-library/react-native';
import CurrentWeatherScreen  from '@/app/(tabs)/currentWeather';

describe('<CurrentLocationScreen/>', () => {
  test('Should render correctly', () => {
    const wrapper = render(<CurrentWeatherScreen />);
    wrapper.getByTestId('CurrentWeatherScreen');
  });
});
