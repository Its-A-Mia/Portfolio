import sunsetSurferImg from '../../assets/SunsetSurfer.webp';
import eShopImg from '../../assets/eShop.webp';
import comingSoonImg from '../../assets/theWorldIf.webp';
import Image from '../Image';

const ProjectsCard = ({ activeProject }) => {
  const projects = {
    sunsetSurfer: {
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
    eShop: {
      title: 'eShop',
      imgSrc: eShopImg,
      alt: "A screenshot of an eCommerce website, where there's a header and a section below with categories listed.",
      description:
        'A mock eCommerce website that features frontend and backend tools such as Next.js, PostgreSQL & Prisma. This project can be spun up on a local machine using Docker.',
      techStack: ['Next.js', 'JavaScript', 'Prisma', 'PostgreSQL', 'Docker'],
      urls: [
        {
          type: 'More Info',
          url: 'https://github.com/Its-A-Mia/eCommerceProject#eshop-an-ecommerce-project-mock-site',
        },
        {
          type: 'Source Code',
          url: 'https://github.com/Its-A-Mia/eCommerceProject',
        },
      ],
    },
    portfolio: {
      title: 'Portfolio',
      imgSrc: eShopImg,
      alt: 'A screenshot of a website with a sunset in purple hues and a black grid tilted on a 3d plane.',
      description:
        'My portfolio was built using Vite and React--it features a design that utilizes more complex HTML/CSS/JavaScript techniques such as canvas. This is hosted on AWS S3 and the DNS is routed using Route 53.',
      techStack: ['Vite', 'React.js', 'AWS S3', 'AWS Route 53', 'HTML/CSS'],
      urls: [
        {
          type: 'Source Code',
          url: 'https://github.com/Its-A-Mia/Portfolio',
        },
      ],
    },
    comingSoon: {
      title: 'Project DTS',
      imgSrc: comingSoonImg,
      alt: 'The world if I was hired.',
      description: 'I am currently working on a website for a tennis racket stringing company.',
      techStack: ['React.js'],
      urls: [
        {
          type: 'More Info',
          url: 'https://github.com/Its-A-Mia/DTS_A_Stringing_Operation',
        },
      ],
    },
  };

  return (
    <div className="projects-card grid">
      <div className="projects-card-image-container">
        <Image className="projects-card-image" src={projects[activeProject].imgSrc} alt={projects[activeProject].alt} />
      </div>
      <div className="projects-card-content">
        <h3 className="projects-card-content-title">{projects[activeProject].title}</h3>
        <p className="projects-card-content-text">{projects[activeProject].description}</p>
        <div className="projects-card-content-subtext-container">
          {projects[activeProject].techStack.map((stack) => (
            <p className="projects-card-content-subtext">{stack}</p>
          ))}
        </div>
        {projects[activeProject].urls.map((url) => (
          <a role="button" className="projects-card-content-btn" href={url.url} target="blank">
            {url.type}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
