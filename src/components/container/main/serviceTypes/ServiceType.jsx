import cl from './ServiceType.module.css';
import './../../../../App.css';

const ServiceType = () => {
  const typeServiseText = 'Виды услуг';

  const titleRoomText = `Аренда помещения для репетиций`;
  const roomText = ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum modi
  cupiditate quidem quos, suscipit reiciendis explicabo architecto culpa
  numquam tempore vitae atque nam iste dicta saepe. Aut quidem impedit
  vel ratione ut. Laudantium accusamus vero velit mollitia corporis
  molestiae alias deserunt ipsam porro fugiat nam excepturi illo
  reiciendis, aut inventore?`;

  const titleInstrumentText = `Аренда инструментов`;
  const instrumentsText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum modi
  cupiditate quidem quos, suscipit reiciendis explicabo architecto culpa
  numquam tempore vitae atque nam iste dicta saepe. Aut quidem impedit
  vel ratione ut. Laudantium accusamus vero velit mollitia corporis
  molestiae alias deserunt ipsam porro fugiat nam excepturi illo
  reiciendis, aut inventore?`;

  const titleRecordText = `Звукозапись`;
  const recordText = `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum modi
  cupiditate quidem quos, suscipit reiciendis explicabo architecto culpa
  numquam tempore vitae atque nam iste dicta saepe. Aut quidem impedit
  vel ratione ut. Laudantium accusamus vero velit mollitia corporis
  molestiae alias deserunt ipsam porro fugiat nam excepturi illo
  reiciendis, aut inventore?`;

  return (
    <div className={`services form`}>
      <h1 className={cl.title}>{typeServiseText}</h1>
      <div className={cl.content}>
        <h2 className={'title'}>{titleRoomText}</h2>
        <span className={''}>{roomText}</span>
        <h2 className={'title'}>{titleInstrumentText}</h2>
        <span>{instrumentsText}</span>
        <h2 className={'title'}>{titleRecordText}</h2>
        <span>{recordText}</span>
      </div>
    </div>
  );
};

export default ServiceType;
