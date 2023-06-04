const BeeFlappingSecondaryIcon = ({ className, stroke, wingStrokeOpacity }) => {
  return (
    <svg
      className={className}
      id="bee-flapping-secondary-icon"
      viewBox="0 0 89 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.2438 48.4077C39.8714 55.1361 41.3717 67.1952 41.3717 72.016"
        stroke="black"
        stroke-opacity="0.9"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.6536 43.0627C28.9902 50.8245 29.6104 59.553 31.4256 67.5614"
        stroke="black"
        stroke-opacity="0.9"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M57.9781 58.949C48.2701 44.2818 28.076 30.754 10.5804 41.7092C8.40117 43.0734 5.27166 45.7185 4.73943 48.3395C1.90213 62.3011 35.2765 80.2186 51.4638 70.6631C52.6393 69.9684 58.6924 62.3289 59.3252 62.4849C61.3457 62.9823 67.2739 65.2219 68.7599 66.6839C68.901 66.8227 62.7859 64.6947 57.3035 64.6947"
        stroke={stroke}
        stroke-opacity="0.9"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.7402 52.9644C14.7025 53.1972 14.8543 53.4214 14.9113 53.6504"
        stroke={stroke}
        stroke-opacity="0.9"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36.6999 33.8376C35.7977 27.3104 11.0693 27.9999 12.0693 17.5C12.6408 11.5 23.9387 16.5 29.0693 22C32.3343 25.5 37.6436 36.4488 38.9563 33.8376C45.7222 33.4999 52.0693 33.8845 56.0694 34.4999C82.0693 38.4999 78.2421 65.8053 54.5693 44.4999C49.5693 39.9999 45.323 35.2877 40.5693 34.4999"
        stroke={stroke}
        stroke-opacity={wingStrokeOpacity}
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default BeeFlappingSecondaryIcon;
