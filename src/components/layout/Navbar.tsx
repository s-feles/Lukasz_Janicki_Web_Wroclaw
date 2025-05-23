import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { useCart } from "../../context/CartContext";

// Common navbar component
export default function Navbar() {
  const { state } = useCart();
  return (
    <nav className="bg-gray-800 py-4 px-6 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          InternShop
        </div>
        <div className="flex items-center space-x-6">
          <p className="text-white">{state.items.length > 0 ? "Produktów: " + state.itemCount : "Pusty koszyk"}</p>
          <Link to="/Lukasz_Janicki_Web_Wroclaw/cart">
            <ShoppingCart className="h-6 w-6 hover:text-purple-600"/>
          </Link>
          <a href="/Lukasz_Janicki_Web_Wroclaw/" className="text-white hover:text-purple-400">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
// The login button does nothing, but could redirect to an authentication page.