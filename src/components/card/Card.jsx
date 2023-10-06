const Card = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        {children}
      </div>
    </div>
  );
};

export default Card;
