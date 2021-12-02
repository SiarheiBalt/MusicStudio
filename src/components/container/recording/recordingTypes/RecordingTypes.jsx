import { NavLink } from 'react-router-dom';
import cl from './RecordingTypes.module.css';

const RecordingTypes = () => {
  const titleRecordText = 'Типы записи';
  const typeSoloTitleText = 'Solo';
  const typeLiveTitleText = 'Live';
  const typeSoloText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem porro dolor quod facilis nihil. Nisi, cumque optio dolore reiciendis exercitationem ipsa obcaecati repellendus inventore, dolor magni illum dolores praesentium aut?`;
  const typeLiveText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus autem eveniet optio distinctio molestiae, delectus excepturi porro tempora facere beatae sed quos itaque aliquid ut ad est aperiam quia voluptate ipsa modi at in. Sed doloremque beatae culpa explicabo accusantium illo qui mollitia vitae perspiciatis molestias necessitatibus iste odit quod sint amet, id dolores ex. Esse dignissimos ipsa dolor at!`;

  return (
    <div className={'record'}>
      <h2 className={cl.title}>{titleRecordText}</h2>
      <div className={cl.type}>
        <h3 className={cl.link}>
          <NavLink to='Solo' activeClassName={cl.activ}>
            {typeSoloTitleText}
          </NavLink>
        </h3>
        <div>{typeSoloText}</div>
      </div>
      <div className={cl.type}>
        <h3 className={cl.link}>
          <NavLink to='Live' activeClassName={cl.activ}>
            {typeLiveTitleText}
          </NavLink>
        </h3>
        <div>{typeLiveText}</div>
      </div>
    </div>
  );
};

export default RecordingTypes;
