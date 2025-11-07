import { useMemo } from "react";
import { X, Trash2 } from "lucide-react";

export default function CartDrawer({ open, onClose, items = [], onRemove, onCheckout }) {
  const total = useMemo(() => items.reduce((s, it) => s + it.price * (it.qty || 1), 0), [items]);

  return (
    <div className={`fixed inset-0 z-30 ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      {/* Panel */}
      <aside className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl transform transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-160px)]">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 py-20">Your cart is empty</div>
          ) : (
            items.map((it, idx) => (
              <div key={`${it.id}-${idx}`} className="flex gap-3 border rounded-lg p-2">
                <img src={it.img} alt={it.name} className="h-16 w-16 rounded object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{it.name}</div>
                  <div className="text-sm text-gray-500">Qty: {it.qty || 1}</div>
                  <div className="font-semibold">₹{it.price * (it.qty || 1)}</div>
                </div>
                <button onClick={() => onRemove?.(idx)} className="self-start p-2 text-red-600 hover:bg-red-50 rounded">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="absolute bottom-0 w-full p-4 border-t bg-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-lg font-bold">₹{total}</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full py-3 rounded-md bg-emerald-600 text-white font-semibold disabled:opacity-50"
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
