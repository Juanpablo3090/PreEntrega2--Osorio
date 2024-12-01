import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const mockProducts = [
  { id: 1, name: "Producto 1", category: "tech" },
  { id: 2, name: "Producto 2", category: "tech" },
  { id: 3, name: "Producto 3", category: "home" },
  { id: 4, name: "Producto 4", category: "home" },
];

const ItemListContainer = ({ greeting }) => {
  const { id: categoryId } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(mockProducts.filter((product) => product.category === categoryId));
        } else {
          resolve(mockProducts); 
        }
      }, 1000);
    });

    fetchProducts.then((result) => setProducts(result));
  }, [categoryId]); 

  return (
    <div>
      <h2>{greeting}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
