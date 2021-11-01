import { useSelector } from 'react-redux';

import cl from './Profile.module.css';
import ReserveServicesTable from './reserveServicesTable/ReserveServicesTable';

const Profile = () => {
  const data = useSelector((store) => store.authReducer);

  return (
    <div>
      <ReserveServicesTable data={data.orderedServices} />
    </div>
  );
};

export default Profile;
