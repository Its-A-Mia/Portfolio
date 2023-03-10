import './About.css';
import AboutBio from './AboutBio';
import Skills from './Skills';

const About = () => {
  return (
    <section className="super-section" id="about">
      <div className="container grid">
        <h2 className="section-title about-title">Journey and Skills</h2>
        <AboutBio />
        <Skills />
      </div>
    </section>
  );
};

export default About;
