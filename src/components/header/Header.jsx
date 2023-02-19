import './Header.css';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="grid">
      <div className="container header-container">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
