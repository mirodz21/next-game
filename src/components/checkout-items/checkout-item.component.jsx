import { useDispatch } from "react-redux";

import {
  deleteItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.reducer";
import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;

  const deleteItemHandler = () => dispatch(deleteItemFromCart(cartItem));
  const increment = () => dispatch(addItemToCart(cartItem));
  const decrement = () => dispatch(removeItemFromCart(cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrement}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increment}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove" onClick={deleteItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckOutItem;
