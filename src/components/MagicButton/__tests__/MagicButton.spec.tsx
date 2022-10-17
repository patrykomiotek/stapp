import { render } from '@testing-library/react';
import { MagicButton } from '../MagicButton';

describe('Magic button component', () => {
  it('should render MagicButton', () => {
    const handler = jest.fn();
    render(<MagicButton handleMouseEnter={handler}>Click me</MagicButton>);

    expect(handler).toHaveBeenCalled();
  });
});