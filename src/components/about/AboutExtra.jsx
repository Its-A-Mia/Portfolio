import { useInView } from 'react-intersection-observer';
import CallToAction from '../design-system/button/CallToAction';
import CliftonStrengths from './CliftonStrengths';
import { useEffect } from 'react';

const AboutExtra = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      entry.target.style.opacity = 100;
    }
  }, [inView]);

  return (
    <div className="bio-extra-container grid" ref={ref}>
      <div className="bio-extra-left-container">
        <div className="bio-extra-left-content">
          <p className="bio-extra-left-content-text">Take a peek at my</p>
          <CallToAction>Resume</CallToAction>
        </div>
      </div>
      <div className="bio-extra-right-container">
        <CliftonStrengths />
      </div>
    </div>
  );
};

export default AboutExtra;
