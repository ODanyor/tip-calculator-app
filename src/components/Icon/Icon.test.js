import { render, screen } from '@testing-library/react';
import Icon from './Icon';

describe('Icon component:', () => {
  it('should render proerly', () => {
    render(<Icon name="dollar" />);

    const icon = screen.getByTestId('icon');

    expect(icon.getAttribute('class')).toBe('icon icon--dollar');
  });

  describe('when name prop value is dollar', () => {
    it('should render dollar icon', () => {
      render(<Icon name="dollar" />);

      const icon = screen.getByTestId('icon');

      expect(icon.getAttribute('class')).toContain('icon--dollar');
    });
  });

  describe('when name prop value is person', () => {
    it('should render person icon', () => {
      render(<Icon name="person" />);

      const icon = screen.getByTestId('icon');

      expect(icon.getAttribute('class')).toContain('icon--person');
    });
  });
});
