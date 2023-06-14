import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const SkillsBrand = ({ children, className, skillsContainerWidth }) => {
  const ref = useRef();

  const {
    ref: inViewRef,
    inView,
    entry,
  } = useInView({
    threshold: 0,
    // triggerOnce: true,
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
    if (ref.current.offsetLeft < skillsContainerWidth * 0.2 || ref.current.offsetLeft > skillsContainerWidth * 0.8) {
      // ref.current.style.filter = `blur(4px)`;
    }
  }, [inView, skillsContainerWidth]);

  return (
    <div className={`skill-brand ${className}`} ref={setRefs}>
      {children}
    </div>
  );
};

export default SkillsBrand;
