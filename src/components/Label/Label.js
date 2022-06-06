import PropTypes from 'prop-types';
import './Label.css';

function Label({ id, title, error, children }) {
  return (
    <label htmlFor={id} className="label">
      <div className="label-header">
        <span className="label-header__title">{title}</span>
        <span className="label-header__error">{error}</span>
      </div>
      {children}
    </label>
  );
}

Label.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  error: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default Label;
