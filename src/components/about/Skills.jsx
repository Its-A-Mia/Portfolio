import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <div className="grid-autofit skills-container">
      <SkillsCard skillType={'frontend'} delay={0} />
      <SkillsCard skillType={'backend'} delay={200} />
      <SkillsCard skillType={'tools'} delay={400} />
      <SkillsCard skillType={'design'} delay={600} />
    </div>
  );
};

export default Skills;
