const NavLink = ({ label, link }) => {
  return (
    <a className="nav-link" href={link}>
      {label}
    </a>
  );
};

export default NavLink;
