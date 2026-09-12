import React from 'react'
import { AlertCircle, Sparkles } from 'lucide-react'
import { eventContent } from '@/content/event'

export function EventPainMirroring() {
  return (
    <section id="dor" className="py-20 sm:py-28 bg-[#111111] relative border-t border-[#2E2B25]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#E8A020]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            {eventContent.painMirroring.title}
          </h2>
          <p className="text-[#CFC9B8] text-base sm:text-lg leading-relaxed">
            {eventContent.painMirroring.subtitle}
          </p>
        </div>

        {/* Quote Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {eventContent.painMirroring.quoteCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#1A1A1A] border border-[#2E2B25] hover:border-[#E8A020]/60 hover:shadow-xl hover:shadow-[#E8A020]/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E8A020]/5 rounded-full blur-2xl group-hover:bg-[#E8A020]/15 transition-all pointer-events-none" />

              <div>
                <div className="flex items-center gap-2 mb-4 text-[#E8A020] font-mono text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8A020]" />
                  <span>{card.tag || `CENÁRIO #${idx + 1}`}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-[#E8A020] transition-colors leading-snug">
                  {card.quote}
                </h3>
                <p className="text-sm text-[#CFC9B8] leading-relaxed">{card.elaboration}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#2E2B25] flex items-center gap-2 text-xs text-[#A89F91]">
                <AlertCircle className="w-3.5 h-3.5 text-[#E8A020] shrink-0" />
                <span>Padrão comportamental repetitivo</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Emotional Transition Box */}
        <div className="rounded-2xl bg-gradient-to-br from-[#1A1A1A] via-[#221F1A] to-[#141414] border-2 border-[#E8A020]/50 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#E8A020]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8A020]/15 text-[#E8A020] text-xs font-bold uppercase tracking-wider mb-4 border border-[#E8A020]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#E8A020]" />
            <span>A Virada de Consciência</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#E8A020] tracking-tight mb-4 uppercase">
            {eventContent.painMirroring.transitionPunchline.highlight}
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-[#F2EFE6] leading-relaxed max-w-2xl mx-auto font-normal">
            {eventContent.painMirroring.transitionPunchline.description}
          </p>
        </div>
      </div>
    </section>
  )
}
