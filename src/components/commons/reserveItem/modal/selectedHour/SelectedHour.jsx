import { Button } from '../../../button/Button';
import CloseIcoButton from '../closeIcoButton/CloseIcoButton';
import cl from './SelectedHour.module.css';
import PropTypes from 'prop-types';

const SelectedHour = ({
  closeHourSelected,
  closeModal,
  day,
  time,
  hourReserve,
}) => {
  const title = 'Зарезервировать время на 1 час начиная от';
  return (
    <div>
      <CloseIcoButton close={closeModal} />
      <div className={cl.container}>
        <h3 className={cl.title}>
          {title} <span className={cl.text}>{time}</span>,{' '}
          <span className={cl.text}>
            {day.date} {day.monthName}
          </span>
          ,<span className={cl.text}> {`(${day.dayofWeek})`}</span>?
        </h3>
        <div className={cl.button__container}>
          <Button action={'Зарезервировать'} onClick={hourReserve} />
          <Button action={'Вернуться'} onClick={closeHourSelected} />
        </div>
      </div>
    </div>
  );
};

SelectedHour.propTypes = {
  closeHourSelected: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  hourReserve: PropTypes.func.isRequired,
  day: PropTypes.shape({
    date: PropTypes.number.isRequired,
    dayofWeek: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    month: PropTypes.number.isRequired,
    monthName: PropTypes.string.isRequired,
    reserveTime: PropTypes.arrayOf(PropTypes.shape),
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default SelectedHour;
