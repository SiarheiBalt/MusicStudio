import cl from './Hour.module.css';
import PropTypes from 'prop-types';

const Hour = ({ time, hourClick }) => {
  const onClick = () => {
    time.isFree && hourClick(time.hour);
  };
  return (
    <div
      className={
        time.isFree ? `${cl.time} ${cl.green}` : `${cl.time} ${cl.red}`
      }
      onClick={onClick}
    >
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
