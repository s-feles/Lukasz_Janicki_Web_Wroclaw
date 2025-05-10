import { ShoppingCart } from "lucide-react";

export default function Title() {
  return (
    <div className="flex items-center mb-8">
      <ShoppingCart className="h-6 w-6 mr-2" />
      <h1 className="text-2xl font-bold">Your Shopping Cart</h1>
    </div>
  );
}
