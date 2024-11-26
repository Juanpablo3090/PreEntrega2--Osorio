import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
  const categories = [
    { id: 'electronics', name: 'Electrónica' },
    { id: 'clothing', name: 'Ropa' },
    { id: 'home', name: 'Hogar' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          MiTienda
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            {categories.map((category) => (
              <li key={category.id} className="nav-item">
                <Link to={`/category/${category.id}`} className="nav-link">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
