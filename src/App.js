import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Rooms from './components/rooms/Rooms';
import Recording from './components/recording/Recording';
import { useDispatch } from 'react-redux';
import { ACTIONS } from './redux/constants';
import { useEffect } from 'react';
import { checkUserLocalStorage } from './functions/localStorage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ACTIONS.DEFINE_USER });
  });

  return (
    <BrowserRouter>
      <div className="app">
        <div className="app-container">
          <Header />
          <Route path="/main" component={Main} />
          <Route exact path="/MusicStudio">
            <Redirect to="/main" />
          </Route>
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
          <Route path="/rooms" component={Rooms} />
          <Route path="/record" component={Recording} />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
