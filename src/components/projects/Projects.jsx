import { useState } from 'react';
import './Projects.css';
import ProjectsCard from './ProjectsCard';
import ProjectsNav from './ProjectsNav';
import ContentTitle from '../design-system/title/ContentTitle';
import ProjectsFeatures from './ProjectsFeatures';

const Projects = () => {
  const [activeProject, setActiveProject] = useState('PDFAutomation');
  const [isSwapAnimationActive, setIsSwapAnimationActive] = useState(true);

  return (
    <section className="projects super-section" id="projects">
      <div className="golden-border golden-border-top"></div>
      <div className="container grid">
        <ContentTitle className={'projects-title'}>Projects</ContentTitle>
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
        <ProjectsFeatures activeProject={activeProject} isSwapAnimationActive={isSwapAnimationActive} />
      </div>
      <div className="golden-border golden-border-bottom"></div>
    </section>
  );
};

export default Projects;
