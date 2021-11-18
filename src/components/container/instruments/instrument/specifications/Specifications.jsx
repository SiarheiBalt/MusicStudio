import PropTypes from 'prop-types';

import { container } from './../Instrument.module.css';
import cl from './Specifications.module.css';

const Specifications = ({ specifications }) => {
  const descriptionList = specifications.map((description) => (
    <li className={cl.list__item} key={description}>
      {description}
    </li>
  ));

  return (
    <div className={container}>
      <ul className={cl.list}>{descriptionList}</ul>
    </div>
  );
};

Specifications.propTypes = {
  specifications: PropTypes.arrayOf(PropTypes.string),
};

export default Specifications;
