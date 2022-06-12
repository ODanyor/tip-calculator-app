import PropTypes from 'prop-types';
import './Result.css';

function Result({ name, desc, value }) {
  const format = (value) => {
    const formattedValue = value.toFixed(2);
    const MAX_LENGTH = 6;

    return formattedValue.slice(0, MAX_LENGTH);
  };

  return (
    <div data-testid="result" className="result">
      <div className="result__label">
        <div className="result__name">{name}</div>
        <div className="result__desc">/ {desc}</div>
      </div>
      <span data-testid="result-value" className="result__value">${format(value)}</span>
    </div>
  );
}

Result.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  value: PropTypes.number.isRequired,
};

export default Result;
