import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { cityEnergyData } from "@/data/buildings";

export function CityEnergyChart() {
  const data = cityEnergyData.map((c) => ({
    city: c.city,
    "Total Energy (MWh)": Math.round(c.totalEnergy / 1000),
    "Renewable (MWh)": Math.round(c.renewable / 1000),
    "EV Suitability": c.evSuitability,
  }));

  return (
    <div className="glass-card p-5 animate-slide-up">
      <h3 className="text-base font-semibold mb-4">Energy Consumption by City</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" />
          <XAxis dataKey="city" tick={{ fill: "hsl(215 12% 55%)", fontSize: 12 }} />
          <YAxis tick={{ fill: "hsl(215 12% 55%)", fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(220 18% 10%)",
              border: "1px solid hsl(220 14% 18%)",
              borderRadius: "8px",
              color: "hsl(210 20% 92%)",
            }}
          />
          <Legend />
          <Bar dataKey="Total Energy (MWh)" fill="hsl(200, 80%, 55%)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Renewable (MWh)" fill="hsl(160, 84%, 45%)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
