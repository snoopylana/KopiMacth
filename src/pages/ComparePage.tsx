import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { COFFEE_SHOPS } from '../data/coffeeShops';
import { calculateMatchScore } from '../utils/matching';
import { MatchBadge } from '../components/MatchBadge';
import { EmptyState } from '../components/EmptyState';
import {
  ArrowLeft,
  X,
  Plus,
  Star,
  Check,
  Minus,
  Sparkles,
  Building,
  Users,
  Eye,
  Trash2
} from 'lucide-react';

export const ComparePage: React.FC = () => {
  const { compareList, removeFromCompare, clearCompare, addToCompare, filters } = useApp();
  const [selectedAddId, setSelectedAddId] = useState<string>('');

  const shops = compareList
    .map(id => COFFEE_SHOPS.find(s => s.id === id))
    .filter(Boolean) as (typeof COFFEE_SHOPS)[number][];

  // Compute matches for the current user activity
  const evaluatedShops = shops.map(shop => ({
    shop,
    match: calculateMatchScore(shop, filters),
  }));

  // Find best values for visual highlighting
  const bestMatchScore = Math.max(...evaluatedShops.map(e => e.match.score), 0);
  const bestRating = Math.max(...shops.map(s => s.rating), 0);
  const lowestPrice = Math.min(...shops.map(s => s.averagePrice), 999);
  const highestTotalCap = Math.max(...shops.map(s => s.capacity), 0);
  const highestRoomCap = Math.max(
    ...shops.map(s => (s.meetingRoom.available ? s.meetingRoom.capacity : 0)),
    0
  );

  // Available shops to add (not in compare list)
  const remainingShops = COFFEE_SHOPS.filter(s => !compareList.includes(s.id));

  const handleAddSelected = () => {
    if (selectedAddId) {
      addToCompare(selectedAddId);
      setSelectedAddId('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link
            to="/explore"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B5E55] hover:text-[#2C2420] transition-colors py-1 px-2 rounded-lg hover:bg-[#EFE8DF] mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Discovery</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2C2420] font-display flex items-center gap-2">
            <span>Coffee Shop Comparison</span>
            <span className="text-xs font-bold text-[#854D0E] bg-[#FEF3C7] border border-[#FDE68A] px-2.5 py-0.5 rounded-full">
              {compareList.length}/3 Terpilih
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-[#7A6D63] mt-1">
            Bandingkan spesifikasi dan kecocokan aktivitas untuk menentukan pilihan terbaik hari ini.
          </p>
        </div>

        {compareList.length > 0 && (
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={clearCompare}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C7E75] hover:text-red-700 p-2 rounded-xl hover:bg-red-50 transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>
            <Link
              to="/explore"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#3E2723] hover:bg-[#2C1810] text-white text-xs font-semibold rounded-xl transition-all shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Cari Cafe Lain</span>
            </Link>
          </div>
        )}
      </div>

      {/* Quick Add Dropdown if < 3 */}
      {compareList.length < 3 && remainingShops.length > 0 && (
        <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#5C4D44]">
            <Sparkles className="w-4 h-4 text-[#854D0E]" />
            <span>
              Kamu masih bisa menambahkan <strong>{3 - compareList.length}</strong> coffee shop lagi untuk dibandingkan:
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={selectedAddId}
              onChange={e => setSelectedAddId(e.target.value)}
              className="text-xs bg-white border border-[#D7CCC8] rounded-xl px-3 py-2 text-[#2C2420] focus:outline-none w-full sm:w-56"
            >
              <option value="">Pilih Coffee Shop...</option>
              {remainingShops.map(s => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.location})
                </option>
              ))}
            </select>
            <button
              type="button"
              disabled={!selectedAddId}
              onClick={handleAddSelected}
              className="px-3.5 py-2 bg-[#3E2723] hover:bg-[#2C1810] disabled:bg-gray-300 text-white text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer"
            >
              Tambah
            </button>
          </div>
        </div>
      )}

      {/* Main Compare Content: Matrix Table or Empty State */}
      {evaluatedShops.length === 0 ? (
        <EmptyState type="empty-compare" />
      ) : (
        <div className="bg-white rounded-3xl border border-[#E8DFD5] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              {/* Table Header: Coffee Shop Cards */}
              <thead>
                <tr className="border-b border-[#E8DFD5] bg-[#FAF7F2]">
                  <th className="p-4 sm:p-5 w-48 text-xs font-bold text-[#8A7D73] uppercase tracking-wider align-top">
                    Kriteria Evaluasi
                  </th>
                  {evaluatedShops.map(({ shop, match }) => (
                    <th key={shop.id} className="p-4 sm:p-5 align-top min-w-[200px]">
                      <div className="space-y-2.5">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-bold text-base text-[#2C2420] font-display">
                            {shop.name}
                          </h3>
                          <button
                            type="button"
                            onClick={() => removeFromCompare(shop.id)}
                            className="text-[#8C7E75] hover:text-red-600 p-1 hover:bg-white rounded-lg transition-colors cursor-pointer"
                            title="Hapus dari perbandingan"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-xs text-[#7A6D63]">
                          📍 {shop.location}
                        </div>

                        <div>
                          <MatchBadge score={match.score} tier={match.tier} size="sm" />
                        </div>

                        <Link
                          to={`/coffee-shop/${shop.id}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#78350F] hover:text-[#3E2723] hover:underline pt-1"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Lihat Detail</span>
                        </Link>
                      </div>
                    </th>
                  ))}
                  {/* Empty slots placeholders */}
                  {Array.from({ length: 3 - evaluatedShops.length }).map((_, idx) => (
                    <th key={`empty-${idx}`} className="p-4 sm:p-5 align-top bg-[#FAF7F2]/40 border-l border-dashed border-[#E8DFD5]">
                      <div className="h-32 border-2 border-dashed border-[#D7CCC8] rounded-2xl flex flex-col items-center justify-center p-4 text-center text-[#8C7E75]">
                        <Plus className="w-6 h-6 mb-1 text-[#854D0E]" />
                        <span className="text-xs font-bold">Slot Kosong</span>
                        <span className="text-[11px] text-[#A89A8F]">Tambahkan coffee shop</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body: Rows with highlights */}
              <tbody className="divide-y divide-[#F0E9E1] text-xs">
                {/* 1. Match Percentage */}
                <tr className="hover:bg-[#FAF7F2]/50">
                  <td className="p-4 font-bold text-[#2C2420] bg-[#FAF7F2]/50">
                    Match Percentage
                  </td>
                  {evaluatedShops.map(({ shop, match }) => {
                    const isBest = match.score === bestMatchScore;
                    return (
                      <td key={shop.id} className="p-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-base font-extrabold tabular-nums px-2.5 py-0.5 rounded-lg ${
                              isBest
                                ? 'bg-[#1B4332]/10 text-[#1B4332] font-black ring-1 ring-[#2D6A4F]/30'
                                : 'text-[#4A3E37]'
                            }`}
                          >
                            {match.score}%
                          </span>
                          {isBest && (
                            <span className="text-[10px] font-bold text-[#1B4332] bg-[#E8F5E9] px-1.5 py-0.5 rounded">
                              Top Match
                            </span>
                          )}
                        </div>
                      </td>
                    );
                  })}
                  {Array.from({ length: 3 - evaluatedShops.length }).map((_, i) => (
                    <td key={i} className="p-4 bg-[#FAF7F2]/20" />
                  ))}
                </tr>

                {/* 2. Rating */}
                <tr className="hover:bg-[#FAF7F2]/50">
                  <td className="p-4 font-bold text-[#2C2420] bg-[#FAF7F2]/50">
                    Rating Mahasiswa
                  </td>
                  {evaluatedShops.map(({ shop }) => {
                    const isBest = shop.rating === bestRating;
                    return (
                      <td key={shop.id} className="p-4">
                        <span
                          className={`inline-flex items-center gap-1 font-bold ${
                            isBest ? 'text-[#854D0E] bg-amber-50 px-2 py-0.5 rounded-md' : 'text-[#2C2420]'
                          }`}
                        >
                          <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                          <span>{shop.rating.toFixed(1)}</span>
                          <span className="text-[#8C7E75] font-normal">({shop.reviewCount})</span>
                        </span>
                      </td>
                    );
                  })}
                  {Array.from({ length: 3 - evaluatedShops.length }).map((_, i) => (
                    <td key={i} className="p-4 bg-[#FAF7F2]/20" />
                  ))}
                </tr>

                {/* 3. Price Level */}
                <tr className="hover:bg-[#FAF7F2]/50">
                  <td className="p-4 font-bold text-[#2C2420] bg-[#FAF7F2]/50">
                    Rentang Harga
                  </td>
                  {evaluatedShops.map(({ shop }) => {
                    const isBest = shop.averagePrice === lowestPrice;
                    return (
                      <td key={shop.id} className="p-4">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-[#2C2420]">{shop.priceRange}</span>
                          <span className="text-[#8C7E75]">({shop.priceLevel})</span>
                          {isBest && (
                            <span className="text-[10px] font-bold text-[#166534] bg-green-50 px-1.5 py-0.2 rounded">
                              Paling Hemat
                            </span>
                          )}
                        </div>
                      </td>
                    );
                  })}
                  {Array.from({ length: 3 - evaluatedShops.length }).map((_, i) => (
                    <td key={i} className="p-4 bg-[#FAF7F2]/20" />
                  ))}
                </tr>

                {/* 4. Wi-Fi */}
                <tr className="hover:bg-[#FAF7F2]/50">
                  <td className="p-4 font-bold text-[#2C2420] bg-[#FAF7F2]/50">
                    Wi-Fi Speed
                  </td>
                  {evaluatedShops.map(({ shop }) => (
                    <td key={shop.id} className="p-4">
                      {shop.facilities.includes('Wi-Fi') ? (
                        <div className="flex items-center gap-1.5 text-[#1B4332] font-semibold">
                          <Check className="w-4 h-4 text-[#2D6A4F]" />
                          <span>{shop.wifiSpeed}</span>
                        </div>
                      ) : (
                        <span className="text-[#8C7E75]">—</span>
                      )}
                    </td>
                  ))}
                  {Array.from({ length: 3 - evaluatedShops.length }).map((_, i) => (
                    <td key={i} className="p-4 bg-[#FAF7F2]/20" />
                  ))}
                </tr>

                {/* 5. Power Outlets */}
                <tr className="hover:bg-[#FAF7F2]/50">
                  <td className="p-4 font-bold text-[#2C2420] bg-[#FAF7F2]/50">
                    Power Outlets (Colokan)
                  </td>
                  {evaluatedShops.map(({ shop }) => (
                    <td key={shop.id} className="p-4">
                      {shop.facilities.includes('Power Outlet') ? (
                        <div className="space-y-0.5">
                          <span className="inline-flex items-center gap-1 text-[#1B4332] font-semibold">
                            <Check className="w-4 h-4 text-[#2D6A4F]" />
                            <span>Tersedia</span>
                          </span>
                          <div className="text-[11px] text-[#6B5E55]">
                            {shop.powerOutletCoverage}
                          </div>
                        </div>
                      ) : (
                        <span className="text-[#8C7E75]">—</span>
                      )}
                    </td>
                  ))}
                  {Array.from({ length: 3 - evaluatedShops.length }).map((_, i) => (
                    <td key={i} className="p-4 bg-[#FAF7F2]/20" />
                  ))}
                </tr>

                {/* 6. AC */}
                <tr className="hover:bg-[#FAF7F2]/50">
                  <td className="p-4 font-bold text-[#2C2420] bg-[#FAF7F2]/50">
                    Pendingin Udara (AC)
                  </td>
                  {evaluatedShops.map(({ shop }) => (
                    <td key={shop.id} className="p-4">
                      {shop.facilities.includes('AC') ? (
                        <span className="inline-flex items-center gap-1 text-[#1B4332] font-semibold">
                          <Check className="w-4 h-4 text-[#2D6A4F]" />
                          <span>Ada (Dingin)</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[#6B5E55]">
                          <Minus className="w-4 h-4" />
                          <span>Non-AC / Outdoor</span>
                        </span>
                      )}
                    </td>
                  ))}
                  {Array.from({ length: 3 - evaluatedShops.length }).map((_, i) => (
                    <td key={i} className="p-4 bg-[#FAF7F2]/20" />
                  ))}
                </tr>

                {/* 7. Meeting Room (Feature Requirement) */}
                <tr className="hover:bg-[#FAF7F2]/50 bg-[#FAF6F0]/40">
                  <td className="p-4 font-bold text-[#2C2420] bg-[#FAF6F0]">
                    Meeting Room
                  </td>
                  {evaluatedShops.map(({ shop }) => (
                    <td key={shop.id} className="p-4">
                      {shop.meetingRoom.available ? (
                        <span className="inline-flex items-center gap-1 font-bold text-[#1B4332] bg-[#E8F5E9] px-2 py-0.5 rounded-md">
                          <Building className="w-3.5 h-3.5" />
                          <span>✓ Available ({shop.meetingRoom.type})</span>
                        </span>
                      ) : (
                        <span className="text-[#8C7E75]">—</span>
                      )}
                    </td>
                  ))}
                  {Array.from({ length: 3 - evaluatedShops.length }).map((_, i) => (
                    <td key={i} className="p-4 bg-[#FAF7F2]/20" />
                  ))}
                </tr>

                {/* 8. Room Capacity */}
                <tr className="hover:bg-[#FAF7F2]/50 bg-[#FAF6F0]/40">
                  <td className="p-4 font-bold text-[#2C2420] bg-[#FAF6F0]">
                    Room Capacity
                  </td>
                  {evaluatedShops.map(({ shop }) => {
                    const hasRoom = shop.meetingRoom.available;
                    const isLargest = hasRoom && shop.meetingRoom.capacity === highestRoomCap;
                    return (
                      <td key={shop.id} className="p-4">
                        {hasRoom ? (
                          <span
                            className={`font-semibold ${
                              isLargest ? 'text-[#854D0E] font-bold' : 'text-[#2C2420]'
                            }`}
                          >
                            Up to {shop.meetingRoom.capacity} people
                            {isLargest && (
                              <span className="ml-1 text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded">
                                Terbesar
                              </span>
                            )}
                          </span>
                        ) : (
                          <span className="text-[#8C7E75]">—</span>
                        )}
                      </td>
                    );
                  })}
                  {Array.from({ length: 3 - evaluatedShops.length }).map((_, i) => (
                    <td key={i} className="p-4 bg-[#FAF7F2]/20" />
                  ))}
                </tr>

                {/* 9. Total Capacity */}
                <tr className="hover:bg-[#FAF7F2]/50">
                  <td className="p-4 font-bold text-[#2C2420] bg-[#FAF7F2]/50">
                    Total Capacity
                  </td>
                  {evaluatedShops.map(({ shop }) => {
                    const isBest = shop.capacity === highestTotalCap;
                    return (
                      <td key={shop.id} className="p-4">
                        <span className={`font-semibold ${isBest ? 'text-[#1B4332] font-bold' : 'text-[#2C2420]'}`}>
                          👥 {shop.capacity} orang
                        </span>
                      </td>
                    );
                  })}
                  {Array.from({ length: 3 - evaluatedShops.length }).map((_, i) => (
                    <td key={i} className="p-4 bg-[#FAF7F2]/20" />
                  ))}
                </tr>

                {/* 10. Atmosphere */}
                <tr className="hover:bg-[#FAF7F2]/50">
                  <td className="p-4 font-bold text-[#2C2420] bg-[#FAF7F2]/50">
                    Atmosphere
                  </td>
                  {evaluatedShops.map(({ shop }) => (
                    <td key={shop.id} className="p-4">
                      <span className="font-semibold text-[#2C2420]">
                        {shop.atmosphere} ({shop.seatingArea})
                      </span>
                    </td>
                  ))}
                  {Array.from({ length: 3 - evaluatedShops.length }).map((_, i) => (
                    <td key={i} className="p-4 bg-[#FAF7F2]/20" />
                  ))}
                </tr>

                {/* 11. Study Suitability */}
                <tr className="hover:bg-[#FAF7F2]/50">
                  <td className="p-4 font-bold text-[#2C2420] bg-[#FAF7F2]/50">
                    📚 Study Suitability
                  </td>
                  {evaluatedShops.map(({ shop }) => (
                    <td key={shop.id} className="p-4">
                      <span className="text-[#854D0E] font-bold">
                        {'★'.repeat(shop.activities.study)}
                        {'☆'.repeat(5 - shop.activities.study)}
                      </span>
                    </td>
                  ))}
                  {Array.from({ length: 3 - evaluatedShops.length }).map((_, i) => (
                    <td key={i} className="p-4 bg-[#FAF7F2]/20" />
                  ))}
                </tr>

                {/* 12. Discussion Suitability */}
                <tr className="hover:bg-[#FAF7F2]/50">
                  <td className="p-4 font-bold text-[#2C2420] bg-[#FAF7F2]/50">
                    👥 Discussion Suitability
                  </td>
                  {evaluatedShops.map(({ shop }) => (
                    <td key={shop.id} className="p-4">
                      <span className="text-[#854D0E] font-bold">
                        {'★'.repeat(shop.activities.discussion)}
                        {'☆'.repeat(5 - shop.activities.discussion)}
                      </span>
                    </td>
                  ))}
                  {Array.from({ length: 3 - evaluatedShops.length }).map((_, i) => (
                    <td key={i} className="p-4 bg-[#FAF7F2]/20" />
                  ))}
                </tr>

                {/* 13. Project Suitability */}
                <tr className="hover:bg-[#FAF7F2]/50">
                  <td className="p-4 font-bold text-[#2C2420] bg-[#FAF7F2]/50">
                    🚀 Project Suitability
                  </td>
                  {evaluatedShops.map(({ shop }) => (
                    <td key={shop.id} className="p-4">
                      <span className="text-[#854D0E] font-bold">
                        {'★'.repeat(shop.activities.project)}
                        {'☆'.repeat(5 - shop.activities.project)}
                      </span>
                    </td>
                  ))}
                  {Array.from({ length: 3 - evaluatedShops.length }).map((_, i) => (
                    <td key={i} className="p-4 bg-[#FAF7F2]/20" />
                  ))}
                </tr>

                {/* 14. Action Bottom Row */}
                <tr className="bg-[#FAF7F2]">
                  <td className="p-4 font-bold text-[#2C2420]">Aksi Pilihan</td>
                  {evaluatedShops.map(({ shop }) => (
                    <td key={shop.id} className="p-4">
                      <Link
                        to={`/coffee-shop/${shop.id}`}
                        className="w-full text-center block py-2 px-3 bg-[#3E2723] hover:bg-[#2C1810] text-white rounded-xl font-bold shadow-xs transition-colors"
                      >
                        Pilih Tempat Ini
                      </Link>
                    </td>
                  ))}
                  {Array.from({ length: 3 - evaluatedShops.length }).map((_, i) => (
                    <td key={i} className="p-4 bg-[#FAF7F2]/20" />
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
