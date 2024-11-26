import React from 'react';
import { Link } from 'react-router-dom';

function Item({ id, name }) {
  return (
    <div className="item">
      <Link to={`/item/${id}`} className="text-decoration-none text-primary">
        <h4>{name}</h4>
      </Link>
    </div>
  );
}

export default Item;
