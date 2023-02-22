const NavDownloadLink = ({ label, link, download }) => {
  return (
    <a className="nav-download-link" href={link} download={download} target="_blank">
      {label}
    </a>
  );
};

export default NavDownloadLink;
