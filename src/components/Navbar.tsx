import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Layers } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { compareList } = useApp();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single Brand Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#2C2420] hover:text-[#78350F] transition-colors shrink-0"
        >
          <span className="text-2xl" role="img" aria-label="Coffee cup">☕</span>
          <span className="font-display">KopiMatch</span>
        </Link>

        {/* Zone 2: Clean Nav Links */}
        <nav className="flex items-center gap-1 sm:gap-6 text-sm font-medium text-[#6B5E55]">
          <Link
            to="/"
            className={`px-2.5 py-1.5 rounded-md transition-colors ${
              isActive('/')
                ? 'text-[#2C2420] font-semibold bg-[#EFE8DF]'
                : 'hover:text-[#2C2420] hover:bg-[#F3ECE4]'
            }`}
          >
            Home
          </Link>
          <Link
            to="/explore"
            className={`px-2.5 py-1.5 rounded-md transition-colors ${
              isActive('/explore')
                ? 'text-[#2C2420] font-semibold bg-[#EFE8DF]'
                : 'hover:text-[#2C2420] hover:bg-[#F3ECE4]'
            }`}
          >
            Explore
          </Link>
          <Link
            to="/compare"
            className={`px-2.5 py-1.5 rounded-md transition-colors relative ${
              isActive('/compare')
                ? 'text-[#2C2420] font-semibold bg-[#EFE8DF]'
                : 'hover:text-[#2C2420] hover:bg-[#F3ECE4]'
            }`}
          >
            Compare
            {compareList.length > 0 && (
              <span className="ml-1.5 inline-flex items-center justify-center px-1.5 py-0.2 text-[11px] font-bold bg-[#854D0E] text-white rounded-full">
                {compareList.length}
              </span>
            )}
          </Link>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-2.5">
          <Link
            to="/compare"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#451A03] bg-[#FEF3C7] border border-[#FDE68A] hover:bg-[#FDE68A] rounded-lg transition-colors whitespace-nowrap"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Compare ({compareList.length}/3)</span>
          </Link>

          <Link
            to="/explore"
            className="px-3.5 py-2 text-xs font-semibold text-white bg-[#3E2723] hover:bg-[#2C1810] rounded-lg shadow-sm transition-all whitespace-nowrap"
          >
            Find Coffee Shop
          </Link>
        </div>
      </div>
    </header>
  );
};
