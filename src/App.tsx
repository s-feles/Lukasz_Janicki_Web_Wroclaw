import { Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar";
import MainPage from "./pages/Main/Main";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";
import PermaCart from "./context/PermaCart";

// Should be ready now.
function App() {
  return (
    <CartProvider>
      <PermaCart />
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/Lukasz_Janicki_Web_Wroclaw/" element={<MainPage />} />
          <Route path="/Lukasz_Janicki_Web_Wroclaw/cart" element={<Cart />} />
          <Route
            path="/Lukasz_Janicki_Web_Wroclaw/checkout"
            element={<Checkout />}
          />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
