import { useState, useEffect } from 'react'
import {
  Compass,
  Play,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Users,
  ChevronDown,
  Layers,
  Activity,
  MousePointer,
  BarChart3,
  Search,
  Star,
  Gauge,
  HelpCircle,
  Mail,
  Lock,
  Globe2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { useToast } from '@/hooks/use-toast'
import { WatchDemoModal } from '@/components/WatchDemoModal'
import { SignInModal } from '@/components/SignInModal'
import { Url360Analyzer } from '@/components/Url360Analyzer'

export default function Index() {
  const { toast } = useToast()
  const [demoOpen, setDemoOpen] = useState(false)
  const [signInOpen, setSignInOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup')

  // Typewriter effect headline
  const phrases = [
    '360° Page Intelligence',
    'Conversion Bottlenecks',
    'Core Web Vitals & Speed',
    'Continuous UX Optimization',
  ]
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex]
    const typingSpeed = isDeleting ? 40 : 80
    const delayBeforeDelete = 2000

    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && currentText === fullText) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, delayBeforeDelete)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
    } else {
      timeout = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1),
        )
      }, typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentPhraseIndex])

  // Pricing state
  const [annualBilling, setAnnualBilling] = useState(true)

  // CTA form state
  const [ctaEmail, setCtaEmail] = useState('')
  const [ctaLoading, setCtaLoading] = useState(false)
  const [ctaError, setCtaError] = useState('')

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!ctaEmail) {
      setCtaError('Please provide your work email address')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ctaEmail)) {
      setCtaError('Please enter a valid email format')
      return
    }

    setCtaError('')
    setCtaLoading(true)

    setTimeout(() => {
      setCtaLoading(false)
      toast({
        title: 'Trial account initialized!',
        description: `Confirmation email dispatched to ${ctaEmail}. Get ready for complete 360° insights!`,
      })
      setCtaEmail('')
    }, 800)
  }

  const openAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode)
    setSignInOpen(true)
  }

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 overflow-hidden">
        {/* Animated Background Gradients & Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-400/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-violet-400/15 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold mb-6 shadow-sm animate-fade-in hover:bg-indigo-100 transition-colors cursor-pointer"
            onClick={() => setDemoOpen(true)}
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-ping" />
            <span>Next-Gen URL Diagnostic Lab</span>
            <span className="text-slate-400">•</span>
            <span className="text-indigo-600 font-bold flex items-center gap-1">
              Visão 360° Engine <ArrowRight className="w-3 h-3" />
            </span>
          </div>

          {/* Headline with Typewriter */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl leading-[1.12]">
            Turn Any URL Into Growth With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-600">
              {currentText}
            </span>
            <span className="inline-block w-1 h-9 sm:h-12 md:h-14 bg-indigo-600 ml-1 translate-y-1 animate-pulse" />
          </h1>

          {/* Value proposition subheadline */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed font-normal">
            Stop guessing why visitors drop off. OmniScope conducts instant 360° audits across
            conversion friction, real-world page speed, technical SEO, and accessibility in under 3
            seconds.
          </p>

          {/* Two CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full justify-center max-w-md mb-12">
            <Button
              size="lg"
              onClick={() => openAuth('signup')}
              className="w-full sm:w-auto h-12 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-base flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setDemoOpen(true)}
              className="w-full sm:w-auto h-12 px-6 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl border border-slate-300 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all text-base flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-indigo-600 text-indigo-600" />
              Watch Demo
            </Button>
          </div>

          {/* Micro trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 mb-14">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 14-day full Pro trial
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Integrates with GA4 & PostHog
            </span>
          </div>

          {/* Interactive Dashboard Mockup Illustration */}
          <div className="w-full max-w-5xl rounded-2xl border border-slate-200/90 bg-white/95 shadow-2xl p-2 sm:p-4 relative group">
            {/* Window bar */}
            <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-100">
              <div className="flex items-center space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="bg-slate-100 text-slate-600 px-4 py-1 rounded-full text-xs font-mono flex items-center gap-2">
                <Globe2 className="w-3 h-3 text-slate-400" />
                <span>omniscope.io/analytics/overview?focus=vision-360</span>
              </div>
              <div className="text-xs text-slate-400 font-medium hidden sm:block">
                Status: Live 360° Monitored
              </div>
            </div>

            {/* Mockup content */}
            <div className="pt-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
              {/* Stat card 1 */}
              <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-500">Core Web Vitals</span>
                  <span className="p-1 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                    99/100
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-slate-900">0.78s</div>
                <p className="text-[11px] text-emerald-600 font-medium mt-1">
                  Faster than 94% of SaaS
                </p>
              </div>

              {/* Stat card 2 */}
              <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-500">Conversion Readiness</span>
                  <span className="p-1 rounded bg-indigo-100 text-indigo-700 text-[10px] font-bold">
                    Optimal
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-slate-900">4.82%</div>
                <p className="text-[11px] text-indigo-600 font-medium mt-1">
                  +1.4% projected after audit
                </p>
              </div>

              {/* Stat card 3 */}
              <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-500">SEO Architecture</span>
                  <span className="p-1 rounded bg-violet-100 text-violet-700 text-[10px] font-bold">
                    96/100
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-slate-900">Clean DOM</div>
                <p className="text-[11px] text-slate-500 font-medium mt-1">
                  Schema tags & OpenGraph OK
                </p>
              </div>

              {/* Stat card 4 */}
              <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-500">Security & Trust</span>
                  <span className="p-1 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                    Grade A
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-slate-900">100%</div>
                <p className="text-[11px] text-emerald-600 font-medium mt-1">
                  Strict CSP & TLS 1.3 Active
                </p>
              </div>
            </div>

            {/* Mock Chart & Recommendations Row */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-5 rounded-xl border border-slate-800 shadow-inner flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                      Visitor Drop-Off Telemetry vs. Page Velocity
                    </span>
                    <span className="text-[11px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-400/20">
                      Live Stream
                    </span>
                  </div>
                  {/* Visual simulated bar graph */}
                  <div className="h-28 flex items-end gap-2 pt-4">
                    {[45, 62, 58, 75, 82, 91, 88, 95, 99, 94, 96, 98].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1 group/bar">
                        <div
                          className="w-full bg-gradient-to-t from-indigo-500 to-violet-400 rounded-t-sm transition-all duration-300 group-hover/bar:from-indigo-400 group-hover/bar:to-white"
                          style={{ height: `${val}%` }}
                        />
                        <span className="text-[9px] text-slate-400">{idx + 1}h</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300 mt-2">
                  <span>
                    Average load speed: <strong className="text-emerald-400">0.82s</strong>
                  </span>
                  <span>
                    Calculated bounce probability:{' '}
                    <strong className="text-emerald-400">1.8%</strong>
                  </span>
                </div>
              </div>

              <div className="bg-slate-50/80 p-5 rounded-xl border border-slate-100 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block mb-2">
                    Actionable 360° Wins
                  </span>
                  <div className="space-y-2.5">
                    <div className="p-2 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-700 shadow-sm flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
                      <span>Hero CTA contrast increased to 7.4:1 ratio</span>
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-700 shadow-sm flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                      <span>Next-gen WebP compression saves 412 KB</span>
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-700 shadow-sm flex items-start gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span>HSTS security preloading enabled</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setDemoOpen(true)}
                  className="mt-3 text-xs text-indigo-600 font-semibold hover:text-indigo-800 flex items-center gap-1"
                >
                  Inspect complete 360° audit logs <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Scroll indicator with bounce animation */}
          <div className="mt-14 flex flex-col items-center">
            <a
              href="#vision"
              className="group flex flex-col items-center text-xs font-medium text-slate-400 hover:text-indigo-600 transition-colors"
            >
              <span>Explore 360° Architecture</span>
              <ChevronDown className="w-5 h-5 mt-1 animate-bounce text-indigo-600 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF SECTION */}
      <section className="py-14 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 tracking-wider uppercase mb-8">
            Trusted by over 4,500+ fast-growing modern SaaS teams & digital agencies
          </p>

          {/* Customer Logos Carousel / Marquee Grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-2 font-bold text-slate-700 text-lg">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-extrabold">
                S
              </div>
              <span>STRATIO</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-700 text-lg">
              <div className="w-7 h-7 rounded-lg bg-violet-600 text-white flex items-center justify-center text-xs font-extrabold">
                A
              </div>
              <span>APEXFLOW</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-700 text-lg">
              <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center text-xs font-extrabold">
                V
              </div>
              <span>VELOCITY</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-700 text-lg">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-extrabold">
                N
              </div>
              <span>NEXUSAI</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-700 text-lg">
              <div className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs font-extrabold">
                C
              </div>
              <span>CLOUDSTACK</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-700 text-lg">
              <div className="w-7 h-7 rounded-lg bg-rose-600 text-white flex items-center justify-center text-xs font-extrabold">
                P
              </div>
              <span>PULSEPAGE</span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>
                <strong>4.9 / 5</strong> rating on G2 & Capterra
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>SOC2 Type II & ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-600" />
              <span>99.99% Uptime SLA Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 360° VISION SPOTLIGHT */}
      <section id="vision" className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Por que a Visão 360°?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
              A Complete Panoramic Look at Every Visitor Touchpoint
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Traditional analytics only tell you that users left. OmniScope's 360° architecture
              investigates every angle: visual heatmaps, rendering speeds, semantic clarity, and
              device quirks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <MousePointer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1. Conversion Pathing</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Identifies friction points where visitors hesitate, scroll back, or bounce before
                reaching the primary checkout or sign-up action.
              </p>
              <ul className="space-y-2 text-xs text-slate-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Scroll depth vs. CTA
                  exposure
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Form abandonment
                  analysis
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">2. Real-World Speed</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Goes beyond synthetic testing to capture actual user experience across diverse
                mobile networks, CPU throttles, and edge caches.
              </p>
              <ul className="space-y-2 text-xs text-slate-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Instant LCP & INP
                  diagnosis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Automated asset payload
                  budgets
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">3. Automated Fixes</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Receive exact code snippets, CSS rules, and copy improvements that can be deployed
                to your repository or CMS within minutes.
              </p>
              <ul className="space-y-2 text-xs text-slate-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Copy clarity & contrast
                  recommendations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> One-click PR generator
                  for Next.js & Vite
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE 360° URL ANALYZER (Fulfills the prompt focus on URL input + 360° analysis) */}
      <Url360Analyzer onStartTrial={(testedUrl) => openAuth('signup')} />

      {/* 5. FEATURES GRID SECTION */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Core Platform Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
              Everything Your SaaS Needs to Maximize Conversion Rates
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Designed from the ground up for modern growth teams. Build, measure, and scale with
              full confidence.
            </p>
          </div>

          {/* 6 Feature cards in responsive grid layout with hover elevation effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-7 rounded-2xl border border-slate-200/80 bg-white hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-200">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Live 360° Telemetry</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Stream real-time performance and conversion pulses across geographic regions without
                degrading your frontend bundle size.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-7 rounded-2xl border border-slate-200/80 bg-white hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-200">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Multi-Viewport Testing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Test responsive layouts against 48+ simulated devices including latest iOS, Android,
                and ultra-wide desktop breakpoints.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-7 rounded-2xl border border-slate-200/80 bg-white hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-600 text-amber-600 group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-200">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Core Web Vitals Guard</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Prevent sudden Google search rank drops with proactive alerting before bad
                deployments reach production.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-7 rounded-2xl border border-slate-200/80 bg-white hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-violet-50 group-hover:bg-violet-600 text-violet-600 group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-200">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Conversion Funnel Tracing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Discover the exact sequence of clicks, scrolls, and interactions that leads to
                successful sign-ups and upgrades.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-7 rounded-2xl border border-slate-200/80 bg-white hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-sky-50 group-hover:bg-sky-600 text-sky-600 group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-200">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Semantic SEO Audits</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Automated validation for JSON-LD schemas, Twitter card previews, OpenGraph hygiene,
                and WCAG accessibility standards.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-7 rounded-2xl border border-slate-200/80 bg-white hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-rose-50 group-hover:bg-rose-600 text-rose-600 group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Enterprise Security & Privacy
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Zero third-party cookies or intrusive trackers. Fully GDPR, CCPA, and SOC2 compliant
                diagnostic pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Customer Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
              Loved by Founders, Marketers, and Product Leaders
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Here is how SaaS companies are unlocking 30%+ higher conversion rates using OmniScope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "OmniScope's 360° URL inspection identified a subtle Core Web Vitals layout shift
                  on mobile that was costing us $18,000 monthly in abandoned checkout sessions.
                  Fixed in 10 minutes!"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-6">
                <img
                  src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=14"
                  alt="Elena Vance"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-100"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Elena Vance</h4>
                  <p className="text-xs text-slate-500">VP of Growth at HyperSaaS</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "Having UX friction, performance benchmarks, and semantic SEO combined into one
                  360° single dashboard is a game changer. We deprecated three separate legacy
                  monitoring subscriptions."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-6">
                <img
                  src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=42"
                  alt="Marcus Brody"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-100"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Marcus Brody</h4>
                  <p className="text-xs text-slate-500">CTO at StackMetrics</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "The typewriter headline and instant demo convinced me on day one. Our landing
                  page conversion rate jumped from 2.6% to 4.4% within three weeks of implementing
                  their 360° audit advice."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-6">
                <img
                  src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=99"
                  alt="Sophia Chen"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-100"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Sophia Chen</h4>
                  <p className="text-xs text-slate-500">Founder & CEO at FormVibe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRICING TIERS SECTION */}
      <section id="pricing" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Simple Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
              Invest in Continuous Conversion Intelligence
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every plan includes a 14-day unrestricted trial. Upgrade, downgrade, or cancel
              anytime.
            </p>

            {/* Monthly / Annual Billing Toggle */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <span
                className={`text-sm font-medium ${!annualBilling ? 'text-slate-900 font-bold' : 'text-slate-500'}`}
              >
                Monthly billing
              </span>
              <Switch
                checked={annualBilling}
                onCheckedChange={setAnnualBilling}
                className="data-[state=checked]:bg-indigo-600"
              />
              <span
                className={`text-sm font-medium flex items-center gap-1.5 ${annualBilling ? 'text-slate-900 font-bold' : 'text-slate-500'}`}
              >
                Annual billing
                <span className="text-[11px] font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </div>

          {/* 3 Tier Cards with hover transforms */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Tier 1: Starter */}
            <div className="rounded-2xl border border-slate-200 p-8 bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-200 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Starter</h3>
                <p className="text-xs text-slate-500 mb-6">
                  For indie hackers and early stage projects.
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">
                    ${annualBilling ? '29' : '39'}
                  </span>
                  <span className="text-xs text-slate-500">/ month</span>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Up to 3 monitored URLs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Daily 360° automated audits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Core Web Vitals tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Basic email alerts for regressions</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="w-4 h-4 flex items-center justify-center font-bold text-xs">
                      ✕
                    </span>
                    <span className="line-through">AI conversion recommendations</span>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                onClick={() => openAuth('signup')}
                className="w-full mt-8 border-slate-300 hover:bg-slate-50 font-semibold"
              >
                Start 14-Day Free Trial
              </Button>
            </div>

            {/* Tier 2: Pro (Most Popular) */}
            <div className="rounded-2xl border-2 border-indigo-600 p-8 bg-white shadow-xl hover:shadow-2xl transition-all duration-200 flex flex-col justify-between relative transform lg:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                Most Popular
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Growth 360°</h3>
                <p className="text-xs text-slate-500 mb-6">
                  For scaling startups and high-traffic marketing teams.
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-indigo-600">
                    ${annualBilling ? '79' : '99'}
                  </span>
                  <span className="text-xs text-slate-500">/ month</span>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Up to 15 monitored URLs</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Hourly 360° automated audits</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>AI Conversion Heatmaps & Attention Pathing</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Real-time Slack & Discord webhook alerts</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>GitHub Actions CI/CD integration</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => openAuth('signup')}
                className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-600/30"
              >
                Start 14-Day Free Trial
              </Button>
            </div>

            {/* Tier 3: Enterprise */}
            <div className="rounded-2xl border border-slate-200 p-8 bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-200 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Enterprise</h3>
                <p className="text-xs text-slate-500 mb-6">
                  For digital agencies and multi-brand organizations.
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">
                    ${annualBilling ? '199' : '249'}
                  </span>
                  <span className="text-xs text-slate-500">/ month</span>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Unlimited monitored URLs & domains</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Continuous 5-minute real-time telemetry</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>White-label PDF reports with client branding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dedicated account strategist & 99.99% SLA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Custom SAML SSO & team role management</span>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                onClick={() => openAuth('signup')}
                className="w-full mt-8 border-slate-300 hover:bg-slate-50 font-semibold"
              >
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION WITH EMAIL CAPTURE & GUARANTEE BADGES */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white relative overflow-hidden"
      >
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Start Optimizing In 60 Seconds
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Ready to unlock your page's full conversion potential?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Join over 4,500+ growth engineers and product marketers who trust OmniScope 360° to
            eliminate page friction and maximize revenue.
          </p>

          {/* Email Capture Form with Validation */}
          <form onSubmit={handleCtaSubmit} className="max-w-lg mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-2 bg-slate-900/90 p-2 rounded-2xl border border-slate-700 shadow-2xl backdrop-blur">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <Input
                  type="email"
                  value={ctaEmail}
                  onChange={(e) => {
                    setCtaEmail(e.target.value)
                    if (ctaError) setCtaError('')
                  }}
                  placeholder="Enter your work email address..."
                  className={`pl-10 h-12 bg-transparent text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm placeholder:text-slate-500 ${
                    ctaError ? 'placeholder:text-red-300' : ''
                  }`}
                />
              </div>
              <Button
                type="submit"
                disabled={ctaLoading}
                className="h-12 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 shrink-0 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                {ctaLoading ? 'Setting Up...' : 'Start Your Free Trial'}
              </Button>
            </div>
            {ctaError && (
              <p className="text-xs text-rose-400 font-medium text-left mt-2 pl-2">{ctaError}</p>
            )}
          </form>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>14-day unrestricted trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Cancel anytime in one click</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>SOC2 Type II encrypted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <WatchDemoModal
        open={demoOpen}
        onOpenChange={setDemoOpen}
        onGetStartedClick={() => openAuth('signup')}
      />
      <SignInModal open={signInOpen} onOpenChange={setSignInOpen} defaultTab={authMode} />
    </div>
  )
}
