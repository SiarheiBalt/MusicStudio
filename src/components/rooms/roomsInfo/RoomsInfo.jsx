import { NavLink } from 'react-router-dom';
import cl from './RoomsInfo.module.css';

const RoomsInfo = () => {
  return (
    <div>
      <h2 className={cl.title}>Комнаты</h2>
      <div className={cl.type}>
        <h3 className={cl.link}>
          <NavLink to='big' activeClassName={cl.activ}>
            Большая комната
          </NavLink>
        </h3>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          cupiditate minima autem voluptas animi? Impedit quisquam amet, a
          corporis dolorum non sequi voluptatum minima facere iure voluptatem
          laborum quos odio?
        </div>
      </div>
      <div className={cl.type}>
        <h3 className={cl.link}>
          <NavLink to='small' activeClassName={cl.activ}>
            Малая комната
          </NavLink>
        </h3>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          blanditiis, nam quod aliquam, illum facilis cum similique nostrum id
          explicabo excepturi voluptate, nesciunt veniam placeat minima sunt
          obcaecati architecto porro culpa? Itaque nihil, perferendis quisquam
          architecto dicta tenetur quidem animi.
        </div>
      </div>
    </div>
  );
};

export default RoomsInfo;
