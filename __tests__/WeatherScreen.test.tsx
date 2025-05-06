import { render } from '@testing-library/react-native';
import WeatherScreen from '@/app/(drawer)/(tabs)/weather';

describe(' Weather Screen', () => {
  test('Should render correctly', () => {
    const wrapper = render(<WeatherScreen />);
    wrapper.getByTestId('WeatherScreen');
  });
});
