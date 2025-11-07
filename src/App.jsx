import { useMemo, useState } from "react";
import HeaderNav from "./components/HeaderNav";
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";

function App() {
  const [query, setQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const cartCount = useMemo(() => cart.reduce((s, it) => s + (it.qty || 1), 0), [cart]);

  const handleAdd = (product) => {
    setCartOpen(true);
    setCart((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx !== -1) {
        const copy = [...prev];
        const existing = copy[idx];
        copy[idx] = { ...existing, qty: (existing.qty || 1) + 1 };
        return copy;
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleRemove = (idx) => {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleCheckout = () => {
    alert("This demo simulates checkout. In a full build we'll add payments, order tracking, and rider dispatch.");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeaderNav cartCount={cartCount} location="Bandra West, Mumbai" />
      <HeroSection onSearch={setQuery} />
      <ProductGrid query={query} onAdd={handleAdd} />

      <section id="how" className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl border bg-gradient-to-br from-emerald-50 to-white">
            <div className="text-lg font-semibold mb-1">Hyperlocal dark stores</div>
            <p className="text-gray-600">We pick from micro-warehouses near you for freshness and speed.</p>
          </div>
          <div className="p-5 rounded-xl border bg-gradient-to-br from-amber-50 to-white">
            <div className="text-lg font-semibold mb-1">Real-time inventory</div>
            <p className="text-gray-600">Only see what’s truly in stock to avoid cancellations.</p>
          </div>
          <div className="p-5 rounded-xl border bg-gradient-to-br from-blue-50 to-white">
            <div className="text-lg font-semibold mb-1">Under 10-minute delivery</div>
            <p className="text-gray-600">Smart batching and rider routing for lightning-fast drop-offs.</p>
          </div>
        </div>
      </section>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />

      <footer className="border-t py-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} GroceryGo — Built for ultra-fast delivery.</footer>
    </div>
  );
}

export default App;
