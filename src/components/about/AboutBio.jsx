import bioImage from '../../assets/bioImage.webp';
import Image from '../Image';

const AboutBio = () => {
  return (
    <div className="bio-container grid">
      <div className="bio-image-container">
        <Image className="bio-image" alt="a full-body shot of myself, Mia Purdun" src={bioImage} />
      </div>
      <div className="bio-text-container">
        <p className="bio-text bio-top-text">
          I'm a front-end web developer based in Minnesota, and my mission is to help make the internet a more beautiful
          and accessible experience for everyone. I'm a lover of clean code, eye-catching designs, and seamless user
          experiences.
        </p>
        <p className="bio-text bio-middle-text">
          My journey as a developer began with a couple computer science courses and a healthy dose of trial and error;
          but once I started learning about web development, I was hooked. I'm skilled in HTML, CSS and JavaScript, and
          have worked with a variety of front-end frameworks like Next.js and Material UI.
        </p>
        <p className="bio-text bio-bottom-text">
          When I'm not typing away at my keyboard, you'll find me burning off some steam on the tennis court, climbing
          the ranked ladders of Rocket League, or trying out the latest local hotspots. If you have any questions or are
          interested in collaborating, don't hesitate to reach out - I'm always up for a chat!
        </p>
      </div>
      <div className="bio-strengths-container">
        <h3 className="bio-strengths-title">Clifton Strengths</h3>
        <ul className="bio-strengths-list">
          <li>
            <a
              className="bio-strengths-list-anchor"
              href="https://www.gallup.com/cliftonstrengths/en/252323/restorative-theme.aspx"
              target="_blank"
            >
              Restorative
            </a>
          </li>
          <li>
            <a
              className="bio-strengths-list-anchor"
              href="https://www.gallup.com/cliftonstrengths/en/252134/achiever-theme.aspx"
              target="_blank"
            >
              Achiever
            </a>
          </li>
          <li>
            <a
              className="bio-strengths-list-anchor"
              href="https://www.gallup.com/cliftonstrengths/en/252134/learner-theme.aspx"
              target="_blank"
            >
              Learner
            </a>
          </li>
          <li>
            <a
              className="bio-strengths-list-anchor"
              href="https://www.gallup.com/cliftonstrengths/en/252134/ideation-theme.aspx"
              target="_blank"
            >
              Ideation
            </a>
          </li>
          <li>
            <a
              className="bio-strengths-list-anchor"
              href="https://www.gallup.com/cliftonstrengths/en/252134/intellection-theme.aspx"
              target="_blank"
            >
              Intellection
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutBio;
