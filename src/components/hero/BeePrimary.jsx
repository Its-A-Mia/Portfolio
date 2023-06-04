import BeeIcon from '../icons/BeeIcon';
import BeeFlappingIcon from '../icons/BeeFlappingIcon';
import { useEffect, useState } from 'react';

const BeePrimary = () => {
  const [wingsUpOpacity, setWingsUpOpacity] = useState('0.6');
  const [wingsDownOpacity, setWingsDownOpacity] = useState('0.4');

  useEffect(() => {
    const flapping = setInterval(() => {
      if (wingsUpOpacity === '0.6') {
        setWingsUpOpacity('0.4');
        setWingsDownOpacity('0.6');
      } else {
        setWingsUpOpacity('0.6');
        setWingsDownOpacity('0.4');
      }
    }, 160);

    return () => {
      clearInterval(flapping);
    };
  }, [wingsUpOpacity, wingsDownOpacity]);

  return (
    <div className="hero-bee-primary-container">
      <svg className="hero-bee-primary-line" viewBox="0 0 926 107" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className="hero-bee-primary-line"
          d="M925 9.28495C455.443 -41.405 208.573 159.864 1 91.7804"
          stroke="black"
          strokeDasharray="4 4"
        />
      </svg>

      <BeeIcon className={'hero-bee-primary'} stroke={'var(--tertiary-color)'} wingStrokeOpacity={wingsUpOpacity} />
      <BeeFlappingIcon
        className={'hero-bee-flapping-primary'}
        stroke={'var(--tertiary-color)'}
        wingStrokeOpacity={wingsDownOpacity}
      />
    </div>
  );
};

export default BeePrimary;
