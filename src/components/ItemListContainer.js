import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div
      className="container mt-4 p-4"
      style={{ border: '1px solid #ddd', borderRadius: '5px', textAlign: 'center' }}
    >
      <h2>{greeting}</h2>
    </div>
  );
}

export default ItemListContainer;
