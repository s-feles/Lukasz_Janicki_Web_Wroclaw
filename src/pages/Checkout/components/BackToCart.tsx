import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function BackToCart() {
  return (
    <div className="flex items-center mb-6">
      <Link to="/cart">
      <button
        className="flex items-center text-blue-400 hover:text-blue-600 transition-colors"
        onClick={() => console.log("Back to products")}
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Powrót do koszyka
      </button>
      </Link>
    </div>
  );
}