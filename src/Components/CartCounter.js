import { Badge } from "react-bootstrap";

import React, { useState, useEffect } from "react";
import { Cart } from "react-bootstrap-icons";
import { connect } from "react-redux";

const CartCounter = ({ items }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    console.log("efect");
    setCartCount(items.reduce((p, c) => (p += c.quantity), 0));
  }, [items, cartCount]);

  return (
    <span>
      <Cart className="me-1" />
      Checkout
      <Badge bg="secondary" className="ms-1">
        {cartCount}
      </Badge>
    </span>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  };
};

export default connect(mapStateToProps)(CartCounter);
