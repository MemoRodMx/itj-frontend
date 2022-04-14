import { Button } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import { useReducer } from "react";
import { cartReducer, cartInitalState } from "../Context/Reducers/CartReducer";
import { Types } from "../Context/Actions/CartActions";

const BuyButton = ({ className, size, item }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitalState);
  //  const { cart } = state;

  const addItem = (item) => {
    dispatch({ type: Types.ADD, payload: item });
  };

  const countItemInCart = (item) => {
    const exists = state.items.find((el) => el._id === item._id);

    if (exists) {
      return "(" + exists.quantity + ")";
    }
    return "";
  };

  return (
    <Button className={className} size={size} onClick={() => addItem(item)}>
      <Cart className="me-1" />
      Add to cart {countItemInCart(item)}
    </Button>
  );
};

export default BuyButton;
