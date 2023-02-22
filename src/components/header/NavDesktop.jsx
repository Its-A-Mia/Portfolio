import NavLink from './NavLink';
import NavDownloadLink from './NavDownloadLink';
import resume from '../../assets/resume.pdf';

const NavDesktop = () => {
  return (
    <nav className="nav-desktop">
      <NavLink label={'Projects'} link={'#projects'} />
      <NavLink label={'About'} link={'#about'} />
      <NavLink label={'Contact'} link={'#contact'} />
      <NavDownloadLink label={'Resume'} link={resume} download={'Mia_Purdun_Resume'} />
    </nav>
  );
};

export default NavDesktop;
