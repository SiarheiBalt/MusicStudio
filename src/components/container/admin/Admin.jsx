import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import UserInfo from '../profile/userInfo/UserInfo';
import AdminTable from './adminTable/AdminTable';

import cl from './Admin.module.css';
import { ACTIONS } from '../../../redux/constants';
import { getUserLocalStorage } from '../../../utils/localStorage';

const Admin = () => {
  const data = useSelector((store) => store.adminReducer.orders);

  const actionDispatch = useDispatch();

  useEffect(() => {
    const { userId, token } = getUserLocalStorage();
    const formData = { userId, auth: token };
    actionDispatch({ type: ACTIONS.GET_ALL_ORDERS, formData });
  }, [actionDispatch]);

  const table = data.length === 0 ? <></> : <AdminTable data={data} />;

  return (
    <div className={cl.admin}>
      <UserInfo />
      {table}
    </div>
  );
};

export default Admin;
