import bioImage from '../../assets/bioImage.webp';

const AboutBio = () => {
  return (
    <div className="bio-container grid">
      <div className="bio-image-container">
        <div className="image-border">
          <img className="bio-image" alt="a full-body shot of myself, Mia Purdun" src={bioImage}></img>
        </div>
      </div>
      <div className="bio-text-container">
        <p className="bio-text">
          I'm a front-end web developer based in Minnesota, and my mission is to help make the internet a more beautiful
          and accessible experience for everyone. I'm a lover of clean code, eye-catching designs, and seamless user
          experiences.
        </p>
        <p className="bio-text">
          My journey as a developer began with a couple computer science courses and a healthy dose of trial and error;
          but once I started learning about web development, I was hooked. I'm skilled in HTML, CSS and JavaScript, and
          have worked with a variety of front-end frameworks like Next.js and Material UI.
        </p>
        <p className="bio-text">
          When I'm not typing away at my keyboard, you'll find me burning off some steam on the tennis court, climbing
          the ranked ladders of Rocket League, or trying out the latest local hotspots. If you have any questions or are
          interested in collaborating, don't hesitate to reach out - I'm always up for a chat!
        </p>
      </div>
    </div>
  );
};

export default AboutBio;