import { AWS, CSS3, HTML5, React } from '../../icons/brands';

const PortfolioFeatures = () => {
  return (
    <div className="projects-features-content">
      <React className={'projects-features-icon icon-medium'} />
      <HTML5 className={'projects-features-icon icon-small'} />
      <CSS3 className={'projects-features-icon icon-small'} />
      <AWS className={'projects-features-icon icon-medium'} />
    </div>
  );
};

export default PortfolioFeatures;
