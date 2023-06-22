import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AboutText = ({ children }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      entry.target.style.filter = 'none';
    }
  }, [inView]);

  return (
    <p className="bio-text" ref={ref}>
      {children}
    </p>
  );
};

export default AboutText;
