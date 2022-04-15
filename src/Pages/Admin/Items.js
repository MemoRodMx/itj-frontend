import React, { useState, useEffect } from "react";
import { Table, Button, Image } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";
import { LinkContainer } from "react-router-bootstrap";

import itemsApi from "../../Api/items-api";

const { REACT_APP_NO_IMAGE } = process.env;

const Items = () => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    itemsApi.readItems().then((data) => {
      setItemsList(data);
    });
  }, []);

  return (
    <div>
      <h3>
        Items &nbsp;
        <LinkContainer to="/admin/items/form">
          <Button size="sm" variant="primary">
            Add item
          </Button>
        </LinkContainer>
      </h3>

      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th width="40">Id</th>
            <th width="120">Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {itemsList.length ? (
            itemsList.map((item, index) => (
              <tr key={index}>
                <td>{item._id.substring(item._id.length - 4)}</td>
                <td>
                  <Image
                    fluid
                    rounded
                    src={item.image_url ? item.image_url : REACT_APP_NO_IMAGE}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  <LinkContainer
                    to={`/admin/items/form/${item._id}`}
                    title="Edit item"
                    className="me-1"
                  >
                    <Button variant="outline-primary" size="sm">
                      <Pencil />
                    </Button>
                  </LinkContainer>

                  <Button
                    variant="outline-danger"
                    size="sm"
                    title="Delete item"
                  >
                    <Trash />
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No items found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Items;
