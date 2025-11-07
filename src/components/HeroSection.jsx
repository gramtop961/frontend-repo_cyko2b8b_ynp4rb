import { ArrowRight, Search, Clock } from "lucide-react";

export default function HeroSection({ onSearch, eta = "8-12 min" }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-14 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              <Clock className="h-4 w-4" />
              Delivery in {eta}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Ultra-fast groceries, delivered from hyperlocal dark stores
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Fresh produce, daily essentials, and curated snacks delivered to your door in minutes.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search fruits, milk, bread, ice-cream..."
                  onChange={(e) => onSearch?.(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <button className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-medium">
                Explore catalog <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-amber-200/40 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-200/50 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=1200&auto=format&fit=crop"
              alt="Groceries"
              className="relative z-10 rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
