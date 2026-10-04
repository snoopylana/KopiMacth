import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { COFFEE_SHOPS, ACTIVITIES_CONFIG } from '../data/coffeeShops';
import { filterAndSortCoffeeShops } from '../utils/matching';
import { CoffeeShopCard } from '../components/CoffeeShopCard';
import { FilterPanel } from '../components/FilterPanel';
import { EmptyState } from '../components/EmptyState';
import { ActivityType } from '../types';
import { ArrowLeft, SlidersHorizontal, ArrowUpDown, X, Search } from 'lucide-react';

export const ExplorePage: React.FC = () => {
  const { filters, setActivity, updateFilter, resetFilters } = useApp();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter & sort
  const results = filterAndSortCoffeeShops(COFFEE_SHOPS, filters);
  const currentActivityConfig = ACTIVITIES_CONFIG.find(a => a.id === filters.activity) || ACTIVITIES_CONFIG[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B5E55] hover:text-[#2C2420] transition-colors py-1 px-2 rounded-lg hover:bg-[#EFE8DF]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Search bar inside header */}
        <div className="relative w-48 sm:w-64">
          <input
            type="text"
            placeholder="Cari nama cafe..."
            value={filters.searchQuery}
            onChange={e => updateFilter({ searchQuery: e.target.value })}
            className="w-full text-xs pl-8 pr-3 py-1.5 bg-white border border-[#D7CCC8] rounded-xl text-[#2C2420] placeholder-[#A89A8F] focus:outline-none focus:ring-1 focus:ring-[#78350F]"
          />
          <Search className="w-3.5 h-3.5 text-[#9E8E81] absolute left-2.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white rounded-3xl border border-[#E8DFD5] p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#854D0E] uppercase tracking-wider mb-1">
              <span>Activity Discovery</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2C2420] font-display flex items-center gap-2">
              <span>Coffee shops for {currentActivityConfig.label.toLowerCase()}</span>
              <span>{currentActivityConfig.emoji}</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#7A6D63] mt-1">
              {currentActivityConfig.longDesc}
            </p>
          </div>

          {/* Result Count and Sort Selector */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <label htmlFor="explore-sort-select" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5C4D44] bg-[#FAF7F2] border border-[#D7CCC8] px-3 py-2 rounded-xl">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#854D0E]" />
              <span className="hidden sm:inline">Sort:</span>
              <select
                id="explore-sort-select"
                aria-label="Sort coffee shops"
                value={filters.sortBy}
                onChange={e => updateFilter({ sortBy: e.target.value as any })}
                className="bg-transparent text-xs font-bold text-[#2C2420] focus:outline-none cursor-pointer"
              >
                <option value="best-match">Best Match</option>
                <option value="highest-rating">Highest Rating</option>
                <option value="lowest-price">Lowest Price</option>
                <option value="highest-capacity">Highest Capacity</option>
              </select>
            </label>

            {/* Mobile Filter Trigger Button */}
            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#3E2723] px-3.5 py-2 rounded-xl shadow-xs"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Activity Quick Switcher Bar */}
        <div className="mt-5 pt-4 border-t border-[#F0E9E1]">
          <div className="text-xs font-bold text-[#6B5E55] mb-2 uppercase tracking-wider">
            Switch Activity:
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {ACTIVITIES_CONFIG.map(act => {
              const active = filters.activity === act.id;
              return (
                <button
                  key={act.id}
                  type="button"
                  onClick={() => setActivity(act.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 border ${
                    active
                      ? 'bg-[#3E2723] text-white border-[#3E2723] shadow-xs'
                      : 'bg-[#FAF7F2] text-[#5C4D44] border-[#E8DFD5] hover:bg-[#F2ECE4]'
                  }`}
                >
                  <span>{act.emoji}</span>
                  <span>{act.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Layout: Sidebar + Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Desktop Sidebar Filter (1 column) */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-20">
          <FilterPanel />
        </aside>

        {/* Coffee Shop Cards Grid (3 columns on desktop) */}
        <main className="lg:col-span-3 space-y-4">
          {/* Active Filter Indicators Bar */}
          <div className="flex items-center justify-between text-xs text-[#7A6D63] px-1">
            <span>
              Menampilkan <strong className="text-[#2C2420]">{results.length}</strong> coffee shop
              {filters.location && filters.location !== 'all' ? ` di ${filters.location}` : ''}
            </span>

            {(filters.budget !== 'all' ||
              filters.facilities.length > 0 ||
              filters.atmosphere !== 'all' ||
              filters.meetingRoomOnly ||
              filters.capacityRange !== 'all') && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-[#854D0E] font-semibold hover:underline cursor-pointer"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Results Grid or Empty State */}
          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
              {results.map(({ shop, match }) => (
                <CoffeeShopCard key={shop.id} shop={shop} match={match} />
              ))}
            </div>
          ) : (
            <EmptyState type="no-results" onResetFilters={resetFilters} />
          )}
        </main>
      </div>

      {/* Mobile Drawer Filter Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-sm bg-[#FAF7F2] h-full shadow-2xl p-4 overflow-y-auto flex flex-col justify-between animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E8DFD5]">
                <h3 className="font-bold text-base text-[#2C2420] font-display">
                  Filters
                </h3>
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 rounded-lg hover:bg-[#EFE8DF] text-[#6B5E55]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <FilterPanel onCloseMobile={() => setMobileFilterOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
