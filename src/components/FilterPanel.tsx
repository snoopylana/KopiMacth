import React from 'react';
import { useApp } from '../context/AppContext';
import { LOCATIONS_LIST } from '../data/coffeeShops';
import { RotateCcw, Building, Users } from 'lucide-react';

const BUDGET_OPTIONS: { id: 'all' | 'under20k' | '20k-40k' | '40k-60k' | 'above60k'; label: string }[] = [
  { id: 'all', label: 'All Budget' },
  { id: 'under20k', label: '< 20K' },
  { id: '20k-40k', label: '20K–40K' },
  { id: '40k-60k', label: '40K–60K' },
  { id: 'above60k', label: '> 60K' },
];

const FACILITIES_LIST = [
  'Wi-Fi',
  'Power Outlet',
  'AC',
  'Parking',
  'Toilet',
  'Prayer Room',
  'Outdoor Area',
];

const ATMOSPHERE_OPTIONS: { id: 'all' | 'Quiet' | 'Moderate' | 'Lively'; label: string; desc: string }[] = [
  { id: 'all', label: 'All Ambience', desc: 'Semua suasana' },
  { id: 'Quiet', label: 'Quiet', desc: 'Hening untuk belajar intensif' },
  { id: 'Moderate', label: 'Moderate', desc: 'Suara wajar untuk diskusi' },
  { id: 'Lively', label: 'Lively', desc: 'Ramai & ceria untuk kumpul' },
];

const CAPACITY_OPTIONS: { id: 'all' | '1-4' | '5-8' | '9-15' | '16+'; label: string; sub: string }[] = [
  { id: 'all', label: 'Any Capacity', sub: 'Semua kapasitas' },
  { id: '1-4', label: '1–4 Orang', sub: 'Individu / Duo' },
  { id: '5-8', label: '5–8 Orang', sub: 'Tim Proyek Kecil' },
  { id: '9-15', label: '9–15 Orang', sub: 'Rapat Organisasi' },
  { id: '16+', label: '16+ Orang', sub: 'Workshop Komunitas' },
];

interface FilterPanelProps {
  onCloseMobile?: () => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ onCloseMobile }) => {
  const { filters, updateFilter, resetFilters } = useApp();

  const toggleFacility = (facility: string) => {
    const current = filters.facilities;
    if (current.includes(facility)) {
      updateFilter({ facilities: current.filter(f => f !== facility) });
    } else {
      updateFilter({ facilities: [...current, facility] });
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E8DFD5] p-5 shadow-xs space-y-6">
      {/* Panel Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#F0E9E1]">
        <div>
          <h2 className="text-sm font-bold text-[#2C2420] uppercase tracking-wider">
            Preference Filter
          </h2>
          <p className="text-xs text-[#8A7D73] mt-0.5">Sesuaikan dengan kebutuhanmu</p>
        </div>

        <button
          type="button"
          onClick={resetFilters}
          className="inline-flex items-center gap-1 text-xs text-[#854D0E] hover:text-[#451A03] font-semibold cursor-pointer hover:underline"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* 1. Location Filter */}
      <div>
        <label htmlFor="filter-location-select" className="block text-xs font-bold text-[#2C2420] mb-2 uppercase tracking-wide">
          📍 Location
        </label>
        <select
          id="filter-location-select"
          aria-label="Location"
          value={filters.location}
          onChange={e => updateFilter({ location: e.target.value })}
          className="w-full text-xs bg-[#FAF7F2] border border-[#D7CCC8] rounded-xl px-3 py-2 text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#78350F]/30"
        >
          {LOCATIONS_LIST.map((loc, i) => (
            <option key={i} value={loc === 'All Locations' ? 'all' : loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* 2. Budget Filter */}
      <div>
        <label className="block text-xs font-bold text-[#2C2420] mb-2 uppercase tracking-wide">
          💰 Budget (Per Pesanan)
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {BUDGET_OPTIONS.map(opt => {
            const isSelected = filters.budget === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => updateFilter({ budget: opt.id })}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold text-center border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#3E2723] text-white border-[#3E2723] shadow-xs'
                    : 'bg-[#FAF7F2] text-[#5C4D44] border-[#E8DFD5] hover:bg-[#F2ECE4]'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Meeting Room & Space Filter (Highlighted requirement) */}
      <div className="bg-[#FAF6F0] p-3.5 rounded-xl border border-[#E8DFC8]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Building className="w-4 h-4 text-[#2D6A4F]" />
            <span className="text-xs font-bold text-[#2C2420] uppercase tracking-wide">
              Meeting Room
            </span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filters.meetingRoomOnly}
              onChange={e => updateFilter({ meetingRoomOnly: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-[#D7CCC8] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#2D6A4F]"></div>
          </label>
        </div>
        <p className="text-[11px] text-[#6B5E55] mb-3">
          Wajib memiliki ruang privat untuk kerja kelompok atau rapat
        </p>

        {/* Capacity Selector */}
        <div>
          <label htmlFor="filter-capacity-select" className="text-[11px] font-bold text-[#3E2723] flex items-center gap-1 mb-1.5">
            <Users className="w-3 h-3" />
            <span>Kapasitas Rombongan:</span>
          </label>
          <select
            id="filter-capacity-select"
            aria-label="Kapasitas Rombongan"
            value={filters.capacityRange}
            onChange={e => updateFilter({ capacityRange: e.target.value as any })}
            className="w-full text-xs bg-white border border-[#D7CCC8] rounded-lg px-2.5 py-1.5 text-[#2C2420] focus:outline-none focus:ring-1 focus:ring-[#2D6A4F]"
          >
            {CAPACITY_OPTIONS.map(c => (
              <option key={c.id} value={c.id}>
                {c.label} ({c.sub})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 4. Facilities Checklist */}
      <div>
        <label className="block text-xs font-bold text-[#2C2420] mb-2 uppercase tracking-wide">
          ⚡ Facilities
        </label>
        <div className="space-y-1.5">
          {FACILITIES_LIST.map(fac => {
            const checked = filters.facilities.includes(fac);
            return (
              <label
                key={fac}
                className="flex items-center gap-2.5 text-xs text-[#4A3E37] cursor-pointer hover:text-[#2C2420] py-1"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleFacility(fac)}
                  className="rounded border-[#C4B5A5] text-[#3E2723] focus:ring-[#78350F] w-4 h-4 cursor-pointer accent-[#3E2723]"
                />
                <span className={checked ? 'font-semibold text-[#2C2420]' : ''}>
                  {fac}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 5. Atmosphere Filter */}
      <div>
        <label className="block text-xs font-bold text-[#2C2420] mb-2 uppercase tracking-wide">
          🌿 Atmosphere
        </label>
        <div className="space-y-1">
          {ATMOSPHERE_OPTIONS.map(atm => {
            const isSelected = filters.atmosphere === atm.id;
            return (
              <button
                key={atm.id}
                type="button"
                onClick={() => updateFilter({ atmosphere: atm.id })}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all border cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#3E2723] text-white border-[#3E2723] font-semibold'
                    : 'bg-[#FAF7F2] text-[#4A3E37] border-transparent hover:border-[#E8DFD5]'
                }`}
              >
                <span>{atm.label}</span>
                <span className={`text-[10px] ${isSelected ? 'text-[#EFE8DF]' : 'text-[#8C7E75]'}`}>
                  {atm.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Close Button */}
      {onCloseMobile && (
        <button
          type="button"
          onClick={onCloseMobile}
          className="w-full py-2.5 px-4 bg-[#3E2723] text-white text-xs font-semibold rounded-xl"
        >
          Terapkan Filter
        </button>
      )}
    </div>
  );
};
