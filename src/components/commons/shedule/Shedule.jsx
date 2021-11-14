import Day from './day/Day';
import cl from './Shedule.module.css';
import PropTypes from 'prop-types';

const dayInShedule = 14;

const Shedule = ({ timeData, openModal, name }) => {
  const daysNextTwoWeeks = timeData.map((day, i) => {
    return (
      i < dayInShedule && (
        <Day key={day.id} day={day} openModal={openModal} name={name} />
      )
    );
  });

  return <div className={cl.shedule}>{daysNextTwoWeeks}</div>;
};

Shedule.propTypes = {
  timeData: PropTypes.arrayOf(PropTypes.shape).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Shedule;
