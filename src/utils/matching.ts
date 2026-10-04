import { ActivityType, CoffeeShop, FilterState, MatchScoreResult, MatchTier } from '../types';

export function calculateMatchScore(
  shop: CoffeeShop,
  filters: FilterState
): MatchScoreResult {
  const { activity, budget, facilities, atmosphere, location, meetingRoomOnly, capacityRange } = filters;

  // 1. Activity Suitability (Base weight 35%)
  const rawActivityRating = shop.activities[activity] || 3;
  // Convert 1-5 rating into percentage
  const activityScoreMap: Record<number, number> = {
    5: 100,
    4: 86,
    3: 68,
    2: 45,
    1: 25,
  };
  const activityScore = activityScoreMap[rawActivityRating] || 70;

  // 2. Facilities Score (Weight 20%)
  let facilitiesScore = 85;
  if (facilities.length > 0) {
    const matchedCount = facilities.filter(f => shop.facilities.includes(f)).length;
    const matchRatio = matchedCount / facilities.length;
    facilitiesScore = Math.round(matchRatio * 100);
  } else {
    // Default baseline: Wi-Fi + Power outlet coverage
    let baseline = 75;
    if (shop.facilities.includes('Wi-Fi')) baseline += 10;
    if (shop.facilities.includes('Power Outlet')) baseline += 10;
    if (shop.facilities.includes('AC')) baseline += 5;
    facilitiesScore = Math.min(100, baseline);
  }

  // 3. Budget Score (Weight 15%)
  let budgetScore = 85;
  if (budget !== 'all') {
    if (shop.priceCategory === budget) {
      budgetScore = 100;
    } else {
      // Distance calculation between categories: under20k <-> 20k-40k <-> 40k-60k <-> above60k
      const catOrder = ['under20k', '20k-40k', '40k-60k', 'above60k'];
      const userIdx = catOrder.indexOf(budget);
      const shopIdx = catOrder.indexOf(shop.priceCategory);
      const diff = Math.abs(userIdx - shopIdx);
      if (diff === 1) budgetScore = 78;
      else if (diff === 2) budgetScore = 55;
      else budgetScore = 35;
    }
  } else {
    // Under 20k & 20k-40k are naturally favored by students
    if (shop.priceCategory === 'under20k') budgetScore = 95;
    else if (shop.priceCategory === '20k-40k') budgetScore = 90;
    else if (shop.priceCategory === '40k-60k') budgetScore = 80;
    else budgetScore = 70;
  }

  // 4. Atmosphere Score (Weight 10%)
  let atmosphereScore = 85;
  if (atmosphere !== 'all') {
    if (shop.atmosphere.toLowerCase() === atmosphere.toLowerCase()) {
      atmosphereScore = 100;
    } else {
      atmosphereScore = 60;
    }
  } else {
    // Natural activity-atmosphere synergy
    if (activity === 'study') {
      if (shop.atmosphere === 'Quiet') atmosphereScore = 100;
      else if (shop.atmosphere === 'Moderate') atmosphereScore = 80;
      else atmosphereScore = 55;
    } else if (activity === 'work') {
      if (shop.atmosphere === 'Quiet') atmosphereScore = 98;
      else if (shop.atmosphere === 'Moderate') atmosphereScore = 92;
      else atmosphereScore = 65;
    } else if (activity === 'discussion') {
      if (shop.atmosphere === 'Moderate') atmosphereScore = 100;
      else if (shop.atmosphere === 'Lively') atmosphereScore = 92;
      else atmosphereScore = 55; // Quiet is hard for group talk
    } else if (activity === 'project') {
      if (shop.atmosphere === 'Moderate') atmosphereScore = 100;
      else if (shop.atmosphere === 'Quiet' && shop.meetingRoom.available) atmosphereScore = 95;
      else if (shop.atmosphere === 'Lively') atmosphereScore = 80;
      else atmosphereScore = 70;
    } else { // relax
      if (shop.atmosphere === 'Moderate') atmosphereScore = 95;
      else if (shop.atmosphere === 'Quiet') atmosphereScore = 90;
      else atmosphereScore = 85;
    }
  }

  // 5. Location Score (Weight 10%)
  let locationScore = 90;
  if (location && location !== 'all' && location !== 'All Locations') {
    const locNorm = location.toLowerCase();
    const shopLocNorm = shop.location.toLowerCase();
    if (shopLocNorm.includes(locNorm) || locNorm.includes(shopLocNorm)) {
      locationScore = 100;
    } else {
      locationScore = 60;
    }
  }

  // 6. Meeting Room & Capacity Score (Weight 10%)
  let spaceScore = 85;
  const isGroupActivity = activity === 'discussion' || activity === 'project' || activity === 'work';

  if (meetingRoomOnly) {
    if (shop.meetingRoom.available) {
      spaceScore = 100;
    } else {
      spaceScore = 20;
    }
  }

  if (capacityRange !== 'all') {
    const capacityVal = shop.meetingRoom.available ? shop.meetingRoom.capacity : shop.capacity;
    if (capacityRange === '1-4') {
      spaceScore = capacityVal >= 1 ? 100 : 50;
    } else if (capacityRange === '5-8') {
      if (shop.meetingRoom.available && shop.meetingRoom.capacity >= 5) spaceScore = 100;
      else if (shop.capacity >= 50) spaceScore = 80;
      else spaceScore = 50;
    } else if (capacityRange === '9-15') {
      if (shop.meetingRoom.available && shop.meetingRoom.capacity >= 9) spaceScore = 100;
      else if (shop.meetingRoom.available) spaceScore = 85;
      else if (shop.capacity >= 80) spaceScore = 75;
      else spaceScore = 45;
    } else if (capacityRange === '16+') {
      if (shop.meetingRoom.available && shop.meetingRoom.capacity >= 14) spaceScore = 100;
      else if (shop.capacity >= 100) spaceScore = 85;
      else spaceScore = 40;
    }
  } else if (!meetingRoomOnly) {
    // Context-dependent score when no filter is applied
    if (activity === 'project') {
      spaceScore = shop.meetingRoom.available ? 98 : 74;
    } else if (activity === 'discussion') {
      spaceScore = shop.meetingRoom.available ? 95 : 82;
    } else {
      // For study or relax, meeting room availability is just a slight bonus
      spaceScore = 88;
    }
  }

  // Weighted calculation:
  // Activity 35%, Facilities 20%, Budget 15%, Atmosphere 10%, Location 10%, Space 10%
  const weightedSum =
    activityScore * 0.35 +
    facilitiesScore * 0.20 +
    budgetScore * 0.15 +
    atmosphereScore * 0.10 +
    locationScore * 0.10 +
    spaceScore * 0.10;

  // Round to integer and clamp reasonably between 50 and 98
  const score = Math.min(98, Math.max(50, Math.round(weightedSum)));

  let tier: MatchTier = 'Moderate Match';
  if (score >= 90) {
    tier = 'Excellent Match';
  } else if (score >= 80) {
    tier = 'Great Match';
  } else if (score >= 70) {
    tier = 'Good Match';
  } else {
    tier = 'Moderate Match';
  }

  return {
    score,
    tier,
    breakdown: {
      activityScore,
      facilitiesScore,
      budgetScore,
      atmosphereScore,
      locationScore,
      spaceScore,
    },
  };
}

export function filterAndSortCoffeeShops(
  shops: CoffeeShop[],
  filters: FilterState
): { shop: CoffeeShop; match: MatchScoreResult }[] {
  let list = shops.map(shop => ({
    shop,
    match: calculateMatchScore(shop, filters),
  }));

  // Strict filters applied when chosen:
  // 1. Budget filter
  if (filters.budget !== 'all') {
    list = list.filter(item => item.shop.priceCategory === filters.budget);
  }

  // 2. Facilities filter (must include all chosen facilities)
  if (filters.facilities.length > 0) {
    list = list.filter(item =>
      filters.facilities.every(reqFac => item.shop.facilities.includes(reqFac))
    );
  }

  // 3. Atmosphere filter
  if (filters.atmosphere !== 'all') {
    list = list.filter(
      item => item.shop.atmosphere.toLowerCase() === filters.atmosphere.toLowerCase()
    );
  }

  // 4. Location filter
  if (filters.location && filters.location !== 'all' && filters.location !== 'All Locations') {
    list = list.filter(item =>
      item.shop.location.toLowerCase().includes(filters.location.toLowerCase()) ||
      filters.location.toLowerCase().includes(item.shop.location.toLowerCase())
    );
  }

  // 5. Meeting Room filter
  if (filters.meetingRoomOnly) {
    list = list.filter(item => item.shop.meetingRoom.available);
  }

  // 6. Capacity Range filter
  if (filters.capacityRange !== 'all') {
    list = list.filter(item => {
      // If user is searching capacity with meeting room, check meeting room capacity
      if (item.shop.meetingRoom.available) {
        const mrCap = item.shop.meetingRoom.capacity;
        if (filters.capacityRange === '1-4') return mrCap >= 1;
        if (filters.capacityRange === '5-8') return mrCap >= 5;
        if (filters.capacityRange === '9-15') return mrCap >= 9;
        if (filters.capacityRange === '16+') return mrCap >= 14;
      }
      // Or check total seating capacity
      const totCap = item.shop.capacity;
      if (filters.capacityRange === '1-4') return totCap >= 4;
      if (filters.capacityRange === '5-8') return totCap >= 20;
      if (filters.capacityRange === '9-15') return totCap >= 50;
      if (filters.capacityRange === '16+') return totCap >= 70;
      return true;
    });
  }

  // 7. Search query filter (name or address)
  if (filters.searchQuery.trim()) {
    const q = filters.searchQuery.toLowerCase().trim();
    list = list.filter(
      item =>
        item.shop.name.toLowerCase().includes(q) ||
        item.shop.location.toLowerCase().includes(q) ||
        item.shop.address.toLowerCase().includes(q)
    );
  }

  // Sort logic
  list.sort((a, b) => {
    if (filters.sortBy === 'best-match') {
      return b.match.score - a.match.score;
    }
    if (filters.sortBy === 'highest-rating') {
      return b.shop.rating - a.shop.rating;
    }
    if (filters.sortBy === 'lowest-price') {
      return a.shop.averagePrice - b.shop.averagePrice;
    }
    if (filters.sortBy === 'highest-capacity') {
      return b.shop.capacity - a.shop.capacity;
    }
    return 0;
  });

  return list;
}
