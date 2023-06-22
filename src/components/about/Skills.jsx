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
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [skillsContainerWidth, setSkillsContainerWidth] = useState(0);

  useEffect(() => {
    // setSkillsContainerWidth(entry.target.offsetWidth);
    if (inView) {
      entry.target.style.opacity = 100;
    }
    console.log(inView);
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
    <div className="skills-container" ref={ref}>
      {brands.map((item) => (
        <SkillsBrand skillsContainerWidth={skillsContainerWidth}>{item}</SkillsBrand>
      ))}
    </div>
  );
};

export default Skills;
