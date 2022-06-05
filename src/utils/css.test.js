import * as CssUtils from './css';

const baseClass = 'base-class';

describe('CssUtils:', () => {
  describe('mergeClasses method:', () => {
    it('should return a new string with merged classes', () => {
      const mergedClasses = CssUtils.mergeClasses(baseClass, 'test', 'test');

      expect(mergedClasses).toBe('base-class test test');
    });
  });

  describe('mergeModifiers method:', () => {
    it('should return a new string with merged modifiers', () => {
      const mergedModifiers = CssUtils.mergeModifiers(baseClass, 'test', 'test');

      expect(mergedModifiers).toBe('base-class base-class--test base-class--test');
    });
  });
});
