import { Button } from '../../../button/Button';
import CloseIcoButton from '../closeIcoButton/CloseIcoButton';
import cl from './SelectedHour.module.css';

const SelectedHour = ({
  closeHourSelected,
  closeModal,
  day,
  time,
  hourReserve,
}) => {
  return (
    <div>
      <CloseIcoButton close={closeModal} />
      <div className={cl.container}>
        <h3 className={cl.title}>
          Зарезервировать время на 1 час начиная от{' '}
          <span className={cl.text}>{time}</span>,{' '}
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

export default SelectedHour;
