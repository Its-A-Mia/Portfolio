import { useEffect, useRef, useState } from 'react';
import FlowerVariantOne from '../icons/FlowerVariantOne';
import FlowerVariantTwo from '../icons/FlowerVariantTwo';
import HTMLWebIcon from '../icons/HTMLWebIcon';
import HeroIllustrationText from './HeroIllustrationText';

const HeroIllustration = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <a
      className="hero-illustration-container"
      href="./#projects"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <span className="hero-illustration-flower-one">
        <FlowerVariantTwo />
      </span>
      <HTMLWebIcon />

      <div className="hero-illustration-text-container">
        <HeroIllustrationText text={'CHECK'} idNum={1} isMouseOver={isMouseOver} />
        <HeroIllustrationText text={'OUT'} idNum={2} isMouseOver={isMouseOver} />
        <HeroIllustrationText text={'MY'} idNum={3} isMouseOver={isMouseOver} />
        <HeroIllustrationText text={'PROJECTS'} idNum={4} isMouseOver={isMouseOver} />
      </div>

      <span className="hero-illustration-flower-two">
        <FlowerVariantOne />
      </span>
    </a>
  );
};

export default HeroIllustration;
