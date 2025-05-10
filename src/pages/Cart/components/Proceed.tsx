import { ArrowRight } from "lucide-react";

export default function ProceedToCheckout() {
  return (
    <div className="flex justify-end mt-8">
      <button
        className="flex items-center text-blue-400 hover:text-blue-600 transition-colors"
        onClick={() => console.log("Back to products")}
      >
        Proceed to Checkout
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  );
}
