import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { SendPlus, X } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";

import itemsApi from "../../Api/items-api";

const ItemsForm = () => {
  let { itemId } = useParams();
  const title = itemId ? "Edit item" : "Add item";

  const [item, setItem] = useState({});

  useEffect(() => {
    itemsApi.readItems(itemId).then((data) => {
      setItem(data);
    });
  }, [itemId]);

  const setValue = (prop, value) => {
    const current = { ...item };
    current[prop] = value;
    setItem(current);
  };

  return (
    <>
      <h2 className="mt-3 mb-3">{title}</h2>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Item name"
            defaultValue={item?.name}
            onChange={(event) => setValue("name", event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter the item description"
            defaultValue={item?.description}
            onChange={(event) => setValue("description", event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imageUrl">
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            type="url"
            placeholder="http://..."
            defaultValue={item?.image_url}
            onChange={(event) => setValue("image_url", event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-5" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Item price"
            defaultValue={item?.price}
            onChange={(event) => setValue("price", event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-5">
          <Button variant="primary" type="submit" className="me-2">
            <SendPlus className="me-1" />
            Save
          </Button>

          <LinkContainer to="/admin">
            <Button variant="danger" type="button">
              <X className="me-1" />
              Cancel
            </Button>
          </LinkContainer>
        </Form.Group>
      </Form>
    </>
  );
};

export default ItemsForm;
