import { NavLink } from 'react-router-dom';
import cl from './RecordingTypes.module.css';

const RecordingTypes = () => {
  return (
    <div>
      <h2 className={cl.title}>Типы записи</h2>
      <div className={cl.type}>
        <h3 className={cl.link}>
          <NavLink to='Solo' activeClassName={cl.activ}>
            Solo
          </NavLink>
        </h3>
        <div>Запись инструмента, голоса. Не требует аренды помещения.</div>
      </div>
      <div className={cl.type}>
        <h3 className={cl.link}>
          <NavLink to='Live' activeClassName={cl.activ}>
            Live
          </NavLink>
        </h3>
        <div>
          Запись группы требует аренды помещения. При резервировании услуги
          записи происходит автоматическое бронирование большой комнаты.
        </div>
      </div>
    </div>
  );
};

export default RecordingTypes;
