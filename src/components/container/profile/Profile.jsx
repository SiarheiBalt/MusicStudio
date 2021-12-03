import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import ReserveServicesTable from './reserveServicesTable/ReserveServicesTable';
import UserInfo from './userInfo/UserInfo';
import { ACTIONS } from '../../../redux/constants';
import { getUserLocalStorage } from '../../../utils/localStorage';

import cl from './Profile.module.css';

const title = 'Нет заказанных услуг';

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
    console.log(data);
  }, [dispatch]);

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
