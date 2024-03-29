import { useContext } from "react";
import { CartContext } from "../../context/cart.context.jsx";

import Button, { BUTTON_TYPE_CLASS } from "../button/button.component.jsx";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">₱{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASS.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};
export default ProductCard;
