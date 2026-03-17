import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { occupancyByEvent } from "@/data/buildings";

export function OccupancyChart() {
  return (
    <div className="glass-card p-5 animate-slide-up">
      <h3 className="text-base font-semibold mb-4">Occupancy by Event Type</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={occupancyByEvent} layout="vertical" barSize={20}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" horizontal={false} />
          <XAxis type="number" tick={{ fill: "hsl(215 12% 55%)", fontSize: 12 }} />
          <YAxis dataKey="event" type="category" tick={{ fill: "hsl(215 12% 55%)", fontSize: 11 }} width={110} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(220 18% 10%)",
              border: "1px solid hsl(220 14% 18%)",
              borderRadius: "8px",
              color: "hsl(210 20% 92%)",
            }}
          />
          <Bar dataKey="avgPeople" fill="hsl(280, 70%, 60%)" radius={[0, 4, 4, 0]} name="Avg People" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
