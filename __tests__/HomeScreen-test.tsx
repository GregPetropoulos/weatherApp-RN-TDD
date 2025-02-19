import { render } from '@testing-library/react-native';

// import HomeScreen, { CustomText } from '@/app/index';
import HomeScreen from '@/app/(tabs)/index';

describe('<HomeScreen />', () => {
  test('Text renders correctly on HomeScreen', () => {
    const { getByText } = render(<HomeScreen />);
    getByText('Welcome!');

    //SNAPSHOT FOR UI CONSISTENCY
    const tree = render(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
