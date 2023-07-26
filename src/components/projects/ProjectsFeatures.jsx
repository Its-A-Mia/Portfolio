import PDFAutomationFeatures from './feature-components/PDFAutomationFeatures';
import EShopAutomationFeatures from './feature-components/EShopAutomationFeatures';
import SunsetSurferFeatures from './feature-components/SunsetSurferFeatures';
import PortfolioFeatures from './feature-components/PortfolioFeatures';
import { useInView } from 'react-intersection-observer';

const ProjectsFeatures = ({ activeProject }) => {
  let delay = 200;

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="projects-features-container" ref={ref}>
      {activeProject === 'PDFAutomation' ? <PDFAutomationFeatures delay={delay} inView={inView} /> : null}
      {activeProject === 'eShop' ? <EShopAutomationFeatures delay={delay} /> : null}
      {activeProject === 'sunsetSurfer' ? <SunsetSurferFeatures delay={delay} /> : null}
      {activeProject === 'portfolio' ? <PortfolioFeatures delay={delay} /> : null}
    </div>
  );
};

export default ProjectsFeatures;
