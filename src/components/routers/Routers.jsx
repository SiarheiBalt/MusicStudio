import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Main from './../container/main/Main';
import Rooms from './../container/rooms/Rooms';
import Recording from './../container/recording/Recording';
import Header from './../header/Header';
import Profile from '../container/profile/Profile';
import Authorization from '../container/authorization/Authorization';
import Instruments from '../container/instruments/Instruments';
import PrivateRoute from './PrivateRoute';
import NoPage from '../container/nopage/NoPage';
import Admin from '../container/admin/Admin';

const Routers = () => {
  const { isAuth, isAdmin } = useSelector((store) => store.authReducer);
  return (
    <BrowserRouter>
      <Header />
      <div className={'app-container'}>
        <Switch>
          <Route path='/main' component={Main} />
          <Route exact path='/studio'>
            <Redirect to='/main' />
          </Route>
          <Route exact path='/'>
            <Redirect to='/main' />
          </Route>
          <Route path='/rooms' component={Rooms} />
          <Route path='/record' component={Recording} />
          <Route path='/login' component={Authorization} />
          <PrivateRoute
            exact
            path='/profile'
            isAuth={isAuth}
            component={Profile}
          />
          <Route path='/instruments' component={Instruments} />
          <PrivateRoute
            exact
            path='/admin'
            isAuth={isAdmin}
            component={Admin}
          />
          <Route path='/instruments' component={Instruments} />
          <Route component={NoPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routers;
