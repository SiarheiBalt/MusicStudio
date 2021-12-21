import './App.css';
import Footer from './components/footer/Footer';
import Routers from './components/routers/Routers';
import { useDispatch } from 'react-redux';
import { DEFINE_USER } from './redux/constants';

function App() {
  const dispatch = useDispatch();

  dispatch({ type: DEFINE_USER });

  return (
    <div className='app'>
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
