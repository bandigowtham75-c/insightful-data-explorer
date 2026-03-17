import { Zap, Building2, Leaf, BatteryCharging } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: "energy" | "buildings" | "renewable" | "ev";
  trend?: string;
}

const iconMap = {
  energy: Zap,
  buildings: Building2,
  renewable: Leaf,
  ev: BatteryCharging,
};

const colorMap = {
  energy: "text-energy-blue",
  buildings: "text-energy-purple",
  renewable: "text-energy-green",
  ev: "text-accent",
};

const glowMap = {
  energy: "glow-primary",
  buildings: "",
  renewable: "glow-primary",
  ev: "glow-accent",
};

export function KpiCard({ title, value, subtitle, icon, trend }: KpiCardProps) {
  const Icon = iconMap[icon];
  const color = colorMap[icon];
  const glow = glowMap[icon];

  return (
    <div className={`glass-card p-5 animate-slide-up ${glow}`}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-2xl font-bold tracking-tight">{value}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <div className={`p-2.5 rounded-lg bg-secondary ${color}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {trend && (
        <div className="mt-3 flex items-center gap-1">
          <span className="text-xs font-mono text-energy-green">▲ {trend}</span>
        </div>
      )}
    </div>
  );
}
