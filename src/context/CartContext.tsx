import { createContext, ReactNode, useContext, useReducer } from "react";

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

interface CartState {
  items: CartProduct[];
  itemCount: number;
  total: number;
}

type CartAction =
  | { type: "ADD"; payload: Product }
  | { type: "REMOVE"; payload: Product }
  | { type: "UPDATE"; updateData: { id: number; quant: number } }
  | { type: "CLEAR" };

const initialCart: CartState = {
  items: [],
  itemCount: 0,
  total: 0,
};

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

export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('CartContext must be used within a CartProvider');
  }
  
  return context;
}