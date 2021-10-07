import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Main from './components/main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Route path="/main" component={Main} />
        <Route exact path="/MusicStudio">
          <Redirect to="/main" />
        </Route>
        <Route exact path="/">
          <Redirect to="/main" />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
