import styled from "styled-components";

import { ReactComponent as ShopCartIcon } from "../../assets/cart_icon.svg";

export const ShoppingCartIcon = styled(ShopCartIcon)`
  width: 35px;
  height: 35px;
`;
export const CartIconContainer = styled.div`
  width: 35px;
  height: 35px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 12px;
`;
