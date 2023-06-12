import ContentTitle from '../design-system/title/ContentTitle';
import './About.css';
import AboutBio from './AboutBio';
import Skills from './Skills';

const About = () => {
  return (
    <section className="super-section" id="about">
      <div className="container grid">
        <ContentTitle className={'about-title'}>Journey and Skills</ContentTitle>
        <AboutBio />
        <Skills />
      </div>
    </section>
  );
};

export default About;
