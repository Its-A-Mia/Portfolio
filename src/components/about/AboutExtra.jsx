import CallToAction from '../design-system/button/CallToAction';
import CliftonStrengths from './CliftonStrengths';

const AboutExtra = () => {
  return (
    <div className="bio-extra-container grid">
      <div className="bio-extra-left-content">
        <CallToAction>Resume</CallToAction>
      </div>
      <div className="bio-extra-title-container">
        <h3 className="bio-extra-title">More About Me</h3>
      </div>
      <div className="bio-extra-right-content">
        <CliftonStrengths />
      </div>
    </div>
  );
};

export default AboutExtra;
