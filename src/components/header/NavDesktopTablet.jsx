import NavLink from './NavLink';

const NavDesktopTablet = () => {
  return (
    <nav className="nav-desktop-tablet">
      <NavLink label={'Projects'} link={'#projects'} />
      <NavLink label={'About'} link={'#about'} />
      <NavLink label={'Contact'} link={'#contact'} />
    </nav>
  );
};

export default NavDesktopTablet;
