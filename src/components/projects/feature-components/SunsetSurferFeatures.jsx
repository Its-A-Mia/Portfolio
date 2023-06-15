import { useEffect, useState } from 'react';
import { CSS3, GitHub, HTML5, React } from '../../icons/brands';
import FeatureIcon from './FeatureIcon';

const SunsetSurferFeatures = ({ delay }) => {
  const [highlightedIcon, setHighlightedIcon] = useState('React');

  useEffect(() => {
    let highlightInterval = setInterval(() => {
      if (highlightedIcon === 'React') {
        setHighlightedIcon('HTML');
      } else if (highlightedIcon === 'HTML') {
        setHighlightedIcon('CSS');
      } else if (highlightedIcon === 'CSS') {
        setHighlightedIcon('GitHub');
      } else if (highlightedIcon === 'GitHub') {
        setHighlightedIcon('React');
      }
    }, 3000);

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
        text={'Creative designs using CSS3 animations'}
        delay={delay}
        iconName={'CSS'}
        highlightedIcon={highlightedIcon}
      />

      <FeatureIcon
        icon={<GitHub className={'projects-features-icon icon-small'} />}
        text={'Hosted using GitPages'}
        delay={delay}
        iconName={'GitHub'}
        highlightedIcon={highlightedIcon}
      />
    </div>
  );
};

export default SunsetSurferFeatures;
