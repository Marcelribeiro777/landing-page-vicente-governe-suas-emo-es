import React from 'react'
import { HelpCircle, AlertCircle, Sparkles } from 'lucide-react'
import { eventContent } from '@/content/event'

export function EventPainMirroring() {
  return (
    <section id="dor" className="py-20 sm:py-28 bg-[#1e2348] relative border-t border-[#6A84B7]/20">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#5BB7D0]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#5BB7D0] bg-[#5BB7D0]/10 px-3.5 py-1.5 rounded-full border border-[#5BB7D0]/30 inline-flex items-center gap-1.5 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#5BB7D0]" />
            {eventContent.painMirroring.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            {eventContent.painMirroring.title}
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            {eventContent.painMirroring.subtitle}
          </p>
        </div>

        {/* 6 Quote Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {eventContent.painMirroring.quoteCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#31376B]/70 border border-[#6A84B7]/30 hover:border-[#5BB7D0]/60 hover:shadow-xl hover:shadow-[#5BB7D0]/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#5BB7D0]/5 rounded-full blur-2xl group-hover:bg-[#5BB7D0]/15 transition-all pointer-events-none" />

              <div>
                <div className="flex items-center gap-2 mb-4 text-[#5BB7D0] font-mono text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5BB7D0]" />
                  <span>{card.tag || `CENÁRIO #${idx + 1}`}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-[#5BB7D0] transition-colors leading-snug">
                  {card.quote}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">{card.elaboration}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#6A84B7]/20 flex items-center gap-2 text-xs text-[#6A84B7]">
                <AlertCircle className="w-3.5 h-3.5 text-[#5BB7D0] shrink-0" />
                <span>Padrão comportamental repetitivo</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Emotional Transition Box */}
        <div className="rounded-2xl bg-gradient-to-br from-[#31376B] via-[#242952] to-[#1a1e3d] border-2 border-[#5BB7D0]/50 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#5BB7D0]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5BB7D0]/15 text-[#5BB7D0] text-xs font-bold uppercase tracking-wider mb-4 border border-[#5BB7D0]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#5BB7D0]" />
            <span>A Virada de Consciência</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#5BB7D0] tracking-tight mb-4 uppercase">
            {eventContent.painMirroring.transitionPunchline.highlight}
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed max-w-2xl mx-auto font-normal">
            {eventContent.painMirroring.transitionPunchline.description}
          </p>
        </div>
      </div>
    </section>
  )
}
