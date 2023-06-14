import { useCallback, useEffect, useRef, useState } from 'react';
import GitHub from '../icons/brands/GitHub';
import SkillsBrand from './SkillsBrand';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const ref = useRef();

  const {
    ref: inViewRef,
    inView,
    entry,
  } = useInView({
    // threshold: 1,
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

  const [skillsContainerWidth, setSkillsContainerWidth] = useState(0);

  useEffect(() => {
    setSkillsContainerWidth(ref.current.offsetWidth);
  }, []);

  const brands = [
    <>
      <GitHub className={'skill-brand-icon'} />
      <p className="skill-brand-text">GitHub</p>
    </>,
    <>
      <GitHub className={'skill-brand-icon'} />
      <p className="skill-brand-text">GitHub</p>
    </>,
    <>
      <GitHub className={'skill-brand-icon'} />
      <p className="skill-brand-text">GitHub</p>
    </>,
    <>
      <GitHub className={'skill-brand-icon'} />
      <p className="skill-brand-text">GitHub</p>
    </>,
    <>
      <GitHub className={'skill-brand-icon'} />
      <p className="skill-brand-text">GitHub</p>
    </>,
    <>
      <GitHub className={'skill-brand-icon'} />
      <p className="skill-brand-text">GitHub</p>
    </>,
    <>
      <GitHub className={'skill-brand-icon'} />
      <p className="skill-brand-text">GitHub</p>
    </>,
    <>
      <GitHub className={'skill-brand-icon'} />
      <p className="skill-brand-text">GitHub</p>
    </>,
    <>
      <GitHub className={'skill-brand-icon'} />
      <p className="skill-brand-text">GitHub</p>
    </>,
    <>
      <GitHub className={'skill-brand-icon'} />
      <p className="skill-brand-text">GitHub</p>
    </>,
    <>
      <GitHub className={'skill-brand-icon'} />
      <p className="skill-brand-text">GitHub</p>
    </>,
    <>
      <GitHub className={'skill-brand-icon'} />
      <p className="skill-brand-text">GitHub</p>
    </>,
    <>
      <GitHub className={'skill-brand-icon'} />
      <p className="skill-brand-text">GitHub</p>
    </>,
    <>
      <GitHub className={'skill-brand-icon'} />
      <p className="skill-brand-text">GitHub</p>
    </>,
    <>
      <GitHub className={'skill-brand-icon'} />
      <p className="skill-brand-text">GitHub</p>
    </>,
  ];

  return (
    <div className="skills-container" ref={setRefs}>
      {brands.map((item) => (
        <SkillsBrand skillsContainerWidth={skillsContainerWidth}>{item}</SkillsBrand>
      ))}
    </div>
  );
};

export default Skills;
