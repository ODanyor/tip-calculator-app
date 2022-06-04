import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component:', () => {
  it('should render header text', () => {
    render(<App />);

    expect(screen.getByText('spli')).toBeDefined();
    expect(screen.getByText('tter')).toBeDefined();
  });
});
