import React from 'react'
import { AlertCircle } from 'lucide-react'
import { eventContent } from '@/content/event'

export function EventPainMirroring() {
  return (
    <section
      id="dor"
      className="py-20 sm:py-28 bg-[#171513] relative border-t border-[#2E2A23] overflow-hidden"
    >
      {/* Transição suave do Hero para o Carvão Quente */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#0D0D0D] to-transparent pointer-events-none" />

      {/* Subtle warm glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#E8A020]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-[#D48B12]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#F8F5EE] tracking-tight leading-tight mb-6">
            {eventContent.painMirroring.title}
          </h2>
          <p className="text-[#D8D2C4] text-base sm:text-lg leading-relaxed">
            {eventContent.painMirroring.subtitle}
          </p>
        </div>

        {/* Quote Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventContent.painMirroring.quoteCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#221F1C] border border-[#3A342B] hover:border-[#E8A020]/70 hover:shadow-xl hover:shadow-[#E8A020]/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-sm"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E8A020]/5 rounded-full blur-2xl group-hover:bg-[#E8A020]/20 transition-all pointer-events-none" />

              <div>
                <div className="flex items-center gap-2 mb-4 text-[#E8A020] font-mono text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8A020]" />
                  <span className="font-semibold">{card.tag || `CENÁRIO #${idx + 1}`}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#FAF7F0] mb-3 group-hover:text-[#F5B83D] transition-colors leading-snug">
                  {card.quote}
                </h3>
                <p className="text-sm text-[#D1CAB8] leading-relaxed">{card.elaboration}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#353027] flex items-center gap-2 text-xs text-[#B2A999]">
                <AlertCircle className="w-3.5 h-3.5 text-[#E8A020] shrink-0" />
                <span>Padrão comportamental repetitivo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
