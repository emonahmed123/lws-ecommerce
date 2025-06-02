import { useCartItems } from "../../context/CartContext";
import CartItem from "./CartItem";
import OrderSummery from "./OrderSummery";

const Cart = () => {
  const useCartItem = useCartItems();

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

        {useCartItem.length > 0 ? (
          useCartItem.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <div className="text-center text-gray-500">Your cart is empty</div>
        )}

        <OrderSummery />
      </div>
    </div>
  );
};

export default Cart;
