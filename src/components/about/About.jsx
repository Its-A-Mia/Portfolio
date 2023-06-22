import ContentTitle from '../design-system/title/ContentTitle';
import './About.css';
import AboutBio from './AboutBio';
import AboutExtra from './AboutExtra';
import Skills from './Skills';

const About = () => {
  return (
    <section className="super-section" id="about">
      <div className="container grid">
        <ContentTitle className={'about-title'}>Journey and Skills</ContentTitle>
        <AboutBio />
        <AboutExtra />
      </div>
    </section>
  );
};

export default About;
