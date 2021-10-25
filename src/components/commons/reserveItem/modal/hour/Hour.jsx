import cl from './Hour.module.css';
import PropTypes from 'prop-types';

const Hour = ({ time, hourClick, isSelected }) => {
  const onClick = () => {
    time.isFree && hourClick(time.hour);
  };

  const timeClass = time.isFree
    ? `${cl.time} ${cl.tooltip} ${isSelected ? cl.gray : cl.green}`
    : `${cl.time} ${cl.red} ${cl.tooltip}`;

  const promptText = time.isFree ? 'час свободен' : 'час занят';

  return (
    <div className={timeClass} onClick={onClick}>
      <span className={cl.tooltiptext}>{promptText}</span>
      <span className={cl.time__text}>{time.hour}</span>
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
