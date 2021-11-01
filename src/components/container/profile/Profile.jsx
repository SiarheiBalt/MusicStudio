import { useSelector } from 'react-redux';

import ReserveServicesTable from './reserveServicesTable/ReserveServicesTable';

import cl from './Profile.module.css';

const Profile = () => {
  const data = useSelector((store) => store.authReducer);

  const orderedServices =
    data.orderedServices.length === 0 ? (
      <h2 className={cl.title}>Нет заказанных услуг</h2>
    ) : (
      <ReserveServicesTable data={data.orderedServices} />
    );

  return <div className={cl.profile}>{orderedServices}</div>;
};

export default Profile;
