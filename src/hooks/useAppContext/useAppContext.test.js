import { renderHook } from '@testing-library/react';
import useAppContext from './useAppContext';
import { AppContextProvider } from '../../context/AppContext';

describe('useAppContext hook:', () => {
  it('should provide app context', () => {
    const { result } = renderHook(useAppContext, { wrapper: AppContextProvider });

    expect(result.current).toBeTruthy();
  });

  describe('when it\'s used outside of the AppContextProvider', () => {
    it('should throw an error', () => {
      expect(() => renderHook(useAppContext)).toThrowError('useAppContext must be used within AppContextProvider');
    });
  });
});
