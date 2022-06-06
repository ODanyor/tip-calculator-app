import PropTypes from 'prop-types';
import './Button.css';

function Button({ children, ...restProps }) {
  return (
    <button data-testid="button" className="button" {...restProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  role: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
