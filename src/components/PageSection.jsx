const PageSection = ({
  className,
  id,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`relative ${
        customPaddings || `py-8 lg:py-10 xl:py-12 ${className || ""}`
      }`}
    >
      {children}
    </div>
  );
};

export default PageSection;
