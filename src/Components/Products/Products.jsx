import { useProducts } from "../../context/CartContext";
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
                <div
                  key={product.id}
                  class="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
                >
                  <div class="h-48 bg-gray-200 flex items-center justify-center">
                    <img
                      src="./assets/img/image 1.png"
                      alt="Gradient Graphic T-shirt"
                      class="h-full w-auto object-cover"
                    />
                  </div>
                  <div class="p-4">
                    <h3 class="font-medium">Gradient Graphic T-shirt </h3>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center my-1">
                        <div class="flex text-yellow-400">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span class="text-gray-300">★</span>
                        </div>
                        <span class="text-xs text-gray-500 ml-1">4/5</span>
                      </div>
                      <span class="text-xs text-gray-700">(212 pcs left)</span>
                    </div>
                    <p class="font-bold">$145 </p>
                    {/* <button class="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">
                      Remove from Cart
                    </button> */}

                    <button class="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <!-- Cart Section (1/3 width on large screens) --> */}
          <div class="lg:col-span-1">
            <div class="bg-white rounded-lg p-6 border border-gray-200">
              <h2 class="text-2xl font-bold mb-6">YOUR CART</h2>

              <div class="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
                <div class="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                  <img
                    src="./assets/img/image 9-2.png"
                    alt="Gradient Graphic T-shirt"
                    class="h-full w-auto object-cover"
                  />
                </div>
                <div class="flex-grow">
                  <div class="flex justify-between">
                    <h3 class="font-medium">Gradient Graphic T-shirt</h3>
                    <span class="text-red-500 text-sm">×</span>
                  </div>
                  <p class="text-sm text-gray-500">Size: Large</p>
                  <p class="text-sm text-gray-500">Color: White</p>
                  <div class="flex justify-between items-center mt-2">
                    <p class="font-bold">$145</p>
                    <div class="flex items-center space-x-2">
                      <button class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                        −
                      </button>
                      <span class="text-sm">1</span>
                      <button class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <h3 class="font-bold text-lg mb-4">Order Summary</h3>

                <div class="space-y-2 mb-4">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Subtotal</span>
                    <span class="font-medium">$565</span>
                  </div>
                  <div class="flex justify-between text-red-500">
                    <span>Discount (-20%)</span>
                    <span>-$113</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Delivery Fee</span>
                    <span class="font-medium">$15</span>
                  </div>
                  <div class="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>$467</span>
                  </div>
                </div>

                <div class="flex items-center space-x-2 relative mb-6">
                  <div class="flex-grow ">
                    <input
                      type="text"
                      placeholder="Add promo code"
                      class="w-full border border-gray-300 rounded-md py-2  px-3 text-sm"
                    />
                    <span class="absolute right-[93px] top-2.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <button class="bg-black text-white rounded-md px-4 py-2 text-sm">
                    Apply
                  </button>
                </div>

                <a
                  href="#"
                  class="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Go to Checkout
                  <span class="inline-block ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
