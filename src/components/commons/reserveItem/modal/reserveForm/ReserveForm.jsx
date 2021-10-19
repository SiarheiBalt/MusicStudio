import cl from './ReserveForm.module.css';
import Select from './select/Select';
import { Button } from '../../../button/Button';
import CloseIcoButton from '../closeIcoButton/CloseIcoButton';
import Hour from '../hour/Hour';

const ReserveForm = ({ closeModal, day, hourClick }) => {
  const resrveTime = [
    { hour: '10:00', isFree: true },
    { hour: '11:00', isFree: true },
    { hour: '12:00', isFree: true },
    { hour: '13:00', isFree: true },
    { hour: '14:00', isFree: true },
    { hour: '15:00', isFree: false },
    { hour: '16:00', isFree: true },
    { hour: '17:00', isFree: true },
    { hour: '18:00', isFree: false },
    { hour: '19:00', isFree: false },
    { hour: '20:00', isFree: true },
    { hour: '21:00', isFree: true },
  ];
  return (
    <div className={cl.container}>
      <CloseIcoButton close={closeModal} />
      <h3
        className={cl.title}
      >{`${day.date} - ${day.monthName} (${day.dayofWeek})`}</h3>
      <h3 className={cl.title}>Резервирование времени</h3>
      <div className={cl.hours}>
        {resrveTime.map((time, i) => (
          <Hour key={i} time={time} hourClick={hourClick} />
        ))}
      </div>
      <div className={cl.reserve}>
        <span className={cl.text}>
          Выбрать время с <Select /> до <Select />{' '}
        </span>
        <Button action={'Зарезервировать'} />
      </div>
    </div>
  );
};

export default ReserveForm;
