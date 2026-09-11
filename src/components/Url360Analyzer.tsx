import { useState } from 'react'
import {
  Globe2,
  Search,
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  Eye,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RefreshCw,
  Gauge,
  Smartphone,
  MousePointerClick,
  Code2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

interface UrlAnalyzerProps {
  onStartTrial?: (url?: string) => void
}

interface AuditMetric {
  title: string
  score: number
  status: 'excellent' | 'good' | 'warning'
  description: string
  findings: string[]
}

const SAMPLE_URLS = [
  'https://stripe.com/checkout',
  'https://linear.app/features',
  'https://notion.so/pricing',
  'https://figma.com/design',
]

export function Url360Analyzer({ onStartTrial }: UrlAnalyzerProps) {
  const [url, setUrl] = useState('https://mystore-saas.com/landing')
  const [analyzing, setAnalyzing] = useState(false)
  const [hasAudited, setHasAudited] = useState(true)
  const [activeTab, setActiveTab] = useState('all')

  const handleRunAudit = (targetUrl?: string) => {
    const finalUrl = targetUrl || url
    if (!finalUrl) return
    if (targetUrl) setUrl(targetUrl)

    setAnalyzing(true)
    setTimeout(() => {
      setAnalyzing(false)
      setHasAudited(true)
    }, 900)
  }

  const overallScore = 89

  const metrics: Record<string, AuditMetric> = {
    ux: {
      title: 'UX & Conversion Architecture',
      score: 92,
      status: 'excellent',
      description: 'Attention pathing, visual hierarchy and conversion friction.',
      findings: [
        'Primary CTA button placed strictly above 680px fold line (Optimal)',
        'Value proposition subheadline readability score: 94% (Flesch-Kincaid)',
        'Form inputs reduced to 2 steps with auto-focus support',
      ],
    },
    performance: {
      title: 'Speed & Core Web Vitals',
      score: 96,
      status: 'excellent',
      description: 'Real-user latency, LCP, INP, CLS benchmarks and asset compression.',
      findings: [
        'Largest Contentful Paint (LCP): 0.84s (Exceeds 2.5s threshold by 66%)',
        'Cumulative Layout Shift (CLS): 0.001 (Zero noticeable element jumping)',
        'Next-gen image formats (AVIF/WebP) utilized with proper responsive srcset',
      ],
    },
    seo: {
      title: 'Technical SEO & Discoverability',
      score: 88,
      status: 'good',
      description: 'Structured metadata, OpenGraph tags, semantic DOM, canonical hygiene.',
      findings: [
        'Single H1 tag detected with targeted semantic intent',
        'OpenGraph and Twitter Card social preview images validated',
        'Recommendation: Add FAQ Schema JSON-LD for rich snippet eligibility',
      ],
    },
    security: {
      title: 'Trust & Security Hygiene',
      score: 100,
      status: 'excellent',
      description: 'TLS encryption, CSP headers, privacy compliance and zero tracking leaks.',
      findings: [
        'TLS 1.3 protocol active with valid HSTS preload header',
        'No insecure third-party script injections detected',
        'GDPR/CCPA compliant consent framework integrated',
      ],
    },
  }

  return (
    <section id="live-analyzer" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> 360° Real-Time URL Inspector
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Test any page URL in our 360° Diagnostic Lab
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Enter your landing page, checkout, or competitor URL below. In seconds, OmniScope
            evaluates conversion friction, performance bottlenecks, technical SEO, and
            accessibility.
          </p>
        </div>

        {/* Input Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleRunAudit()
            }}
            className="flex flex-col sm:flex-row gap-2 bg-slate-800/90 p-2 rounded-2xl border border-slate-700 shadow-2xl backdrop-blur-md"
          >
            <div className="relative flex-1 flex items-center">
              <Globe2 className="absolute left-3.5 w-5 h-5 text-indigo-400 pointer-events-none" />
              <Input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/pricing"
                className="pl-11 pr-4 h-12 bg-transparent text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm placeholder:text-slate-500"
              />
            </div>
            <Button
              type="submit"
              disabled={analyzing}
              className="h-12 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 shrink-0 flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              {analyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Inspecting 360°...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  Run 360° Audit
                </>
              )}
            </Button>
          </form>

          {/* Quick sample chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3.5 text-xs text-slate-400">
            <span className="text-slate-500">Quick Samples:</span>
            {SAMPLE_URLS.map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => handleRunAudit(sample)}
                className="px-2.5 py-1 rounded-md bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all text-[11px]"
              >
                {sample.replace('https://', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Audit Results Dashboard Mockup */}
        {hasAudited && (
          <div className="bg-slate-950/90 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-sm animate-fade-in">
            {/* Top Bar */}
            <div className="px-6 py-4 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-sm font-semibold text-slate-200 truncate max-w-xs sm:max-w-md">
                  {url}
                </span>
                <Badge
                  variant="outline"
                  className="border-indigo-500/30 text-indigo-400 bg-indigo-950/40 text-xs"
                >
                  Full 360° Scope
                </Badge>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span>Audited: Just now</span>
                <span className="hidden sm:inline">Engine: Chromium Headless v122</span>
              </div>
            </div>

            {/* Scorecard Hero Strip */}
            <div className="p-6 sm:p-8 border-b border-slate-800 bg-gradient-to-r from-slate-950 via-indigo-950/20 to-slate-950 grid grid-cols-2 lg:grid-cols-5 gap-4 items-center">
              <div className="col-span-2 lg:col-span-1 flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-indigo-600 p-0.5 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-emerald-400">{overallScore}</span>
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                      Score
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">360° Grade A</h3>
                  <p className="text-xs text-emerald-400 font-medium">Ready for high conversion</p>
                </div>
              </div>

              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>UX & Conversion</span>
                  <span className="font-bold text-indigo-400">92%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full" style={{ width: '92%' }} />
                </div>
              </div>

              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Speed / Vitals</span>
                  <span className="font-bold text-emerald-400">96%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '96%' }} />
                </div>
              </div>

              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>SEO & Semantics</span>
                  <span className="font-bold text-sky-400">88%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-sky-500 h-full rounded-full" style={{ width: '88%' }} />
                </div>
              </div>

              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Security & Trust</span>
                  <span className="font-bold text-emerald-400">100%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </div>

            {/* Detailed Findings Grid */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-indigo-400" /> Key 360° Diagnostic Highlights
                </h4>
                <span className="text-xs text-slate-400">Showing 4 primary audit pillars</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(metrics).map(([key, item]) => (
                  <div
                    key={key}
                    className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {key === 'ux' && <MousePointerClick className="w-4 h-4 text-indigo-400" />}
                        {key === 'performance' && <Zap className="w-4 h-4 text-amber-400" />}
                        {key === 'seo' && <Code2 className="w-4 h-4 text-sky-400" />}
                        {key === 'security' && <ShieldCheck className="w-4 h-4 text-emerald-400" />}
                        <span className="font-semibold text-sm text-white">{item.title}</span>
                      </div>
                      <Badge className="bg-indigo-600/30 text-indigo-300 border-indigo-500/30 text-xs">
                        {item.score} / 100
                      </Badge>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>

                    <div className="space-y-2 pt-1 border-t border-slate-800/80">
                      {item.findings.map((finding, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{finding}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA to unlock continuous tracking */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-indigo-950/70 border border-indigo-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    Want continuous 24/7 360° monitoring with automated alerts?
                  </h4>
                  <p className="text-xs text-slate-400">
                    Get notified immediately whenever conversion rates dip, assets slow down, or
                    layout shifts occur.
                  </p>
                </div>
                <Button
                  onClick={() => onStartTrial && onStartTrial(url)}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-md shadow-indigo-600/30 shrink-0 px-5"
                >
                  Monitor This Page Free <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
