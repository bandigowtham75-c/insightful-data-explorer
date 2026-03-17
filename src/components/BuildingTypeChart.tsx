import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { buildingTypeEnergy } from "@/data/buildings";

const COLORS = [
  "hsl(160, 84%, 45%)",
  "hsl(200, 80%, 55%)",
  "hsl(38, 92%, 55%)",
  "hsl(280, 70%, 60%)",
];

export function BuildingTypeChart() {
  const data = buildingTypeEnergy.map((b) => ({
    type: b.type,
    "Avg Energy (MWh)": Math.round(b.avgEnergy / 1000),
    "EV Chargers": b.evChargers,
  }));

  return (
    <div className="glass-card p-5 animate-slide-up">
      <h3 className="text-base font-semibold mb-4">Energy by Building Type</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barSize={32}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" />
          <XAxis dataKey="type" tick={{ fill: "hsl(215 12% 55%)", fontSize: 11 }} />
          <YAxis tick={{ fill: "hsl(215 12% 55%)", fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(220 18% 10%)",
              border: "1px solid hsl(220 14% 18%)",
              borderRadius: "8px",
              color: "hsl(210 20% 92%)",
            }}
          />
          <Bar dataKey="Avg Energy (MWh)" radius={[4, 4, 0, 0]}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
