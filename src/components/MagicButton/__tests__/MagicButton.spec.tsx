import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MagicButton } from '../MagicButton';

describe('Magic button component', () => {
  it('should render MagicButton', () => {
    const handler = jest.fn();
    render(<MagicButton handleMouseEnter={handler}>Click me</MagicButton>);

    userEvent.click(screen.getByRole('button'));

    expect(handler).toHaveBeenCalled();
  });
});