import './Header.css';
import Logo from './Logo';
import NavDesktopTablet from './NavDesktopTablet';
import NavMobile from './NavMobile';
import Hamburger from '../icons/Hamburger';
import { useState } from 'react';

const Header = () => {
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false);

  const handleBurgerMenuClick = () => {
    setMobileNavIsActive(true);
  };

  return (
    <header>
      <div className="container header-container grid">
        <Logo />
        <NavDesktopTablet />
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
