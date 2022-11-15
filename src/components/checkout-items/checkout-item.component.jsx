import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckOutItem = ({ cartItem }) => {
  const { deleteItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const deleteItemHandler = () => deleteItemFromCart(cartItem);
  const increment = () => addItemToCart(cartItem);
  const decrement = () => removeItemFromCart(cartItem);

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
