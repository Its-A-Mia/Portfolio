import React from 'react';
import Close from '../icons/Close';
import NavLink from './NavLink';

const NavMobile = ({ mobileNavIsActive, setMobileNavIsActive }) => {
  const handleCloseButtonClick = () => {
    setMobileNavIsActive(false);
  };

  return (
    <aside className={mobileNavIsActive ? 'nav-mobile-container nav-mobile-container-active' : 'nav-mobile-container'}>
      <button className="nav-mobile-close-button" onClick={() => handleCloseButtonClick()}>
        <Close />
      </button>
      <nav className="nav-mobile">
        <NavLink label={'Projects'} link={'#projects'} onClick={handleCloseButtonClick} />
        <NavLink label={'About'} link={'#about'} onClick={handleCloseButtonClick} />
        <NavLink label={'Contact'} link={'#contact'} onClick={handleCloseButtonClick} />
      </nav>
    </aside>
  );
};

export default NavMobile;
