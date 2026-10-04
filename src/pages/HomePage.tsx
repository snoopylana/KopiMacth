import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ActivityCard } from '../components/ActivityCard';
import { CoffeeShopCard } from '../components/CoffeeShopCard';
import { COFFEE_SHOPS, ACTIVITIES_CONFIG, LOCATIONS_LIST } from '../data/coffeeShops';
import { calculateMatchScore } from '../utils/matching';
import { ActivityType } from '../types';
import { Search, MapPin, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { filters, setActivity, updateFilter } = useApp();
  const [selectedActivity, setSelectedActivity] = useState<ActivityType>(filters.activity || 'study');
  const [selectedLocation, setSelectedLocation] = useState<string>(
    filters.location && filters.location !== 'all' ? filters.location : 'all'
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActivity(selectedActivity);
    updateFilter({
      activity: selectedActivity,
      location: selectedLocation,
    });
    navigate('/explore');
  };

  // Get curated suggestions for the selected activity
  const curatedShops = COFFEE_SHOPS
    .map(shop => ({
      shop,
      match: calculateMatchScore(shop, {
        ...filters,
        activity: selectedActivity,
        location: selectedLocation,
      }),
    }))
    .sort((a, b) => b.match.score - a.match.score)
    .slice(0, 3);

  const activeActivityConfig = ACTIVITIES_CONFIG.find(a => a.id === selectedActivity);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Subtle decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-200/30 via-orange-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE8DF] border border-[#DFD5C8] text-xs font-semibold text-[#5C4D44] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Platform Kurasi Coffee Shop Khusus Mahasiswa</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2C2420] tracking-tight mb-4 font-display text-balance">
            Find a Coffee Shop That Matches Your Day ☕
          </h1>

          <p className="text-base sm:text-lg text-[#6E6056] max-w-2xl mx-auto leading-relaxed">
            Discover coffee shops based on what you want to do, not just where they are.
          </p>
        </div>

        {/* Discovery Intent Container */}
        <div className="bg-white rounded-3xl border border-[#E8DFD5] p-5 sm:p-8 shadow-sm max-w-5xl mx-auto">
          <form onSubmit={handleSearchSubmit} className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-bold text-[#2C2420] font-display flex items-center gap-2">
                  <span>What are you looking for today?</span>
                </h2>
                <span className="text-xs text-[#8A7D73]">Pilih 1 aktivitas utama</span>
              </div>

              {/* Attractive Activity Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {ACTIVITIES_CONFIG.map(act => (
                  <ActivityCard
                    key={act.id}
                    activityId={act.id}
                    selected={selectedActivity === act.id}
                    onSelect={id => setSelectedActivity(id)}
                  />
                ))}
              </div>
            </div>

            {/* Location Bar & CTA */}
            <div className="pt-4 border-t border-[#F0E9E1] flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full sm:flex-1">
                <label htmlFor="home-location-select" className="sr-only">Where are you?</label>
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A7D73]">
                  <MapPin className="w-4 h-4 text-[#854D0E]" />
                </div>
                <select
                  id="home-location-select"
                  aria-label="Pilih lokasi coffee shop"
                  value={selectedLocation}
                  onChange={e => setSelectedLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] border border-[#D7CCC8] rounded-xl text-xs sm:text-sm text-[#2C2420] focus:outline-none focus:ring-2 focus:ring-[#78350F]/30"
                >
                  <option value="all">📍 All Locations (Bogor & Sekitarnya)</option>
                  {LOCATIONS_LIST.filter(l => l !== 'All Locations').map((loc, i) => (
                    <option key={i} value={loc}>
                      📍 {loc}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 bg-[#3E2723] hover:bg-[#2C1810] text-white text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0"
              >
                <Search className="w-4 h-4" />
                <span>Find My Coffee Shop</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Recommended Preview for Selected Activity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#854D0E] uppercase tracking-wider mb-1">
              <span>Top Match Preview</span>
            </div>
            <h2 className="text-2xl font-bold text-[#2C2420] font-display">
              Best Recommendations for {activeActivityConfig?.emoji} {activeActivityConfig?.label}
            </h2>
            <p className="text-xs sm:text-sm text-[#7A6D63] mt-0.5">
              {activeActivityConfig?.idealFor}
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setActivity(selectedActivity);
              navigate('/explore');
            }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#78350F] hover:text-[#3E2723] transition-colors cursor-pointer group"
          >
            <span>Lihat semua {selectedActivity} places</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curatedShops.map(({ shop, match }) => (
            <CoffeeShopCard key={shop.id} shop={shop} match={match} />
          ))}
        </div>
      </section>

      {/* Feature Pillar: Finding -> Evaluating -> Choosing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF6F0] rounded-3xl border border-[#E8DFD5] p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2420] font-display mb-2">
              Kenapa Memilih KopiMatch?
            </h2>
            <p className="text-xs sm:text-sm text-[#7A6D63]">
              Mahasiswa tak perlu lagi kecewa karena salah tempat: datang berniat nugas tapi musik terlalu kencang, atau butuh colokan tapi cuma tersedia di kasir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-5 border border-[#E8DFD5]">
              <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#854D0E] flex items-center justify-center font-bold text-lg mb-3">
                1
              </div>
              <h3 className="text-base font-bold text-[#2C2420] mb-1.5 font-display">
                Activity-First Matching
              </h3>
              <p className="text-xs text-[#6B5E55] leading-relaxed">
                Algoritma mencocokkan tingkat kebisingan, fasilitas Wi-Fi, dan rasio colokan dengan kebutuhan aktivitasmu: Study, Work, Discussion, Project, atau Relax.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E8DFD5]">
              <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] text-[#166534] flex items-center justify-center font-bold text-lg mb-3">
                2
              </div>
              <h3 className="text-base font-bold text-[#2C2420] mb-1.5 font-display">
                Meeting Room & Capacity Radar
              </h3>
              <p className="text-xs text-[#6B5E55] leading-relaxed">
                Ketahui dengan pasti ketersediaan private meeting room, kapasitas orang, proyektor/TV, dan whiteboard sebelum mengajak seluruh tim kerja kelompok.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E8DFD5]">
              <div className="w-10 h-10 rounded-xl bg-[#E0E7FF] text-[#3730A3] flex items-center justify-center font-bold text-lg mb-3">
                3
              </div>
              <h3 className="text-base font-bold text-[#2C2420] mb-1.5 font-display">
                Side-by-Side Comparison
              </h3>
              <p className="text-xs text-[#6B5E55] leading-relaxed">
                Bandingkan 2–3 coffee shop pilihanmu dalam satu tabel matriks yang rapi dengan highlight keunggulan masing-masing tempat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
