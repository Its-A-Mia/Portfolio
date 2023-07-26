import { useEffect, useState } from 'react';
import { CSS3, GitHub, HTML5, React } from '../../icons/brands';
import FeatureIcon from './FeatureIcon';
import Description from '../../icons/Description';

const SunsetSurferFeatures = ({ delay }) => {
  const [highlightedIcon, setHighlightedIcon] = useState('Description');

  useEffect(() => {
    let highlightInterval = setInterval(() => {
      if (highlightedIcon === 'Description') {
        setHighlightedIcon('React');
      }

      if (highlightedIcon === 'React') {
        setHighlightedIcon('HTML');
      }

      if (highlightedIcon === 'HTML') {
        setHighlightedIcon('CSS');
      }

      if (highlightedIcon === 'CSS') {
        setHighlightedIcon('GitHub');
      }

      if (highlightedIcon === 'GitHub') {
        setHighlightedIcon('Description');
      }
    }, 3000);

    return () => {
      clearTimeout(highlightInterval);
    };
  }, [highlightedIcon]);
  return (
    <div className="projects-features-content">
      <FeatureIcon
        icon={<Description className={'projects-features-icon icon-medium'} />}
        text={'Beat your best times in this checkbox racing game while enjoying the 3D vaporwave vibe'}
        delay={delay}
        iconName={'Description'}
        highlightedIcon={highlightedIcon}
      />

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
