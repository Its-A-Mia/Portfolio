import BeeSecondaryIcon from '../icons/BeeSecondaryIcon';
import BeeFlappingSecondaryIcon from '../icons/BeeFlappingSecondaryIcon';
import { useEffect, useState } from 'react';

const BeeSecondary = () => {
  const [wingsUpOpacity, setWingsUpOpacity] = useState('0.6');
  const [wingsDownOpacity, setWingsDownOpacity] = useState('0.4');

  useEffect(() => {
    const flapping = setInterval(() => {
      if (wingsUpOpacity === '0.6') {
        setWingsUpOpacity('0');
        setWingsDownOpacity('0.6');
      } else {
        setWingsUpOpacity('0.6');
        setWingsDownOpacity('0');
      }
    }, 150);

    return () => {
      clearInterval(flapping);
    };
  }, [wingsUpOpacity, wingsDownOpacity]);

  return (
    <div className="hero-bee-secondary-container">
      <BeeSecondaryIcon
        className={'hero-bee-secondary'}
        stroke={'var(--bg-primary)'}
        wingStrokeOpacity={wingsUpOpacity}
      />
      <BeeFlappingSecondaryIcon
        className={'hero-bee-flapping-secondary'}
        stroke={'var(--bg-primary)'}
        wingStrokeOpacity={wingsDownOpacity}
      />
      <svg className="hero-bee-secondary-line" viewBox="0 0 716 307" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className="hero-bee-secondary-line"
          d="M716 1C459.835 1 209.327 364.518 1 297.831"
          stroke="black"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
};

export default BeeSecondary;
