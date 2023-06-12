import { useInView } from 'react-intersection-observer';

const CliftonStrengths = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className={'bio-strengths-container'} ref={ref}>
      <h3 className={inView ? 'bio-strengths-title bio-strengths-animation' : 'bio-strengths-title'}>
        Clifton Strengths
      </h3>
      <ul className={inView ? 'bio-strengths-list bio-strengths-animation' : 'bio-strengths-list'}>
        <li>
          <a
            className="bio-strengths-list-anchor"
            href="https://www.gallup.com/cliftonstrengths/en/252323/restorative-theme.aspx"
            target="_blank"
          >
            Restorative
          </a>
        </li>
        <li>
          <a
            className="bio-strengths-list-anchor"
            href="https://www.gallup.com/cliftonstrengths/en/252134/achiever-theme.aspx"
            target="_blank"
          >
            Achiever
          </a>
        </li>
        <li>
          <a
            className="bio-strengths-list-anchor"
            href="https://www.gallup.com/cliftonstrengths/en/252134/learner-theme.aspx"
            target="_blank"
          >
            Learner
          </a>
        </li>
        <li>
          <a
            className="bio-strengths-list-anchor"
            href="https://www.gallup.com/cliftonstrengths/en/252134/ideation-theme.aspx"
            target="_blank"
          >
            Ideation
          </a>
        </li>
        <li>
          <a
            className="bio-strengths-list-anchor"
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
