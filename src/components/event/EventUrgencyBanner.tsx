import React from 'react'
import { ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CountdownTimer } from './CountdownTimer'
import { eventContent } from '@/content/event'

export function EventUrgencyBanner() {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector('#precos')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] border-y border-[#E8A020]/30 relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E8A020]/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Scarcity badge */}
        <div className="inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-3.5 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3.5 rounded-full bg-[#FF0000] border-2 border-[#FF0000] text-white font-afacad text-xs sm:text-base md:text-2xl lg:text-3xl font-black uppercase tracking-wider mb-6 animate-urgency-pulse motion-reduce:animate-none max-w-full text-center">
          <span className="truncate sm:whitespace-normal">{eventContent.urgency.badge}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          {eventContent.urgency.title}
        </h2>

        <p className="text-[#CFC9B8] text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          {eventContent.urgency.subtitle}
        </p>

        {/* Real Countdown Timer component */}
        <div className="mb-8">
          <div className="text-xs uppercase font-bold tracking-widest text-[#E8A020] mb-3 flex items-center justify-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>Tempo restante para o encerramento das condições do Lote Atual:</span>
          </div>
          <CountdownTimer targetDateISO={eventContent.event.targetDateISO} />
        </div>

        {/* Lot warning tag */}
        <div className="text-xs sm:text-sm font-bold text-[#F5B83D] mb-8 uppercase tracking-wider">
          {eventContent.urgency.lotNotice}
        </div>

        {/* Action Button with Price Anchor */}
        <div className="flex justify-center w-full">
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="relative overflow-hidden w-full sm:w-auto max-w-full min-h-[3.5rem] sm:h-16 px-4 py-3 sm:px-12 bg-gradient-to-r from-[#E8A020] via-[#F5B83D] to-[#E8A020] hover:from-[#F5B83D] hover:to-[#E8A020] text-[#0D0D0D] font-black rounded-xl uppercase tracking-wider text-xs sm:text-base shadow-[0_0_30px_rgba(232,160,32,0.35)] hover:shadow-[0_0_40px_rgba(245,184,61,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all border-2 border-[#F5B83D] inline-flex items-center justify-center gap-2 whitespace-normal text-center"
          >
            <span className="absolute inset-0 w-1/3 bg-white/25 blur-sm animate-cta-shimmer pointer-events-none" />
            <span className="relative z-10 font-black leading-snug">
              {eventContent.urgency.ctaText}
            </span>
            <ArrowRight className="w-5 h-5 ml-2 text-[#0D0D0D] stroke-[2.5] relative z-10 shrink-0" />
          </Button>
        </div>
      </div>
    </section>
  )
}
