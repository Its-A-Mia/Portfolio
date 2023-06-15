import { useCallback, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import FeatureText from './FeatureText';

const FeatureIcon = ({ icon, text, delay, highlightedIcon, iconName }) => {
  const ref = useRef();

  const {
    ref: inViewRef,
    inView,
    entry,
  } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  useEffect(() => {
    let animationTimeout;

    if (inView) {
      animationTimeout = setTimeout(() => {
        ref.current.style.opacity = '100';
      }, delay);
    }

    if (highlightedIcon === iconName) {
      ref.current.style.transform = 'scale(1.05)';
    } else {
      ref.current.style.transform = 'scale(1)';
    }
  }, [inView, highlightedIcon]);

  return (
    <div className="projects-features-icon-container" ref={setRefs}>
      {icon}
      <FeatureText text={text} highlightedIcon={highlightedIcon} iconName={iconName} />
    </div>
  );
};

export default FeatureIcon;
