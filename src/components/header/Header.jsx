import './Header.css';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <div className="container header-container grid">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
