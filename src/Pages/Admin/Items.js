import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Items = () => (
  <div>
    <h3>
      Items &nbsp;
      <LinkContainer to="/admin/items/add">
        <Button size="sm" variant="primary">
          Add item
        </Button>
      </LinkContainer>
    </h3>
  </div>
);

export default Items;
