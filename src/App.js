import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />

        <Route path='/main' component={Main} />
      </div>
    </BrowserRouter>
  );
}

export default App;
