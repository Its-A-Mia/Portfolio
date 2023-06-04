import './Hero.css';
import HeroCanvas from './HeroCanvas';
import HeroGreeting from './HeroGreeting';
import HeroIllustration from './HeroIllustration';
import BeePrimary from './BeePrimary';
import BeeSecondary from './BeeSecondary';

const Hero = () => {
  return (
    <div className="hero">
      <BeePrimary />
      <BeeSecondary />
      <div className="container grid">
        <HeroIllustration />
        <HeroGreeting />
      </div>

      <HeroCanvas />
    </div>
  );
};

export default Hero;
