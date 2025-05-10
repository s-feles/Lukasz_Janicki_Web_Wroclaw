import { CartProduct } from "../Cart";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useState } from "react";

interface ContentProps {
  products: CartProduct[];
}

const CartContents = ({ products }: ContentProps) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>(products);

  const getPrice: (product: CartProduct) => number = (product) => {
    return product.price.main + 0.01 * product.price.fractional;
  };

  const getSubtotal: (product: CartProduct) => number = (product) => {
    return getPrice(product) * product.quantity;
  };

  function updateQuantity(id: number, diff: number) {
    setCartItems((prev) =>
      prev.map((product) => {
        if (product.id === id) {
          const newQuantity = Math.max(1, product.quantity + diff);
          return { ...product, quantity: newQuantity };
        }
        return product;
      })
    );
  }

  function deleteItem(id: number) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  if (products.length === 0) {
    return (
      <div className="px-9">
        <p className="text-xl">Your cart is empty.</p>
        <button
          onClick={() => console.log("Back to products")}
          className="text-white mt-4 py-2"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden mb-6">
      <table className="table-auto w-full">
        <thead className="bg-gray-950">
          <tr>
            <th className="px-6 py-3 text-left text-lg">Product</th>
            <th className="px-6 py-3 text-left text-lg">Price</th>
            <th className="px-6 py-3 text-left text-lg">Quantity</th>
            <th className="px-6 py-3 text-left text-lg">Subtotal</th>
            <th className="px-6 py-3 text-left text-lg"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {cartItems.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap text-md font-medium">
                {product.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-md">
                {getPrice(product).toFixed(2) + " zł"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-md">
                <div className="flex items-center">
                  <button
                    className="rounded-full p-1 bg-gray-950 hover:bg-blue-950"
                    onClick={() => updateQuantity(product.id, -1)}
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="p-2 font-medium">{product.quantity}</span>
                  <button
                    className="rounded-full p-1 bg-gray-950 hover:bg-blue-950"
                    onClick={() => updateQuantity(product.id, 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-md">
                {getSubtotal(product).toFixed(2) + " zł"}
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  className="text-red-700 hover:text-red-500"
                  onClick={() => deleteItem(product.id)}
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-2">
        <p className="text-3xl">
          Your total is{" "}
          <span className="font-bold">
            {cartItems
              .reduce((total, item) => total + getSubtotal(item), 0)
              .toFixed(2) + " zł."}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CartContents;
