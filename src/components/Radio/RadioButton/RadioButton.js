import PropTypes from 'prop-types';
import './RadioButton.css';

function RadioButton({ id, name, value, placeholder }) {
  return (
    <div className="radio-button">
      <input data-testid="radio-button-input" type="radio" id={id} name={name} value={value} />
      <label data-testid="radio-button-label" tabIndex="0" htmlFor={id}>{placeholder}</label>
    </div>
  );
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default RadioButton;
