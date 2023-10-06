const Card = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Card;
