import { useCart, useProducts } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import ProductCard from "./ProductCard";
const Products = () => {
  const { state, dispatch } = useCart();
  const products = useProducts();
  // console.log("Products component rendered with products:", products);

  const handleSortChange = (event) => {
    // console.log("Sort option changed to:", event.target.value);
    const selectedSort = event.target.value;
    dispatch({ type: "SET_SORT_BY", payload: selectedSort });
  };

  return (
    <>
      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* <!-- Products Section (2/3 width on large screens) --> */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Your Products</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm">Sort by:</span>
                <select
                  value={state.sortBy}
                  onChange={(e) => handleSortChange(e)}
                  className="border rounded-md px-2 py-1 text-sm"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="newest">Newest</option>
                  <option value="price">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* <!-- Cart Section (1/3 width on large screens) --> */}

          <Cart />
        </div>
      </main>
    </>
  );
};

export default Products;
