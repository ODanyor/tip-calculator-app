import { render, screen } from '@testing-library/react';
import Result from './Result';

const testProps = {
  name: 'test-name-value',
  desc: 'test-desc-value',
  value: 10,
};

describe('Result component:', () => {
  it('should render properly', () => {
    render(<Result {...testProps} />);

    expect(screen.getByText(testProps.name)).toBeDefined();
    expect(screen.getByText(`/ ${testProps.desc}`)).toBeDefined();
    expect(screen.getByText(`$${testProps.value.toFixed(2)}`)).toBeDefined();
  });
});
