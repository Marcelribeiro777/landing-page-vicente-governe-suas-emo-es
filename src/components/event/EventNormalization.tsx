import React from 'react'
import { ArrowRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { eventContent } from '@/content/event'

export function EventNormalization() {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector('#precos')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="origem"
      className="py-20 sm:py-28 bg-white text-slate-900 relative overflow-hidden border-y border-slate-200"
    >
      {/* Elementos visuais sutis para respiração visual e contraste premium */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8A020]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5B83D]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título de normalização e texto com impacto e custo */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D0D0D] tracking-tight leading-tight mb-6">
            {eventContent.normalization.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
            {eventContent.normalization.lead}
          </p>
          <p className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black text-[#D48B12] tracking-tight">
            {eventContent.normalization.costHighlight}
          </p>
        </div>

        {/* Três cards de citação */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {eventContent.normalization.quoteCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-[#E8A020] hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E8A020]/10 text-[#D48B12] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Quote className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#D48B12] transition-colors leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA rápido para quebrar e direcionar */}
        <div className="text-center pt-4">
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="relative overflow-hidden h-14 sm:h-16 px-8 sm:px-10 bg-gradient-to-r from-[#E8A020] via-[#F5B83D] to-[#E8A020] hover:from-[#F5B83D] hover:to-[#E8A020] text-[#0D0D0D] font-black rounded-xl uppercase tracking-wider text-sm sm:text-base shadow-[0_0_25px_rgba(232,160,32,0.35)] hover:shadow-[0_0_35px_rgba(245,184,61,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all inline-flex items-center gap-2 border-2 border-[#F5B83D]"
          >
            <span className="absolute inset-0 w-1/3 bg-white/25 blur-sm animate-cta-shimmer pointer-events-none" />
            <span className="relative z-10 font-black">Quero Mudar Esse Ciclo na Imersão</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D0D0D] stroke-[2.5] relative z-10" />
          </Button>
        </div>
      </div>
    </section>
  )
}
