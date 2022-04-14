import { Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { SendPlus, X } from "react-bootstrap-icons";

const ItemsForm = ({ itemId }) => {
  const title = itemId ? "Edit item" : "Add item";

  return (
    <>
      <h2 className="mt-3 mb-3">{title}</h2>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Item name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter the item description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imageUrl">
          <Form.Label>Image Url</Form.Label>
          <Form.Control type="url" placeholder="http://..." />
        </Form.Group>

        <Form.Group className="mb-5" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Item price" />
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
