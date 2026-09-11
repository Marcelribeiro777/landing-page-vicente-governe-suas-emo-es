import React from 'react'
import { Clock, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { eventContent } from '@/content/event'

export function EventValueBanner() {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector('#precos')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="py-16 sm:py-24 bg-[#31376B] relative border-t border-[#6A84B7]/25 overflow-hidden">
      {/* Glow radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5BB7D0]/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#1e2348] via-[#242952] to-[#1e2348] border-2 border-[#5BB7D0]/50 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5BB7D0]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5BB7D0]/15 border border-[#5BB7D0]/30 text-[#5BB7D0] text-xs font-black uppercase tracking-widest mb-6">
            <Clock className="w-4 h-4 text-[#5BB7D0]" />
            <span>{eventContent.valueBanner.hoursHighlight}</span>
          </div>

          {/* Headline verbatim */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
            “{eventContent.valueBanner.headline}”
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            {eventContent.valueBanner.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-cyan-200 mb-8 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#5BB7D0]" />
              <span>Sem teorias vazias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#5BB7D0]" />
              <span>Prática guiada na sala</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#5BB7D0]" />
              <span>Consciência para a vida toda</span>
            </div>
          </div>

          <div>
            <Button
              size="lg"
              onClick={scrollToPricing}
              className="h-14 sm:h-16 px-8 sm:px-12 bg-gradient-to-r from-[#5BB7D0] via-cyan-300 to-[#6A84B7] hover:from-cyan-300 hover:to-[#5BB7D0] text-[#31376B] font-black rounded-xl uppercase tracking-wider text-sm sm:text-base shadow-xl shadow-[#5BB7D0]/30 hover:scale-[1.03] active:scale-[0.98] transition-all inline-flex items-center gap-2 border border-cyan-200/50"
            >
              <Sparkles className="w-5 h-5 text-[#31376B]" />
              <span>{eventContent.valueBanner.ctaText}</span>
              <ArrowRight className="w-5 h-5 text-[#31376B]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
