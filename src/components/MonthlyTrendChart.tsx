import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { monthlyEnergyTrends } from "@/data/buildings";

export function MonthlyTrendChart() {
  const data = monthlyEnergyTrends.map((m) => ({
    month: m.month,
    "Total (MWh)": Math.round(m.total / 1000),
    "Renewable (MWh)": Math.round(m.renewable / 1000),
    "Grid (MWh)": Math.round(m.grid / 1000),
  }));

  return (
    <div className="glass-card p-5 animate-slide-up">
      <h3 className="text-base font-semibold mb-4">Monthly Energy Trends</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" />
          <XAxis dataKey="month" tick={{ fill: "hsl(215 12% 55%)", fontSize: 12 }} />
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
          <Line type="monotone" dataKey="Total (MWh)" stroke="hsl(200, 80%, 55%)" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="Renewable (MWh)" stroke="hsl(160, 84%, 45%)" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="Grid (MWh)" stroke="hsl(38, 92%, 55%)" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
