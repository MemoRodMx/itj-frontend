import React, { useState, useEffect } from "react";
import Item from "../../Components/Item";
import itemsApi from "../../Api/items-api";

const Items = () => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    itemsApi.readItems().then((data) => {
      setItemsList(data);
    });
  }, []);

  return (
    <div className="row">
      {itemsList.length
        ? itemsList?.map((item, index) => (
            <div className="col-md-4" key={index}>
              <Item data={item} className="mb-3" />
            </div>
          ))
        : "No items found"}
    </div>
  );
};

export default Items;
