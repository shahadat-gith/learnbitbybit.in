import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 py-16 text-center">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex max-w-xl flex-col items-center"
      >

        {/* Floating Brand Logo Container */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="group relative mt-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-border-default bg-surface-elevated/90 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-brand-primary/40 hover:shadow-2xl hover:shadow-brand-primary/10"
        >
          <img
            src="/logo.png"
            alt="PrepEngine Logo"
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </motion.div>

        {/* Core Heading */}
        <h1 className="mt-8 text-4xl font-black tracking-tight text-text-main sm:text-5xl sm:leading-tight">
          Something <span className="text-brand-primary">powerful</span> is being built.
        </h1>

        {/* Subtitle Body */}
        <p className="mt-4 max-w-md text-base leading-relaxed text-text-muted sm:text-lg">
          We’re crafting an all-in-one platform for software engineering interviews, path planning, and hands-on practice.
        </p>

        {/* Interactive Secondary CTA / Pill */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-border-default bg-surface-elevated px-5 py-2.5 text-xs font-bold text-text-muted shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-brand-primary" />
            Public Beta Launching Soon
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;