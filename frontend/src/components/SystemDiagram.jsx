import React, { useState } from "react";
import { motion } from "framer-motion";
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

const SERVICES = [
  {
    id: "auth",
    y: 15,
    label: "Auth Service",
    sub: "JWT & sessions",
    icon: Cpu,
    badgeBg: "bg-amber-500/10 dark:bg-amber-500/20",
    badgeText: "text-amber-600 dark:text-amber-400",
  },
  {
    id: "dsa",
    y: 38,
    label: "DSA Worker",
    sub: "Code execution",
    icon: Activity,
    badgeBg: "bg-cyan-500/10 dark:bg-cyan-500/20",
    badgeText: "text-cyan-600 dark:text-cyan-400",
  },
  {
    id: "course",
    y: 62,
    label: "Course Engine",
    sub: "System design",
    icon: Layers3,
    badgeBg: "bg-indigo-500/10 dark:bg-indigo-500/20",
    badgeText: "text-indigo-600 dark:text-indigo-400",
  },
  {
    id: "jobs",
    y: 85,
    label: "Job Service",
    sub: "Alerts & queues",
    icon: Zap,
    badgeBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    badgeText: "text-emerald-600 dark:text-emerald-400",
  },
];

const STORES = [
  {
    id: "pg",
    y: 22,
    label: "PostgreSQL",
    sub: "System of record",
    icon: Database,
  },
  { id: "redis", y: 50, label: "Redis", sub: "Hot cache", icon: HardDrive },
  {
    id: "qdrant",
    y: 78,
    label: "Qdrant",
    sub: "Vector search",
    icon: Database,
  },
];

// X-coordinates (percent of canvas width)
const X = { client: 8, lb: 28, bus1: 42, services: 62, bus2: 80, stores: 94 };

function Node({
  x,
  y,
  children,
  className = "",
  delay = 0,
  onHover,
  isDimmed,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: isDimmed ? 0.35 : 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      onMouseEnter={() => onHover && onHover(true)}
      onMouseLeave={() => onHover && onHover(false)}
      className={`absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${className}`}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {children}
    </motion.div>
  );
}

function Card({ icon: Icon, label, sub, badgeBg, badgeText, dashed, muted, compact, active }) {
  return (
    <div
      className={`group relative flex items-center gap-2.5 rounded-xl border p-2.5 shadow-sm transition-all duration-300 ${
        compact ? "w-32" : "w-36"
      } ${
        dashed
          ? "border-dashed border-border-strong/60 bg-surface-base/50"
          : "border-border-default bg-surface-elevated hover:border-brand-primary/50 hover:shadow-lg hover:shadow-brand-primary/5"
      } ${muted ? "opacity-60" : "opacity-100"}`}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${
          badgeBg || "bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20"
        } ${badgeText || ""}`}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1 leading-tight">
        <div className="flex items-center gap-1">
          {/* Dynamic theme colors used here */}
          <p className="truncate text-xs font-bold text-text-main">
            {label}
          </p>
          {active && (
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
          )}
        </div>
        <p className="truncate text-[10px] font-medium text-text-muted">
          {sub}
        </p>
      </div>
    </div>
  );
}

function elbowHorizontal(x1, y1, xBus, x2, y2) {
  return `M${x1},${y1} L${xBus},${y1} L${xBus},${y2} L${x2},${y2}`;
}

export default function SystemDiagram() {
  const [hoveredNode, setHoveredNode] = useState(null);

  const isHighlighted = (id) =>
    !hoveredNode || hoveredNode === id || hoveredNode === "all";

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="relative overflow-hidden rounded-3xl border border-border-default bg-surface-elevated/80 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
        {/* Canvas Workspace */}
        <div
          className="relative overflow-hidden rounded-2xl border border-border-subtle bg-surface-card p-4"
          style={{ height: 420 }}
        >
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <marker
                id="arrow-cyan"
                viewBox="0 0 8 8"
                refX="6"
                refY="4"
                markerWidth="5"
                markerHeight="5"
                orient="auto"
              >
                <path d="M0,0 L8,4 L0,8 Z" className="fill-brand-cyan" />
              </marker>

              <marker
                id="arrow-subtle"
                viewBox="0 0 8 8"
                refX="6"
                refY="4"
                markerWidth="5"
                markerHeight="5"
                orient="auto"
              >
                <path
                  d="M0,0 L8,4 L0,8 Z"
                  className="fill-border-strong"
                />
              </marker>
            </defs>

            {/* Client → Load Balancer */}
            <g
              opacity={isHighlighted("lb") ? 1 : 0.25}
              className="transition-opacity duration-300"
            >
              <path
                d={`M${X.client + 6},50 L${X.lb - 7},50`}
                className="stroke-brand-cyan"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                markerEnd="url(#arrow-cyan)"
                fill="none"
              />
              <path
                d={`M${X.client + 6},50 L${X.lb - 7},50`}
                className="stroke-white/80 dark:stroke-cyan-200"
                strokeWidth="1.5"
                strokeDasharray="4,6"
                strokeDashoffset="100"
                style={{ animation: "dash 3s linear infinite" }}
                vectorEffect="non-scaling-stroke"
                fill="none"
              />
            </g>

            {/* Load Balancer → Services Bus */}
            {SERVICES.map((s) => {
              const active = isHighlighted(s.id) || isHighlighted("lb");
              return (
                <g
                  key={s.id}
                  opacity={active ? 1 : 0.2}
                  className="transition-opacity duration-300"
                >
                  <path
                    d={elbowHorizontal(
                      X.lb + 7,
                      50,
                      X.bus1,
                      X.services - 7,
                      s.y,
                    )}
                    className="stroke-brand-cyan"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    markerEnd="url(#arrow-cyan)"
                    fill="none"
                  />
                  <path
                    d={elbowHorizontal(
                      X.lb + 7,
                      50,
                      X.bus1,
                      X.services - 7,
                      s.y,
                    )}
                    className="stroke-cyan-200 dark:stroke-cyan-300"
                    strokeWidth="1.5"
                    strokeDasharray="3,5"
                    style={{ animation: "dash 2.5s linear infinite" }}
                    vectorEffect="non-scaling-stroke"
                    fill="none"
                  />
                </g>
              );
            })}

            {/* Services → Bus 2 */}
            {SERVICES.map((s) => {
              const active = isHighlighted(s.id);
              return (
                <path
                  key={`m-${s.id}`}
                  d={`M${X.services + 7},${s.y} L${X.bus2},${s.y}`}
                  className="stroke-border-strong"
                  strokeWidth="1.2"
                  strokeDasharray="2,2"
                  opacity={active ? 1 : 0.25}
                  vectorEffect="non-scaling-stroke"
                  fill="none"
                />
              );
            })}

            {/* Bus 2 Vertical Line */}
            <line
              x1={X.bus2}
              y1="15"
              x2={X.bus2}
              y2="85"
              className="stroke-border-strong"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />

            {/* Bus 2 → Data Stores */}
            {STORES.map((d) => {
              const active = isHighlighted(d.id);
              return (
                <g
                  key={`s-${d.id}`}
                  opacity={active ? 1 : 0.25}
                  className="transition-opacity duration-300"
                >
                  <path
                    d={`M${X.bus2},${d.y} L${X.stores - 7},${d.y}`}
                    className="stroke-border-strong"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    markerEnd="url(#arrow-subtle)"
                    fill="none"
                  />
                  <path
                    d={`M${X.bus2},${d.y} L${X.stores - 7},${d.y}`}
                    className="stroke-brand-primary/40"
                    strokeWidth="1.2"
                    strokeDasharray="3,4"
                    style={{ animation: "dash 4s linear infinite" }}
                    vectorEffect="non-scaling-stroke"
                    fill="none"
                  />
                </g>
              );
            })}
          </svg>

          {/* NODES */}

          {/* Client Node */}
          <Node
            x={X.client}
            y={50}
            delay={0.1}
            onHover={(h) => setHoveredNode(h ? "all" : null)}
          >
            <Card
              icon={Globe2}
              label="Client"
              sub="Web, mobile, APIs"
              compact
              active
            />
          </Node>

          {/* Primary Load Balancer */}
          <Node
            x={X.lb}
            y={50}
            delay={0.2}
            onHover={(h) => setHoveredNode(h ? "lb" : null)}
          >
            <Card
              icon={Server}
              label="Load Balancer"
              sub="NGINX"
              badgeBg="bg-brand-primary text-white"
              active
            />
          </Node>

          {/* Services Group */}
          {SERVICES.map((s, idx) => (
            <Node
              key={s.id}
              x={X.services}
              y={s.y}
              delay={0.25 + idx * 0.05}
              isDimmed={hoveredNode && !isHighlighted(s.id)}
              onHover={(h) => setHoveredNode(h ? s.id : null)}
            >
              <Card
                icon={s.icon}
                label={s.label}
                sub={s.sub}
                badgeBg={s.badgeBg}
                badgeText={s.badgeText}
              />
            </Node>
          ))}

          {/* Storage Stores Group */}
          {STORES.map((d, idx) => (
            <Node
              key={d.id}
              x={X.stores}
              y={d.y}
              delay={0.45 + idx * 0.05}
              isDimmed={hoveredNode && !isHighlighted(d.id)}
              onHover={(h) => setHoveredNode(h ? d.id : null)}
            >
              <Card
                icon={d.icon}
                label={d.label}
                sub={d.sub}
                badgeBg="bg-brand-navy/10 text-brand-navy dark:bg-surface-hover dark:text-text-main"
                compact
              />
            </Node>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </div>
  );
}