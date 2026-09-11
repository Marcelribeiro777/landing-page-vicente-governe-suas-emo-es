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
    <section className="py-16 sm:py-24 bg-[#0D0D0D] relative border-t border-[#2E2B25] overflow-hidden">
      {/* Glow radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E8A020]/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#1A1A1A] via-[#221F1A] to-[#141414] border-2 border-[#E8A020]/50 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8A020]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8A020]/15 border border-[#E8A020]/30 text-[#E8A020] text-xs font-black uppercase tracking-widest mb-6">
            <Clock className="w-4 h-4 text-[#E8A020]" />
            <span>{eventContent.valueBanner.hoursHighlight}</span>
          </div>

          {/* Headline verbatim */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
            “{eventContent.valueBanner.headline}”
          </h2>

          <p className="text-base sm:text-lg text-[#CFC9B8] max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            {eventContent.valueBanner.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#E8A020] mb-8 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E8A020]" />
              <span className="text-[#F2EFE6]">Sem teorias vazias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E8A020]" />
              <span className="text-[#F2EFE6]">Prática guiada na sala</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E8A020]" />
              <span className="text-[#F2EFE6]">Consciência para a vida toda</span>
            </div>
          </div>

          <div>
            <Button
              size="lg"
              onClick={scrollToPricing}
              className="h-14 sm:h-16 px-8 sm:px-12 bg-gradient-to-r from-[#E8A020] via-[#F5B83D] to-[#E8A020] hover:from-[#F5B83D] hover:to-[#E8A020] text-[#0D0D0D] font-black rounded-xl uppercase tracking-wider text-sm sm:text-base shadow-xl shadow-[#E8A020]/30 hover:scale-[1.03] active:scale-[0.98] transition-all inline-flex items-center gap-2 border border-[#F5B83D]/60"
            >
              <Sparkles className="w-5 h-5 text-[#0D0D0D]" />
              <span>{eventContent.valueBanner.ctaText}</span>
              <ArrowRight className="w-5 h-5 text-[#0D0D0D]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
