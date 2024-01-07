const EmailIcon = ({ className, h = 48, w = 48 }) => {
  const pathStyle = {
    fill: "none",
    strokeWidth: 1,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={w}
      height={h}
      viewBox='0 0 24 24'
      className={className}
    >
      <path
        style={pathStyle}
        d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'
      ></path>
      <polyline points='22,6 12,13 2,6'></polyline>
    </svg>
  );
};

export default EmailIcon;
