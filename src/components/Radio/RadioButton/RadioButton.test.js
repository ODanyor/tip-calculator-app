import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

const mockProps = {
  id: 'mock-id',
  name: 'mock-name',
  value: 'mock-value',
  placeholder: 'mock-placeholder',
};

describe('RadioButton component:', () => {
  it('should render properly', () => {
    render(<RadioButton {...mockProps} />);

    expect(screen.getByText(mockProps.placeholder)).toBeDefined();
    expect(screen.getByTestId('radio-button-input').getAttribute('type')).toBe('radio');
    expect(screen.getByTestId('radio-button-input').getAttribute('id')).toBe('mock-id');
    expect(screen.getByTestId('radio-button-input').getAttribute('name')).toBe('mock-name');
    expect(screen.getByTestId('radio-button-input').getAttribute('value')).toBe('mock-value');
    expect(screen.getByTestId('radio-button-label').getAttribute('for')).toBe('mock-id');
  });
});
