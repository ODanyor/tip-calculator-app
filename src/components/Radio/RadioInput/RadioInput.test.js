import { render, screen } from '@testing-library/react';
import RadioInput from './RadioInput';

jest.mock('../../Input', () => (props) => <input {...props} />);

const props = {
  id: 'mock-id',
  type: 'number',
  name: 'mock-name',
  value: '0',
  placeholder: 'mock-placeholder',
};

describe('RadioInput component:', () => {
  it('should render properly', () => {
    render(<RadioInput {...props} />);

    const labelElement = screen.getByTestId('radio-input-label');
    const radioElement = screen.getByTestId('radio-input');
    const inputElement = screen.getByPlaceholderText(props.placeholder);

    expect(labelElement.getAttribute('for')).toBe(inputElement.getAttribute('id'));
    expect(radioElement.getAttribute('name')).toBe(props.name);
    expect(radioElement.getAttribute('type')).toBe('radio');
    expect(radioElement.getAttribute('value')).toBe(props.value);
  });
});
