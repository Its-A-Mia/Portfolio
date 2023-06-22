import NavLink from './NavLink';
const NavDesktop = () => {
  return (
    <nav className="nav-desktop">
      <NavLink label={'Projects'} link={'#projects'} />
      <NavLink label={'About'} link={'#about'} />
      <NavLink label={'Contact'} link={'#contact'} />
    </nav>
  );
};

export default NavDesktop;
