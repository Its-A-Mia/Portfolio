import { useInView } from 'react-intersection-observer';
import CallToAction from '../design-system/button/CallToAction';
import CliftonStrengths from './CliftonStrengths';
import resume from '../../assets/resume.pdf';
import { useEffect } from 'react';

const AboutExtra = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      entry.target.style.opacity = 100;
    }
  }, [inView]);

  return (
    <div className="bio-extra-container grid">
      <div className="bio-extra-left-container" ref={ref}>
        <div className="bio-extra-left-content">
          <p className="bio-extra-left-content-text">Take a peek at my</p>
          <CallToAction href={resume} download={'Mia_Purdun_Resume'}>
            Resume
          </CallToAction>
        </div>
      </div>
      <div className="bio-extra-right-container">
        <CliftonStrengths />
      </div>
    </div>
  );
};

export default AboutExtra;
