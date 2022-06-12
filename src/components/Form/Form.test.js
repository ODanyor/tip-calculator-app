import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';
import { AppContextProvider, updateAppContextValue } from '../../context/AppContext';

jest.mock('../../context/AppContext', () => ({
  ...jest.requireActual('../../context/AppContext'),
  updateAppContextValue: jest.fn(),
}));

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

  describe('when inputs value changes', () => {
    it('should call updateAppContextValue action', () => {
      renderForm();

      const inputElements = screen.getAllByTestId('input-element');

      inputElements.forEach((inputElement) => fireEvent.change(inputElement, { target: { value: 1 }}));

      expect(updateAppContextValue).toHaveBeenCalledTimes(3);
    });
  });
});
