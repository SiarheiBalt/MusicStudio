import { Button } from '../button/Button';
import CloseIcoButton from '../reserveItem/modal/closeIcoButton/CloseIcoButton';

import cl from './ConfirmModall.module.css';
import '../../../App.css';

const ConfirmModall = ({ closeModal, confirmCancelReserve, cancelData }) => {
  const { name, type, date } = cancelData;

  const typeReserve = {
    rooms: 'комнаты',
    instrument: 'инструмента',
    records: 'записи',
  };

  const confirmText = `Вы действительно хотите отменить бронь ${typeReserve[type]} ${name} , на ${date.date} ${date.monthName}`;

  return (
    <div className={cl.background}>
      <div className={`${cl.container} form`}>
        <CloseIcoButton close={closeModal} />
        <div className={cl.content__container}>
          <h3 className={cl.title}>{confirmText}</h3>
          <div className={cl.buttons__container}>
            <Button text={'Подтвердить'} onClick={confirmCancelReserve} />
            <Button text={'Отмена'} onClick={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModall;
