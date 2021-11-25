import Day from './day/Day';
import cl from './Shedule.module.css';
import PropTypes from 'prop-types';

const dayOnShedule = 14;

const Shedule = ({ timeData, openModal, itemInfo }) => {
  const daysNextTwoWeeks = timeData.map((day, i) => {
    return (
      i < dayOnShedule && (
        <Day key={day.id} day={day} openModal={openModal} itemInfo={itemInfo} />
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
