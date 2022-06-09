import { render, screen } from '@testing-library/react';
import Results from './Results';
import { AppContextProvider } from '../../context/AppContext';

const renderResutls = (props = {}) => render(
  <AppContextProvider>
    <Results {...props} />
  </AppContextProvider>
);

describe('Results component:', () => {
  it('should render properly', () => {
    renderResutls();

    expect(screen.getByText('Tip Amount')).toBeDefined();
    expect(screen.getByText('Total')).toBeDefined();
    expect(screen.getByTestId('button')).toHaveTextContent('Reset');
  });
});
