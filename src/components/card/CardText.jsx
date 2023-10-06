const CardText = ({ children, ...rest }) => {
  return (
    <p className="card-text" {...rest}>
      {children}
    </p>
  );
};

export default CardText;
