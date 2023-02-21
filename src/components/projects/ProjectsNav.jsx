import { useRef } from 'react';

const ProjectsNav = ({ activeProject, setActiveProject }) => {
  const handleClick = (projectName) => {
    setActiveProject(projectName);
  };

  return (
    <ul className="projects-nav">
      <li className="projects-nav-item" id={activeProject === 'eShop' && 'projects-nav-active'}>
        <button className="projects-nav-button" onClick={() => handleClick('eShop')}>
          eShop
        </button>
      </li>
      <li className="projects-nav-item" id={activeProject === 'sunsetSurfer' && 'projects-nav-active'}>
        <button className="projects-nav-button" onClick={() => handleClick('sunsetSurfer')}>
          Sunset Surfer
        </button>
      </li>
      <li className="projects-nav-item" id={activeProject === 'portfolio' && 'projects-nav-active'}>
        <button className="projects-nav-button" onClick={() => handleClick('portfolio')}>
          Portfolio
        </button>
      </li>
      <li className="projects-nav-item" id={activeProject === 'comingSoon' && 'projects-nav-active'}>
        <button className="projects-nav-button" onClick={() => handleClick('comingSoon')}>
          Coming Soon
        </button>
      </li>
    </ul>
  );
};

export default ProjectsNav;
