import cl from './Hour.module.css';

const Hour = ({ time, hourClick }) => {
  const onClick = () => {
    time.isFree && hourClick(time);
  };
  return (
    <div
      className={
        time.isFree ? `${cl.time} ${cl.green}` : `${cl.time} ${cl.red}`
      }
      onClick={onClick}
    >
      <span className={cl.time__text}>{time.hour}</span>
    </div>
  );
};

export default Hour;
