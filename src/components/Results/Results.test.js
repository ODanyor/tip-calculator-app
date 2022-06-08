import { render, screen } from '@testing-library/react';
import Display from './Display';

describe('Display component:', () => {
  it('should render properly', () => {
    render(<Display />);

    expect(screen.getByText('Tip Amount')).toBeDefined();
    expect(screen.getByText('Total')).toBeDefined();
    expect(screen.getByTestId('button')).toHaveTextContent('Reset');
  });
});
