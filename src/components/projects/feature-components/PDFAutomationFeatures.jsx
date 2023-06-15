import { APIWebhook, AWS, Docker, Nodejs } from '../../icons/brands';
import FeatureIcon from './FeatureIcon';

const PDFAutomationFeatures = () => {
  return (
    <div className="projects-features-content">
      <FeatureIcon
        icon={<Nodejs className={'projects-features-icon icon-medium'} />}
        text={'Built upon the Node.js runtime environment'}
      />

      <FeatureIcon
        icon={<APIWebhook className={'projects-features-icon icon-medium'} />}
        text={"Utilized the Zapier, Method CRM, and Pipedrive API's"}
      />

      <FeatureIcon
        icon={<AWS className={'projects-features-icon icon-large'} />}
        text={'Deployed using AWS Lambda, Amazon API Gateway and SAM CLI'}
      />

      <FeatureIcon
        icon={<Docker className={'projects-features-icon icon-large'} />}
        text={'Containerized for SAM CLI deployment'}
      />
    </div>
  );
};

export default PDFAutomationFeatures;
