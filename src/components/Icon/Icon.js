import PropTypes from 'prop-types';
import { mergeModifiers } from '../../utils/css';
import './Icon.css';

function Icon({ name }) {
  const iconClassName = mergeModifiers('icon', name);

  return <span className={iconClassName}></span>;
}

Icon.propTypes = {
  name: PropTypes.oneOf([
    'dollar',
    'person',
  ]),
};

export default Icon;
