import { useCart, useProducts } from "../../context/CartContext";
import { getImgUrl } from "../../utils/getImgUrl";

const CartItem = ({ item }) => {
  const { dispatch } = useCart();
  console.log("CartItem component rendered with item:", item);
  const products = useProducts();
  const product = products.find((p) => p.id === item.id);
  const canIncrease = product && product.currentStock > 0;
  const canDecrease = item.quantity > 1;

  return (
    <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
        <img
          src={getImgUrl(`${item.image}`)}
          alt="Gradient Graphic T-shirt"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{item.name}</h3>
          <span
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item })
            }
            className="text-red-500 text-sm cursor-pointer"
          >
            ×
          </span>
        </div>
        <p className="text-sm text-gray-500">Size: {item.size}</p>
        <p className="text-sm text-gray-500">Color: {item.color}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold">${item.price}</p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() =>
                dispatch({ type: "DECREASE_QUANTITY", payload: item.id })
              }
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!canDecrease}
            >
              −
            </button>
            <span className="text-sm">{item.quantity}</span>
            <button
              disabled={!canIncrease}
              onClick={() =>
                dispatch({ type: "INCREASE_QUANTITY", payload: item.id })
              }
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
