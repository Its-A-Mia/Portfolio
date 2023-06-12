import ProjectsNavItem from './ProjectsNavItem';

const ProjectsNav = ({ activeProject, setActiveProject, setIsSwapAnimationActive }) => {
  const navItems = [
    {
      id: 'PDFAutomation',
      name: 'PDF Automation',
    },
    {
      id: 'eShop',
      name: 'eShop',
    },
    {
      id: 'sunsetSurfer',
      name: 'Sunset Surfer',
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
    },
  ];

  return (
    <ul className="projects-nav">
      {navItems.map((item) => (
        <ProjectsNavItem
          id={item.id}
          name={item.name}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
          setIsSwapAnimationActive={setIsSwapAnimationActive}
        />
      ))}
    </ul>
  );
};

export default ProjectsNav;
