import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { COFFEE_SHOPS, ACTIVITIES_CONFIG } from '../data/coffeeShops';
import { calculateMatchScore } from '../utils/matching';
import { MatchBadge } from '../components/MatchBadge';
import { ActivityType } from '../types';
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  Wifi,
  Zap,
  Wind,
  Users,
  Building,
  CheckCircle2,
  XCircle,
  Plus,
  Check,
  Tv,
  Layers,
  Sparkles
} from 'lucide-react';

export const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { filters, setActivity, isInCompare, addToCompare } = useApp();
  const [imageError, setImageError] = useState(false);

  const shop = COFFEE_SHOPS.find(s => s.id === id);

  // Allow user to preview how this cafe fits other activities dynamically
  const [previewActivity, setPreviewActivity] = useState<ActivityType>(filters.activity || 'study');

  if (!shop) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-[#2C2420] mb-2 font-display">Coffee Shop Tidak Ditemukan</h2>
        <p className="text-sm text-[#7A6D63] mb-6">Coffee shop yang Anda cari tidak tersedia dalam database kami.</p>
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3E2723] text-white text-xs font-semibold rounded-xl"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Explore</span>
        </Link>
      </div>
    );
  }

  const match = calculateMatchScore(shop, { ...filters, activity: previewActivity });
  const compared = isInCompare(shop.id);
  const activeConfig = ACTIVITIES_CONFIG.find(a => a.id === previewActivity) || ACTIVITIES_CONFIG[0];

  const handleSelectActivityTab = (act: ActivityType) => {
    setPreviewActivity(act);
    setActivity(act);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* 1. Back Navigation & Compare Actions */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B5E55] hover:text-[#2C2420] transition-colors py-1.5 px-3 rounded-lg hover:bg-[#EFE8DF] cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => addToCompare(shop.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all cursor-pointer shadow-xs ${
              compared
                ? 'bg-[#FEF3C7] text-[#78350F] border-[#F59E0B]'
                : 'bg-[#3E2723] text-white border-[#3E2723] hover:bg-[#2C1810]'
            }`}
          >
            {compared ? (
              <>
                <Check className="w-4 h-4 text-[#78350F]" />
                <span>In Comparison Table</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Add to Compare</span>
              </>
            )}
          </button>

          {compared && (
            <Link
              to="/compare"
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#451A03] bg-amber-100 hover:bg-amber-200 transition-colors flex items-center gap-1"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Buka Compare</span>
            </Link>
          )}
        </div>
      </div>

      {/* 2. Large Media Hero */}
      <div className="relative rounded-3xl overflow-hidden h-72 sm:h-96 bg-[#DFD5C8] border border-[#E8DFD5] shadow-sm">
        {!imageError ? (
          <img
            src={shop.image}
            alt={shop.name}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#EFE8DF] to-[#D7CCC8] text-[#8C7A6D]">
            <span className="text-5xl mb-2">☕</span>
            <span className="font-bold text-lg">{shop.name}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

        {/* Floating Top Match Badge */}
        <div className="absolute top-4 left-4">
          <MatchBadge score={match.score} tier={match.tier} size="lg" />
        </div>

        {/* Floating Price Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-extrabold text-[#2C2420] shadow-sm">
          {shop.priceRange}
        </div>

        {/* Hero Bottom Details */}
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <div className="flex flex-wrap items-center gap-2 mb-1.5 text-xs">
            <span className="inline-flex items-center gap-1 bg-amber-500/90 text-white font-bold px-2.5 py-0.5 rounded-md">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{shop.rating.toFixed(1)}</span>
            </span>
            <span className="text-white/80">({shop.reviewCount} ulasan mahasiswa)</span>
            <span className="text-white/40" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>{shop.location}</span>
            </span>
            <span className="text-white/40" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1 text-white/90">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>{shop.openingHours}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white drop-shadow-sm">
            {shop.name}
          </h1>
          <p className="text-xs sm:text-sm text-white/90 max-w-2xl mt-1 line-clamp-2">
            {shop.tagline}
          </p>
        </div>
      </div>

      {/* Main Grid: Left Column (Why Matches + Specs) & Right Column (Space & Activities) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Section: WHY THIS MATCHES YOU (Dynamic per selected activity) */}
          <section className="bg-white rounded-3xl border-2 border-[#854D0E]/20 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#F0E9E1]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-[#854D0E] flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#2C2420] font-display">
                    Why This Matches You
                  </h2>
                  <p className="text-xs text-[#8A7D73]">
                    Disesuaikan dengan aktivitas yang kamu pilih
                  </p>
                </div>
              </div>

              {/* Match percentage pill */}
              <div className="text-right">
                <div className="text-xl font-extrabold text-[#854D0E] tabular-nums">
                  {match.score}%
                </div>
                <div className="text-[10px] font-semibold text-[#8A7D73] uppercase tracking-wider">
                  {match.tier}
                </div>
              </div>
            </div>

            {/* Activity Switcher Tabs */}
            <div className="mb-4">
              <span className="text-[11px] font-bold text-[#7A6D63] uppercase tracking-wider block mb-2">
                Preview kecocokan aktivitas:
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                {ACTIVITIES_CONFIG.map(act => {
                  const isCurrent = previewActivity === act.id;
                  return (
                    <button
                      key={act.id}
                      type="button"
                      onClick={() => handleSelectActivityTab(act.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                        isCurrent
                          ? 'bg-[#3E2723] text-white shadow-xs'
                          : 'bg-[#FAF7F2] text-[#5C4D44] hover:bg-[#F2ECE4]'
                      }`}
                    >
                      <span>{act.emoji}</span>
                      <span>{act.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Bullet Points */}
            <div className="space-y-2.5 bg-[#FAF7F2] p-4 rounded-2xl border border-[#EFE8DF]">
              <div className="text-xs font-bold text-[#3E2723] mb-1">
                Alasan kuat memilih {shop.name} untuk {activeConfig.emoji} {activeConfig.label}:
              </div>
              {shop.whyMatches[previewActivity]?.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4A3E37]">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Space & Capacity (Key requirement) */}
          <section className="bg-white rounded-3xl border border-[#E8DFD5] p-6 sm:p-7 shadow-xs space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#F0E9E1]">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#166534] flex items-center justify-center font-bold">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#2C2420] font-display">
                  Space & Capacity
                </h2>
                <p className="text-xs text-[#8A7D73]">
                  Kapasitas tempat duduk dan fasilitas ruang rapat kelompok
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Total Capacity Box */}
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD5]">
                <div className="text-xs text-[#7A6D63] font-medium mb-1">
                  Total Seating Capacity
                </div>
                <div className="text-xl font-extrabold text-[#2C2420] flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#854D0E]" />
                  <span>👥 Up to {shop.capacity} people</span>
                </div>
                <div className="text-xs text-[#6B5E55] mt-1.5">
                  Tipe area: <strong className="text-[#2C2420]">{shop.seatingArea} Area</strong>
                </div>
              </div>

              {/* Meeting Room Box */}
              <div className={`p-4 rounded-2xl border ${
                shop.meetingRoom.available
                  ? 'bg-[#E8F5E9]/50 border-[#C8E6C9]'
                  : 'bg-[#FAF7F2] border-[#E8DFD5]'
              }`}>
                <div className="text-xs text-[#7A6D63] font-medium mb-1">
                  Meeting Room
                </div>
                <div className="text-lg font-bold flex items-center gap-2">
                  {shop.meetingRoom.available ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-[#2D6A4F]" />
                      <span className="text-[#1B4332]">✓ Available</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-[#8C7E75]" />
                      <span className="text-[#6B5E55]">✕ Not Available</span>
                    </>
                  )}
                </div>

                {shop.meetingRoom.available && (
                  <div className="text-xs text-[#2D6A4F] mt-2 space-y-1">
                    <div>
                      Kapasitas Room: <strong>Up to {shop.meetingRoom.capacity} people</strong>
                    </div>
                    <div>
                      Tipe: <strong>{shop.meetingRoom.type} Room</strong>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Meeting Room Amenities if available */}
            {shop.meetingRoom.available && (
              <div className="bg-[#F4F9F4] p-4 rounded-2xl border border-[#D5E8D4] text-xs text-[#2D6A4F] space-y-2">
                <div className="font-bold flex items-center gap-1.5">
                  <Building className="w-4 h-4" />
                  <span>Fasilitas Penunjang Meeting Room:</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {shop.meetingRoom.hasWhiteboard && (
                    <span className="px-2.5 py-1 bg-white rounded-lg border border-[#C8E6C9] font-medium">
                      ✓ Whiteboard Magnetik
                    </span>
                  )}
                  {shop.meetingRoom.hasScreen && (
                    <span className="px-2.5 py-1 bg-white rounded-lg border border-[#C8E6C9] font-medium flex items-center gap-1">
                      <Tv className="w-3.5 h-3.5" />
                      <span>Smart TV / Screen Presentasi</span>
                    </span>
                  )}
                  {shop.meetingRoom.minBookingSpend && (
                    <span className="px-2.5 py-1 bg-white rounded-lg border border-[#C8E6C9] font-medium">
                      Syarat: {shop.meetingRoom.minBookingSpend}
                    </span>
                  )}
                </div>
                {shop.meetingRoom.notes && (
                  <p className="text-[11px] text-[#406850] italic pt-1">
                    Catatan: {shop.meetingRoom.notes}
                  </p>
                )}
              </div>
            )}
          </section>

          {/* Section: Facilities & Tech Specs */}
          <section className="bg-white rounded-3xl border border-[#E8DFD5] p-6 sm:p-7 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-[#2C2420] font-display">
              Facilities & Connectivity Specs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-3 p-3.5 bg-[#FAF7F2] rounded-xl">
                <Wifi className="w-5 h-5 text-[#2D6A4F] shrink-0" />
                <div>
                  <div className="font-bold text-[#2C2420]">Wi-Fi Speed</div>
                  <div className="text-[#6B5E55]">{shop.wifiSpeed} (Dedicated Student Bandwidth)</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#FAF7F2] rounded-xl">
                <Zap className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <div className="font-bold text-[#2C2420]">Power Outlet Ratio</div>
                  <div className="text-[#6B5E55]">{shop.powerOutletCoverage}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#FAF7F2] rounded-xl">
                <Wind className="w-5 h-5 text-sky-600 shrink-0" />
                <div>
                  <div className="font-bold text-[#2C2420]">Indoor Air Conditioning</div>
                  <div className="text-[#6B5E55]">AC sejuk stabil & sirkulasi udara baik</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#FAF7F2] rounded-xl">
                <Building className="w-5 h-5 text-[#854D0E] shrink-0" />
                <div>
                  <div className="font-bold text-[#2C2420]">Atmosphere Vibe</div>
                  <div className="text-[#6B5E55]">{shop.atmosphere} ({shop.seatingArea} seating)</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-bold text-[#7A6D63] block mb-2">Fasilitas Lainnya:</span>
              <div className="flex flex-wrap gap-1.5">
                {shop.facilities.map((fac, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#F2ECE4] text-[#423730] rounded-lg text-xs font-semibold"
                  >
                    ✓ {fac}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Description & Popular Menu */}
          <section className="bg-white rounded-3xl border border-[#E8DFD5] p-6 sm:p-7 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-[#2C2420] font-display">
              About & Student-Favorite Menu
            </h2>
            <p className="text-xs sm:text-sm text-[#5C4D44] leading-relaxed">
              {shop.description}
            </p>

            <div className="pt-3">
              <h3 className="text-xs font-bold text-[#2C2420] uppercase tracking-wider mb-2.5">
                Menu Rekomendasi Mahasiswa:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {shop.popularMenu.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 bg-[#FAF7F2] rounded-xl text-xs"
                  >
                    <span className="font-medium text-[#2C2420]">{item.name}</span>
                    <span className="font-bold text-[#78350F] tabular-nums">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Activity Suitability & Location Card */}
        <div className="space-y-6">
          {/* Section: Activity Suitability Radar Meter (Prompt 7 requirement) */}
          <div className="bg-white rounded-3xl border border-[#E8DFD5] p-6 shadow-xs space-y-4 sticky top-20">
            <div className="border-b border-[#F0E9E1] pb-3">
              <h3 className="text-base font-bold text-[#2C2420] font-display">
                Activity Suitability
              </h3>
              <p className="text-xs text-[#8A7D73]">
                Skor kecocokan tempat untuk tiap jenis kegiatan
              </p>
            </div>

            <div className="space-y-3.5">
              {(
                [
                  { id: 'study', label: 'Study', icon: '📚' },
                  { id: 'work', label: 'Work', icon: '💻' },
                  { id: 'discussion', label: 'Discussion', icon: '👥' },
                  { id: 'project', label: 'Project', icon: '🚀' },
                  { id: 'relax', label: 'Relax', icon: '🌿' },
                ] as const
              ).map(act => {
                const score = shop.activities[act.id];
                const percentage = (score / 5) * 100;
                const isCurrent = previewActivity === act.id;

                return (
                  <div
                    key={act.id}
                    onClick={() => handleSelectActivityTab(act.id)}
                    className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-[#FAF3EB] ring-1 ring-[#854D0E]'
                        : 'hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-[#2C2420] flex items-center gap-1.5">
                        <span>{act.icon}</span>
                        <span>{act.label}</span>
                      </span>
                      <span className="font-extrabold text-[#78350F] tabular-nums">
                        {'★'.repeat(score)}{'☆'.repeat(5 - score)}
                      </span>
                    </div>

                    {/* Visual Meter Bar */}
                    <div className="w-full bg-[#E8DFD5] h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          score === 5
                            ? 'bg-[#2D6A4F]'
                            : score >= 4
                            ? 'bg-[#854D0E]'
                            : 'bg-[#A89A8F]'
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Address & Quick Info */}
            <div className="pt-4 border-t border-[#F0E9E1] text-xs space-y-2 text-[#6B5E55]">
              <div>
                <strong className="text-[#2C2420] block mb-0.5">Alamat:</strong>
                <span>{shop.address}</span>
              </div>
              <div>
                <strong className="text-[#2C2420] block mb-0.5">Jam Buka:</strong>
                <span>{shop.openingHours}</span>
              </div>
            </div>

            {/* Bottom Sticky CTA */}
            <button
              type="button"
              onClick={() => addToCompare(shop.id)}
              className={`w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer shadow-xs ${
                compared
                  ? 'bg-[#FEF3C7] text-[#78350F] border-[#F59E0B]'
                  : 'bg-[#3E2723] text-white border-[#3E2723] hover:bg-[#2C1810]'
              }`}
            >
              {compared ? (
                <>
                  <Check className="w-4 h-4 text-[#78350F]" />
                  <span>Coffee Shop Telah Dipilih ({filters.activity})</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Bandingkan dengan Cafe Lain</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
