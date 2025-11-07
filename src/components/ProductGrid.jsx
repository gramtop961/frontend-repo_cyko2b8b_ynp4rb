import { useMemo } from "react";
import { Plus } from "lucide-react";

const sampleProducts = [
  { id: 1, name: "Bananas (6 pcs)", price: 39, img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=800&auto=format&fit=crop", category: "Fruits" },
  { id: 2, name: "Amul Milk 1L", price: 64, img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop", category: "Dairy" },
  { id: 3, name: "Brown Bread", price: 45, img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop", category: "Bakery" },
  { id: 4, name: "Eggs (12)", price: 72, img: "https://images.unsplash.com/photo-1517957754645-708412ce62c7?q=80&w=800&auto=format&fit=crop", category: "Dairy" },
  { id: 5, name: "Tomatoes 500g", price: 29, img: "https://images.unsplash.com/photo-1546470427-e263f4cb17d1?q=80&w=800&auto=format&fit=crop", category: "Vegetables" },
  { id: 6, name: "Vanilla Ice Cream", price: 199, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop", category: "Dessert" },
];

export default function ProductGrid({ query = "", onAdd }) {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sampleProducts;
    return sampleProducts.filter((p) =>
      [p.name, p.category].some((v) => v.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section id="catalog" className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Popular near you</h2>
        <div className="text-sm text-gray-500">Real-time inventory simulated</div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <article key={p.id} className="group rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition">
            <div className="aspect-square overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-800 line-clamp-2 min-h-[44px]">{p.name}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold">₹{p.price}</span>
                <button onClick={() => onAdd?.(p)} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700">
                  <Plus className="h-4 w-4" /> Add
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
