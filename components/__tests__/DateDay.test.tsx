import DateDay from '../DateDay';
import { render } from '@testing-library/react-native';

describe('<DateDay/>', () => {
  test('testID is DateDayComponent', () => {
    const wrapper = render(<DateDay />);
    wrapper.getByTestId('DateDayComponent');
  });
});
