import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function ProceedToCheckout() {
  return (
    <div className="flex justify-end mt-8">
      <Link to="/checkout">
        <button
          className="flex items-center text-blue-400 hover:text-blue-600 transition-colors"
          onClick={() => console.log("Back to products")}
        >
          Podsumowanie zamówienia
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </Link>
    </div>
  );
}
