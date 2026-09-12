import React from 'react'
import { ArrowRight } from 'lucide-react'
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

  const { paragraphs, ctaText, ctaSubtext } = eventContent.finalCta

  return (
    <section className="py-20 sm:py-28 bg-[#0D0D0D] relative border-t border-[#2E2B25] overflow-hidden">
      {/* Ambient spotlight backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#E8A020]/20 via-[#F5B83D]/10 to-[#E8A020]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {paragraphs[0] && (
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 leading-snug">
            {paragraphs[0]}
          </h2>
        )}

        {paragraphs[1] && (
          <p className="text-[#CFC9B8] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            {paragraphs[1]}
          </p>
        )}

        {/* Big Final Button */}
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="relative overflow-hidden w-full h-16 px-8 sm:px-10 bg-[#228B22] hover:bg-[#2FA32B] text-white font-black rounded-xl uppercase tracking-wider text-base sm:text-lg shadow-[0_0_35px_rgba(34,139,34,0.45)] hover:shadow-[0_0_50px_rgba(47,163,43,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border-2 border-[#2FA32B]"
          >
            <span className="absolute inset-0 w-1/3 bg-white/20 blur-sm animate-cta-shimmer pointer-events-none" />
            <span className="relative z-10 font-black">{ctaText}</span>
            <ArrowRight className="w-5 h-5 text-white stroke-[2.5] relative z-10" />
          </Button>

          <p className="text-xs sm:text-sm text-[#A8A29E] font-medium tracking-wide">
            {ctaSubtext}
          </p>
        </div>
      </div>
    </section>
  )
}
