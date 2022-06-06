import PropTypes from 'prop-types';
import './Radio.css';

function Radio({ children, onChange }) {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <div className="radio" onChange={handleChange}>
      {children}
    </div>
  );
}

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
}

export default Radio;
