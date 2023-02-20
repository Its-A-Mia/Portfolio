const SkillsCard = ({ skillType }) => {
  const skills = {
    frontend: ['HTML/CSS', 'JavaScript', 'React.js/Next.js', "AJAX/Rest API's", 'Material UI', 'Responsive Design'],
    backend: ['Node.js', 'AWS', 'Prisma', 'PostgreSQL', 'JsonWebToken'],
    tools: ['GitHub', 'Docker', 'Jest', 'React Testing Library', 'CLI'],
    design: ['Figma', 'Gimp'],
  };

  const SKILL_TITLE = skillType.slice(0, 1).toUpperCase() + skillType.slice(1, skillType.length);

  return (
    <div>
      <h4>{SKILL_TITLE}</h4>

      {skills[skillType].map((skill, i) => (
        <div key={i}>
          <p>{skill}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
