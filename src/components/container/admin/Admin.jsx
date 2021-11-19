import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import UserInfo from '../profile/userInfo/UserInfo';
import AdminTable from './adminTable/AdminTable';

import cl from './Admin.module.css';
import { ACTIONS } from '../../../redux/constants';
import { getUserLocalStorage } from '../../../utils/localStorage';

const Admin = () => {
  const data = useSelector((store) => store.adminReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const { userId, token } = getUserLocalStorage();
    let formData = { userId, auth: token };
    dispatch({ type: ACTIONS.GET_ALL_ORDERS, formData });
  }, [dispatch]);

  const table = data.orders ? <AdminTable data={data.orders} /> : <></>;

  return (
    <div className={cl.admin}>
      <UserInfo />
      {table}
    </div>
  );
};

export default Admin;
