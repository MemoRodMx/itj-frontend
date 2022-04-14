import { Card } from "react-bootstrap";
import BuyButton from "./BuyButton";

const Item = ({ data, className }) => {
  return (
    <Card className={className}>
      <Card.Img src={data?.imageUrl} />
      <Card.Body>
        <Card.Title>{data?.name}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Card.Text>
          ${data?.price}
          <BuyButton className="ms-3" size="sm" item={data} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
