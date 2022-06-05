import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component:', () => {
  it('should render properly', () => {
    render(<Button>test-button-placeholder</Button>);

    expect(screen.getByText('test-button-placeholder')).toBeDefined();
  });

  describe('when on click', () => {
    it('should fire callback', () => {
      const mockOnClick = jest.fn();

      render(<Button onClick={mockOnClick} />);

      fireEvent.click(screen.getByTestId('button'));

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
