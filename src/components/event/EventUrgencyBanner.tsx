import React from 'react'
import { Flame, ArrowRight, Clock } from 'lucide-react'
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
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#1e2348] via-[#31376B] to-[#1e2348] border-y border-[#5BB7D0]/30 relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5BB7D0]/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Scarcity badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5BB7D0]/20 border border-[#5BB7D0]/40 text-cyan-200 text-xs font-black uppercase tracking-widest mb-6 animate-pulse">
          <Flame className="w-4 h-4 text-[#5BB7D0]" />
          <span>{eventContent.urgency.badge}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          {eventContent.urgency.title}
        </h2>

        <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          {eventContent.urgency.subtitle}
        </p>

        {/* Real Countdown Timer component */}
        <div className="mb-8">
          <div className="text-xs uppercase font-bold tracking-widest text-[#5BB7D0] mb-3 flex items-center justify-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>Tempo restante para o encerramento das condições do Lote Atual:</span>
          </div>
          <CountdownTimer targetDateISO={eventContent.event.targetDateISO} />
        </div>

        {/* Lot warning tag */}
        <div className="text-xs sm:text-sm font-bold text-cyan-200 mb-8 uppercase tracking-wider">
          {eventContent.urgency.lotNotice}
        </div>

        {/* Action Button */}
        <div>
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="h-14 sm:h-16 px-8 sm:px-12 bg-gradient-to-r from-[#5BB7D0] via-cyan-300 to-[#6A84B7] hover:from-cyan-300 hover:to-[#5BB7D0] text-[#31376B] font-black rounded-xl uppercase tracking-wider text-sm sm:text-base shadow-xl shadow-[#5BB7D0]/30 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>{eventContent.urgency.ctaText}</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
