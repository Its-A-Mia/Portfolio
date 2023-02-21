import { useRef } from 'react';

const ProjectsNav = ({ activeProject, setActiveProject }) => {
  const handleClick = (projectName) => {
    setActiveProject(projectName);
  };

  return (
    <ul className="projects-nav">
      <li
        className="projects-nav-item"
        id={activeProject === 'eShop' && 'projects-nav-active'}
        onClick={() => handleClick('eShop')}
      >
        <button className="projects-nav-button">eShop</button>
      </li>
      <li
        className="projects-nav-item"
        id={activeProject === 'sunsetSurfer' && 'projects-nav-active'}
        onClick={() => handleClick('sunsetSurfer')}
      >
        <button className="projects-nav-button">Sunset Surfer</button>
      </li>
      <li
        className="projects-nav-item"
        id={activeProject === 'portfolio' && 'projects-nav-active'}
        onClick={() => handleClick('portfolio')}
      >
        <button className="projects-nav-button">Portfolio</button>
      </li>
      <li
        className="projects-nav-item"
        id={activeProject === 'comingSoon' && 'projects-nav-active'}
        onClick={() => handleClick('comingSoon')}
      >
        <button className="projects-nav-button">Coming Soon</button>
      </li>
    </ul>
  );
};

export default ProjectsNav;
