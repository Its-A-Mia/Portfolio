import { useInView } from 'react-intersection-observer';
import CliftonStrengthsDivider from '../icons/CliftonStrengthsDivider';
import { useEffect } from 'react';

const CliftonStrengths = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      entry.target.style.opacity = 100;
    }
  }, [inView]);

  return (
    <div className={'bio-strengths-container'} ref={ref}>
      <p className={inView ? 'bio-strengths-animation' : null}>Top 5</p>
      <h4 className={inView ? 'bio-strengths-title bio-strengths-animation' : 'bio-strengths-title'}>
        Clifton Strengths
      </h4>
      <CliftonStrengthsDivider
        className={inView ? 'bio-strengths-divider bio-strengths-animation' : 'bio-strengths-divider'}
      />
      <ul className={inView ? 'bio-strengths-list bio-strengths-animation' : 'bio-strengths-list'}>
        <li>
          <a
            className="text-link bio-strengths-list-anchor"
            href="https://www.gallup.com/cliftonstrengths/en/252323/restorative-theme.aspx"
            target="_blank"
          >
            Restorative
          </a>
        </li>
        <li>
          <a
            className="text-link bio-strengths-list-anchor"
            href="https://www.gallup.com/cliftonstrengths/en/252134/achiever-theme.aspx"
            target="_blank"
          >
            Achiever
          </a>
        </li>
        <li>
          <a
            className="text-link bio-strengths-list-anchor"
            href="https://www.gallup.com/cliftonstrengths/en/252134/learner-theme.aspx"
            target="_blank"
          >
            Learner
          </a>
        </li>
        <li>
          <a
            className="text-link bio-strengths-list-anchor"
            href="https://www.gallup.com/cliftonstrengths/en/252134/ideation-theme.aspx"
            target="_blank"
          >
            Ideation
          </a>
        </li>
        <li>
          <a
            className="text-link bio-strengths-list-anchor"
            href="https://www.gallup.com/cliftonstrengths/en/252134/intellection-theme.aspx"
            target="_blank"
          >
            Intellection
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CliftonStrengths;
