import FrontendIcon from '../icons/FrontendIcon';
import BackendIcon from '../icons/BackendIcon';
import ToolsIcon from '../icons/ToolsIcon';
import DesignIcon from '../icons/DesignIcon';
import { useInView } from 'react-intersection-observer';
import { useCallback, useEffect, useRef, useState } from 'react';

const SkillsCard = ({ skillType, delay }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const ref = useRef();

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
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
    if (inView) {
      setTimeout(() => {
        setIsAnimated(true);
      }, delay);
    }
    return () => {
      clearTimeout();
    };
  }, [inView]);

  const skills = {
    frontend: ['HTML/CSS', 'JavaScript', 'React.js/Next.js', "AJAX/Rest API's", 'Material UI', 'Responsive Design'],
    backend: ['Node.js', 'AWS', 'Prisma', 'PostgreSQL', 'JsonWebToken'],
    tools: ['GitHub', 'Docker', 'Jest', 'React Testing Library', 'CLI'],
    design: ['Figma', 'Gimp'],
  };

  const SKILL_TITLE = skillType.slice(0, 1).toUpperCase() + skillType.slice(1, skillType.length);

  const getIcon = () => {
    switch (skillType) {
      case 'frontend':
        return <FrontendIcon />;
      case 'backend':
        return <BackendIcon />;
      case 'tools':
        return <ToolsIcon />;
      case 'design':
        return <DesignIcon />;
      default:
        break;
    }
  };

  return (
    <div
      className={isAnimated && inView ? 'skill-card-container skill-card-container-animation' : 'skill-card-container'}
      ref={setRefs}
      onAnimationEnd={() => {
        ref.current.style.opacity = '100';
      }}
    >
      <div className="skill-card-title-container">
        {getIcon()}
        <h4 className="skill-card-title">{SKILL_TITLE}</h4>
      </div>
      <ul className="skill-card-list" role="list">
        {skills[skillType].map((skill, i) => (
          <li className="skill-card-list-item" key={i}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
