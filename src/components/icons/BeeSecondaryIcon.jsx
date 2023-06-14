const BeeSecondaryIcon = ({ className, stroke, wingStrokeOpacity }) => {
  return (
    <svg
      className={className}
      id="bee-secondary-icon"
      viewBox="0 0 89 89.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.6744 51.4078C38.3021 58.1361 39.8023 70.1953 39.8023 75.016"
        stroke="black"
        strokeOpacity="0.9"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.0842 46.0627C27.4209 53.8245 28.0411 62.553 29.8563 70.5615"
        stroke="black"
        strokeOpacity="0.9"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56.4087 61.949C46.7008 47.2818 26.5067 33.754 9.01104 44.7092C6.83184 46.0735 3.70233 48.7185 3.1701 51.3395C0.332794 65.3012 33.7071 83.2187 49.8945 73.6632C51.07 72.9684 57.1231 65.329 57.7559 65.4849C59.7764 65.9823 65.7046 68.2219 67.1906 69.6839C67.3316 69.8227 61.2165 67.6948 55.7342 67.6948"
        stroke={stroke}
        strokeOpacity="0.9"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.171 55.9645C13.1333 56.1972 13.2851 56.4214 13.342 56.6504"
        stroke={stroke}
        strokeOpacity="0.9"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.1305 36.8377C34.2283 30.3105 51.371 -0.277631 59.2659 3.64716C65.9124 6.95082 46.6233 28.7748 44.1529 31.2311C42.0771 33.2948 36.0742 39.4489 37.3869 36.8377C39.3134 33.0049 47.7906 29.1907 51.371 27.6433C83.0353 13.9543 86.6427 42.6815 54.9796 37.9597C50.1348 37.2371 45.298 36.0556 40.5442 35.2679"
        stroke={stroke}
        strokeOpacity={wingStrokeOpacity}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BeeSecondaryIcon;
