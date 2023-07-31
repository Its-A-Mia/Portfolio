import { useCallback, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const SkillsBrand = ({ children, className, skillsContainerWidth, index }) => {
  const ref = useRef();

  const {
    ref: inViewRef,
    inView,
    entry,
  } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  useEffect(() => {
    if (ref.current.offsetLeft < skillsContainerWidth * 0.2 || ref.current.offsetLeft > skillsContainerWidth * 0.8) {
    }
  }, [inView, skillsContainerWidth]);

  return (
    <div className={`skill-brand ${className}`} key={index} ref={setRefs}>
      {children}
    </div>
  );
};

export default SkillsBrand;
