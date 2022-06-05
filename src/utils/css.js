function mergeClasses(baseClass, ...classes) {
  return classes.reduce((prevValue, currValue) => `${prevValue} ${currValue}`, baseClass);
}

function mergeModifiers(baseClass, ...modifiers) {
  return modifiers.reduce((prevValue, currValue) => `${prevValue} ${baseClass}--${currValue}`, baseClass);
}

export {
  mergeClasses,
  mergeModifiers,
};
