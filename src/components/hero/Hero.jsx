import './Hero.css';
import HeroCanvas from './HeroCanvas';
import HeroGreeting from './HeroGreeting';
import HeroIllustration from './HeroIllustration';
import BeeIcon from '../icons/BeeIcon';

const Hero = () => {
  return (
    <div className="hero">
      {/* <div className="hero-bee-primary-container">
        <svg className="hero-bee-primary-line" viewBox="0 0 926 107" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className="hero-bee-primary-line"
            d="M925 9.28495C455.443 -41.405 208.573 159.864 1 91.7804"
            stroke="black"
            strokeDasharray="4 4"
          />
        </svg>
        <BeeIcon className={'hero-bee-primary'} stroke={'var(--tertiary-color)'} />
      </div>
      <div className="hero-bee-secondary-container">
        <BeeIcon className={'hero-bee-secondary flip-horizontally'} stroke={'var(--bg-primary)'} />
        <svg className="hero-bee-secondary-line" viewBox="0 0 716 307" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className="hero-bee-secondary-line"
            d="M716 1C459.835 1 209.327 364.518 1 297.831"
            stroke="black"
            strokeDasharray="4 4"
          />
        </svg>
      </div>
      <div className="container grid">
        <HeroIllustration />
        <HeroGreeting />
      </div>
      <HeroCanvas /> */}
    </div>
  );
};

export default Hero;
