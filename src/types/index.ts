export type ActivityType = 'study' | 'work' | 'discussion' | 'project' | 'relax';

export interface MeetingRoomInfo {
  available: boolean;
  capacity: number; // e.g. 6
  type: 'Private' | 'Semi-Private' | null;
  hasWhiteboard?: boolean;
  hasScreen?: boolean;
  minBookingSpend?: string;
  notes?: string;
}

export interface ActivitySuitability {
  study: number; // 1 - 5
  work: number; // 1 - 5
  discussion: number; // 1 - 5
  project: number; // 1 - 5
  relax: number; // 1 - 5
}

export interface CoffeeShop {
  id: string;
  name: string;
  tagline: string;
  image: string;
  rating: number;
  reviewCount: number;
  priceRange: string; // e.g. "Rp20K–40K"
  priceLevel: '$' | '$$' | '$$$'; // $ = <20k, $$ = 20k-40k, $$$ = >40k
  priceCategory: 'under20k' | '20k-40k' | '40k-60k' | 'above60k';
  averagePrice: number; // in thousands IDR e.g. 30
  location: string; // e.g. "Bogor Tengah", "Dramaga / IPB"
  address: string;
  latitude: number;
  longitude: number;
  openingHours: string;
  facilities: string[]; // ["Wi-Fi", "Power Outlet", "AC", "Parking", "Toilet", "Prayer Room", "Outdoor Area"]
  wifiSpeed: string; // e.g. "75 Mbps"
  powerOutletCoverage: 'Almost every table' | '70% tables' | 'Dedicated study zone' | 'Limited (counter only)';
  atmosphere: 'Quiet' | 'Moderate' | 'Lively';
  seatingArea: 'Indoor' | 'Outdoor' | 'Both';
  capacity: number; // Total seating capacity (e.g. 80)
  meetingRoom: MeetingRoomInfo;
  activities: ActivitySuitability;
  description: string;
  whyMatches: Record<ActivityType, string[]>;
  popularMenu: { name: string; price: string }[];
}

export interface FilterState {
  activity: ActivityType;
  budget: 'all' | 'under20k' | '20k-40k' | '40k-60k' | 'above60k';
  facilities: string[];
  atmosphere: 'all' | 'Quiet' | 'Moderate' | 'Lively';
  location: string;
  meetingRoomOnly: boolean;
  capacityRange: 'all' | '1-4' | '5-8' | '9-15' | '16+';
  sortBy: 'best-match' | 'highest-rating' | 'lowest-price' | 'highest-capacity';
  searchQuery: string;
}

export type MatchTier = 'Excellent Match' | 'Great Match' | 'Good Match' | 'Moderate Match';

export interface MatchScoreResult {
  score: number; // 0 - 100
  tier: MatchTier;
  breakdown: {
    activityScore: number;
    facilitiesScore: number;
    budgetScore: number;
    atmosphereScore: number;
    locationScore: number;
    spaceScore: number;
  };
}
