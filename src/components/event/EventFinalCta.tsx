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
    <section className="py-20 sm:py-28 bg-[#0D0D0D] relative border-t border-[#2E2B25] overflow-hidden">
      {/* Ambient spotlight backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#E8A020]/20 via-[#F5B83D]/10 to-[#E8A020]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8A020]/15 border border-[#E8A020]/30 text-[#E8A020] text-xs font-black uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#E8A020]" />
          <span>{eventContent.finalCta.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
          <span className="font-afacad font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F2EFE6] to-[#E8A020]">
            {eventContent.finalCta.title}
          </span>
        </h2>

        {/* Subtítulo / Hook verbatim */}
        <p className="text-xl sm:text-2xl font-bold text-[#F5B83D] max-w-2xl mx-auto mb-6 leading-snug">
          “{eventContent.finalCta.hook}”
        </p>

        <p className="text-[#CFC9B8] text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {eventContent.finalCta.description}
        </p>

        {/* Big Final Button */}
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="relative overflow-hidden w-full h-16 px-8 sm:px-10 bg-[#228B22] hover:bg-[#2FA32B] text-white font-black rounded-xl uppercase tracking-wider text-base sm:text-lg shadow-[0_0_35px_rgba(34,139,34,0.45)] hover:shadow-[0_0_50px_rgba(47,163,43,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border-2 border-[#2FA32B]"
          >
            <span className="absolute inset-0 w-1/3 bg-white/20 blur-sm animate-cta-shimmer pointer-events-none" />
            <span className="relative z-10 font-black">{eventContent.finalCta.ctaText}</span>
            <ArrowRight className="w-5 h-5 text-white stroke-[2.5] relative z-10" />
          </Button>

          <div className="flex items-center gap-2 text-xs text-[#CFC9B8] font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{eventContent.finalCta.ctaSubtext}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
