const BeeFlappingIcon = ({ className, stroke, wingStrokeOpacity }) => {
  return (
    <svg
      className={className}
      id="bee-flapping-icon"
      viewBox="0 0 89 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.6825 59.3175C42.9083 67.3385 35.3439 76.8493 32.8319 80.9639"
        stroke="black"
        strokeOpacity="0.9"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55.3601 60.795C54.4422 69.3286 49.3646 76.4553 43.6422 82.3447"
        stroke="black"
        strokeOpacity="0.9"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.4673 61.1577C41.396 53.6979 65.6809 52.6748 74.9048 71.1418C76.0539 73.4418 77.3467 77.3301 76.4352 79.8444C71.5816 93.2392 33.7598 91.1409 24.9231 74.5502C24.2819 73.3447 23.0963 63.6703 22.475 63.4736C20.4913 62.8453 14.2645 61.6677 12.2344 62.1412C12.0417 62.1862 18.3698 63.5564 23.049 66.4132"
        stroke={stroke}
        strokeOpacity="0.9"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65.4895 78.5806C65.4004 78.7989 65.154 78.9112 64.9861 79.0769"
        stroke={stroke}
        strokeOpacity="0.9"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56.7135 50.8128C60.8848 45.712 81.6313 59.1861 86.2491 49.7033C88.888 44.2845 77.5875 42.0719 70.3425 44.0927C65.7321 45.3786 54.5475 52.5498 54.7877 49.6371C49.1889 45.8232 43.5712 42.8441 39.8365 41.2849C15.5611 31.1507 4.59916 56.4503 35.9059 50.6016C42.5184 49.3663 48.5981 47.5571 53.0659 49.3618"
        stroke={stroke}
        strokeOpacity={wingStrokeOpacity}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BeeFlappingIcon;
