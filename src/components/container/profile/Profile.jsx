import { useSelector } from 'react-redux';

import ReserveServicesTable from './reserveServicesTable/ReserveServicesTable';

import cl from './Profile.module.css';
import UserInfo from './userInfo/UserInfo';

const Profile = () => {
  const data = useSelector((store) => store.authReducer);

  const title = 'Нет заказанных услуг';

  const orderedServices =
    data.orderedServices.length === 0 ? (
      <h2 className={cl.title}>{title}</h2>
    ) : (
      <ReserveServicesTable data={data.orderedServices} />
    );

  return (
    <div className={cl.profile}>
      <UserInfo />

      {orderedServices}
    </div>
  );
};

export default Profile;
