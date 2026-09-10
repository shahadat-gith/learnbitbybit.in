import React, { useEffect, useState } from "react";
import SystemDiagram from "./components/SystemDiagram.jsx";
import Features from "./components/Features.jsx";
import ComingSoon from "./components/ComingSoon.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-surface-base text-text-main selection:bg-brand-mint selection:text-brand-navy">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-20 lg:space-y-32">
          <ComingSoon />
          <SystemDiagram />
          <Features />
        </div>
      </main>
    </div>
  );
}
