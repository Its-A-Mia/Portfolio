import sunsetSurferImg from '../../assets/SunsetSurfer.webp';
import eShopImg from '../../assets/eShop.webp';
import comingSoonImg from '../../assets/theWorldIf.webp';
import PortfolioImg from '../../assets/Portfolio.webp';
import Image from '../Image';

const ProjectsCard = ({ activeProject, isSwapAnimationActive, setIsSwapAnimationActive }) => {
  const projects = {
    sunsetSurfer: {
      title: 'Sunset Surfer',
      imgSrc: sunsetSurferImg,
      alt: 'A screenshot of a website with a sunset in purple hues and a black grid tilted on a 3d plane.',
      description:
        'An app built using React in which you click through custom checkboxes in front of a 3D vaporwave scene. This website is hosted on Git Pages.',
      techStack: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Git Pages'],
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
        'An eCommerce website that features frontend and backend tools such as Next.js, PostgreSQL & Prisma. There are tests written for Jest to ensure the integrity of the code. This project can be spun up on a local machine using Docker.',
      techStack: ['Next.js', 'JavaScript', 'Prisma', 'PostgreSQL', 'Jest', 'Docker'],
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
      imgSrc: PortfolioImg,
      alt: 'A screenshot of a website with a sunset in purple hues and a black grid tilted on a 3d plane.',
      description:
        'The design of my portfolio first came to life in a mockup made using Figma. It is built using Vite and React. This website is hosted on AWS S3 and the DNS is routed using Route 53.',
      techStack: ['Vite', 'React.js', 'AWS S3', 'AWS Route 53', 'HTML/CSS'],
      urls: [
        {
          type: 'Source Code',
          url: 'https://github.com/Its-A-Mia/Portfolio',
        },
      ],
    },
    comingSoon: {
      title: 'Denver Tennis Stringing',
      imgSrc: comingSoonImg,
      alt: 'The world if I was hired meme photo--a futuristic city scape with a modular house and a man walking a dog in the foreground.',
      description:
        'I am currently building a website for a personal tennis racket stringing company using React.js and TypeScript. This will eventually feature a custom design system and interactive 3D elements.',
      techStack: ['React.js', 'TypeScript', 'Emotion', 'Storybook'],
      urls: [
        {
          type: 'More Info',
          url: 'https://github.com/Its-A-Mia/DTS_A_Stringing_Operation',
        },
      ],
    },
  };

  return (
    <div className="projects-card grid" onAnimationEnd={() => setIsSwapAnimationActive(false)}>
      <div
        className={
          isSwapAnimationActive
            ? 'projects-card-image-container projects-card-image-container-active'
            : 'projects-card-image-container'
        }
      >
        <Image
          className="projects-card-image"
          src={projects[activeProject].imgSrc}
          alt={projects[activeProject].alt}
          isSwapAnimationActive={isSwapAnimationActive}
        />
      </div>
      <div
        className={
          isSwapAnimationActive ? 'projects-card-content projects-card-content-active' : 'projects-card-content'
        }
      >
        <h3 className="projects-card-content-title">{projects[activeProject].title}</h3>
        <p className="projects-card-content-text">{projects[activeProject].description}</p>
        <div className="projects-card-content-subtext-container">
          {projects[activeProject].techStack.map((stack) => (
            <p className="projects-card-content-subtext" key={stack}>
              {stack}
            </p>
          ))}
        </div>
        <div className="projects-card-content-btn-container">
          {projects[activeProject].urls.map((url) => (
            <a role="button" className="projects-card-content-btn" key={url.type} href={url.url} target="blank">
              {url.type}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
