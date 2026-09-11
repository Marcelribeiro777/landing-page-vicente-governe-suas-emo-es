import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Compass,
  CheckCircle2,
  Mail,
  Heart,
  Globe2,
} from 'lucide-react'
import { SignInModal } from '@/components/SignInModal'
import { WatchDemoModal } from '@/components/WatchDemoModal'

interface LayoutProps {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [signInOpen, setSignInOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: '360° Vision', href: '#vision' },
    { label: 'Features', href: '#features' },
    { label: 'Live Audit', href: '#live-analyzer' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const openAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode)
    setSignInOpen(true)
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 bg-indigo-500/30 text-indigo-200 px-2 py-0.5 rounded-full text-[10px] font-semibold border border-indigo-400/30 uppercase tracking-wider">
          New v3.4
        </span>
        <span>
          Instant 360° URL Diagnostic is live — Inspect UX, Speed, SEO, and Security in 3 seconds.
        </span>
        <a
          href="#live-analyzer"
          onClick={(e) => handleNavClick(e, '#live-analyzer')}
          className="underline font-semibold hover:text-indigo-200 hidden sm:inline-flex items-center gap-1"
        >
          Try sample URL <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      {/* Fixed Sticky Header Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white/60 backdrop-blur-sm border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-700 via-indigo-600 to-violet-500 text-white flex items-center justify-center shadow-md shadow-indigo-600/25 group-hover:scale-105 transition-transform duration-150">
              <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                Omni<span className="text-indigo-600">Scope</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
                360° Page Vision
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors py-1 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => openAuth('signin')}
              className="font-medium border-slate-300 hover:bg-slate-100 hover:text-slate-900 text-slate-700"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              onClick={() => openAuth('signup')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-sm shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Get Started Free
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col p-6 z-10 animate-slide-up">
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="font-bold text-lg text-slate-900">OmniScope</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-md text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50 px-3 py-2 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <Button
                variant="outline"
                className="w-full justify-center"
                onClick={() => openAuth('signin')}
              >
                Sign In
              </Button>
              <Button
                className="w-full justify-center bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={() => openAuth('signup')}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1">{children}</main>

      {/* Global Footer */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/30">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Omni<span className="text-indigo-400">Scope</span>
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                Empowering SaaS founders, growth engineers, and digital marketing leaders with
                comprehensive 360° page intelligence, Core Web Vitals diagnostic, and conversion
                auditing.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-xs font-semibold text-slate-200 tracking-wider uppercase mb-4">
                Platform
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="#vision"
                    onClick={(e) => handleNavClick(e, '#vision')}
                    className="hover:text-white transition-colors"
                  >
                    360° Vision Engine
                  </a>
                </li>
                <li>
                  <a
                    href="#live-analyzer"
                    onClick={(e) => handleNavClick(e, '#live-analyzer')}
                    className="hover:text-white transition-colors"
                  >
                    Instant URL Diagnostic
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    onClick={(e) => handleNavClick(e, '#features')}
                    className="hover:text-white transition-colors"
                  >
                    Conversion Heatmaps
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    onClick={(e) => handleNavClick(e, '#pricing')}
                    className="hover:text-white transition-colors"
                  >
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <span className="inline-flex items-center gap-1.5 text-xs text-indigo-400 bg-indigo-950/70 border border-indigo-800/60 px-2 py-0.5 rounded-full">
                    API v3.4 Ready
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-200 tracking-wider uppercase mb-4">
                Resources
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => setDemoOpen(true)}
                    className="hover:text-white transition-colors text-left"
                  >
                    Product Walkthrough
                  </button>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    onClick={(e) => handleNavClick(e, '#testimonials')}
                    className="hover:text-white transition-colors"
                  >
                    Customer Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    onClick={(e) => handleNavClick(e, '#features')}
                    className="hover:text-white transition-colors"
                  >
                    Core Web Vitals Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#live-analyzer"
                    onClick={(e) => handleNavClick(e, '#live-analyzer')}
                    className="hover:text-white transition-colors"
                  >
                    Sample Audits
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-200 tracking-wider uppercase mb-4">
                Company & Legal
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="hover:text-white transition-colors"
                  >
                    Contact Sales
                  </a>
                </li>
                <li>
                  <span
                    className="hover:text-white transition-colors cursor-pointer"
                    onClick={() => openAuth('signin')}
                  >
                    Partner Portal
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Privacy Policy
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Terms of Service
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Security & SOC2
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p>© {new Date().getFullYear()} OmniScope 360° Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                All diagnostic nodes operational
              </span>
              <span>US-East (N. Virginia)</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Modals */}
      <SignInModal open={signInOpen} onOpenChange={setSignInOpen} defaultTab={authMode} />
      <WatchDemoModal
        open={demoOpen}
        onOpenChange={setDemoOpen}
        onGetStartedClick={() => openAuth('signup')}
      />
    </div>
  )
}
