import React, { useState } from 'react';
import { 
  Code2, 
  GraduationCap, 
  MessageSquare, 
  Briefcase, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Database,
} from 'lucide-react';

export default function App() {
  const features = [
    {
      icon: <Code2 className="w-5 h-5 text-brand-primary" />,
      title: "Coding Practice",
      desc: "Curated DSA problems with detailed solution approaches & complexity analysis."
    },
    {
      icon: <Layers className="w-5 h-5 text-brand-cyan" />,
      title: "System Design",
      desc: "Real-world scalability concepts, HLD, LLD & architecture blueprints."
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-brand-primary" />,
      title: "CS Core Subjects",
      desc: "Master OS, DBMS, Computer Networks, and Compiler Design essentials."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-brand-cyan" />,
      title: "Expert Discussions",
      desc: "In-depth behavioral guidance, interview experiences, and mock insights."
    },
    {
      icon: <Briefcase className="w-5 h-5 text-brand-primary" />,
      title: "Job Updates",
      desc: "Handpicked opportunities, referral hubs, and company hiring trends."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-cyan" />,
      title: "And Much More",
      desc: "Interactive cheat sheets, roadmap tools, and personalized tracking."
    }
  ];

  return (
    <div className="min-h-screen bg-surface-base text-brand-navy font-sans antialiased selection:bg-brand-mint selection:text-brand-primary relative overflow-hidden">
      
      {/* Decorative Glow Background Spheres */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-brand-cyan/10 blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          {/* Logo Symbol */}
          <div className="w-17 **:flex items-center justify-center">
            <img src="/logo.png" alt="" />
          </div>
         
        </div>

        <span className="text-sm font-medium text-text-muted hidden sm:inline-block">
          Better Skills. Brighter Opportunities.
        </span>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-8 pb-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Hero Content & Form */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-mint border border-brand-primary/20 text-brand-primary text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Coming Soon</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-navy leading-[1.15]">
              The next big thing <br className="hidden sm:inline" />
              <span className="text-brand-primary">will arrive soon.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
              Your all-in-one interview preparation platform — with everything you need to practice, learn, and get hired. From system design and core CS subjects to handpicked problems, expert discussions, job updates, and much more.
            </p>

            {/* Feature Icons Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              {features.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-surface-card border border-border-default hover:border-brand-primary/30 transition-colors duration-200">
                  <div className="mb-2 p-2 w-fit rounded-lg bg-brand-mint">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-sm text-brand-navy">{item.title}</h3>
                  <p className="text-xs text-text-muted line-clamp-2 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>

           

          </div>

          {/* Right Column - Visual Mockup Illustration */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main App Canvas Card */}
            <div className="w-full max-w-md bg-white rounded-2xl border border-border-main shadow-2xl p-5 relative z-10 space-y-4">
              
              {/* Fake Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[11px] font-medium text-text-muted bg-surface-card px-3 py-0.5 rounded-full border border-border-subtle">
                  learnbitbybit.com
                </div>
              </div>

              {/* Mock Dashboard UI Content */}
              <div className="space-y-3">
                <div className="p-3 bg-brand-mint/50 rounded-xl border border-brand-primary/20 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-brand-primary">Daily Mastery Goal</p>
                    <p className="text-sm font-bold text-brand-navy">3/5 Modules Completed</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-xl bg-surface-card border border-border-subtle space-y-1">
                    <div className="w-6 h-6 rounded bg-brand-primary/10 text-brand-primary flex items-center justify-center text-xs font-bold">DSA</div>
                    <p className="text-xs font-medium text-brand-navy">Graphs & Trees</p>
                    <p className="text-[10px] text-text-muted">12 Solved</p>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-card border border-border-subtle space-y-1">
                    <div className="w-6 h-6 rounded bg-brand-cyan/10 text-brand-cyan flex items-center justify-center text-xs font-bold">HLD</div>
                    <p className="text-xs font-medium text-brand-navy">Rate Limiters</p>
                    <p className="text-[10px] text-text-muted">System Design</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-surface-card border border-border-subtle flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                    <Database className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-brand-navy truncate">SQL Indexing & Query Tuning</p>
                    <p className="text-[10px] text-text-muted">DBMS Core Subject</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Floating Context Pills */}
            <div className="hidden sm:flex items-center gap-2 absolute -top-4 -right-4 bg-white px-3 py-2 rounded-xl shadow-lg border border-border-main z-20">
              <Code2 className="w-4 h-4 text-brand-primary" />
              <span className="text-xs font-semibold text-brand-navy">Coding Practice</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 absolute -bottom-4 -left-4 bg-white px-3 py-2 rounded-xl shadow-lg border border-border-main z-20">
              <Briefcase className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-navy">Job Updates</span>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted gap-4 relative z-10">
        <p>© {new Date().getFullYear()} learnbitbybit. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Contact</a>
        </div>
      </footer>

    </div>
  );
}