import React from 'react';
import { render, userEvent } from '@testing-library/react-native';
import Button from '../Button';

describe('Button', () => {
  test('Should render correctly ', () => {
    const wrapper = render(<Button label='' onPress={jest.fn()} />);
    wrapper.getByTestId('button');
  });
  test('Should render loader when loading data', () => {
    const wrapper = render(<Button label='' onPress={jest.fn()} loading />);
    wrapper.getByTestId('button-loading');
  });
  test('Should call given onPress when clicked or pressed', async () => {
    const mockOnPress = jest.fn();
    const wrapper = render(<Button label='' onPress={mockOnPress} />);
    const button = wrapper.getByTestId('button');
    const user = userEvent.setup();
    await user.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });
  test('Should render label', () => {
    const wrapper = render(<Button label='mock-label' onPress={jest.fn()} />);
    wrapper.getByText('mock-label');
  });
  test('Should accept custom view props', () => {
    const wrapper = render(
      <Button label='' onPress={jest.fn()} testID='mock-test-id' />
    );
    wrapper.getByTestId('mock-test-id');
  });
});
