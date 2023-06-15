import { useCallback, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const FeatureText = ({ text }) => {
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
    <>
      <p className="projects-features-icon-pop-up" ref={setRefs}>
        {text}
      </p>
    </>
  );
};

export default FeatureText;
