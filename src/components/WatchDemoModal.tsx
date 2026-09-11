import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Play, CheckCircle2, Sparkles, Monitor, Activity, ShieldCheck, Zap } from 'lucide-react'

interface WatchDemoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onGetStartedClick?: () => void
}

export function WatchDemoModal({ open, onOpenChange, onGetStartedClick }: WatchDemoModalProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'audit' | 'metrics'>('overview')

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl sm:max-w-4xl p-0 overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl">
        <DialogHeader className="p-6 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-400">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Product Tour
            </span>
          </div>
          <DialogTitle className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            See OmniScope 360° in Action
          </DialogTitle>
          <DialogDescription className="text-slate-600 dark:text-slate-400">
            Discover how our continuous 360° page intelligence detects conversion bottlenecks, SEO
            regressions, and performance leaks in real time.
          </DialogDescription>
        </DialogHeader>

        <div className="p-6 space-y-6">
          {/* Mock Video / Interactive Walkthrough Window */}
          <div className="relative rounded-xl border border-slate-800/80 bg-slate-950 text-white overflow-hidden shadow-xl aspect-video flex flex-col justify-between group">
            {/* Top browser/window bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 backdrop-blur">
              <div className="flex items-center space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs text-slate-400 font-mono flex items-center gap-1">
                  https://app.omniscope.io/demo/live-analyzer
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-800/40">
                  <Activity className="w-3 h-3 animate-pulse" /> Live Analysis Mode
                </span>
              </div>
            </div>

            {/* Simulated Live Interface */}
            {!isPlaying ? (
              <div className="relative flex-1 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none" />
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 w-16 h-16 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all mb-4 group-hover:ring-4 group-hover:ring-indigo-400/20"
                  aria-label="Play product demo preview"
                >
                  <Play className="w-7 h-7 ml-1 fill-white" />
                </button>
                <h4 className="text-lg font-semibold text-white mb-1">
                  Click to Start Interactive Walkthrough
                </h4>
                <p className="text-sm text-slate-400 max-w-md">
                  Watch a 60-second interactive simulation of a comprehensive 360° URL diagnostic.
                </p>
              </div>
            ) : (
              <div className="flex-1 p-6 bg-slate-950/90 flex flex-col justify-between animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3.5 space-y-1">
                    <span className="text-xs text-slate-400">Core Web Vitals</span>
                    <div className="text-xl font-bold text-emerald-400">98 / 100</div>
                    <p className="text-[11px] text-slate-400">LCP 0.8s, CLS 0.002, FID 12ms</p>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3.5 space-y-1">
                    <span className="text-xs text-slate-400">Conversion Readiness</span>
                    <div className="text-xl font-bold text-indigo-400">94% Optimal</div>
                    <p className="text-[11px] text-slate-400">
                      CTA above fold, high contrast verified
                    </p>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3.5 space-y-1">
                    <span className="text-xs text-slate-400">Accessibility & SEO</span>
                    <div className="text-xl font-bold text-sky-400">100% Score</div>
                    <p className="text-[11px] text-slate-400">
                      Semantic tags, OpenGraph & JSON-LD active
                    </p>
                  </div>
                </div>

                <div className="my-3 p-3.5 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-xs text-indigo-200 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    Continuous AI telemetry active: Found 2 quick-win optimizations for landing page
                    hero.
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsPlaying(false)}
                    className="text-xs text-slate-400 hover:text-white underline"
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}

            {/* Bottom interactive controls */}
            <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className={`px-2 py-1 rounded transition-colors ${activeTab === 'overview' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800'}`}
                >
                  360° Overview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('audit')}
                  className={`px-2 py-1 rounded transition-colors ${activeTab === 'audit' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800'}`}
                >
                  Audits & Recommendations
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('metrics')}
                  className={`px-2 py-1 rounded transition-colors ${activeTab === 'metrics' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800'}`}
                >
                  Real-time Telemetry
                </button>
              </div>
              <span className="hidden sm:inline-block font-mono">OmniScope Core v3.4</span>
            </div>
          </div>

          {/* Key highlights list */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <Monitor className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  Multi-Device Render
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  High-fidelity viewports for desktop, tablet, and mobile.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <Activity className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  Conversion Heatmap
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  AI prediction for visitor attention hot-spots.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  Zero Performance Drag
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  External headless crawlers, no script overhead required.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 px-6 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Includes 14-day free trial • No credit card required</span>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="w-full sm:w-auto"
            >
              Close
            </Button>
            <Button
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md shadow-indigo-600/20"
              onClick={() => {
                onOpenChange(false)
                if (onGetStartedClick) onGetStartedClick()
              }}
            >
              Start Free Trial Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
