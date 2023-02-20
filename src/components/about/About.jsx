import './About.css';
import AboutBio from './AboutBio';
import Skills from './Skills';

const About = () => {
  return (
    <section id="about super-section">
      <div className="container grid">
        <h2 className="section-title about-title">Journey and Skills</h2>
        <AboutBio />
        <Skills />
      </div>
    </section>
  );
};

export default About;
