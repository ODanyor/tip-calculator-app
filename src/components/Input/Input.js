import { useState } from 'react';
import * as CssUitls from '../../utils/css';
import PropTypes from 'prop-types';
import './Input.css';

function Input({
  icon,
  validation,
  onChange: onChangeCallback,
  ...restProps
}) {
  const { type } = restProps;
  const [isError, setIsError] = useState(false);

  const getClassName = () => {
    let baseClass = 'input';
    
    if (type === 'number') baseClass = CssUitls.mergeModifiers(baseClass, 'right-aligned');

    if (isError) baseClass = CssUitls.mergeClasses(baseClass, CssUitls.mergeModifiers('input', 'error'));

    return baseClass;
  };

  const isValid = (value) => {
    for (const { regexStr, message } of validation.prohibitions) {
      const regex = new RegExp(regexStr, 'gi');

      if (regex.test(String(value))) {
        setIsError(true);
        validation.onError(message);

        return false;
      }
    }

    if (isError) {
      setIsError(false);
      validation.onError('');
    }

    return true;
  };

  const onChange = (event) => {
    if (validation && !isValid(event.target.value)) return;

    onChangeCallback?.(event);
  };

  return (
    <div data-testid="input" className={getClassName()}>
      {icon}
      <input data-testid="input-element" onChange={onChange} {...restProps} />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.node,
  name: PropTypes.string,
  type: PropTypes.oneOf([
    'number',
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  validation: PropTypes.shape({
    prohibitions: PropTypes.arrayOf(PropTypes.shape({
      regexStr: PropTypes.string.isRequired,
      message: PropTypes.string,
    })).isRequired,
    onError: PropTypes.func.isRequired,
  }),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Input;
