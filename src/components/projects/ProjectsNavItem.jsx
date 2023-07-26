import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const ProjectsNavItem = ({ id, name, activeProject, setActiveProject, setIsSwapAnimationActive }) => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      entry.target.style.opacity = '100';
    }

    return () => {
      clearTimeout();
    };
  }, [inView]);

  const handleClick = (projectName) => {
    if (projectName !== activeProject) {
      setIsSwapAnimationActive(true);
    }
    setActiveProject(projectName);
  };

  return (
    <>
      <li
        className="projects-nav-item"
        id={activeProject === id ? 'projects-nav-active' : undefined}
        ref={ref}
        onClick={() => handleClick(id)}
      >
        <button className="projects-nav-button">{name}</button>
      </li>
    </>
  );
};

export default ProjectsNavItem;
