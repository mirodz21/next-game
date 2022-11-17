import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
// import { ReactComponent as ShopCartIcon } from "../../assets/cart_icon.svg";

import {
  ShoppingCartIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingCartIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
