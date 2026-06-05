import { useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartItem = Product & {
  quantity: number;
};

const products: Product[] = [
  { id: 1, name: "Coffee Beans", price: 12 },
  { id: 2, name: "Espresso Machine", price: 240 },
  { id: 3, name: "Reusable Cup", price: 8 },
];

export default function CartDemo() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartCount = useMemo(
    () => cartItems.reduce((total: any, item: any) => total + item.quantity, 0),
    [cartItems],
  );

  const subtotal = useMemo(
    () =>
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  );

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (productId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      ),
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-6 text-white">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Minimal Cart UI</h1>

        <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-2">
          Cart: <span className="font-bold">{cartCount}</span>
        </div>
      </header>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Products</h2>

        <div className="grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-white/60">${product.price}</p>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 rounded-lg bg-purple-600 px-3 py-2 text-sm font-semibold hover:bg-purple-500"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Cart</h2>
        {cartItems.length === 0 ? (
          <div className="rounded-xl border border-dashed border-white/20 p-6 text-center text-white/60">
            Your cart is empty.
          </div>
        ) : (
          <div className="space-y-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-white/60">
                    ${item.price} × {item.quantity}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="rounded-lg bg-white/10 px-3 py-1 hover:bg-white/20"
                  >
                    -
                  </button>

                  <span className="w-6 text-center">{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="rounded-lg bg-white/10 px-3 py-1 hover:bg-white/20"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="rounded-lg bg-red-500/80 px-3 py-1 text-sm hover:bg-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between rounded-xl border border-white/10 bg-white/10 p-4 font-bold">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between rounded-xl border border-white/10 bg-white/10 p-4 font-bold">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>
        )}

      </section>
    </div>
  );
}