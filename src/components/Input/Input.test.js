import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

const mockProps = {
  icon: <span>mock-node-element</span>,
  type: 'number',
  placeholder: 'mock-placeholder-value',
  value: 0,
  onChange: jest.fn(),
  validation: {
    rules: [
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
    render(<Input {...mockProps} />);

    expect(screen.getByText('mock-node-element')).toBeDefined();
  });

  describe('when type prop value is number', () => {
    it('should align text to the right side', () => {
      render(<Input {...mockProps} />);

      const input = screen.getByTestId('input');
  
      expect(input.getAttribute('class')).toContain('input--right-aligned');
    })
  });

  describe('when input value changes', () => {
    it('should fire onChange callback with input event', () => {
      render(<Input {...mockProps} />);

      const inputElement = screen.getByTestId('input-element');

      fireEvent.change(inputElement, { target: { value: '200' }});

      expect(mockProps.onChange).toHaveBeenCalledWith('200');
    });
  });

  describe('when validtion fails', () => {
    it('should error visualization status', () => {
      render(<Input {...mockProps} />);

      const input = screen.getByTestId('input');
      const inputElement = screen.getByTestId('input-element');

      fireEvent.change(inputElement, { target: { value: '403' }});

      expect(input.getAttribute('class')).toContain('input--error');
    });

    it('should fire onError callback with proper message', () => {
      render(<Input {...mockProps} />);

      const inputElement = screen.getByTestId('input-element');

      fireEvent.change(inputElement, { target: { value: '403' }});

      expect(mockProps.validation.onError).toHaveBeenCalledWith('mock-message');
    });

    describe('when input value changes to the valid one', () => {
      it('should remove error visualization status', () => {
        render(<Input {...mockProps} />);

        const input = screen.getByTestId('input');
        const inputElement = screen.getByTestId('input-element');
  
        fireEvent.change(inputElement, { target: { value: '403' }});
        fireEvent.change(inputElement, { target: { value: '200' }});
  
        expect(input.getAttribute('class')).not.toContain('input--error');
      })
    });
  });
});
