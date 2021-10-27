import cl from './Contacts.module.css';
import './../../../../App.css';

const Contacts = () => {
  return (
    <div className={`${cl.contacts} form`}>
      <ul className='list'>
        <li>+37544-111-11-11</li>
        <li>+37544-111-11-11</li>
        <li>+37544-111-11-11</li>
      </ul>
    </div>
  );
};

export default Contacts;
