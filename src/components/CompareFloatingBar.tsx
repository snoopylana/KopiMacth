import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { COFFEE_SHOPS } from '../data/coffeeShops';
import { Layers, X, ArrowRight } from 'lucide-react';

export const CompareFloatingBar: React.FC = () => {
  const { compareList, removeFromCompare, clearCompare } = useApp();
  const location = useLocation();

  // Hide bar if on compare page already or if compare list is empty
  if (location.pathname === '/compare' || compareList.length === 0) {
    return null;
  }

  const comparedShops = compareList
    .map(id => COFFEE_SHOPS.find(s => s.id === id))
    .filter(Boolean);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-xl animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#2C1810] text-white rounded-2xl shadow-xl border border-white/10 p-3 sm:p-4 flex items-center justify-between gap-3 backdrop-blur-lg">
        {/* Left: Info & items */}
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 shrink-0">
            <Layers className="w-4 h-4" />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            {comparedShops.map(shop => {
              if (!shop) return null;
              return (
                <div
                  key={shop.id}
                  className="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 px-2 py-1 rounded-lg text-xs shrink-0 transition-colors"
                >
                  <span className="font-semibold max-w-[100px] truncate text-amber-100">
                    {shop.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFromCompare(shop.id)}
                    className="p-0.5 hover:text-red-300 transition-colors cursor-pointer"
                    title="Remove"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              );
            })}

            {compareList.length < 3 && (
              <span className="text-[11px] text-white/50 whitespace-nowrap pl-1 hidden sm:inline">
                +{3 - compareList.length} lagi
              </span>
            )}
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={clearCompare}
            className="text-[11px] text-white/60 hover:text-white px-2 py-1 transition-colors cursor-pointer"
          >
            Clear
          </button>

          <Link
            to="/compare"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FEF3C7] text-[#451A03] hover:bg-[#FDE68A] text-xs font-bold rounded-xl transition-all shadow-sm"
          >
            <span>Compare ({compareList.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
