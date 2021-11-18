import UserInfo from '../profile/userInfo/UserInfo';
import AdminTable from './adminTable/AdminTable';

import cl from './Admin.module.css';

const Admin = () => {
  return (
    <div className={cl.admin}>
      <UserInfo />
      <AdminTable />
    </div>
  );
};

export default Admin;
