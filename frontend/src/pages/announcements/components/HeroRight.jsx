import {
  Activity,
  Cpu,
  Database,
  Globe2,
  HardDrive,
  Layers3,
  Server,
  Zap,
} from "lucide-react";

// Brand tokens — swap these for var(--color-brand-*) if you'd rather
// reference the theme file directly than hardcode hex here.
const COLOR = {
  primary: "#00A896",
  navy: "#0F172A",
  cyan: "#0284C7",
  mint: "#E6F4F1",
  charcoal: "#1E293B",
  success: "#10B981",
  amber: "#F59E0B",
  muted: "#64748B",
  border: "#E2E8F0",
  borderSubtle: "#F1F5F9",
};

const SERVICES = [
  { id: "auth", x: 15, label: "Auth Service", sub: "JWT & sessions", icon: Cpu, tint: COLOR.amber },
  { id: "dsa", x: 38, label: "DSA Worker", sub: "Code execution", icon: Activity, tint: COLOR.cyan },
  { id: "course", x: 62, label: "Course Engine", sub: "System design content", icon: Layers3, tint: COLOR.primary },
  { id: "jobs", x: 85, label: "Job Service", sub: "Alerts & notifications", icon: Zap, tint: COLOR.success },
];

const STORES = [
  { id: "pg", x: 22, label: "PostgreSQL", sub: "System of record", icon: Database },
  { id: "redis", x: 50, label: "Redis", sub: "Hot cache", icon: HardDrive },
  { id: "qdrant", x: 78, label: "Qdrant", sub: "Vector search", icon: Database },
];

// y-coordinates (percent of the 460px canvas) shared by nodes and connectors,
// so moving a row only ever means changing one number here.
const Y = { client: 8, lb: 24, bus1: 34, services: 46, bus2: 60, stores: 72 };

function Node({ x, y, children, className = "", style = {} }) {
  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${className}`}
      style={{ left: `${x}%`, top: `${y}%`, ...style }}
    >
      {children}
    </div>
  );
}

function Card({ icon: Icon, label, sub, tint, dashed, muted, wide }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border bg-white px-2.5 py-2 ${wide ? "w-40" : "w-28"}`}
      style={{
        borderColor: dashed ? COLOR.border : COLOR.borderSubtle,
        borderStyle: dashed ? "dashed" : "solid",
        boxShadow: "0 1px 2px rgba(15,23,42,0.06)",
        opacity: muted ? 0.75 : 1,
      }}
    >
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md"
        style={{ backgroundColor: tint ? `${tint}1A` : COLOR.mint, color: tint || COLOR.primary }}
      >
        <Icon className="h-3.5 w-3.5" />
      </span>
      <div className="min-w-0 leading-tight">
        <p className="truncate text-xs font-semibold" style={{ color: COLOR.navy }}>
          {label}
        </p>
        <p className="truncate text-[11px]" style={{ color: COLOR.muted }}>
          {sub}
        </p>
      </div>
    </div>
  );
}

// Elbow connector: vertical drop → horizontal run → vertical drop into target.
function elbow(x1, y1, xMid1, xMid2, yBus, x2, y2) {
  return `M${x1},${y1} L${x1},${yBus} L${x2},${yBus} L${x2},${y2}`;
}

export default function HeroRight() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="relative overflow-hidden rounded-2xl border bg-white p-5"
        style={{ borderColor: COLOR.border, boxShadow: "0 12px 32px -12px rgba(15,23,42,0.18)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: COLOR.borderSubtle }}>
          <div>
            <p className="font-mono text-[11px]" style={{ color: COLOR.primary }}>
              request path
            </p>
            <h2 className="text-base font-bold" style={{ color: COLOR.navy }}>
              How a request reaches your code
            </h2>
          </div>
          <div
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium"
            style={{ backgroundColor: `${COLOR.success}14`, color: "#047857" }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                style={{ backgroundColor: COLOR.success }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: COLOR.success }} />
            </span>
            No single point of failure
          </div>
        </div>

        {/* Diagram canvas */}
        <div className="relative mt-4" style={{ height: 460 }}>
          {/* faint grid, blueprint feel */}
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              backgroundColor: COLOR.mint + "40",
              backgroundImage: `linear-gradient(${COLOR.primary}0D 1px, transparent 1px), linear-gradient(90deg, ${COLOR.primary}0D 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <marker id="arrow" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
                <path d="M0,0 L8,4 L0,8 Z" fill={COLOR.primary} />
              </marker>
            </defs>

            {/* client → load balancer */}
            <path d={`M50,${Y.client + 3} L50,${Y.lb - 5}`} stroke={COLOR.primary} strokeWidth="0.6" vectorEffect="non-scaling-stroke" markerEnd="url(#arrow)" fill="none" />

            {/* load balancer → distribution bus → services */}
            {SERVICES.map((s) => (
              <path
                key={s.id}
                d={elbow(50, Y.lb + 5, 50, s.x, Y.bus1, s.x, Y.services - 6)}
                stroke={COLOR.primary}
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
                markerEnd="url(#arrow)"
                fill="none"
                opacity="0.85"
              />
            ))}

            {/* services → merge bus → data stores */}
            {SERVICES.map((s) => (
              <path
                key={`m-${s.id}`}
                d={`M${s.x},${Y.services + 6} L${s.x},${Y.bus2}`}
                stroke={COLOR.charcoal}
                strokeWidth="0.4"
                vectorEffect="non-scaling-stroke"
                opacity="0.35"
                fill="none"
              />
            ))}
            {STORES.map((d) => (
              <path
                key={`s-${d.id}`}
                d={`M${d.x},${Y.bus2} L${d.x},${Y.stores - 6}`}
                stroke={COLOR.charcoal}
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
                markerEnd="url(#arrow)"
                fill="none"
                opacity="0.55"
              />
            ))}
            <line x1="15" y1={Y.bus2} x2="85" y2={Y.bus2} stroke={COLOR.charcoal} strokeWidth="0.4" vectorEffect="non-scaling-stroke" opacity="0.35" />

            {/* primary ↔ standby sync */}
            <path
              d="M64,24 L80,24"
              stroke={COLOR.muted}
              strokeWidth="0.5"
              strokeDasharray="2,2"
              vectorEffect="non-scaling-stroke"
              fill="none"
            />
          </svg>

          {/* Nodes */}
          <Node x={50} y={Y.client}>
            <Card icon={Globe2} label="Client Traffic" sub="Web & mobile apps" />
          </Node>

          <Node x={40} y={Y.lb}>
            <Card icon={Server} label="Load Balancer" sub="nginx · round robin" tint={COLOR.primary} wide />
          </Node>
          <Node x={84} y={Y.lb}>
            <Card icon={Server} label="Standby" sub="warm failover" dashed muted />
          </Node>

          {SERVICES.map((s) => (
            <Node key={s.id} x={s.x} y={Y.services}>
              <Card icon={s.icon} label={s.label} sub={s.sub} tint={s.tint} />
            </Node>
          ))}

          {STORES.map((d) => (
            <Node key={d.id} x={d.x} y={Y.stores}>
              <Card icon={d.icon} label={d.label} sub={d.sub} tint={COLOR.navy} />
            </Node>
          ))}

          {/* Annotations */}
          <div className="absolute font-mono text-[10px]" style={{ left: "50%", top: `${Y.bus1 - 5}%`, transform: "translateX(-50%)", color: COLOR.muted }}>
            health-checked
          </div>
          <div className="absolute font-mono text-[10px]" style={{ left: "50%", top: `${Y.bus2 - 4.5}%`, transform: "translateX(-50%)", color: COLOR.muted }}>
            reads / writes
          </div>
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between text-[11px]" style={{ color: COLOR.muted }}>
          <span>4 services behind 1 balancer, 0 downtime deploys</span>
          <span className="font-mono font-semibold" style={{ color: COLOR.primary }}>
            learnbitbybit.com
          </span>
        </div>
      </div>
    </div>
  );
}
