import React from 'react'
import { HelpCircle, AlertCircle, Sparkles } from 'lucide-react'
import { eventContent } from '@/content/event'

export function EventPainMirroring() {
  return (
    <section
      id="dor"
      className="py-20 sm:py-28 bg-slate-900/60 relative border-t border-slate-800/80"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-rose-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20 inline-flex items-center gap-1.5 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            {eventContent.painMirroring.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            {eventContent.painMirroring.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {eventContent.painMirroring.subtitle}
          </p>
        </div>

        {/* 6 Quote Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {eventContent.painMirroring.quoteCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all pointer-events-none" />

              <div>
                <div className="flex items-center gap-2 mb-4 text-amber-400/80 font-mono text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>CENÁRIO #{idx + 1}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors leading-snug">
                  {card.quote}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.elaboration}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-900 flex items-center gap-2 text-xs text-slate-500">
                <AlertCircle className="w-3.5 h-3.5 text-amber-500/70 shrink-0" />
                <span>Padrão comportamental sabotador</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Emotional Transition Box */}
        <div className="rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border-2 border-amber-500/40 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>A Virada de Consciência</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-300 tracking-tight mb-4 uppercase">
            {eventContent.painMirroring.transitionPunchline.highlight}
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
            {eventContent.painMirroring.transitionPunchline.description}
          </p>
        </div>
      </div>
    </section>
  )
}
