import { Plus, Minus, Trash2 } from "lucide-react";
import { useCart, CartProduct } from "../../../context/CartContext";

// Large component rendering a table of the cart's contents.
const CartContents = () => {
  const { state, removeItem, updateQuantity } = useCart();

  const getPrice: (product: CartProduct) => number = (product) => {
    return product.price.main + 0.01 * product.price.fractional;
  };

  // getSubtotal here means something a bit different than it does in the checkout sense.
  // Here it is the total for a single type of product
  const getSubtotal: (product: CartProduct) => number = (product) => {
    return getPrice(product) * product.quantity;
  };

  if (state.items.length === 0) {
    return (
      <div className="px-9">
        <p className="text-xl">Nic tu jeszcze nie ma!</p>
        <button
          //onClick={() => console.log("Back to products")}
          className="text-blue-400 mt-4 py-2 hover:text-blue-600"
        >
          <a href="/">Wróć do zakupów</a>
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden mb-6">
      <table className="table-auto w-full">
        <thead className="bg-gray-950">
          <tr>
            <th className="px-6 py-3 text-left text-lg">Produkt</th>
            <th className="px-6 py-3 text-left text-lg">Cena</th>
            <th className="px-6 py-3 text-left text-lg">Ilość</th>
            <th className="px-6 py-3 text-left text-lg">Razem</th>
            <th className="px-6 py-3 text-left text-lg"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {state.items.map((product) => (
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
                    onClick={() =>
                      updateQuantity(product.id, product.quantity - 1)
                    }
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="p-2 font-medium">{product.quantity}</span>
                  <button
                    className="rounded-full p-1 bg-gray-950 hover:bg-blue-950"
                    onClick={() =>
                      updateQuantity(product.id, product.quantity + 1)
                    }
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
                  onClick={() => removeItem(product)}
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
          Twoja kwota zamówienia:{" "}
          <span className="font-bold">
            {state.items
              .reduce((total, item) => total + getSubtotal(item), 0)
              .toFixed(2) + " zł."}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CartContents;
