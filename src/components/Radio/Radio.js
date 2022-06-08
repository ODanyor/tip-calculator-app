import PropTypes from 'prop-types';
import './Radio.css';

function Radio({ children, onChange }) {
  return (
    <div className="radio" onChange={onChange}>
      {children}
    </div>
  );
}

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
}

export default Radio;
