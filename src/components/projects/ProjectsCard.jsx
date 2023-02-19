import sunsetSurferImg from '../../assets/SunsetSurfer.webp';

const ProjectsCard = () => {
  const projects = [
    {
      title: 'Sunset Surfer',
      imgSrc: sunsetSurferImg,
      alt: 'A screenshot of a website with a sunset in purple hues and a black grid tilted on a 3d plane.',
      description:
        'A react based app in which you click through checkboxes and race against your best time, all while enjoying a vaporwave aesthetic. Hosted on Git Pages.',
      techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Git Pages'],
      urls: [
        {
          type: 'Demo',
          url: 'https://its-a-mia.github.io/SunsetSurfer/',
        },
        {
          type: 'Source Code',
          url: 'https://github.com/Its-A-Mia/SunsetSurfer',
        },
      ],
    },
  ];

  return (
    <div className="projects-card grid">
      <div className="projects-card-image-container">
        <div className="image-border">
          <img className="projects-card-image" src={projects[0].imgSrc} alt={projects[0].alt}></img>
        </div>
      </div>
      <div className="projects-card-content">
        <h3 className="projects-card-content-title">{projects[0].title}</h3>
        <p className="projects-card-content-text">{projects[0].description}</p>
        <div className="projects-card-content-subtext-container">
          {projects[0].techStack.map((stack) => (
            <p className="projects-card-content-subtext">{stack}</p>
          ))}
        </div>
        {projects[0].urls.map((url) => (
          <a role="button" className="projects-card-content-btn" href={url.url} target="blank">
            {url.type}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
