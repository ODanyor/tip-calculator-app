import { render, screen } from '@testing-library/react';
import Results from './Results';
import { AppContextProvider } from '../../context/AppContext';

const renderResutls = ({ context, ...props } = {}) => render(
  <AppContextProvider context={context}>
    <Results {...props} />
  </AppContextProvider>
);

describe('Results component:', () => {
  it('should render properly', () => {
    renderResutls();

    const [tipResult, totalResult] = screen.getAllByTestId('result-value');

    expect(tipResult.textContent).toBe('$0.00');
    expect(totalResult.textContent).toBe('$0.00');

    expect(screen.getByText('Tip Amount')).toBeDefined();
    expect(screen.getByText('Total')).toBeDefined();
    expect(screen.getByTestId('button')).toHaveTextContent('Reset');
  });

  it('should calculated tip and total from context values', () => {
    renderResutls({ context: [{ bill: '100', tip: '5', people: '2'}, jest.fn()] });

    const [tipResult, totalResult] = screen.getAllByTestId('result-value');

    expect(tipResult.textContent).toBe('$2.50');
    expect(totalResult.textContent).toBe('$52.50');
  });
});
