import { ChevronRight } from 'lucide-react';

export default function HeroLeft() {
  return (
    <div className="animate-[fade-up_0.7s_ease-out_both]">
      <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.06em] text-brand-navy sm:text-6xl lg:text-8xl">
        Build skills.
        <br />
        <span className="text-brand-primary">Bit by bit.</span>
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
        We are creating a more thoughtful home for technical interview preparation: less noise, better context, and a clear next step whenever you sit down to learn.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-5">
        <a href="#features" className="group inline-flex items-center gap-3 rounded-full bg-brand-navy px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-navy/15 transition-all hover:-translate-y-0.5 hover:bg-brand-primary">
          Explore the toolkit
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <span className="flex items-center gap-2 text-sm font-semibold text-slate-500">
          <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
          Currently in the works
        </span>
      </div>
    </div>
  );
}
