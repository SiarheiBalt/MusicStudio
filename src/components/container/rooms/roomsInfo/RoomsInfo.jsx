import { NavLink } from 'react-router-dom';
import cl from './RoomsInfo.module.css';

const RoomsInfo = () => {
  const titleText = 'Комнаты';
  const bigRoomLinkText = 'Большая комната';
  const smallRoomLinkText = 'Малая комната';
  const smallRoomText = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
  cupiditate minima autem voluptas animi? Impedit quisquam amet, a
  corporis dolorum non sequi voluptatum minima facere iure voluptatem
  laborum quos odio?`;
  const bigRoomText = ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
  blanditiis, nam quod aliquam, illum facilis cum similique nostrum id
  explicabo excepturi voluptate, nesciunt veniam placeat minima sunt
  obcaecati architecto porro culpa? Itaque nihil, perferendis quisquam
  architecto dicta tenetur quidem animi.`;
  return (
    <div className={'info'}>
      <h2 className={cl.title}>{titleText}</h2>
      <div className={cl.type}>
        <h3 className={cl.link}>
          <NavLink to="big" activeClassName={cl.activ}>
            {bigRoomLinkText}
          </NavLink>
        </h3>
        <div className={'text'}>{smallRoomText}</div>
      </div>
      <div className={cl.type}>
        <h3 className={cl.link}>
          <NavLink to="small" activeClassName={cl.activ}>
            {smallRoomLinkText}
          </NavLink>
        </h3>
        <div className={'text'}>{bigRoomText}</div>
      </div>
    </div>
  );
};

export default RoomsInfo;
