import { useDispatch, useSelector } from 'react-redux';

import ReserveServicesTable from './reserveServicesTable/ReserveServicesTable';

import cl from './Profile.module.css';
import UserInfo from './userInfo/UserInfo';
import { useEffect } from 'react';
import { ACTIONS } from '../../../redux/constants';
import { getUserLocalStorage } from '../../../utils/localStorage';

const Profile = () => {
  const data = useSelector((store) => store.authReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const { userId, token } = getUserLocalStorage();
    const formData = {
      userId,
      auth: token,
    };
    dispatch({ type: ACTIONS.GET_USER_ORDERS, formData });
  }, []);

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
