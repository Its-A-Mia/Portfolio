import { useCallback, useEffect, useRef, useState } from 'react';
import {
  APIWebhook,
  AWS,
  CLI,
  CSS3,
  Docker,
  Figma,
  Gimp,
  GitHub,
  HTML5,
  JavaScript,
  Jest,
  JWT,
  Nextjs,
  Nodejs,
  PostgreSQL,
  Prisma,
  React,
  ResponsiveDesign,
} from '../icons/brands';
import SkillsBrand from './SkillsBrand';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const ref = useRef();

  const {
    ref: inViewRef,
    inView,
    entry,
  } = useInView({
    threshold: 0.25,
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

  const [skillsContainerWidth, setSkillsContainerWidth] = useState(0);

  useEffect(() => {
    setSkillsContainerWidth(ref.current.offsetWidth);
    if (inView) {
      ref.current.style.opacity = 100;
    }
  }, [inView]);

  const brands = [
    <>
      <HTML5 className={'skill-brand-icon skill-brand-icon-small'} />
      <p className="skill-brand-text">HTML5</p>
    </>,
    <>
      <CSS3 className={'skill-brand-icon skill-brand-icon-small'} />
      <p className="skill-brand-text">CSS3</p>
    </>,
    <>
      <JavaScript className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">JavaScript</p>
    </>,
    <>
      <Nextjs className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">NextJS</p>
    </>,
    <>
      <React className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">React</p>
    </>,
    <>
      <APIWebhook className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">API's</p>
    </>,
    <>
      <ResponsiveDesign className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">RWD</p>
    </>,
    <>
      <Nodejs className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">NodeJS</p>
    </>,
    <>
      <JWT className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">JWT</p>
    </>,
    <>
      <AWS className={'skill-brand-icon skill-brand-icon-large'} />
      <p className="skill-brand-text">AWS</p>
    </>,
    <>
      <PostgreSQL className={'skill-brand-icon skill-brand-icon-large'} />
      <p className="skill-brand-text">PostgreSQL</p>
    </>,
    <>
      <Prisma className={'skill-brand-icon skill-brand-icon-small'} />
      <p className="skill-brand-text">Prisma</p>
    </>,
    <>
      <GitHub className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">GitHub</p>
    </>,
    <>
      <CLI className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">CLI</p>
    </>,
    <>
      <Docker className={'skill-brand-icon skill-brand-icon-large'} />
      <p className="skill-brand-text">Docker</p>
    </>,
    <>
      <Jest className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">Jest</p>
    </>,

    <>
      <Figma className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">Figma</p>
    </>,
    <>
      <Gimp className={'skill-brand-icon skill-brand-icon-large'} />
      <p className="skill-brand-text">Gimp</p>
    </>,
    <>
      <HTML5 className={'skill-brand-icon skill-brand-icon-small'} />
      <p className="skill-brand-text">HTML5</p>
    </>,
    <>
      <CSS3 className={'skill-brand-icon skill-brand-icon-small'} />
      <p className="skill-brand-text">CSS3</p>
    </>,
    <>
      <JavaScript className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">JavaScript</p>
    </>,
    <>
      <Nextjs className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">NextJS</p>
    </>,
    <>
      <React className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">React</p>
    </>,
    <>
      <APIWebhook className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">API's</p>
    </>,
    <>
      <ResponsiveDesign className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">RWD</p>
    </>,
    <>
      <Nodejs className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">NodeJS</p>
    </>,
    <>
      <JWT className={'skill-brand-icon skill-brand-icon-medium'} />
      <p className="skill-brand-text">JWT</p>
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
