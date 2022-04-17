import { Card } from "react-bootstrap";
import BuyButton from "./BuyButton";
const { REACT_APP_NO_IMAGE } = process.env;

const Item = ({ data, className }) => {
  return (
    <Card className={className}>
      <Card.Img src={data?.image_url ? data?.image_url : REACT_APP_NO_IMAGE} />
      <Card.Body>
        <Card.Title>{data?.name}</Card.Title>
        <Card.Text className="item-description">
          <small>{data.description}</small>
        </Card.Text>
        <Card.Text as="div">
          ${data?.price}
          <BuyButton className="ms-3" size="sm" item={data} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
