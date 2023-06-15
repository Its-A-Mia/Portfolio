import { useEffect, useState } from 'react';
import { AWS, CSS3, HTML5, React } from '../../icons/brands';
import FeatureIcon from './FeatureIcon';

const PortfolioFeatures = ({ delay }) => {
  const [highlightedIcon, setHighlightedIcon] = useState('React');

  useEffect(() => {
    let highlightInterval = setInterval(() => {
      if (highlightedIcon === 'React') {
        setHighlightedIcon('HTML');
      } else if (highlightedIcon === 'HTML') {
        setHighlightedIcon('CSS');
      } else if (highlightedIcon === 'CSS') {
        setHighlightedIcon('AWS');
      } else if (highlightedIcon === 'AWS') {
        setHighlightedIcon('React');
      }
    }, 4000);

    return () => {
      clearTimeout(highlightInterval);
    };
  }, [highlightedIcon]);

  return (
    <div className="projects-features-content">
      <FeatureIcon
        icon={<React className={'projects-features-icon icon-medium'} />}
        text={'Built using the React.js Framework'}
        delay={delay}
        iconName={'React'}
        highlightedIcon={highlightedIcon}
      />

      <FeatureIcon
        icon={<HTML5 className={'projects-features-icon icon-small'} />}
        text={'Semantic HTML5'}
        delay={delay}
        iconName={'HTML'}
        highlightedIcon={highlightedIcon}
      />

      <FeatureIcon
        icon={<CSS3 className={'projects-features-icon icon-small'} />}
        text={'Design system and responsive design using CSS3'}
        delay={delay}
        iconName={'CSS'}
        highlightedIcon={highlightedIcon}
      />

      <FeatureIcon
        icon={<AWS className={'projects-features-icon icon-medium'} />}
        text={'Deployed using AWS S3 and AWS Cloudfront with the DNS routed using Route 53'}
        delay={delay}
        iconName={'AWS'}
        highlightedIcon={highlightedIcon}
      />
    </div>
  );
};

export default PortfolioFeatures;
