import { createSlice } from "@reduxjs/toolkit";

const addCartItem = (cartItems, productToadd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToadd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToadd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToadd, quantity: 1 }];
};
const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const deleteCartItem = (cartItems, cartItemToDelete) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    deleteItemFromCart(state, action) {
      state.cartItems = deleteCartItem(state.cartItems, action.payload);
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
  setIsCartOpen,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
