import { useEffect, useRef, useState } from 'react';

const HeroIllustrationText = ({ text, idNum, isMouseOver }) => {
  const ref = useRef();
  const [isAnimationPlayed, setIsAnimationPlayed] = useState(false);

  useEffect(() => {
    if (isMouseOver && ref.current && isAnimationPlayed) {
      ref.current.style.width = '100%';
    }

    if (!isMouseOver && ref.current && isAnimationPlayed) {
      ref.current.style.width = '0%';
    }
  }, [isMouseOver, isAnimationPlayed]);

  return (
    <p className="hero-illustration-text" id={`hero-illustration-text-${idNum}`}>
      {'<'}
      {text}
      {'>'}
      <span className="hero-illustration-text-highlighter" ref={ref} onAnimationEnd={() => setIsAnimationPlayed(true)}>
        {'<'}
        {text}
        {'>'}
      </span>
    </p>
  );
};

export default HeroIllustrationText;
