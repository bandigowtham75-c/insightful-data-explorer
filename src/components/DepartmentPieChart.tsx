import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { departmentEnergy } from "@/data/buildings";

const COLORS = [
  "hsl(160, 84%, 45%)",
  "hsl(200, 80%, 55%)",
  "hsl(38, 92%, 55%)",
  "hsl(280, 70%, 60%)",
  "hsl(340, 75%, 55%)",
];

export function DepartmentPieChart() {
  return (
    <div className="glass-card p-5 animate-slide-up">
      <h3 className="text-base font-semibold mb-4">Energy by Department</h3>
      <div className="flex items-center gap-4">
        <ResponsiveContainer width="50%" height={220}>
          <PieChart>
            <Pie
              data={departmentEnergy}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={85}
              dataKey="energyShare"
              nameKey="department"
              stroke="none"
            >
              {departmentEnergy.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(220 18% 10%)",
                border: "1px solid hsl(220 14% 18%)",
                borderRadius: "8px",
                color: "hsl(210 20% 92%)",
              }}
              formatter={(value: number) => `${value}%`}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="space-y-2.5 flex-1">
          {departmentEnergy.map((d, i) => (
            <div key={d.department} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                <span className="text-muted-foreground">{d.department}</span>
              </div>
              <span className="font-mono font-medium">{d.energyShare}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
