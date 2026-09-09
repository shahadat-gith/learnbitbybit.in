import {
  ArrowUpRight,
  Code2,
  Compass,
  BriefcaseBusiness,
  GraduationCap,
  Layers3,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import AnnouncementHero from './components/AnnouncementHero.jsx';

const highlights = [
  {
    icon: Code2,
    number: '01',
    title: 'Practice with intent',
    description: 'Focused coding paths that help you build momentum, one useful problem at a time.',
  },
  {
    icon: Layers3,
    number: '02',
    title: 'Learn the why',
    description: 'Clear system design and CS fundamentals, organised around the skills interviews measure.',
  },
  {
    icon: Compass,
    number: '03',
    title: 'Know what is next',
    description: 'Practical job signals, interview notes, and a calmer way to keep your preparation moving.',
  },
];

const features = [
  { icon: Code2, title: 'Coding practice', description: 'Curated DSA problems with solution approaches and complexity analysis.' },
  { icon: Layers3, title: 'System design', description: 'HLD, LLD, scalability concepts, and architecture blueprints for real systems.' },
  { icon: GraduationCap, title: 'CS core subjects', description: 'Build strong foundations across OS, DBMS, networks, and compiler design.' },
  { icon: MessageSquare, title: 'Expert discussions', description: 'Behavioral guidance, interview experiences, and practical mock interview insights.' },
  { icon: BriefcaseBusiness, title: 'Job updates', description: 'Handpicked opportunities, referral hubs, and company hiring trends.' },
  { icon: Sparkles, title: 'Personal progress', description: 'Roadmaps, cheat sheets, and simple tracking that makes consistency easier.' },
];

export default function AnnouncementPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f5f7f5] text-brand-navy selection:bg-brand-primary selection:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_12%,rgba(0,168,150,0.14),transparent_28%),radial-gradient(circle_at_10%_78%,rgba(2,132,199,0.08),transparent_25%)]" />
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="/" className="flex items-center gap-3" aria-label="learnbitbybit home">
          <img className="h-17 w-auto" src="/logo.png" alt="learnbitbybit" />
        </a>
        <div className="hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:flex">
          <span className="h-2 w-2 rounded-full bg-brand-primary" />
          Product announcement
        </div>
        <a href="#updates" className="group flex items-center gap-2 text-sm font-bold text-brand-navy transition-colors hover:text-brand-primary">
          Stay in the loop
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-10 lg:px-10 lg:pt-16">
        <AnnouncementHero />

        <section id="updates" className="mt-28 border-t border-slate-200 pt-10 lg:mt-36">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-sm font-medium text-brand-cyan">What we are building</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-brand-navy sm:text-4xl">Small pieces. Real progress.</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-slate-500">A focused toolkit for people who want to understand deeply and show up ready.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-3">
            {highlights.map(({ icon: Icon, number, title, description }) => (
              <article key={number} className="group bg-white p-7 transition-colors hover:bg-[#fbfffd] lg:p-9">
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-brand-primary" />
                  <span className="font-mono text-xs text-slate-400">{number}</span>
                </div>
                <h3 className="mt-12 text-xl font-black text-brand-navy">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="mt-24 border-t border-slate-200 pt-10 lg:mt-32">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-sm font-medium text-brand-cyan">Inside the platform</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-brand-navy sm:text-4xl">Everything you need to get interview-ready.</h2>
            <p className="mt-4 text-base leading-7 text-slate-500">One place for the concepts, practice, context, and opportunities that turn preparation into progress.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <article key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mint text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-black text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>© {new Date().getFullYear()} learnbitbybit</p>
        <p className="font-mono">Better skills. Brighter opportunities.</p>
      </footer>
    </div>
  );
}