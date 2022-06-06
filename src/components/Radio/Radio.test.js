import { render, screen, fireEvent } from '@testing-library/react';
import Radio from './Radio';

const mockProps = {
  onChange: jest.fn(),
};

const renderRadio = (props = {}) => render(
  <Radio {...mockProps} {...props}>
    <input type="radio" value="mock-value-1" name="mock-name" placeholder="value-1" />
    <input type="radio" value="mock-value-2" name="mock-name" placeholder="value-2" />
  </Radio>
);

describe('Radio component:', () => {
  it('should render properly', () => {
    renderRadio();

    expect(screen.getAllByPlaceholderText(/value-/)).toHaveLength(2);
  });

  describe('when radio button click', () => {
    it('should fire onChange callback with click event', () => {
      renderRadio();

      const button = screen.getByPlaceholderText('value-1');

      fireEvent.click(button);

      expect(mockProps.onChange).toBeCalledWith('mock-value-1');
    });
  });
});
