import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../Reudcers/cartReducers";
import { productData } from "../data/product-Data";
const initialState = {
  products: productData,
  cartItems: [],
  searchTerm: "",
  sortBy: "popularity",
};
export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const isInCart = (productId) => {
    return state.cartItems.some((item) => item.id === productId);
  };

  return (
    <CartContext.Provider value={{ state, dispatch, isInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
export const useProducts = () => {
  const { state } = useContext(CartContext);
  return state.products;
};
