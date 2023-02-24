import { useState } from 'react';
import './Projects.css';
import ProjectsCard from './ProjectsCard';
import ProjectsNav from './ProjectsNav';

const Projects = () => {
  const [activeProject, setActiveProject] = useState('eShop');
  const [isSwapAnimationActive, setIsSwapAnimationActive] = useState(true);

  return (
    <section className="projects super-section" id="projects">
      <div className="golden-border golden-border-top"></div>
      <div className="container grid">
        <h2 className="section-title projects-title">Projects</h2>
        <ProjectsNav
          activeProject={activeProject}
          setActiveProject={setActiveProject}
          setIsSwapAnimationActive={setIsSwapAnimationActive}
        />
        <ProjectsCard
          activeProject={activeProject}
          isSwapAnimationActive={isSwapAnimationActive}
          setIsSwapAnimationActive={setIsSwapAnimationActive}
        />
      </div>
      <div className="golden-border golden-border-bottom"></div>
    </section>
  );
};

export default Projects;
