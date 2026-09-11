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
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-amber-500/30 relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Scarcity badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-black uppercase tracking-widest mb-6 animate-pulse">
          <Flame className="w-4 h-4 text-orange-400" />
          <span>{eventContent.urgency.badge}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          {eventContent.urgency.title}
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          {eventContent.urgency.subtitle}
        </p>

        {/* Real Countdown Timer component */}
        <div className="mb-8">
          <div className="text-xs uppercase font-bold tracking-widest text-amber-400 mb-3 flex items-center justify-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>Tempo restante para o encerramento das condições do Lote Atual:</span>
          </div>
          <CountdownTimer targetDateISO={eventContent.event.targetDateISO} />
        </div>

        {/* Lot warning tag */}
        <div className="text-xs sm:text-sm font-bold text-amber-300/90 mb-8 uppercase tracking-wider">
          {eventContent.urgency.lotNotice}
        </div>

        {/* Action Button */}
        <div>
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="h-14 sm:h-16 px-8 sm:px-12 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black rounded-xl uppercase tracking-wider text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>{eventContent.urgency.ctaText}</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
