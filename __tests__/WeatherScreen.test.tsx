import { render } from '@testing-library/react-native';
import WeatherScreen from '@/app/(tabs)/weather';

describe(' Weather Screen', () => {
  test('Should render correctly', () => {
    const wrapper = render(<WeatherScreen />);
    wrapper.getByTestId('WeatherScreen');
  });
});
