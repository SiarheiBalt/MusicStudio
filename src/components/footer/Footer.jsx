import cl from './Footer.module.css';

const copyright = '©2021 All Right Reserved';

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className={'app-container'}>
        <span className={cl.copyright}>{copyright}</span>
      </div>
    </footer>
  );
};

export default Footer;
