import { render, screen } from '@testing-library/react';
import Label from './Label';

const mockProps = {
  id: 'mock-id',
  title: 'mock-title',
  error: 'mock-error',
};

describe('Label component:', () => {
  it('should render properly', () => {
    render(<Label {...mockProps}>mock-children</Label>);

    expect(screen.getByText(mockProps.title)).toBeDefined();
    expect(screen.getByText(mockProps.error)).toBeDefined();
  });
});
