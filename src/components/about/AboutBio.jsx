import bioImage from '../../assets/bioImage.webp';
import Image from '../Image';
import CliftonStrengths from './CliftonStrengths';
import Skills from './Skills';

const AboutBio = () => {
  return (
    <div className="bio-container grid">
      <div className="bio-image-container">
        <Image className="bio-image" alt="a full-body shot of myself, Mia Purdun" src={bioImage} />
      </div>
      <div className="bio-text-container">
        <p className="bio-text bio-top-text">
          At the ripe, old age of 8, I stumbled upon a dated networking textbook from my dad's college days. Of course,
          my adolescent self didn't make much headway, much like a squirrel driving a car or solving a rubik's cube, but
          it was an unforgettable moment-an introduction to something I knew I could love.
        </p>
        <p className="bio-text bio-middle-text">
          Following in my dad's footsteps, I enrolled in college courses that would build my foundational understanding
          of software development. Unfortunately, extenuating circumstances forced me to continue independently, but I
          kept improving my knowledge and skills. Now, I've built numerous{' '}
          <a className="text-link" href="./#projects">
            projects
          </a>{' '}
          and even worked with a startup.
        </p>
        <p className="bio-text bio-bottom-text">
          Besides developing, I spend my time playing tennis, enjoying videogames with friends and, celebrating life
          with my boyfriend. If you have any questions or are interested in collaborating, don't hesitate to reach out -
          I'm always up for a chat!
        </p>
        <Skills />
      </div>
      <CliftonStrengths />
    </div>
  );
};

export default AboutBio;
