import { useState } from 'react';
import PDFAutomationFeatures from './feature-components/PDFAutomationFeatures';
import EShopAutomationFeatures from './feature-components/EShopAutomationFeatures';
import SunsetSurferFeatures from './feature-components/SunsetSurferFeatures';
import PortfolioFeatures from './feature-components/PortfolioFeatures';

const ProjectsFeatures = ({ activeProject, isSwapAnimationActive, setIsSwapAnimationActive }) => {
  return (
    <div className="projects-features-container">
      {/* <h3 className="projects-features-title">Features:</h3> */}
      {activeProject === 'PDFAutomation' ? <PDFAutomationFeatures /> : null}
      {activeProject === 'eShop' ? <EShopAutomationFeatures /> : null}
      {activeProject === 'sunsetSurfer' ? <SunsetSurferFeatures /> : null}
      {activeProject === 'portfolio' ? <PortfolioFeatures /> : null}
    </div>
  );
};

export default ProjectsFeatures;
