import { useState } from 'react';
import './Projects.css';
import ProjectsCard from './ProjectsCard';
import ProjectsNav from './ProjectsNav';
import ContentTitle from '../design-system/title/ContentTitle';

const Projects = () => {
  const [activeProject, setActiveProject] = useState('PDFAutomation');
  const [isSwapAnimationActive, setIsSwapAnimationActive] = useState(true);

  return (
    <section className="projects super-section" id="projects">
      <div className="golden-border golden-border-top"></div>
      <div className="container grid">
        <ContentTitle className={'projects-title'}>Projects</ContentTitle>
        {/* <h2 className="section-title projects-title">Projects</h2> */}
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
