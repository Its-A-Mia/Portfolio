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
      <div className="golden-border golden-border-bottom"></div>
    </header>
  );
};

export default Header;
