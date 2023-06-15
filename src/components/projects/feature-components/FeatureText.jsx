import { useEffect, useRef } from 'react';

const FeatureText = ({ text, highlightedIcon, iconName }) => {
  const ref = useRef();

  useEffect(() => {
    if (highlightedIcon === iconName) {
      ref.current.style.opacity = '100';
    } else {
      ref.current.style.opacity = '33%';
    }
  }, [highlightedIcon]);
  return (
    <>
      <p className="projects-features-icon-pop-up" ref={ref}>
        {text}
      </p>
    </>
  );
};

export default FeatureText;
