import React from 'react';

function CartWidget() {
  return (
    <div className="cart-widget d-flex align-items-center">
      <i className="bi bi-cart-fill" style={{ fontSize: '1.5rem', color: '#007bff' }}></i>
      <span
        className="badge bg-primary ms-2"
        style={{
          borderRadius: '50%',
          fontSize: '0.8rem',
          padding: '5px 10px',
        }}
      >
        5
      </span>
    </div>
  );
}

export default CartWidget;
