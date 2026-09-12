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
      className="py-20 sm:py-28 bg-[#FAF6EE] text-[#1E1B16] relative overflow-hidden border-y border-[#E6DEC8]"
    >
      {/* Transição suave no topo a partir do carvão quente */}
      <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#171513]/10 to-transparent pointer-events-none" />

      {/* Elementos visuais sutis e elegantes com iluminação âmbar suave */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8A020]/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D48B12]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título de normalização e texto com impacto e custo */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14120E] tracking-tight leading-tight mb-6">
            {eventContent.normalization.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#4A4337] font-medium leading-relaxed">
            {eventContent.normalization.lead}
          </p>
          <p className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black text-[#B87008] tracking-tight drop-shadow-sm">
            {eventContent.normalization.costHighlight}
          </p>
        </div>

        {/* Três cards de citação sobre fundo creme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {eventContent.normalization.quoteCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#E8DFC9] shadow-md shadow-[#2E281D]/5 hover:border-[#D48B12] hover:shadow-lg hover:shadow-[#D48B12]/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E8A020]/15 text-[#B87008] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Quote className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1F1B14] mb-3 group-hover:text-[#B87008] transition-colors leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-[#574F41] leading-relaxed">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA rápido para quebrar e direcionar */}
        <div className="flex justify-center w-full pt-4">
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="relative overflow-hidden w-full sm:w-auto max-w-full min-h-[3.5rem] sm:h-16 px-4 py-3 sm:px-10 bg-gradient-to-r from-[#E8A020] via-[#F5B83D] to-[#E8A020] hover:from-[#F5B83D] hover:to-[#E8A020] text-[#0D0D0D] font-black rounded-xl uppercase tracking-wider text-xs sm:text-base shadow-[0_4px_25px_rgba(232,160,32,0.4)] hover:shadow-[0_6px_35px_rgba(245,184,61,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 border-2 border-[#D48B12] whitespace-normal text-center"
          >
            <span className="absolute inset-0 w-1/3 bg-white/30 blur-sm animate-cta-shimmer pointer-events-none" />
            <span className="relative z-10 font-black leading-snug">
              Quero Mudar Esse Ciclo na Imersão
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D0D0D] stroke-[2.5] relative z-10 shrink-0" />
          </Button>
        </div>
      </div>

      {/* Transição suave na base em direção à seção seguinte */}
      <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#12100E]/10 to-transparent pointer-events-none" />
    </section>
  )
}
