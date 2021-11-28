import './App.css';
import Footer from './components/footer/Footer';
import Routers from './components/routers/Routers';
import { useDispatch } from 'react-redux';
import { ACTIONS } from './redux/constants';

function App() {
  const dispatch = useDispatch();

  dispatch({ type: ACTIONS.DEFINE_USER });

  return (
    <div className='app'>
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
