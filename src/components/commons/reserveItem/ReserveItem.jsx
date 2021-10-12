import ReserveForm from '../ReserveForm/ReserveForm';
import Shedule from '../shedule/Shedule';
import cl from './ReserveItem.module.css';

const ReserveItem = ({ dates, name, reserveSubmit, type }) => {
  return (
    <div className={cl.room}>
      <h2 className={cl.title}>Комната {name}</h2>
      <Shedule timeData={dates} />
      <ReserveForm reserveSubmit={reserveSubmit} name={name} type={type} />
    </div>
  );
};

export default ReserveItem;
