import WeatherCurrent from '../WeatherCurrent';
import {waitFor, render, userEvent } from '@testing-library/react-native';
import { useNavigation } from 'expo-router';
// The old way is mocking the useNavigation hook, using it directly would need excess amount of work not worth ROI
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn()
  };
});

describe('<WeatherCurrent/>', () => {
  test('Should render correctly', () => {
    const wrapper = render(<WeatherCurrent />);
    wrapper.getByTestId('WeatherCurrentComponent');
  });
  test('Should navigate to Weather screen with location', async () => {
    // This test will check the service (getting external data)
    const mockNavigate: any = jest.fn();
    (useNavigation as jest.Mock).mockReturnValueOnce({
      navigate: mockNavigate
    });
    const wrapper = render(<WeatherCurrent />);
    const button = wrapper.getByTestId('WeatherCurrentComponent');
    const user = userEvent.setup();
    await user.press(button);

    //Calling the location service
    await waitFor(()=>{
      expect(mockNavigate).toHaveBeenCalledWith('Weather', {latitude:0, longitude:0})
    })
    // When we dont have the implementation use this error message
    // throw new Error('Test not implemented');
  });
});
