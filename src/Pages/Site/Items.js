import React, { useState } from "react";
import Item from "../../Components/Item";

const Items = () => {
  const [itemsList] = useState([
    {
      _id: 1,
      name: "Producto 1",
      description: "descripcion del producto",
      price: "100",
      imageUrl: "https://via.placeholder.com/350x150",
    },
    {
      _id: 2,
      name: "Producto 2",
      description: "descripcion del producto",
      price: "100",
      imageUrl: "https://via.placeholder.com/350x150",
    },
    {
      _id: 3,
      name: "Producto 3",
      description: "descripcion del producto",
      price: "100",
      imageUrl: "https://via.placeholder.com/350x150",
    },
  ]);

  return (
    <div className="row">
      {itemsList?.map((item, index) => (
        <div className="col-md-4" key={index}>
          <Item data={item} className="mb-3" />
        </div>
      ))}
    </div>
  );
};

export default Items;
