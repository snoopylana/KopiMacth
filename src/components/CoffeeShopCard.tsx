import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CoffeeShop, MatchScoreResult } from '../types';
import { MatchBadge } from './MatchBadge';
import { useApp } from '../context/AppContext';
import { Star, MapPin, Wifi, Zap, Wind, Users, Building, Plus, Check } from 'lucide-react';
import { ACTIVITIES_CONFIG } from '../data/coffeeShops';

interface CoffeeShopCardProps {
  shop: CoffeeShop;
  match: MatchScoreResult;
}

export const CoffeeShopCard: React.FC<CoffeeShopCardProps> = ({ shop, match }) => {
  const { isInCompare, addToCompare } = useApp();
  const [imageError, setImageError] = useState(false);
  const compared = isInCompare(shop.id);

  // Top suitable activities (suitability >= 4)
  const topActivities = Object.entries(shop.activities)
    .filter(([_, score]) => score >= 4)
    .sort(([_, a], [__, b]) => b - a)
    .slice(0, 3)
    .map(([act]) => {
      const cfg = ACTIVITIES_CONFIG.find(c => c.id === act);
      return cfg ? `${cfg.emoji} ${cfg.label}` : act;
    });

  return (
    <div className="bg-white rounded-2xl border border-[#E8DFD5] overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col group">
      {/* Card Media Header */}
      <div className="relative h-48 sm:h-52 bg-[#EFE8DF] overflow-hidden">
        {!imageError ? (
          <img
            src={shop.image}
            alt={shop.name}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#EFE8DF] to-[#DFD5C8] text-[#8C7A6D] p-4 text-center">
            <span className="text-4xl mb-2">☕</span>
            <span className="font-semibold text-sm">{shop.name}</span>
            <span className="text-xs text-[#9E8E81]">{shop.location}</span>
          </div>
        )}

        {/* Gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Top Floating Match Badge */}
        <div className="absolute top-3 left-3">
          <MatchBadge score={match.score} tier={match.tier} size="md" />
        </div>

        {/* Price tag on top right */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-[#2C2420] px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm">
          {shop.priceRange}
        </div>

        {/* Bottom bar inside media: Rating & Location */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md text-amber-300 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-300 stroke-amber-300" />
              <span>{shop.rating.toFixed(1)}</span>
            </span>
            <span className="text-white/80">({shop.reviewCount})</span>
          </div>

          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md text-white/90">
            <MapPin className="w-3 h-3 text-red-400" />
            <span className="truncate max-w-[130px]">{shop.location}</span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Shop Title & Tagline */}
          <div className="mb-2.5">
            <h3 className="text-lg font-bold text-[#2C2420] group-hover:text-[#78350F] transition-colors leading-snug">
              {shop.name}
            </h3>
            <p className="text-xs text-[#7A6D63] line-clamp-1 mt-0.5">
              {shop.tagline}
            </p>
          </div>

          {/* Key Facilities Row */}
          <div className="flex items-center gap-2 flex-wrap text-xs text-[#5C4D44] py-2 border-y border-[#F0E9E1] mb-3">
            {shop.facilities.includes('Wi-Fi') && (
              <span className="inline-flex items-center gap-1">
                <Wifi className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Wi-Fi ({shop.wifiSpeed})</span>
              </span>
            )}
            <span className="text-[#D0C4B8]" aria-hidden="true">·</span>
            {shop.facilities.includes('Power Outlet') && (
              <span className="inline-flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-600" />
                <span>Colokan Aman</span>
              </span>
            )}
            {shop.facilities.includes('AC') && (
              <>
                <span className="text-[#D0C4B8]" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <Wind className="w-3.5 h-3.5 text-sky-600" />
                  <span>AC</span>
                </span>
              </>
            )}
          </div>

          {/* Space & Meeting Room Info */}
          <div className="bg-[#FAF7F2] rounded-xl p-2.5 mb-3.5 space-y-1.5 text-xs text-[#4A3E37]">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[#6B5E55]">
                <Users className="w-3.5 h-3.5 text-[#854D0E]" />
                <span>Kapasitas:</span>
              </span>
              <span className="font-semibold text-[#2C2420]">
                {shop.capacity} orang
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[#6B5E55]">
                <Building className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Meeting Room:</span>
              </span>
              {shop.meetingRoom.available ? (
                <span className="font-semibold text-[#1B4332] bg-[#E8F5E9] px-2 py-0.5 rounded text-[11px]">
                  Tersedia · {shop.meetingRoom.capacity} org ({shop.meetingRoom.type})
                </span>
              ) : (
                <span className="text-[#8C7E75] text-[11px]">
                  ✕ Tidak Tersedia
                </span>
              )}
            </div>
          </div>

          {/* Good For Activities */}
          <div className="text-xs mb-4">
            <span className="text-[#8A7D73] font-medium block mb-1">
              Paling cocok untuk:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {topActivities.map((act, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 bg-[#F2ECE4] text-[#423730] rounded-md font-medium text-[11px]"
                >
                  {act}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Action Buttons */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            to={`/coffee-shop/${shop.id}`}
            className="flex-1 text-center py-2 px-3 rounded-xl bg-[#3E2723] hover:bg-[#2C1810] text-white text-xs font-semibold shadow-xs transition-colors"
          >
            View Detail
          </Link>

          <button
            type="button"
            onClick={() => addToCompare(shop.id)}
            className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer whitespace-nowrap ${
              compared
                ? 'bg-[#FEF3C7] text-[#78350F] border-[#F59E0B]'
                : 'bg-white text-[#4A3E37] border-[#D7CCC8] hover:bg-[#F5EFE9]'
            }`}
          >
            {compared ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#78350F]" />
                <span>Compared</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Compare</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
