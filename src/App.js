import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Rooms from './components/rooms/Rooms';
import Recording from './components/recording/Recording';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <BrowserRouter>
          <Header />
          <Route path="/main" component={Main} />
          <Route exact path="/studio">
            <Redirect to="/main" />
          </Route>
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
          <Route path="/rooms" component={Rooms} />
          <Route path="/record" component={Recording} />
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
