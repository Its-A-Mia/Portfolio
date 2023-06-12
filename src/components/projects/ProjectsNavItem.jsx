import { useInView } from 'react-intersection-observer';
import { useCallback, useEffect, useRef, useState } from 'react';

const ProjectsNavItem = ({ id, name, activeProject, setActiveProject, setIsSwapAnimationActive }) => {
  const ref = useRef();

  const {
    ref: inViewRef,
    inView,
    entry,
  } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  useEffect(() => {
    if (inView) {
      ref.current.style.opacity = '100';
    }

    return () => {
      clearTimeout();
    };
  }, [inView]);

  const handleClick = (projectName) => {
    if (projectName !== activeProject) {
      setIsSwapAnimationActive(true);
    }
    console.log(projectName);
    setActiveProject(projectName);
  };

  return (
    <>
      <li
        className="projects-nav-item"
        id={activeProject === id ? 'projects-nav-active' : undefined}
        ref={setRefs}
        onClick={() => handleClick(id)}
      >
        <button className="projects-nav-button">{name}</button>
      </li>
    </>
  );
};

export default ProjectsNavItem;
