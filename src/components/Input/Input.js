import { useState } from 'react';
import * as CssUitls from '../../utils/css';
import PropTypes from 'prop-types';
import './Input.css';

function Input({
  icon,
  type,
  placeholder,
  validation,
  value,
  onChange: onChangeCallback,
}) {
  const [isError, setIsError] = useState(false);

  const getClassName = () => {
    let baseClass = 'input';
    
    if (type === 'number') baseClass = CssUitls.mergeModifiers(baseClass, 'right-aligned');

    if (isError) baseClass = CssUitls.mergeClasses(baseClass, CssUitls.mergeModifiers('input', 'error'));

    return baseClass;
  };

  const checkValidation = (value) => {
    for (const { regexStr, message } of validation.rules) {
      const regex = new RegExp(regexStr, 'gi');

      if (regex.test(String(value))) {
        setIsError(true);
        validation.onError(message);

        return;
      }
    }

    if (isError) setIsError(false);
  };

  const onChange = (event) => {
    const value = event.target.value;

    if (validation) checkValidation(value);

    if (onChangeCallback) onChangeCallback(value);
  };

  return (
    <div className={getClassName()}>
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
    </div>
  );
}

Input.propTypes = {
  icon: PropTypes.node,
  type: PropTypes.oneOf([
    'number',
  ]),
  value: PropTypes.oneOfType([
    PropTypes.number,
  ]),
  validation: PropTypes.shape({
    rules: PropTypes.arrayOf(PropTypes.shape({
      regexStr: PropTypes.string.isRequired,
      message: PropTypes.string,
    })).isRequired,
    onError: PropTypes.func.isRequired,
  }),
  onChange: PropTypes.func,
  isInteger: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default Input;
