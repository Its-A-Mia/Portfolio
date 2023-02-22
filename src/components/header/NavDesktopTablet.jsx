import NavLink from './NavLink';
import NavDownloadLink from './NavDownloadLink';

const NavDesktopTablet = () => {
  return (
    <nav className="nav-desktop-tablet">
      <NavLink label={'Projects'} link={'#projects'} />
      <NavLink label={'About'} link={'#about'} />
      <NavLink label={'Contact'} link={'#contact'} />
      <NavDownloadLink label={'Resume'} link={'path'} download={'Mia_Purdun_Resume'} />
    </nav>
  );
};

export default NavDesktopTablet;
