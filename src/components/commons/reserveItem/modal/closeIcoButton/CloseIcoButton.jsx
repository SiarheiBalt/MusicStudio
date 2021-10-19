import cl from './CloseIcoButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const CloseIcoButton = ({ close }) => {
  const onClick = () => {
    close();
  };
  const closeIco = (
    <FontAwesomeIcon
      className={cl.closeIco}
      icon={faTimesCircle}
      onClick={onClick}
    />
  );
  return <div className={cl.container}>{closeIco}</div>;
};

export default CloseIcoButton;
