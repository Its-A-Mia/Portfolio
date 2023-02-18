import './Hero.css';
import HeroCanvas from './HeroCanvas';
import HeroGreeting from './HeroGreeting';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero-container">
        <HeroGreeting />
      </div>
      <HeroCanvas />
    </div>
  );
};

export default Hero;
