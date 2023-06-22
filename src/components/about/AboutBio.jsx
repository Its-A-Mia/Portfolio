import bioImage from '../../assets/bioImage.webp';
import Image from '../Image';
import AboutText from './AboutText';
import CliftonStrengths from './CliftonStrengths';
import Skills from './Skills';
import journeyIllustration from '../../assets/JourneyIllustration.webp';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const AboutBio = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      entry.target.style.transform = 'scale(1)';
    }
  }, [inView]);

  return (
    <div className="bio-container grid">
      <div className="bio-text-container">
        <AboutText>
          At the ripe old age of 8, I stumbled upon a dusty, dated, practically indecipherable networking textbook from
          dad's college days. I'm sure it made sense to a third year college student, or at least, they earnestly
          pretended it did on discussion days, but it may as well have been written with heiroglyphs.
        </AboutText>

        <AboutText>
          My adolescent self didn't make much headway, either; imagine the betting odds on a squirrel driving a car, or
          solving a Rubik's Cube, or maybe doing both while existentially imploding. Suffice to say, we lost. Many
          times. Yet, my father's casual competence with these complex concepts had sowed in me an epistemophelic seed
          that never died.
        </AboutText>

        <AboutText>
          And despite the odds, that seed has finally blossomed--we've finally won. I've now built numerous cutting-edge
          projects I'm proud of, and even worked as a freelance software developer for a startup.
        </AboutText>

        <AboutText>
          The cyclic challenge of learning, practicing and executing has become my constant companion. It's uncovered my
          tenacity, refined my critical-thinking and established my confidence to execute any vision.
        </AboutText>

        <AboutText>
          Besides developing, I spend time playing tennis, video gaming with friends, and celebrating life with my
          boyfriend, Wesley.
        </AboutText>
      </div>
      <img className="bio-text-illustration" src={journeyIllustration} alt="" ref={ref} />

      <Skills />
    </div>
  );
};

export default AboutBio;
