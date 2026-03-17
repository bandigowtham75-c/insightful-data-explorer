import { monthlyEnergyTrends, buildings, cityEnergyData } from "@/data/buildings";

export function DataSnapshot() {
  const totalEnergy = monthlyEnergyTrends.reduce((s, m) => s + m.total, 0);
  const totalRenewable = monthlyEnergyTrends.reduce((s, m) => s + m.renewable, 0);
  const renewablePercent = ((totalRenewable / totalEnergy) * 100).toFixed(1);

  const monthlyData = monthlyEnergyTrends.map((m) => ({
    month: m.month.split(" ")[0],
    totalMWh: Math.round(m.total / 1000),
    renewableMWh: Math.round(m.renewable / 1000),
  }));

  const behaviourData = [
    { label: "IT Parks", metric: "Avg Energy", value: "103 MWh", change: "26.8%", changeLabel: "Renewable" },
    { label: "Commercial", metric: "Avg Energy", value: "105 MWh", change: "25.7%", changeLabel: "Renewable" },
    { label: "Corporate", metric: "Avg Energy", value: "117 MWh", change: "21.8%", changeLabel: "Renewable" },
  ];

  return (
    <div className="glass-card p-6 animate-slide-up">
      <h2 className="text-xl font-bold tracking-tight mb-1">Building Energy Snapshot</h2>
      <p className="text-sm text-muted-foreground mb-6">Jan – Apr · Energy Consumption & Behaviour</p>

      {/* KPI Row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="border border-border rounded-lg p-4 text-center">
          <p className="text-3xl font-bold tracking-tight">{(totalEnergy / 1000).toLocaleString()}</p>
          <p className="text-sm font-medium text-muted-foreground mt-1">Total Energy (MWh)</p>
          <p className="text-xs text-muted-foreground">Jan to Apr</p>
        </div>
        <div className="border border-border rounded-lg p-4 text-center">
          <p className="text-3xl font-bold tracking-tight text-energy-green">{renewablePercent}%</p>
          <p className="text-sm font-medium text-muted-foreground mt-1">Renewable Share</p>
          <p className="text-xs text-muted-foreground">up from 23.5% in Jan</p>
        </div>
        <div className="border border-border rounded-lg p-4 text-center">
          <p className="text-3xl font-bold tracking-tight text-destructive">{buildings.length}</p>
          <p className="text-sm font-medium text-muted-foreground mt-1">Buildings Analyzed</p>
          <p className="text-xs text-muted-foreground">across {cityEnergyData.length} cities</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Table */}
        <div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="py-2.5 px-4 text-left font-semibold rounded-tl-lg">Month</th>
                <th className="py-2.5 px-4 text-right font-semibold">Total (MWh)</th>
                <th className="py-2.5 px-4 text-right font-semibold rounded-tr-lg">Renewable (MWh)</th>
              </tr>
            </thead>
            <tbody>
              {monthlyData.map((m, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="py-2.5 px-4 font-medium">{m.month}</td>
                  <td className="py-2.5 px-4 text-right font-mono">{m.totalMWh.toLocaleString()}</td>
                  <td className="py-2.5 px-4 text-right font-mono">{m.renewableMWh.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground italic mt-2">Renewable share rises steadily from Jan to Apr.</p>
        </div>

        {/* Behaviour Table */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Building Type Behaviour</h3>
          {behaviourData.map((b, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
              <div>
                <p className="text-sm font-medium">{b.label}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">{b.metric}</p>
                <p className="text-sm font-mono font-semibold">{b.value}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">{b.changeLabel}</p>
                <p className="text-sm font-mono font-semibold text-energy-green">{b.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
