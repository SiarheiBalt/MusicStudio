import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  hour,
  red,
  green,
  time__text,
  gray,
  tooltip,
  tooltiptext,
  disabled,
} from './Hour.module.css';
import { checkUserLocalStorage } from '../../../../../utils/localStorage';

const Hour = ({ time, hourClick, isSelected }) => {
  const isAuth = checkUserLocalStorage();

  const onClick = () => {
    if (isAuth) {
      hourClick(time.hour);
    }
  };

  const isFree = time.isFree;
  const timeClass = classNames(
    tooltip,
    hour,
    { [green]: isFree },
    { [red]: !isFree },
    { [gray]: isSelected },
    { [disabled]: !isFree }
  );

  const promptText = time.isFree ? 'час свободен' : 'час занят';

  return (
    <div className={timeClass} onClick={onClick}>
      <span className={tooltiptext}>{promptText}</span>
      <span className={time__text}>{time.hour}</span>
    </div>
  );
};

Hour.propTypes = {
  time: PropTypes.shape({
    hour: PropTypes.string.isRequired,
    isFree: PropTypes.bool.isRequired,
  }).isRequired,
  hourClick: PropTypes.func,
};

export default Hour;
