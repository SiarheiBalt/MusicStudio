import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Profile = () => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  if (!isAuth) return <Redirect to="Login" />;

  return (
    <div>
      <h2>profile</h2>
    </div>
  );
};

export default Profile;
