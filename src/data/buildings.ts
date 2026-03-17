export interface Building {
  building_id: string;
  city: string;
  building_type: string;
  num_floors: number;
  construction_year: number;
}

export const buildings: Building[] = [
  { building_id: "B-0001", city: "Mumbai", building_type: "IT Park", num_floors: 12, construction_year: 2015 },
  { building_id: "B-0002", city: "Hyderabad", building_type: "Corporate Office", num_floors: 23, construction_year: 2004 },
  { building_id: "B-0003", city: "Delhi", building_type: "IT Park", num_floors: 6, construction_year: 2014 },
  { building_id: "B-0004", city: "Bangalore", building_type: "IT Park", num_floors: 24, construction_year: 2006 },
  { building_id: "B-0005", city: "Hyderabad", building_type: "Commercial Tower", num_floors: 18, construction_year: 2006 },
  { building_id: "B-0006", city: "Delhi", building_type: "Corporate Office", num_floors: 24, construction_year: 2005 },
  { building_id: "B-0007", city: "Chennai", building_type: "IT Park", num_floors: 15, construction_year: 2019 },
  { building_id: "B-0008", city: "Hyderabad", building_type: "Commercial Tower", num_floors: 7, construction_year: 2005 },
  { building_id: "B-0009", city: "Bangalore", building_type: "IT Park", num_floors: 5, construction_year: 2017 },
  { building_id: "B-0010", city: "Hyderabad", building_type: "IT Park", num_floors: 18, construction_year: 2005 },
  { building_id: "B-0011", city: "Delhi", building_type: "IT Park", num_floors: 8, construction_year: 2011 },
  { building_id: "B-0012", city: "Mumbai", building_type: "Corporate Office", num_floors: 16, construction_year: 2003 },
  { building_id: "B-0013", city: "Delhi", building_type: "Commercial Tower", num_floors: 7, construction_year: 2006 },
  { building_id: "B-0014", city: "Hyderabad", building_type: "Corporate Office", num_floors: 20, construction_year: 2018 },
  { building_id: "B-0015", city: "Delhi", building_type: "IT Park", num_floors: 6, construction_year: 2018 },
  { building_id: "B-0016", city: "Delhi", building_type: "Co-working Space", num_floors: 15, construction_year: 2006 },
  { building_id: "B-0017", city: "Mumbai", building_type: "Co-working Space", num_floors: 7, construction_year: 2013 },
  { building_id: "B-0018", city: "Bangalore", building_type: "Commercial Tower", num_floors: 21, construction_year: 2000 },
  { building_id: "B-0019", city: "Hyderabad", building_type: "Commercial Tower", num_floors: 8, construction_year: 2014 },
  { building_id: "B-0020", city: "Hyderabad", building_type: "Commercial Tower", num_floors: 12, construction_year: 2017 },
  { building_id: "B-0021", city: "Hyderabad", building_type: "Corporate Office", num_floors: 18, construction_year: 2007 },
  { building_id: "B-0022", city: "Mumbai", building_type: "IT Park", num_floors: 7, construction_year: 2018 },
  { building_id: "B-0023", city: "Chennai", building_type: "Commercial Tower", num_floors: 21, construction_year: 2009 },
  { building_id: "B-0024", city: "Delhi", building_type: "Corporate Office", num_floors: 13, construction_year: 2001 },
  { building_id: "B-0025", city: "Delhi", building_type: "IT Park", num_floors: 24, construction_year: 2016 },
  { building_id: "B-0026", city: "Chennai", building_type: "IT Park", num_floors: 19, construction_year: 2001 },
  { building_id: "B-0027", city: "Bangalore", building_type: "Corporate Office", num_floors: 5, construction_year: 2011 },
  { building_id: "B-0028", city: "Chennai", building_type: "Commercial Tower", num_floors: 21, construction_year: 2010 },
  { building_id: "B-0029", city: "Hyderabad", building_type: "Commercial Tower", num_floors: 15, construction_year: 2017 },
  { building_id: "B-0030", city: "Chennai", building_type: "Co-working Space", num_floors: 15, construction_year: 2018 },
];

export interface EnergyRecord {
  building_id: string;
  timestamp: string;
  total_energy_kWh: number;
  renewable_energy_kWh: number;
  grid_energy_kWh: number;
}

// Aggregated energy data by building (pre-computed from ~3000 records)
export const energyByBuilding: Record<string, { total: number; renewable: number; grid: number; count: number }> = {
  "B-0001": { total: 117890, renewable: 29800, grid: 19500, count: 100 },
  "B-0002": { total: 125430, renewable: 27600, grid: 22100, count: 100 },
  "B-0003": { total: 108760, renewable: 22400, grid: 25800, count: 100 },
  "B-0004": { total: 89540, renewable: 18900, grid: 28300, count: 100 },
  "B-0005": { total: 132800, renewable: 28100, grid: 23600, count: 100 },
  "B-0006": { total: 119670, renewable: 26500, grid: 19200, count: 100 },
  "B-0007": { total: 111230, renewable: 24300, grid: 18700, count: 100 },
  "B-0008": { total: 78900, renewable: 29100, grid: 20400, count: 100 },
  "B-0009": { total: 82340, renewable: 25600, grid: 21900, count: 100 },
  "B-0010": { total: 118450, renewable: 27800, grid: 17600, count: 100 },
  "B-0011": { total: 105890, renewable: 24100, grid: 20800, count: 100 },
  "B-0012": { total: 112670, renewable: 26300, grid: 21200, count: 100 },
  "B-0013": { total: 87430, renewable: 21700, grid: 22500, count: 100 },
  "B-0014": { total: 98760, renewable: 30200, grid: 25100, count: 100 },
  "B-0015": { total: 95230, renewable: 25400, grid: 24700, count: 100 },
  "B-0016": { total: 72890, renewable: 29800, grid: 27600, count: 100 },
  "B-0017": { total: 109340, renewable: 22100, grid: 26400, count: 100 },
  "B-0018": { total: 104560, renewable: 28700, grid: 19800, count: 100 },
  "B-0019": { total: 110890, renewable: 30500, grid: 18500, count: 100 },
  "B-0020": { total: 113240, renewable: 24600, grid: 21700, count: 100 },
  "B-0021": { total: 121560, renewable: 20900, grid: 20100, count: 100 },
  "B-0022": { total: 112780, renewable: 25800, grid: 22900, count: 100 },
  "B-0023": { total: 108940, renewable: 23400, grid: 18900, count: 100 },
  "B-0024": { total: 115670, renewable: 22800, grid: 20300, count: 100 },
  "B-0025": { total: 119340, renewable: 29100, grid: 21600, count: 100 },
  "B-0026": { total: 86790, renewable: 20600, grid: 25200, count: 100 },
  "B-0027": { total: 128450, renewable: 23900, grid: 16800, count: 100 },
  "B-0028": { total: 95670, renewable: 27200, grid: 23400, count: 100 },
  "B-0029": { total: 110230, renewable: 26700, grid: 19100, count: 100 },
  "B-0030": { total: 102340, renewable: 25100, grid: 26800, count: 100 },
};

// Monthly energy trends (aggregated)
export const monthlyEnergyTrends = [
  { month: "Jan 2025", total: 845200, renewable: 198400, grid: 187600 },
  { month: "Feb 2025", total: 792300, renewable: 212800, grid: 175400 },
  { month: "Mar 2025", total: 868900, renewable: 235600, grid: 168200 },
  { month: "Apr 2025", total: 831400, renewable: 248300, grid: 159800 },
];

// City-level aggregation
export const cityEnergyData = [
  { city: "Mumbai", buildings: 4, totalEnergy: 452680, renewable: 103700, avgPerBuilding: 113170, evSuitability: 82 },
  { city: "Hyderabad", buildings: 8, totalEnergy: 864770, renewable: 216600, avgPerBuilding: 108096, evSuitability: 91 },
  { city: "Delhi", buildings: 8, totalEnergy: 775080, renewable: 202300, avgPerBuilding: 96885, evSuitability: 78 },
  { city: "Bangalore", buildings: 4, totalEnergy: 404890, renewable: 97100, avgPerBuilding: 101222, evSuitability: 85 },
  { city: "Chennai", buildings: 6, totalEnergy: 504970, renewable: 146600, avgPerBuilding: 84162, evSuitability: 88 },
];

// Building type energy breakdown
export const buildingTypeEnergy = [
  { type: "IT Park", count: 12, avgEnergy: 103420, avgRenewable: 24650, evChargers: 8 },
  { type: "Commercial Tower", count: 9, avgEnergy: 104830, avgRenewable: 27000, evChargers: 6 },
  { type: "Corporate Office", count: 6, avgEnergy: 117290, avgRenewable: 25550, evChargers: 4 },
  { type: "Co-working Space", count: 3, avgEnergy: 94857, avgRenewable: 25667, evChargers: 2 },
];

// Hourly energy pattern (typical day)
export const hourlyEnergyPattern = [
  { hour: "00:00", hvac: 12, lighting: 5, total: 22 },
  { hour: "02:00", hvac: 10, lighting: 3, total: 18 },
  { hour: "04:00", hvac: 11, lighting: 4, total: 20 },
  { hour: "06:00", hvac: 25, lighting: 15, total: 50 },
  { hour: "08:00", hvac: 65, lighting: 35, total: 120 },
  { hour: "09:00", hvac: 85, lighting: 45, total: 155 },
  { hour: "10:00", hvac: 92, lighting: 48, total: 168 },
  { hour: "11:00", hvac: 95, lighting: 50, total: 172 },
  { hour: "12:00", hvac: 88, lighting: 42, total: 158 },
  { hour: "13:00", hvac: 90, lighting: 46, total: 162 },
  { hour: "14:00", hvac: 93, lighting: 49, total: 170 },
  { hour: "15:00", hvac: 90, lighting: 47, total: 165 },
  { hour: "16:00", hvac: 82, lighting: 40, total: 148 },
  { hour: "17:00", hvac: 60, lighting: 30, total: 112 },
  { hour: "18:00", hvac: 35, lighting: 18, total: 65 },
  { hour: "20:00", hvac: 20, lighting: 10, total: 38 },
  { hour: "22:00", hvac: 15, lighting: 7, total: 28 },
];

// EV Charging feasibility scores per building
export const evChargingFeasibility = buildings.map((b) => {
  const energy = energyByBuilding[b.building_id];
  const renewableRatio = energy.renewable / energy.total;
  const surplusCapacity = Math.max(0, (energy.renewable - energy.grid * 0.3) / energy.total);
  const floorScore = Math.min(b.num_floors / 24, 1);
  const ageScore = Math.min((b.construction_year - 2000) / 20, 1);
  const score = Math.round((renewableRatio * 35 + surplusCapacity * 25 + floorScore * 20 + ageScore * 20) * 100);
  
  return {
    ...b,
    renewableRatio: Math.round(renewableRatio * 100),
    totalEnergy: energy.total,
    renewableEnergy: energy.renewable,
    feasibilityScore: Math.min(score, 98),
    recommendedChargers: Math.max(2, Math.round(b.num_floors * renewableRatio * 3)),
    estimatedDailyCapacity: Math.round(energy.renewable / 30 * 0.4),
  };
}).sort((a, b) => b.feasibilityScore - a.feasibilityScore);

// Occupancy by event type
export const occupancyByEvent = [
  { event: "Normal Workday", avgPeople: 72, percentage: 35 },
  { event: "Meeting Event", avgPeople: 78, percentage: 28 },
  { event: "Weekend", avgPeople: 65, percentage: 18 },
  { event: "Holiday", avgPeople: 58, percentage: 19 },
];

// Department energy usage
export const departmentEnergy = [
  { department: "Server Rooms", energyShare: 32, count: 35 },
  { department: "Workspaces", energyShare: 28, count: 32 },
  { department: "Meeting Rooms", energyShare: 18, count: 42 },
  { department: "Cafeteria", energyShare: 12, count: 38 },
  { department: "Reception", energyShare: 10, count: 33 },
];
