import { useProducts } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import ProductCard from "./ProductCard";
const Products = () => {
  const products = useProducts();

  return (
    <>
      <main class="container mx-auto px-4 md:px-8 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* <!-- Products Section (2/3 width on large screens) --> */}
          <div class="lg:col-span-2">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold">Your Products</h2>
              <div class="flex items-center space-x-2">
                <span class="text-sm">Sort by:</span>
                <select class="border rounded-md px-2 py-1 text-sm">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
