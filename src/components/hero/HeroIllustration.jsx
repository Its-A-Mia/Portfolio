import FlowerVariantOne from '../icons/FlowerVariantOne';
import FlowerVariantTwo from '../icons/FlowerVariantTwo';
import HTMLWebIcon from '../icons/HTMLWebIcon';

const HeroIllustration = () => {
  return (
    <a className="hero-illustration-container" href="./#projects">
      <span className="hero-illustration-flower-one">
        <FlowerVariantTwo />
      </span>
      <HTMLWebIcon />

      <div className="hero-illustration-text-container">
        <p className="hero-illustration-text" id="hero-illustration-text-1">
          {'<'}CHECK{'>'}
          <span className="hero-illustration-text-highligher">
            {'<'}CHECK{'>'}
          </span>
        </p>

        <p className="hero-illustration-text" id="hero-illustration-text-2">
          {'<'}OUT{'>'}
          <span className="hero-illustration-text-highligher">
            {'<'}OUT{'>'}
          </span>
        </p>

        <p className="hero-illustration-text" id="hero-illustration-text-3">
          {'<'}MY{'>'}
          <span className="hero-illustration-text-highligher">
            {'<'}MY{'>'}
          </span>
        </p>

        <p className="hero-illustration-text" id="hero-illustration-text-4">
          {'<'}PROJECTS{'>'}
          <span className="hero-illustration-text-highligher">
            {'<'}PROJECTS{'>'}
          </span>
        </p>
      </div>

      <span className="hero-illustration-flower-two">
        <FlowerVariantOne />
      </span>
    </a>
  );
};

export default HeroIllustration;
