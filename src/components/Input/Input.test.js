import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

const props = {
  icon: <span>mock-node-element</span>,
  type: 'number',
  placeholder: 'mock-placeholder-value',
  value: 0,
  onChange: jest.fn(),
  validation: {
    prohibitions: [
      {
        regexStr: '403',
        message: 'mock-message',
      },
    ],
    onError: jest.fn(),
  },
};

describe('Input component:', () => {
  it('should render properly', () => {
    render(<Input {...props} />);

    expect(screen.getByText('mock-node-element')).toBeDefined();
  });

  describe('when type prop value is number', () => {
    it('should align text to the right side', () => {
      render(<Input {...props} />);

      const input = screen.getByTestId('input');
  
      expect(input.getAttribute('class')).toContain('input--right-aligned');
    });
  });

  describe('when input value changes', () => {
    it('should fire onChange callback with input event', () => {
      let value = '';
      const mockOnChange = jest.fn((event) => value = event.target.value);
      const { rerender } = render(<Input {...props} value={value} onChange={mockOnChange} />);

      const inputElement = screen.getByTestId('input-element');
      const changedInputValue = '200';

      fireEvent.change(inputElement, { target: { value: changedInputValue }});

      expect(mockOnChange).toHaveBeenCalledTimes(1);

      rerender(<Input {...props} value={value} onChange={mockOnChange} />);

      expect(mockOnChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({ value: changedInputValue }),
      }));
    });
  });

  describe('when validtion fails', () => {
    it('should error visualization status', () => {
      render(<Input {...props} />);

      const input = screen.getByTestId('input');
      const inputElement = screen.getByTestId('input-element');

      fireEvent.change(inputElement, { target: { value: '403' }});

      expect(input.getAttribute('class')).toContain('input--error');
    });

    it('should fire onError callback with proper message', () => {
      render(<Input {...props} />);

      const inputElement = screen.getByTestId('input-element');

      fireEvent.change(inputElement, { target: { value: '403' }});

      expect(props.validation.onError).toHaveBeenCalledWith('mock-message');
    });

    describe('when input value changes to the valid one', () => {
      it('should remove error visualization status', () => {
        render(<Input {...props} />);

        const input = screen.getByTestId('input');
        const inputElement = screen.getByTestId('input-element');
  
        fireEvent.change(inputElement, { target: { value: '403' }});
        fireEvent.change(inputElement, { target: { value: '200' }});
  
        expect(input.getAttribute('class')).not.toContain('input--error');
      });
    });
  });
});
