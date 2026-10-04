import React from 'react';
import { ActivityType } from '../types';
import { ACTIVITIES_CONFIG } from '../data/coffeeShops';

interface ActivityCardProps {
  activityId: ActivityType;
  selected?: boolean;
  onSelect: (id: ActivityType) => void;
  compact?: boolean;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activityId,
  selected = false,
  onSelect,
  compact = false,
}) => {
  const config = ACTIVITIES_CONFIG.find(a => a.id === activityId) || ACTIVITIES_CONFIG[0];

  if (compact) {
    return (
      <button
        type="button"
        onClick={() => onSelect(activityId)}
        className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all cursor-pointer whitespace-nowrap ${
          selected
            ? 'bg-[#3E2723] text-white border-[#3E2723] shadow-sm'
            : 'bg-white text-[#5C4D44] border-[#E8DFD5] hover:border-[#C4B5A5] hover:bg-[#F9F5F0]'
        }`}
      >
        <span className="text-base">{config.emoji}</span>
        <span>{config.label}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(activityId)}
      className={`group relative text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between h-full ${
        selected
          ? 'bg-[#3E2723] text-white border-[#3E2723] ring-2 ring-[#78350F]/30 shadow-md translate-y-[-2px]'
          : 'bg-white text-[#2C2420] border-[#E8DFD5] hover:border-[#D7CCC8] hover:bg-[#FAF6F0] hover:shadow-sm'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-3xl p-2 rounded-xl bg-[#FAF7F2] text-black inline-block group-hover:scale-105 transition-transform">
            {config.emoji}
          </span>
          {selected && (
            <span className="text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/20 text-white">
              Selected
            </span>
          )}
        </div>

        <h3
          className={`text-lg font-bold tracking-tight mb-1 font-display ${
            selected ? 'text-white' : 'text-[#2C2420]'
          }`}
        >
          {config.label}
        </h3>

        <p
          className={`text-xs leading-relaxed mb-4 ${
            selected ? 'text-[#EFE8DF]' : 'text-[#7A6D63]'
          }`}
        >
          {config.shortDesc}
        </p>
      </div>

      <div className="pt-3 border-t border-current/10 flex items-center gap-1.5 flex-wrap text-[11px]">
        {config.tags.map((tag, idx) => (
          <span
            key={idx}
            className={`px-2 py-0.5 rounded-md ${
              selected ? 'bg-white/15 text-white/90' : 'bg-[#F2ECE4] text-[#6B5E55]'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
};
