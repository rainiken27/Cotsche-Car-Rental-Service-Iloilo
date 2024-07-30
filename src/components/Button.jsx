import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white, target, isOverlayButton}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-red-300 ${
    px || "px"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={`button relative inline-flex items-center justify-center h-11 transition-colors hover:text-red-400 px-3 ml-auto ${isOverlayButton ? "hidden lg:block" : "lg:hidden"}`} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} target={target}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );


  return href ? renderLink() : renderButton();
};

export default Button;