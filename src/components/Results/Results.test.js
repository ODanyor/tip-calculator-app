import { render, screen, fireEvent } from '@testing-library/react';
import Results from './Results';
import { AppContextProvider, resetAppContext } from '../../context/AppContext';

jest.mock('../../context/AppContext', () => ({
  ...jest.requireActual('../../context/AppContext'),
  resetAppContext: jest.fn(),
}));

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

  describe('when click on reset button', () => {
    it('should call resetAppContext action', () => {
      renderResutls();

      fireEvent.click(screen.getByTestId('button'));

      expect(resetAppContext).toHaveBeenCalled();
    });
  });
});
