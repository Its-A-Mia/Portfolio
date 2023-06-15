import { CSS3, Docker, HTML5, Jest, Nextjs, PostgreSQL, Prisma } from '../../icons/brands';
import FeatureIcon from './FeatureIcon';

const EShopAutomationFeatures = () => {
  return (
    <div className="projects-features-content">
      <FeatureIcon icon={<Nextjs className={'projects-features-icon icon-medium'} />} text={'Built upon Next.js'} />
      <FeatureIcon icon={<HTML5 className={'projects-features-icon icon-small'} />} text={'Semantic HTML5'} />
      <FeatureIcon
        icon={<CSS3 className={'projects-features-icon icon-small'} />}
        text={'Responsive Design using Material UI'}
      />
      <FeatureIcon
        icon={<Prisma className={'projects-features-icon icon-small'} />}
        text={'Database schemas managed by Prisma'}
      />
      <FeatureIcon
        icon={<PostgreSQL className={'projects-features-icon icon-medium'} />}
        text={'Database built upon PostgreSQL'}
      />
      <FeatureIcon
        icon={<Jest className={'projects-features-icon icon-small'} />}
        text={'Codebase is tested using Jest'}
      />
      <FeatureIcon
        icon={<Docker className={'projects-features-icon icon-medium'} />}
        text={'Docker makes building the app easy'}
      />
    </div>
  );
};

export default EShopAutomationFeatures;
