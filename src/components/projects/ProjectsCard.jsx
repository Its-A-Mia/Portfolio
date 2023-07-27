import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import CallToAction from '../design-system/button/CallToAction';
import Image from '../Image';
import eShop from './projects/eshop';
import PDFAutomation from './projects/pdfAutomation';
import portfolio from './projects/portfolio';
import sunsetSurfer from './projects/sunsetSurfer';

const projects = { eShop, PDFAutomation, portfolio, sunsetSurfer };

const ProjectsCard = ({ activeProject, isSwapAnimationActive, setIsSwapAnimationActive }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      entry.target.style.opacity = '100';
    }
  }, [inView]);

  return (
    <div className="projects-card grid" onAnimationEnd={() => setIsSwapAnimationActive(false)} ref={ref}>
      <div
        className={
          isSwapAnimationActive && inView
            ? 'projects-card-image-container projects-card-image-container-active'
            : 'projects-card-image-container'
        }
      >
        <Image
          className="projects-card-image"
          src={projects[activeProject].imgSrc}
          alt={projects[activeProject].alt}
          isSwapAnimationActive={isSwapAnimationActive}
        />
      </div>

      <div
        className={
          isSwapAnimationActive && inView
            ? 'projects-card-content projects-card-content-active'
            : 'projects-card-content'
        }
      >
        {projects[activeProject].urls.length > 0 ? (
          <div className="projects-card-content-btn-container">
            {projects[activeProject].urls.map((url) => (
              <CallToAction className={'projects-card-content-btn'} href={url.url} width={200}>
                {url.type}
              </CallToAction>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectsCard;
