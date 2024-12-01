import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const mockProducts = [
  { id: 1, name: "Producto 1", description: "Descripción del Producto 1" },
  { id: 2, name: "Producto 2", description: "Descripción del Producto 2" },
  { id: 3, name: "Producto 3", description: "Descripción del Producto 3" },
  { id: 4, name: "Producto 4", description: "Descripción del Producto 4" },
];

const ItemDetailContainer = () => {
  const { id: itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("ID recibido desde la URL:", itemId);
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        const foundProduct = mockProducts.find(
          (product) => product.id === parseInt(itemId)
        );
        console.log("Producto encontrado:", foundProduct);
        resolve(foundProduct);
      }, 1000);
    });

    fetchProduct.then((result) => {
      console.log("Producto para renderizar:", result);
      setProduct(result);
    });
  }, [itemId]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
