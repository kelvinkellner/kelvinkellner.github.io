import { useState } from 'react';

const Card = ({ title, children, id, collapsed = false, parentId }) => {
  const [expanded, setExpanded] = useState(!collapsed);

  const collapseId = `collapse${id.slice(0, 1).toUpperCase() + id.slice(1)}`;

  return (
    <div className="card">
      <div className="card-header" id={id}>
        <button
          className="btn btn-link"
          type="button"
          data-toggle="collapse"
          data-target={`#${collapseId}`}
          aria-expanded={expanded}
          aria-controls={collapseId}
          onClick={() => setExpanded(!expanded)}
        >
          <h3 className="card-title m-0">{title}</h3>
        </button>
      </div>
      <div
        id={collapseId}
        className={expanded ? 'collapse show' : 'collapse'}
        aria-labelledby={id}
        data-parent={`#${parentId}`}
      >
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Card;
