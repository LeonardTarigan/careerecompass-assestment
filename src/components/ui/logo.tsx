function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="81"
      height="105"
      viewBox="0 0 81 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18.5" cy="18.5" r="18.5" />
      <circle cx="40.5" cy="33.5" r="5.5" />
      <circle cx="45.5" cy="69.5" r="5.5" />
      <circle cx="25.5" cy="86.5" r="18.5" />
      <circle cx="62.5" cy="49.5" r="18.5" />
    </svg>
  );
}

export default Logo;
