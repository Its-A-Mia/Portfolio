import './Header.css';
import Logo from './Logo';
import NavMobile from './NavMobile';
import Hamburger from '../icons/Hamburger';
import NavDesktop from './NavDesktop';

const Header = ({ mobileNavIsActive, setMobileNavIsActive }) => {
  const handleBurgerMenuClick = () => {
    setMobileNavIsActive(true);
  };

  return (
    <header>
      <div className="container header-container grid">
        <Logo />
        <NavDesktop />
        <NavMobile setMobileNavIsActive={setMobileNavIsActive} mobileNavIsActive={mobileNavIsActive} />
        <button className="nav-mobile-hamburger-button" onClick={() => handleBurgerMenuClick()}>
          <Hamburger />
        </button>
      </div>
      <div className="golden-border golden-border-bottom"></div>
    </header>
  );
};

export default Header;
