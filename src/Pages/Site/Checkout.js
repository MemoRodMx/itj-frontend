import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useState } from "react";
import Bootbox from "bootbox-react";

import { connect } from "react-redux";
import { removeFromCart } from "../../redux/Cart/cart-actions";

const Checkout = ({ items, removeFromCart }) => {
  const [showConfirmRemove, setShowConfirmRemove] = useState(false);
  const [currentItem, setCurrentItem] = useState(false);

  const handleYes = () => {
    removeFromCart(currentItem._id);
    setShowConfirmRemove(false);
  };
  const handleNo = () => {
    setShowConfirmRemove(false);
  };

  const total = items?.length
    ? items.reduce(
        (p, c) => (p += parseFloat(c.price) * parseFloat(c.quantity)),
        0
      )
    : 0;

  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Checkout</h1>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th width="50%">Item</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Amount</th>
                <th>&nbsp;</th>
              </tr>
            </thead>

            <tbody>
              {items?.length ? (
                items.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <p className="mb-1">{item.name}</p>
                      <small>
                        <i>{item.description}</i>
                      </small>
                    </td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity * item.price}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                          setCurrentItem(item);
                          setShowConfirmRemove(true);
                        }}
                      >
                        <Trash />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">
                    <p>No items found</p>

                    <Link to="/">
                      <Button size="sm" variant="secondary">
                        Go to items
                      </Button>
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" align="right">
                  <strong>Total</strong>
                </td>
                <td>{total}</td>
              </tr>
            </tfoot>
          </table>

          <Bootbox
            show={showConfirmRemove}
            type={"confirm"}
            message={"Do you want to remove this item from your shopping cart?"}
            onSuccess={handleYes}
            onCancel={handleNo}
            onClose={handleNo}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { removeFromCart: (item_id) => dispatch(removeFromCart(item_id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
