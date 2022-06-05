import { mergeModifiers } from '../../utils/css';
import PropTypes from 'prop-types';
import './Input.css';

function Input({
  icon,
  type,
  placeholder,
  value,
  onChange,
}) {
  const getClassName = () => {
    const baseClass = 'input';
    
    if (type === 'number') return mergeModifiers(baseClass, 'right-aligned');

    return baseClass;
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
  onChange: PropTypes.func,
  isInteger: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default Input;
