import React, { createContext, useContext, useState, useEffect } from 'react';
import { ActivityType, FilterState } from '../types';

interface AppContextType {
  filters: FilterState;
  setActivity: (act: ActivityType) => void;
  updateFilter: (partial: Partial<FilterState>) => void;
  resetFilters: () => void;
  compareList: string[];
  addToCompare: (shopId: string) => boolean;
  removeFromCompare: (shopId: string) => void;
  clearCompare: () => void;
  isInCompare: (shopId: string) => boolean;
  toast: string | null;
  setToast: (msg: string | null) => void;
}

const DEFAULT_FILTERS: FilterState = {
  activity: 'study',
  budget: 'all',
  facilities: [],
  atmosphere: 'all',
  location: 'all',
  meetingRoomOnly: false,
  capacityRange: 'all',
  sortBy: 'best-match',
  searchQuery: '',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<FilterState>(() => {
    try {
      const saved = localStorage.getItem('kopimatch_filters');
      if (saved) return { ...DEFAULT_FILTERS, ...JSON.parse(saved) };
    } catch {
      // ignore
    }
    return DEFAULT_FILTERS;
  });

  const [compareList, setCompareList] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('kopimatch_compare');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return ['kopi-senja', 'ruang-temu-kolektif']; // Friendly initial compare pair
  });

  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('kopimatch_filters', JSON.stringify(filters));
    } catch {
      // ignore
    }
  }, [filters]);

  useEffect(() => {
    try {
      localStorage.setItem('kopimatch_compare', JSON.stringify(compareList));
    } catch {
      // ignore
    }
  }, [compareList]);

  // Auto dismiss toast
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(timer);
  }, [toast]);

  const setActivity = (act: ActivityType) => {
    setFilters(prev => ({ ...prev, activity: act }));
  };

  const updateFilter = (partial: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...partial }));
  };

  const resetFilters = () => {
    setFilters(prev => ({
      ...DEFAULT_FILTERS,
      activity: prev.activity, // Preserve current selected activity
    }));
    setToast('Filter telah direset');
  };

  const addToCompare = (shopId: string): boolean => {
    if (compareList.includes(shopId)) {
      removeFromCompare(shopId);
      return false;
    }
    if (compareList.length >= 3) {
      setToast('Maksimal 3 coffee shop untuk dibandingkan');
      return false;
    }
    const updated = [...compareList, shopId];
    setCompareList(updated);
    setToast(`Ditambahkan ke Komparasi (${updated.length}/3)`);
    return true;
  };

  const removeFromCompare = (shopId: string) => {
    setCompareList(prev => {
      const filtered = prev.filter(id => id !== shopId);
      setToast('Dihapus dari Komparasi');
      return filtered;
    });
  };

  const clearCompare = () => {
    setCompareList([]);
    setToast('Daftar komparasi dikosongkan');
  };

  const isInCompare = (shopId: string) => compareList.includes(shopId);

  return (
    <AppContext.Provider
      value={{
        filters,
        setActivity,
        updateFilter,
        resetFilters,
        compareList,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
        toast,
        setToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp(): AppContextType {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
}
