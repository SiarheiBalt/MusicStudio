import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Main from './../container/main/Main';
import Rooms from './../container/rooms/Rooms';
import Recording from './../container/recording/Recording';
import Header from './../header/Header';

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className={'app-container'}>
        <Route path="/main" component={Main} />
        <Route exact path="/studio">
          <Redirect to="/main" />
        </Route>
        <Route exact path="/">
          <Redirect to="/main" />
        </Route>
        <Route path="/rooms" component={Rooms} />
        <Route path="/record" component={Recording} />
      </div>
    </BrowserRouter>
  );
};

export default Routers;
