import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";

import { connect } from "react-redux";
import { addToCart } from "../redux/Cart/cart-actions";
import { Toast } from "react-bootstrap";

const BuyButton = ({ className, size, item, addToCart }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <strong className="me-auto">Item added</strong>
        </Toast.Header>
        <Toast.Body>The item has been added to your shopping cart</Toast.Body>
      </Toast>

      <Button
        className={className}
        size={size}
        onClick={() => {
          addToCart(item);
          setShow(true);
        }}
      >
        <Cart className="me-1" />
        Add to cart
      </Button>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { addToCart: (item) => dispatch(addToCart(item)) };
};

export default connect(null, mapDispatchToProps)(BuyButton);
