import { useEffect, useState } from 'react';
import { APIWebhook, AWS, Docker, Nodejs } from '../../icons/brands';
import FeatureIcon from './FeatureIcon';
import Description from '../../icons/Description';

const PDFAutomationFeatures = ({ delay, inView }) => {
  const [highlightedIcon, setHighlightedIcon] = useState('Description');

  useEffect(() => {
    let highlightInterval;
    if (inView) {
      highlightInterval = setInterval(() => {
        if (highlightedIcon === 'Description') {
          setHighlightedIcon('Node');
        }

        if (highlightedIcon === 'Node') {
          setHighlightedIcon('API');
        }

        if (highlightedIcon === 'API') {
          setHighlightedIcon('AWS');
        }

        if (highlightedIcon === 'AWS') {
          setHighlightedIcon('Docker');
        }

        if (highlightedIcon === 'Docker') {
          setHighlightedIcon('Description');
        }
      }, 3000);
    }

    return () => {
      clearTimeout(highlightInterval);
    };
  }, [highlightedIcon, inView]);

  return (
    <div className="projects-features-content">
      <FeatureIcon
        icon={<Description className={'projects-features-icon icon-large'} />}
        text={"Microservice integration that automates packing list delivery to a company's fulfillment chain"}
        delay={delay}
        iconName={'Description'}
        highlightedIcon={highlightedIcon}
      />

      <FeatureIcon
        icon={<Nodejs className={'projects-features-icon icon-small'} />}
        text={'Built upon the Node.js runtime environment'}
        delay={delay}
        iconName={'Node'}
        highlightedIcon={highlightedIcon}
      />

      <FeatureIcon
        icon={<APIWebhook className={'projects-features-icon icon-medium'} />}
        text={"Utilized the Zapier, Method CRM, and Pipedrive API's"}
        delay={delay}
        iconName={'API'}
        highlightedIcon={highlightedIcon}
      />

      <FeatureIcon
        icon={<AWS className={'projects-features-icon icon-large'} />}
        text={'Deployed using AWS Lambda, Amazon API Gateway and SAM CLI'}
        delay={delay}
        iconName={'AWS'}
        highlightedIcon={highlightedIcon}
      />

      <FeatureIcon
        icon={<Docker className={'projects-features-icon icon-small'} />}
        text={'Containerized for SAM CLI deployment'}
        delay={delay}
        iconName={'Docker'}
        highlightedIcon={highlightedIcon}
      />
    </div>
  );
};

export default PDFAutomationFeatures;
