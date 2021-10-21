import Day from './day/Day';
import cl from './Shedule.module.css';
import PropTypes from 'prop-types';

const Shedule = ({ timeData, openModal }) => {
  const days = timeData.map((day, i) => {
    return i < 14 && <Day key={day.id} day={day} openModal={openModal} />;
  });
  return <div className={cl.shedule}>{days}</div>;
};

Shedule.propTypes = {
  timeData: PropTypes.arrayOf(PropTypes.shape).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Shedule;
