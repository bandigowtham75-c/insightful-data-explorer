import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { hourlyEnergyPattern } from "@/data/buildings";

export function HourlyPatternChart() {
  return (
    <div className="glass-card p-5 animate-slide-up">
      <h3 className="text-base font-semibold mb-1">Daily Energy Pattern</h3>
      <p className="text-xs text-muted-foreground mb-4">Optimal EV charging: off-peak hours (22:00 - 06:00)</p>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={hourlyEnergyPattern}>
          <defs>
            <linearGradient id="gradTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(200, 80%, 55%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(200, 80%, 55%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradHvac" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(160, 84%, 45%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(160, 84%, 45%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" />
          <XAxis dataKey="hour" tick={{ fill: "hsl(215 12% 55%)", fontSize: 11 }} />
          <YAxis tick={{ fill: "hsl(215 12% 55%)", fontSize: 11 }} label={{ value: "kWh", angle: -90, position: "insideLeft", fill: "hsl(215 12% 55%)" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(220 18% 10%)",
              border: "1px solid hsl(220 14% 18%)",
              borderRadius: "8px",
              color: "hsl(210 20% 92%)",
            }}
          />
          <Area type="monotone" dataKey="total" stroke="hsl(200, 80%, 55%)" fill="url(#gradTotal)" name="Total" />
          <Area type="monotone" dataKey="hvac" stroke="hsl(160, 84%, 45%)" fill="url(#gradHvac)" name="HVAC" />
          <Area type="monotone" dataKey="lighting" stroke="hsl(38, 92%, 55%)" fillOpacity={0.1} fill="hsl(38, 92%, 55%)" name="Lighting" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
