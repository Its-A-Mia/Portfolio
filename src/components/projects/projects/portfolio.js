import PortfolioImg from '../../../assets/Portfolio.webp';

const portfolio = {
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
};

export default portfolio;
