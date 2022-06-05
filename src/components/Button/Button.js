import PropTypes from 'prop-types';
import './Button.css';

function Button({ children, onClick }) {
  return (
    <button
      data-testid="button"
      className="button"
      onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
