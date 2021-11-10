import './App.css';
import Footer from './components/footer/Footer';
import Routers from './components/routers/Routers';
import { useDispatch } from 'react-redux';
import { ACTIONS } from './redux/constants';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ACTIONS.DEFINE_USER });
  });

  return (
    <div className="app">
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
