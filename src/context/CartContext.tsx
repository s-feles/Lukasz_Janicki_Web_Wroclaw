import { createContext, ReactNode, useContext, useReducer } from "react";
// Complex app-wide cart state. In a larger app I would probably attempt to set up Redux.
// I've decided that for this showcase, a context is enough.
// It also provides interfaces for product objects appearing in the product list and in the cart.

export interface Product {
  id: number;
  name: string;
  price: {
    main: number;
    fractional: number;
  };
}

export interface CartProduct extends Product {
  quantity: number;
}

// A cart has products, some number of them and carries a total price.
interface CartState {
  items: CartProduct[];
  itemCount: number;
  total: number;
}

// One can either add, remove or update an element in the cart, or clear the cart entirely.
type CartAction =
  | { type: "ADD"; payload: Product }
  | { type: "REMOVE"; payload: Product }
  | { type: "UPDATE"; updateData: { id: number; quant: number } }
  | { type: "CLEAR" };

// Initial cart is obviously empty.s
const initialCart: CartState = {
  items: [],
  itemCount: 0,
  total: 0,
};

// A function ensuring the item count and total are correct.
function calculateCart(state: CartState): CartState {
  const itemCount = state.items.reduce((cnt, item) => cnt + item.quantity, 0);

  const total = state.items.reduce((total, item) => {
    const price = item.price.main + 0.01 * item.price.fractional;
    return total + price * item.quantity;
  }, 0);

  return {
    ...state,
    itemCount,
    total,
  };
}

// A function carrying out a given action on a given state.
function cartHandler(state: CartState, action: CartAction) {
  switch (action.type) {
    case "ADD": {
      const idx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (idx > -1) {
        const updatedItems = [...state.items];
        updatedItems[idx] = {
          ...updatedItems[idx],
          quantity: updatedItems[idx].quantity + 1,
        };

        return calculateCart({ ...state, items: updatedItems });
      } else {
        const newItem: CartProduct = {
          ...action.payload,
          quantity: 1,
        };

        return calculateCart({ ...state, items: [...state.items, newItem] });
      }
    }

    case "REMOVE": {
      return calculateCart({
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      });
    }

    case "UPDATE": {
      const { id, quant } = action.updateData;

      if (quant <= 0) {
        return calculateCart({
          ...state,
          items: state.items.filter((item) => item.id !== id),
        });
      }

      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity: quant } : item
      );
      return calculateCart({ ...state, items: updatedItems });
    }

    case "CLEAR": {
      return initialCart;
    }

    default:
      return state;
  }
}

// What the context aims to provide.
type CartContextType = {
  state: CartState;
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  updateQuantity: (id: number, quant: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartHandler, initialCart); 
  // A cart has a relatively non-trivial state, hence the Reducer.

  // Functions to be provided by the context.
  const addItem = (product: Product) => {
    dispatch({ type: "ADD", payload: product });
  };

  const removeItem = (product: Product) => {
    dispatch({ type: "REMOVE", payload: product });
  };

  const updateQuantity = (id: number, quant: number) => {
    dispatch({ type: "UPDATE", updateData: { id: id, quant: quant } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  }

  const value = {
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

// Simple custom hook for context usage.
export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('CartContext must be used within a CartProvider');
  }
  
  return context;
}