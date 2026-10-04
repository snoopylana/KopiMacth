import React from 'react';
import { Link } from 'react-router-dom';
import { SearchX, Layers, RotateCcw } from 'lucide-react';

interface EmptyStateProps {
  type: 'no-results' | 'empty-compare';
  onResetFilters?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ type, onResetFilters }) => {
  if (type === 'empty-compare') {
    return (
      <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#E8DFD5] max-w-lg mx-auto shadow-xs">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#FEF3C7] text-[#854D0E] flex items-center justify-center">
          <Layers className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[#2C2420] mb-2 font-display">
          Compare your options
        </h3>
        <p className="text-sm text-[#7A6D63] max-w-md mx-auto mb-6 leading-relaxed">
          Pilih 2–3 coffee shop untuk membandingkan fasilitas, suasana, meeting room, dan kecocokan aktivitas secara berdampingan.
        </p>
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3E2723] hover:bg-[#2C1810] text-white text-xs font-semibold rounded-xl transition-all shadow-sm"
        >
          Explore Coffee Shops
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#E8DFD5] shadow-xs">
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#F2ECE4] text-[#8A7D73] flex items-center justify-center">
        <SearchX className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-[#2C2420] mb-2 font-display">
        No coffee shops found
      </h3>
      <p className="text-sm text-[#7A6D63] max-w-sm mx-auto mb-6 leading-relaxed">
        Try adjusting your filters to discover more places. Coba kurangi batasan fasilitas atau pilih budget yang lebih luas.
      </p>
      {onResetFilters && (
        <button
          type="button"
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3E2723] hover:bg-[#2C1810] text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Filters</span>
        </button>
      )}
    </div>
  );
};
