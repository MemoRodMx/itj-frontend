import { Link } from "react-router-dom";
import { Form, Button, Modal, Toast } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  removeFromCart,
  clearAllFromCart,
} from "../../redux/Cart/cart-actions";
import ordersApi from "../../Api/orders-api";

const Checkout = ({ items, removeFromCart, clearAllFromCart }) => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(false);
  const [modalContent, setModalContent] = useState(false);
  const [modalTitle, setModalTitle] = useState(false);
  const [modalVariant, setModalVariant] = useState(false);
  const [order, setOrder] = useState({
    name: "",
    address: "",
  });
  const [canSave, setCanSave] = useState(false);

  useEffect(() => {
    items?.length ? setCanSave(false) : setCanSave(true);
  }, [items]);

  const setValue = (prop, value) => {
    let o = { ...order };
    o[prop] = value;
    setOrder(o);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setModalVariant(false);
  };

  const total = items?.length
    ? items.reduce(
        (p, c) => (p += parseFloat(c.price) * parseFloat(c.quantity)),
        0
      )
    : 0;

  const handleModalOk = () => {
    if (modalVariant === "remove") {
      removeFromCart(currentItem._id);
    } else {
      setCanSave(false);
    }
    setShowModal(false);
  };

  const saveOrder = () => {
    setCanSave(false);

    if (order.name.trim() !== "" && order.address.trim() !== "") {
      ordersApi
        .createOrder({ ...order, items })
        .then((data) => {
          clearAllFromCart();

          setModalTitle("Order");
          setModalContent("Order has been sent");
          setShowModal(true);

          setTimeout(() => {
            navigate("/", { replace: true });
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          setCanSave(true);
        });
    } else {
      setModalVariant(false);
      setModalTitle("Oops!");
      setModalContent("Please enter your name and address.");
      setShowModal(true);
      setCanSave(true);
    }
  };

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
                          setModalVariant("remove");
                          setCurrentItem(item);
                          setModalTitle("Question...");
                          setModalContent("Do you want to remove this item?");
                          setShowModal(true);
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

          <h4 className="mt-5 mb-3">Please enter your name and address</h4>

          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                defaultValue={order?.name}
                onChange={(event) => setValue("name", event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                defaultValue={order?.address}
                onChange={(event) => setValue("address", event.target.value)}
              />
            </Form.Group>

            <div className="text-center mt-5 mb-5">
              <Button
                size="xs"
                type="button"
                onClick={() => {
                  saveOrder();
                }}
                disabled={canSave}
              >
                Save order
              </Button>
            </div>
          </Form>

          <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalContent}</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleModalOk}>
                Ok
              </Button>
              <Button
                style={{
                  display: modalVariant === "remove" ? "inline-block" : "none",
                }}
                variant="danger"
                onClick={handleModalClose}
              >
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
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
  return {
    removeFromCart: (item_id) => dispatch(removeFromCart(item_id)),
    clearAllFromCart: () => {
      dispatch(clearAllFromCart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
