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

  const getCartTotal = () => {
    const subtotal = state.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const discount = subtotal * 0.2;
    const deliveryFee = 15;
    return {
      subtotal,
      discount,
      deliveryFee,
      total: subtotal - discount + deliveryFee,
    };
  };

  const getFilteredAndSortedProducts = () => {
    const filtered = state.products.filter((product) =>
      product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    );

    switch (state.sortBy) {
      case "popularity":
        return filtered.sort((a, b) => b.rating - a.rating);
      case "newest":
        return filtered.sort(
          (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
        );
      case "price":
        return filtered.sort((a, b) => a.price - b.price);
      case "price_desc":
        return filtered.sort((a, b) => b.price - a.price);
      default:
        return filtered;
    }
  };

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        isInCart,
        getCartTotal,
        getFilteredAndSortedProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
export const useProducts = () => {
  const { getFilteredAndSortedProducts } = useContext(CartContext);
  return getFilteredAndSortedProducts();
};

export const useCartItems = () => {
  const { state } = useContext(CartContext);
  return state.cartItems;
};
