import { useCart } from "../../context/CartContext";
import { getImgUrl } from "../../utils/getImgUrl";
import { renderStars } from "../../utils/renderStart";

const ProductCard = ({ product }) => {
  const { dispatch, isInCart } = useCart();
  const inCart = isInCart(product.id);
  const isOutOfStock = product.currentStock === 0;
  const addToCart = () => {
    if (inCart) {
      dispatch({ type: "REMOVE_FROM_CART", payload: product });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };

  return (
    <div
      key={product.id}
      className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
    >
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={getImgUrl(`${product.image}`)}
          alt={product.name}
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex">
              {renderStars(product.rating)}
              {/* <span className="text-gray-300">★</span> */}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              {product.rating}/5
            </span>
          </div>
          <span className="text-xs text-gray-700">
            ({product.currentStock} pcs left)
          </span>
        </div>
        <p className="font-bold">${product.price} </p>

        <button
          onClick={addToCart}
          disabled={isOutOfStock && !inCart}
          className={`${
            inCart ? ` bg-red-800 text-gray-100 ` : ""
          } disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800  py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900 cursor-pointer     `}
        >
          {inCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
