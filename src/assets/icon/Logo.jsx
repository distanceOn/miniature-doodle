const Logo = ({ w, h, className }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 512 512"
      fill="none"
      className={className}
    >
      <rect width="512" height="512" rx="80" fill="url(#paint0_linear_29_51)" />
      <path
        d="M254.011 297.8L215.611 364.2C198.411 368.2 170.811 371.4 137.611 370.6C64.0109 368.2 12.0109 330.2 37.6109 280.2C59.6109 236.6 118.011 241.4 162.811 243.8C179.211 244.6 193.211 244.2 193.211 237C193.211 230.6 177.611 229 159.611 227.8C138.811 226.2 100.011 227.4 70.0109 229.8L110.011 160.2C132.811 155.4 172.011 154.6 191.611 155.4C249.611 158.6 298.011 181.8 281.611 237.4C266.811 287.4 192.811 286.2 159.611 285.8C149.211 285.4 122.411 282.2 120.411 290.2C118.411 299 148.011 301 158.411 301.8C192.011 303.4 220.811 300.6 254.011 297.8Z"
        fill="black"
      />
      <path
        d="M480.292 141L375.892 286.6H292.692L356.292 141H480.292ZM248.292 363L287.092 296.6H370.292L331.892 363H248.292Z"
        fill="black"
      />
      <defs>
        <linearGradient
          id="paint0_linear_29_51"
          x1="256"
          y1="0"
          x2="256"
          y2="512"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#58FF8E" />
          <stop offset="1" stopColor="#39D76C" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
