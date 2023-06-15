import { useEffect, useState } from 'react';
import { CSS3, Docker, HTML5, Jest, Nextjs, PostgreSQL, Prisma } from '../../icons/brands';
import FeatureIcon from './FeatureIcon';

const EShopAutomationFeatures = ({ delay }) => {
  const [highlightedIcon, setHighlightedIcon] = useState('Next');

  useEffect(() => {
    let highlightInterval = setInterval(() => {
      if (highlightedIcon === 'Next') {
        setHighlightedIcon('HTML');
      } else if (highlightedIcon === 'HTML') {
        setHighlightedIcon('CSS');
      } else if (highlightedIcon === 'CSS') {
        setHighlightedIcon('Prisma');
      } else if (highlightedIcon === 'Prisma') {
        setHighlightedIcon('Postgres');
      } else if (highlightedIcon === 'Postgres') {
        setHighlightedIcon('Jest');
      } else if (highlightedIcon === 'Jest') {
        setHighlightedIcon('Docker');
      } else if (highlightedIcon === 'Docker') {
        setHighlightedIcon('Next');
      }
    }, 4000);

    return () => {
      clearTimeout(highlightInterval);
    };
  }, [highlightedIcon]);

  return (
    <div className="projects-features-content">
      <FeatureIcon
        icon={<Nextjs className={'projects-features-icon icon-medium'} />}
        text={'Built using the Next.js Framework'}
        delay={delay}
        iconName={'Next'}
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
        text={'Responsive Design using Material UI'}
        delay={delay}
        iconName={'CSS'}
        highlightedIcon={highlightedIcon}
      />

      <FeatureIcon
        icon={<Prisma className={'projects-features-icon icon-small'} />}
        text={'Database schemas managed by Prisma'}
        delay={delay}
        iconName={'Prisma'}
        highlightedIcon={highlightedIcon}
      />

      <FeatureIcon
        icon={<PostgreSQL className={'projects-features-icon icon-medium'} />}
        text={'Database built upon PostgreSQL'}
        delay={delay}
        iconName={'Postgres'}
        highlightedIcon={highlightedIcon}
      />

      <FeatureIcon
        icon={<Jest className={'projects-features-icon icon-small'} />}
        text={'Codebase is tested using Jest'}
        delay={delay}
        iconName={'Jest'}
        highlightedIcon={highlightedIcon}
      />

      <FeatureIcon
        icon={<Docker className={'projects-features-icon icon-medium'} />}
        text={'Docker makes building the app easy'}
        delay={delay}
        iconName={'Docker'}
        highlightedIcon={highlightedIcon}
      />
    </div>
  );
};

export default EShopAutomationFeatures;
