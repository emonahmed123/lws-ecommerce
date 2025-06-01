import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Newsletter from "./Components/Newsletter";
import Products from "./Components/Products/Products";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Header />

      <Products />
      <Newsletter />
      <Footer />
    </CartProvider>
  );
}

export default App;
