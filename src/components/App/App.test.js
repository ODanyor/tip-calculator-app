import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('../Form', () => () => <span>mock-form-component</span>);
jest.mock('../Display', () => () => <span>mock-display-component</span>);

describe('App Component:', () => {
  it('should render app header', () => {
    render(<App />);

    expect(screen.getByText('spli')).toBeDefined();
    expect(screen.getByText('tter')).toBeDefined();
  });

  it('should render app modules', () => {
    render(<App />);

    expect(screen.getByText('mock-form-component')).toBeDefined();
    expect(screen.getByText('mock-display-component')).toBeDefined();
  });
});
