import PDFAutomationFeatures from './feature-components/PDFAutomationFeatures';
import EShopAutomationFeatures from './feature-components/EShopAutomationFeatures';
import SunsetSurferFeatures from './feature-components/SunsetSurferFeatures';
import PortfolioFeatures from './feature-components/PortfolioFeatures';
import { useCallback, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const ProjectsFeatures = ({ activeProject }) => {
  let delay = 200;

  const ref = useRef();

  const {
    ref: inViewRef,
    inView,
    entry,
  } = useInView({
    threshold: 0,
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

  return (
    <div className="projects-features-container" ref={setRefs}>
      {activeProject === 'PDFAutomation' ? <PDFAutomationFeatures delay={delay} inView={inView} /> : null}
      {activeProject === 'eShop' ? <EShopAutomationFeatures delay={delay} /> : null}
      {activeProject === 'sunsetSurfer' ? <SunsetSurferFeatures delay={delay} /> : null}
      {activeProject === 'portfolio' ? <PortfolioFeatures delay={delay} /> : null}
    </div>
  );
};

export default ProjectsFeatures;
