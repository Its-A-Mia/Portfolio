import './About.css';
import AboutBio from './AboutBio';

const About = () => {
  return (
    <section id="about">
      <div className="container grid">
        <h2 className="section-title about-title">Journey and Skills</h2>
        <AboutBio />
      </div>
    </section>
  );
};

export default About;
