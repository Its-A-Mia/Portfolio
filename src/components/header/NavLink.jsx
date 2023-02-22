const NavLink = ({ label, link, onClick }) => {
  return (
    <a className="nav-link" href={link} onClick={() => onClick()}>
      {label}
    </a>
  );
};

export default NavLink;
