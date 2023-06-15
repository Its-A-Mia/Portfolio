import { useCallback, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import FeatureText from './FeatureText';

const FeatureIcon = ({ icon, text, delay }) => {
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
    console.log(ref.current);
  }, []);

  return (
    <div className="projects-features-icon-container" ref={setRefs}>
      {icon}
      <FeatureText text={text} />
    </div>
  );
};

export default FeatureIcon;
