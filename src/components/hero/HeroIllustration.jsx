import FlowerVariantOne from '../icons/FlowerVariantOne';
import FlowerVariantTwo from '../icons/FlowerVariantTwo';
import HTMLWebIcon from '../icons/HTMLWebIcon';

const HeroIllustration = () => {
  return (
    <div className="hero-illustration-container">
      <span className="hero-illustration-flower-one">
        <FlowerVariantTwo />
      </span>
      <HTMLWebIcon />
      <span className="hero-illustration-flower-two">
        <FlowerVariantOne />
      </span>
    </div>
  );
};

export default HeroIllustration;
