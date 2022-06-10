import { render, screen } from '@testing-library/react';
import Form from './Form';
import { AppContextProvider } from '../../context/AppContext';

const renderForm = (props = {}) => render(
  <AppContextProvider>
    <Form {...props} />
  </AppContextProvider>
);

describe('Form component:', () => {
  it('should render properly', () => {
    renderForm();

    expect(screen.getByText('Bill')).toBeDefined();
    expect(screen.getByText('Select Tip %')).toBeDefined();
    expect(screen.getByText('Number of People')).toBeDefined();
  });
});
