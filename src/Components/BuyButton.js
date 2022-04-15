import { Button } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";

import { connect } from "react-redux";
import { addToCart } from "../redux/Cart/cart-actions";

const BuyButton = ({ className, size, item, addToCart }) => {
  return (
    <Button className={className} size={size} onClick={() => addToCart(item)}>
      <Cart className="me-1" />
      Add to cart
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { addToCart: (item) => dispatch(addToCart(item)) };
};

export default connect(null, mapDispatchToProps)(BuyButton);
