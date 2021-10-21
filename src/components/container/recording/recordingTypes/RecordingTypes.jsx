import { NavLink } from 'react-router-dom';
import cl from './RecordingTypes.module.css';

const RecordingTypes = () => {
  const titleRecordText = 'Типы записи';
  const typeSoloTitleText = 'Solo';
  const typeLiveTitleText = 'Live';
  const typeSoloText = `Запись инструмента, голоса. Не требует аренды помещения.`;
  const typeLiveText = ` Запись группы требует аренды помещения. При резервировании услуги
  записи происходит автоматическое бронирование большой комнаты.`;

  return (
    <div className={'record'}>
      <h2 className={cl.title}>{titleRecordText}</h2>
      <div className={cl.type}>
        <h3 className={cl.link}>
          <NavLink to="Solo" activeClassName={cl.activ}>
            {typeSoloTitleText}
          </NavLink>
        </h3>
        <div>{typeSoloText}</div>
      </div>
      <div className={cl.type}>
        <h3 className={cl.link}>
          <NavLink to="Live" activeClassName={cl.activ}>
            {typeLiveTitleText}
          </NavLink>
        </h3>
        <div>{typeLiveText}</div>
      </div>
    </div>
  );
};

export default RecordingTypes;
