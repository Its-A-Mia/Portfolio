import React from 'react';

const NavDownloadLink = ({ label, link, download }) => {
  return (
    <a className="nav-download-link" href={link} download={download}>
      {label}
    </a>
  );
};

export default NavDownloadLink;
