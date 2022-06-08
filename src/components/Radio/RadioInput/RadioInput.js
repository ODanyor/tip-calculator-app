import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import './RadioInput.css';

function RadioInput({ id, type, name, value, placeholder }) {
  const [inputValue, setInputValue] = useState(value);
  const radioRef = useRef(null);

  const changeHandle = (event) => setInputValue(event.target.value);

  const clickHandle = () => radioRef.current.click();

  return (
    <label className="radio-input" htmlFor={id} onClick={clickHandle}>
      <input ref={radioRef} type="radio" name={name} value={inputValue} />
      <Input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={changeHandle}
        style={{ textAlign: !inputValue && 'center' }} />
    </label>
  );
}

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  placeholder: PropTypes.string.isRequired,
};

export default RadioInput;
