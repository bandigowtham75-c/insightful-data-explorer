import { evChargingFeasibility } from "@/data/buildings";
import { BatteryCharging, MapPin, Zap } from "lucide-react";

export function EvFeasibilityTable() {
  const top10 = evChargingFeasibility.slice(0, 10);

  return (
    <div className="glass-card p-5 animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold">EV Charging Station Recommendations</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Top buildings ranked by feasibility score</p>
        </div>
        <BatteryCharging className="h-5 w-5 text-accent" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left py-2.5 px-2 text-muted-foreground font-medium text-xs">Building</th>
              <th className="text-left py-2.5 px-2 text-muted-foreground font-medium text-xs">City</th>
              <th className="text-left py-2.5 px-2 text-muted-foreground font-medium text-xs">Type</th>
              <th className="text-right py-2.5 px-2 text-muted-foreground font-medium text-xs">Renewable %</th>
              <th className="text-right py-2.5 px-2 text-muted-foreground font-medium text-xs">Score</th>
              <th className="text-right py-2.5 px-2 text-muted-foreground font-medium text-xs">Chargers</th>
              <th className="text-right py-2.5 px-2 text-muted-foreground font-medium text-xs">Daily kWh</th>
            </tr>
          </thead>
          <tbody>
            {top10.map((b, i) => (
              <tr key={b.building_id} className="border-b border-border/30 hover:bg-secondary/50 transition-colors">
                <td className="py-2.5 px-2 font-mono text-xs">{b.building_id}</td>
                <td className="py-2.5 px-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    {b.city}
                  </span>
                </td>
                <td className="py-2.5 px-2 text-muted-foreground">{b.building_type}</td>
                <td className="py-2.5 px-2 text-right">
                  <span className="font-mono text-energy-green">{b.renewableRatio}%</span>
                </td>
                <td className="py-2.5 px-2 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <div className="w-16 h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${b.feasibilityScore}%`,
                          background: b.feasibilityScore > 75 ? "hsl(160, 84%, 45%)" : b.feasibilityScore > 50 ? "hsl(38, 92%, 55%)" : "hsl(0, 72%, 55%)",
                        }}
                      />
                    </div>
                    <span className="font-mono text-xs w-6">{b.feasibilityScore}</span>
                  </div>
                </td>
                <td className="py-2.5 px-2 text-right font-mono">
                  <span className="flex items-center justify-end gap-1">
                    <Zap className="h-3 w-3 text-accent" />
                    {b.recommendedChargers}
                  </span>
                </td>
                <td className="py-2.5 px-2 text-right font-mono text-energy-blue">{b.estimatedDailyCapacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
