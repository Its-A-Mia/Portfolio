import './Hero.css';
import HeroCanvas from './HeroCanvas';
import HeroGreeting from './HeroGreeting';
import HeroIllustration from './HeroIllustration';

const Hero = () => {
  return (
    <div className="hero ">
      <div className="container grid">
        <HeroIllustration />
        <HeroGreeting />
      </div>
      <HeroCanvas />
    </div>
  );
};

export default Hero;
