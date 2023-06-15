import sunsetSurferImg from '../../assets/SunsetSurfer.webp';
import eShopImg from '../../assets/eShop.webp';
import PDFAutomationImg from '../../assets/PDFAutomation.webp';
import PortfolioImg from '../../assets/Portfolio.webp';
import Image from '../Image';
import { useInView } from 'react-intersection-observer';
import { useCallback, useEffect, useRef } from 'react';

const ProjectsCard = ({ activeProject, isSwapAnimationActive, setIsSwapAnimationActive }) => {
  const ref = useRef();

  const {
    ref: inViewRef,
    inView,
    entry,
  } = useInView({
    threshold: 0.1,
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

  useEffect(() => {
    if (inView) {
      ref.current.style.opacity = '100';
    }
  }, [inView]);

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
    PDFAutomation: {
      title: 'PDF Automation',
      imgSrc: PDFAutomationImg,
      alt: 'Thumbnail of the PDF automation project, featuring the automation cycle comprised of the trigger, pdf creation and delivery.',
      description:
        "A microservice integration utilizing numerous AWS products, a pdf api library and SaaS API's to automate the delivery of packing lists to a company's fulfillment chain.",
      techStack: ['AWS Lambda', 'Amazon API Gateway', 'Node.js', 'Zapier API', 'Method CRM API'],
      urls: [],
    },
  };

  return (
    <div className="projects-card grid" onAnimationEnd={() => setIsSwapAnimationActive(false)} ref={setRefs}>
      <div
        className={
          isSwapAnimationActive && inView
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
          isSwapAnimationActive && inView
            ? 'projects-card-content projects-card-content-active'
            : 'projects-card-content'
        }
      >
        {/* <h3 className="projects-card-content-title">{projects[activeProject].title}</h3> */}
        <p className="projects-card-content-text">{projects[activeProject].description}</p>
        {/* <div className="projects-card-content-subtext-container">
          {projects[activeProject].techStack.map((stack) => (
            <p className="projects-card-content-subtext" key={stack}>
              {stack}
            </p>
          ))}
        </div> */}
        {projects[activeProject].urls.length > 0 ? (
          <div className="projects-card-content-btn-container">
            {projects[activeProject].urls.map((url) => (
              <a role="button" className="projects-card-content-btn" key={url.type} href={url.url} target="blank">
                {url.type}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectsCard;
