import { KpiCard } from "@/components/KpiCard";
import { CityEnergyChart } from "@/components/CityEnergyChart";
import { HourlyPatternChart } from "@/components/HourlyPatternChart";
import { MonthlyTrendChart } from "@/components/MonthlyTrendChart";
import { DepartmentPieChart } from "@/components/DepartmentPieChart";
import { EvFeasibilityTable } from "@/components/EvFeasibilityTable";
import { OccupancyChart } from "@/components/OccupancyChart";
import { BuildingTypeChart } from "@/components/BuildingTypeChart";
import { DataSnapshot } from "@/components/DataSnapshot";
import { BatteryCharging, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-secondary">
              <BatteryCharging className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">EV Charging × Building Energy</h1>
              <p className="text-xs text-muted-foreground">Smart placement analysis using office building energy data</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <Zap className="h-3.5 w-3.5 text-primary animate-pulse-glow" />
            30 Buildings · 5 Cities · Jan–Apr 2025
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Problem Statement Banner */}
        <div className="glass-card p-5 border-l-4 border-l-accent glow-accent">
          <h2 className="text-sm font-semibold text-accent mb-1">🔍 Problem Statement</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            EV drivers struggle to find available charging stations. By analyzing <span className="text-foreground font-medium">office building energy patterns</span> — including renewable energy surplus, occupancy trends, and consumption peaks — we can identify <span className="text-energy-green font-medium">optimal locations and times</span> for EV charging station deployment.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <KpiCard title="Total Energy" value="3.34 GWh" subtitle="Across 30 buildings" icon="energy" trend="4.2% MoM" />
          <KpiCard title="Renewable Share" value="26.8%" subtitle="Avg renewable ratio" icon="renewable" trend="Rising trend" />
          <KpiCard title="EV Ready Sites" value="18" subtitle="Score > 60 feasibility" icon="ev" />
          <KpiCard title="Est. Daily Capacity" value="8,420 kWh" subtitle="Potential EV charging" icon="buildings" />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CityEnergyChart />
          <HourlyPatternChart />
        </div>

        {/* Data Snapshot */}
        <DataSnapshot />

        {/* EV Feasibility Table */}
        <EvFeasibilityTable />

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MonthlyTrendChart />
          <DepartmentPieChart />
        </div>

        {/* Charts Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <OccupancyChart />
          <BuildingTypeChart />
        </div>

        {/* Solution Summary */}
        <div className="glass-card p-6 glow-primary">
          <h2 className="text-base font-semibold text-primary mb-3">💡 Proposed Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-1">
              <p className="font-medium">1. Smart Placement</p>
              <p className="text-muted-foreground text-xs leading-relaxed">Deploy chargers at buildings with high renewable surplus (Hyderabad & Chennai top candidates). IT Parks and Commercial Towers show best energy profiles.</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium">2. Off-Peak Charging</p>
              <p className="text-muted-foreground text-xs leading-relaxed">Schedule EV charging during 22:00–06:00 when building demand drops 85%. This maximizes grid capacity without infrastructure upgrades.</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium">3. Renewable Integration</p>
              <p className="text-muted-foreground text-xs leading-relaxed">Buildings with 25%+ renewable ratio can feed surplus into EV chargers. Estimated 8,420 kWh daily capacity — enough for ~140 vehicles.</p>
            </div>
          </div>
        </div>

        <footer className="text-center text-xs text-muted-foreground py-4">
          Hackathon Project · Office Building Energy Dataset Analysis · {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
};

export default Index;
