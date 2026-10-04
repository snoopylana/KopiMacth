import React from 'react';
import { MatchTier } from '../types';

interface MatchBadgeProps {
  score: number;
  tier: MatchTier;
  size?: 'sm' | 'md' | 'lg';
  showTier?: boolean;
}

export const MatchBadge: React.FC<MatchBadgeProps> = ({
  score,
  tier,
  size = 'md',
  showTier = true,
}) => {
  // Color styling based on match tier
  const getBadgeStyle = () => {
    if (score >= 90) {
      return {
        bg: 'bg-[#1B4332]/10 text-[#1B4332] border-[#2D6A4F]/20',
        dot: 'bg-[#2D6A4F]',
        textAccent: 'text-[#1B4332]',
      };
    }
    if (score >= 80) {
      return {
        bg: 'bg-[#854D0E]/10 text-[#854D0E] border-[#CA8A04]/20',
        dot: 'bg-[#CA8A04]',
        textAccent: 'text-[#854D0E]',
      };
    }
    if (score >= 70) {
      return {
        bg: 'bg-[#4338CA]/10 text-[#4338CA] border-[#6366F1]/20',
        dot: 'bg-[#6366F1]',
        textAccent: 'text-[#4338CA]',
      };
    }
    return {
      bg: 'bg-[#52525B]/10 text-[#3F3F46] border-[#A1A1AA]/20',
      dot: 'bg-[#71717A]',
      textAccent: 'text-[#3F3F46]',
    };
  };

  const style = getBadgeStyle();

  if (size === 'sm') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold border ${style.bg} tabular-nums`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
        <span>{score}% Match</span>
      </span>
    );
  }

  if (size === 'lg') {
    return (
      <div
        className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl border ${style.bg}`}
      >
        <span className={`w-2.5 h-2.5 rounded-full ${style.dot}`} />
        <span className="text-base font-bold tabular-nums tracking-tight">
          {score}% Match
        </span>
        {showTier && (
          <>
            <span className="text-black/20" aria-hidden="true">·</span>
            <span className="text-xs font-medium uppercase tracking-wider">
              {tier}
            </span>
          </>
        )}
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border ${style.bg}`}
    >
      <span className={`w-2 h-2 rounded-full ${style.dot}`} />
      <span className="text-sm font-bold tabular-nums tracking-tight">
        {score}% Match
      </span>
      {showTier && (
        <>
          <span className="text-black/20" aria-hidden="true">·</span>
          <span className="text-xs font-medium">{tier}</span>
        </>
      )}
    </div>
  );
};
