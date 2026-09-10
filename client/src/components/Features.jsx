import React from "react";
import {
  BriefcaseBusiness,
  Code2,
  FileText,
  Layers3,
  MessageSquare,
} from "lucide-react";

const platformOfferings = [
  {
    icon: Code2,
    label: "01",
    title: "Curated DSA Practice",
    description:
      "Solve carefully selected problems organized around essential patterns, concepts, and interview frequency.",
    accent: "bg-brand-primary/10 text-brand-primary",
  },
  {
    icon: Layers3,
    label: "02",
    title: "System Design",
    description:
      "Learn to design scalable systems through visual architectures, real-world scenarios, and practical trade-offs.",
    accent: "bg-brand-primary/10 text-brand-primary",
  },
  {
    icon: FileText,
    label: "03",
    title: "CS Core Fundamentals",
    description:
      "Strengthen your understanding of operating systems, DBMS, computer networks, OOP, and other interview essentials.",
    accent: "bg-brand-primary/10 text-brand-primary",
  },
  {
    icon: MessageSquare,
    label: "04",
    title: "Mock Interviews",
    description:
      "Practice realistic technical and behavioral interviews with structured feedback to identify and improve weak areas.",
    accent: "bg-brand-primary/10 text-brand-primary",
  },
  {
    icon: FileText,
    label: "05",
    title: "Resume & JD Analysis",
    description:
      "Compare your resume with job descriptions, identify gaps, and get actionable insights to improve your applications.",
    accent: "bg-brand-primary/10 text-brand-primary",
  },
  {
    icon: BriefcaseBusiness,
    label: "06",
    title: "Jobs & Opportunities",
    description:
      "Stay updated with relevant software engineering opportunities, hiring drives, internships, and career resources.",
    accent: "bg-brand-primary/10 text-brand-primary",
  },
];

const Features = () => {
  return (
    <section id="features" className="border-t border-border-default pt-16 lg:pt-24">
      <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-brand-primary">
            Inside the platform
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-text-main sm:text-5xl">
            Everything you need to prepare for your next interview.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-text-muted">
            One focused platform for learning, practicing, preparing, and
            staying ahead throughout your software engineering journey.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {platformOfferings.map(
          ({ icon: Icon, label, title, description, accent }) => (
            <article
              key={label}
              className="group relative overflow-hidden rounded-2xl border border-border-default bg-surface-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-focus hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)] dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <span className="font-mono text-xs font-bold text-text-muted/60">
                  {label}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-black text-text-main">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-muted">
                {description}
              </p>

              <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-brand-primary/5 transition-transform duration-300 group-hover:scale-150" />
            </article>
          ),
        )}
      </div>
    </section>
  );
};

export default Features;