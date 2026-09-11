import React from 'react'
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { eventContent } from '@/content/event'

export function EventFinalCta() {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector('#precos')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="py-20 sm:py-28 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Golden spotlight backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-black uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{eventContent.finalCta.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
          {eventContent.finalCta.title}
        </h2>

        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {eventContent.finalCta.description}
        </p>

        {/* Big Final Button */}
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="w-full h-16 px-8 sm:px-10 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black rounded-xl uppercase tracking-wider text-base sm:text-lg shadow-2xl shadow-amber-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-amber-300/40"
          >
            <span>{eventContent.finalCta.ctaText}</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </Button>

          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{eventContent.finalCta.ctaSubtext}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
