import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <div className="grid-autofit skills-container">
      <SkillsCard skillType={'frontend'} />
      <SkillsCard skillType={'backend'} />
      <SkillsCard skillType={'tools'} />
      <SkillsCard skillType={'design'} />
    </div>
  );
};

export default Skills;
