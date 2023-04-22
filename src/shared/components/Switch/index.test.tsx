import { fireEvent, render } from '@testing-library/react';
import { Switch } from '.';

describe('<Switch />', () => {
  it('should be unchecked without enabled prop', () => {
    const { getByTestId } = render(<Switch />);

    const switchButton = getByTestId('switch');

    expect(switchButton).toHaveAttribute('aria-checked', 'false');
    expect(switchButton).toHaveClass('bg-gray-200');
  });

  it('should be checked with enabled prop', () => {
    const { getByTestId } = render(<Switch enabled />);

    const switchButton = getByTestId('switch');

    expect(switchButton).toHaveAttribute('aria-checked', 'true');
    expect(switchButton).toHaveClass('bg-steel-blue');
  });

  it('should change state by click', () => {
    const onSwitch = jest.fn();

    const { getByTestId } = render(<Switch enabled onSwitch={onSwitch} />);

    const switchButton = getByTestId('switch');

    fireEvent.click(switchButton);

    expect(onSwitch).toBeCalled();
    expect(switchButton).toHaveAttribute('aria-checked', 'false');
    expect(switchButton).toHaveClass('bg-gray-200');
  });
});
