import React, { useState } from "react";
import {
  BookOpen,
  Code2,
  Cpu,
  Menu,
  Moon,
  Sun,
  User,
  X,
} from "lucide-react";

const NAV_LINKS = [
  { label: "DSA Practice", href: "#dsa", icon: Code2 },
  { label: "System Design", href: "#system-design", icon: Cpu },
  { label: "CS Fundamentals", href: "#cs-core", icon: BookOpen },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-default bg-surface-base/80 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Code2 className="h-5 w-5" />
          </div>
          <span className="text-lg font-black tracking-tight text-text-main">
            Prep<span className="text-brand-primary">Engine</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold text-text-muted transition-colors duration-150 hover:bg-surface-hover hover:text-text-main"
            >
              <Icon className="h-4 w-4 text-brand-primary" />
              {label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-default bg-surface-elevated text-text-muted transition-colors duration-150 hover:border-border-strong hover:text-text-main"
          >
            {darkMode ? (
              <Sun className="h-4 w-4 text-warning" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* User / Sign In Button */}
          <a
            href="#login"
            className="hidden items-center gap-2 rounded-xl bg-brand-primary px-4 py-2 text-sm font-bold text-white shadow-sm transition-all duration-150 hover:opacity-90 sm:inline-flex"
          >
            <User className="h-4 w-4" />
            Sign In
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-default bg-surface-elevated text-text-main md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-border-subtle bg-surface-card px-4 pt-3 pb-6 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted hover:bg-surface-hover hover:text-text-main"
              >
                <Icon className="h-4 w-4 text-brand-primary" />
                {label}
              </a>
            ))}
            <a
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-brand-primary py-2.5 text-sm font-bold text-white"
            >
              <User className="h-4 w-4" />
              Sign In
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;