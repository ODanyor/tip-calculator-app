import PropTypes from 'prop-types';
import './Result.css';

function Result({ name, desc, value }) {
  const getFormattedValue = (value) => value.toFixed(2);

  return (
    <div className="result">
      <div className="result__label">
        <div className="result__name">{name}</div>
        <div className="result__desc">/ {desc}</div>
      </div>
      <span className="result__value">${getFormattedValue(value)}</span>
    </div>
  );
}

Result.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  value: PropTypes.number.isRequired,
};

export default Result;
