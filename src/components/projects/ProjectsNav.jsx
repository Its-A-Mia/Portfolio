const ProjectsNav = ({ activeProject, setActiveProject, setIsSwapAnimationActive }) => {
  const handleClick = (projectName) => {
    if (projectName !== activeProject) {
      setIsSwapAnimationActive(true);
    }
    console.log(projectName);
    setActiveProject(projectName);
  };

  return (
    <ul className="projects-nav">
      <li
        className="projects-nav-item"
        id={activeProject === 'PDFAutomation' ? 'projects-nav-active' : undefined}
        onClick={() => handleClick('PDFAutomation')}
      >
        <button className="projects-nav-button">PDF Automation</button>
      </li>
      <li
        className="projects-nav-item"
        id={activeProject === 'eShop' ? 'projects-nav-active' : undefined}
        onClick={() => handleClick('eShop')}
      >
        <button className="projects-nav-button">eShop</button>
      </li>
      <li
        className="projects-nav-item"
        id={activeProject === 'sunsetSurfer' ? 'projects-nav-active' : undefined}
        onClick={() => handleClick('sunsetSurfer')}
      >
        <button className="projects-nav-button">Sunset Surfer</button>
      </li>

      <li
        className="projects-nav-item"
        id={activeProject === 'portfolio' ? 'projects-nav-active' : undefined}
        onClick={() => handleClick('portfolio')}
      >
        <button className="projects-nav-button">Portfolio</button>
      </li>
    </ul>
  );
};

export default ProjectsNav;
