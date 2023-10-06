const Heading = ({ className, children, ...rest }) => {
  return (
    <h2 className={className + ' heading'} {...rest}>
      {children}
    </h2>
  );
};

export default Heading;
