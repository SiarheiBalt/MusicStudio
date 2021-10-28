import PropTypes from 'prop-types';

import classNames from 'classnames';

import { container, text, red, green } from './ServerStatus.module.css';

const ServerStatus = ({ error, message }) => {
  const serverText = error || message;

  if (serverText) {
    console.log(serverText);
  }

  const textClass = classNames(text, { [red]: error }, { [green]: message });

  return (
    <div className={container}>
      <span className={textClass}>{serverText}</span>
    </div>
  );
};

ServerStatus.propTypes = {
  error: PropTypes.string,
  message: PropTypes.string,
};

export default ServerStatus;
