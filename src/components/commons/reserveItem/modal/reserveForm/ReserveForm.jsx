import cl from './ReserveForm.module.css';
import { Button } from '../../../button/Button';
import CloseIcoButton from '../closeIcoButton/CloseIcoButton';
import Hour from '../hour/Hour';
import PropTypes from 'prop-types';

const ReserveForm = ({
  closeModal,
  day,
  hourClick,
  selectedHours,
  addReserve,
}) => {
  const hours = day.reserveTime.map((time, i) => {
    const isSelected = selectedHours.some((item) => item === time.hour);
    return (
      <Hour key={i} time={time} hourClick={hourClick} isSelected={isSelected} />
    );
  });

  const isButtonDisabled = selectedHours.length === 0;
  const title = 'Резервирование времени';
  const buttonActionText = 'Зарезервировать';
  const text = 'Кликайте по свободным часам чтобы выбрать время';

  return (
    <div className={cl.container}>
      <CloseIcoButton close={closeModal} />
      <h3
        className={cl.title}
      >{`${day.date} - ${day.monthName} (${day.dayofWeek})`}</h3>
      <h3 className={cl.title}>{title}</h3>
      <div className={cl.hours}>{hours}</div>
      <span className={cl.text}>{text}</span>
      <div className={cl.reserve}>
        <Button
          action={buttonActionText}
          onClick={addReserve}
          disabled={isButtonDisabled}
        />
      </div>
    </div>
  );
};

ReserveForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  hourClick: PropTypes.func.isRequired,
  day: PropTypes.shape({
    date: PropTypes.number.isRequired,
    dayofWeek: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    month: PropTypes.number.isRequired,
    monthName: PropTypes.string.isRequired,
    reserveTime: PropTypes.arrayOf(PropTypes.shape),
    year: PropTypes.number.isRequired,
  }).isRequired,
  selectedHours: PropTypes.arrayOf(PropTypes.string).isRequired,
  addReserve: PropTypes.func.isRequired,
};

export default ReserveForm;
