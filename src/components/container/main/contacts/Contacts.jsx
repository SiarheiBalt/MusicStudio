import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faViber } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

import cl from './Contacts.module.css';
import './../../../../App.css';

const viber = (
  <FontAwesomeIcon
    style={{
      width: '25px',
      color: 'rgb(121, 59, 170)',
      margin: '0 3px',
    }}
    icon={faViber}
  />
);
const telegram = (
  <FontAwesomeIcon
    style={{
      width: '25px',
      height: '20px',
      color: 'rgb(34, 155, 211)',
      margin: '0 3px',
    }}
    icon={faTelegram}
  />
);
const phone = (
  <FontAwesomeIcon
    style={{ width: '40px', height: '30px' }}
    icon={faMobileAlt}
  />
);

const phoneText = '+37544-111-11-11';

const Contacts = () => {
  return (
    <div className={`${cl.contacts} form`}>
      <h3 className={cl.title}>Контакты</h3>
      <div className={cl.contacts__item}>
        {phone}
        <ul className={cl.list}>
          <li className={cl.list__item}>
            {phoneText} {viber} {telegram}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
