import FrontendIcon from '../icons/FrontendIcon';
import BackendIcon from '../icons/BackendIcon';
import ToolsIcon from '../icons/ToolsIcon';
import DesignIcon from '../icons/DesignIcon';

const SkillsCard = ({ skillType }) => {
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
    <div className="skill-card-container">
      <div className="skill-card-icon-container">{getIcon()}</div>
      <h4 className="skill-card-title">{SKILL_TITLE}</h4>
      <ul className="skill-card-list" role="list">
        {skills[skillType].map((skill, i) => (
          <li className="skill-card-list-items" key={i}>
            {'> ' + skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
