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
    <section className="py-20 sm:py-28 bg-[#31376B] relative border-t border-[#6A84B7]/25 overflow-hidden">
      {/* Ambient spotlight backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#5BB7D0]/20 via-[#6A84B7]/15 to-[#5BB7D0]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5BB7D0]/15 border border-[#5BB7D0]/30 text-[#5BB7D0] text-xs font-black uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#5BB7D0]" />
          <span>{eventContent.finalCta.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
          Pronto para{' '}
          <span className="font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#5BB7D0]">
            Governar Suas Emoções
          </span>
          ?
        </h2>

        <p className="text-slate-200 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {eventContent.finalCta.description}
        </p>

        {/* Big Final Button */}
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="w-full h-16 px-8 sm:px-10 bg-gradient-to-r from-[#5BB7D0] via-cyan-300 to-[#6A84B7] hover:from-cyan-300 hover:to-[#5BB7D0] text-[#31376B] font-black rounded-xl uppercase tracking-wider text-base sm:text-lg shadow-2xl shadow-[#5BB7D0]/30 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-cyan-200/50"
          >
            <span>{eventContent.finalCta.ctaText}</span>
            <ArrowRight className="w-5 h-5 text-[#31376B]" />
          </Button>

          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{eventContent.finalCta.ctaSubtext}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
