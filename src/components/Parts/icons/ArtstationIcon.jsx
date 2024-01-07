const GithubIcon = ({ className, h = 48, w = 48 }) => {
  const pathStyle = {
    fill: "none",
    strokeWidth: 1,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      width={w}
      height={h}
      className={className}
    >
      <path
        style={pathStyle}
        d='M 13.730469 5 L 26 27 L 27.994141 22.488281 C 28.457141 21.562281 28.410094 20.463078 27.871094 19.580078 L 20.095703 6.4355469 C 19.550703 5.5445469 18.580156 5 17.535156 5 L 13.730469 5 z M 11.511719 7.1777344 L 5.6308594 18 L 17.546875 18 L 11.511719 7.1777344 z M 4 21 L 6.171875 25.341797 C 6.679875 26.357797 7.7175156 27 8.8535156 27 L 22.566406 27 L 19.220703 21 L 4 21 z'
      ></path>
    </svg>
  );
};

export default GithubIcon;
