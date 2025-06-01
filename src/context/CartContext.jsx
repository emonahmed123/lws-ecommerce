import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../Reudcers/cartReducers";
import { productData } from "../data/product-Data";

export const CartContext = createContext();

const initialState = {
  products: productData,
  cartItems: [],
  searchTerm: "",
  sortBy: "popularity",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useProducts = () => {
  const { state } = useContext(CartContext);
  return state.products;
};

export default CartProvider;
