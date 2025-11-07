import { ShoppingCart, Bike, Clock, MapPin } from "lucide-react";

export default function HeaderNav({ cartCount = 0, location = "Select location" }) {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-lime-400 to-emerald-500 grid place-items-center text-white font-bold shadow">
            G
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight">GroceryGo</div>
            <div className="text-xs text-gray-500 -mt-0.5 flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>Under 10 minutes</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a className="hover:text-emerald-600 transition" href="#catalog">Catalog</a>
          <a className="hover:text-emerald-600 transition" href="#tracking">Order tracking</a>
          <a className="hover:text-emerald-600 transition" href="#how">How it works</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center px-2 py-1.5 rounded-md border border-gray-200 text-gray-700 text-sm">
            <MapPin className="h-4 w-4 mr-1.5 text-emerald-600" />
            <span className="truncate max-w-[150px]">{location}</span>
          </div>
          <button className="relative inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-md transition">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 h-5 min-w-[20px] px-1 rounded-full bg-black text-white text-xs grid place-items-center">
                {cartCount}
              </span>
            )}
          </button>
          <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md hover:border-gray-300">
            <Bike className="h-4 w-4 text-emerald-600" />
            <span className="text-sm">Partner with us</span>
          </button>
        </div>
      </div>
    </header>
  );
}
