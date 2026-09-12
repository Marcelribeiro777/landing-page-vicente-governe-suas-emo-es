import React from 'react'
import { ArrowRight, CheckCircle2, Compass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { eventContent } from '@/content/event'

export function EventMethod() {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector('#precos')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="metodo"
      className="py-20 sm:py-28 bg-[#1A1714] relative border-t border-[#332C23] overflow-hidden"
    >
      {/* Transição suave vindo de Autoridade */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#12100E] to-transparent pointer-events-none" />

      {/* Iluminação ambiente dourada quente */}
      <div className="absolute top-1/4 right-5 w-[500px] h-[300px] bg-[#E8A020]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-[400px] h-[300px] bg-[#D48B12]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FAF7F0] tracking-tight mb-6 leading-tight">
            {eventContent.method.title}
          </h2>

          <div className="space-y-3">
            <p className="text-base sm:text-xl font-bold text-[#F5B83D] uppercase tracking-wide">
              {eventContent.method.introPrefix}
            </p>
            <p className="text-[#D8D1C2] text-base sm:text-lg leading-relaxed">
              {eventContent.method.introText}
            </p>
          </div>
        </div>

        {/* 4 Deliverables Cards com excelente contraste e ✔ dourados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {eventContent.method.deliverables.map((item) => (
            <div
              key={item.num}
              className="rounded-2xl bg-[#231F1A] border border-[#3D3528] p-7 sm:p-8 hover:border-[#E8A020]/80 hover:shadow-2xl hover:shadow-[#E8A020]/15 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-lg"
            >
              {/* Big decorative background number */}
              <span className="absolute -top-3 right-3 text-7xl font-black text-[#1A1713] select-none pointer-events-none group-hover:text-[#E8A020]/20 transition-colors font-mono">
                {item.num}
              </span>

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#E8A020]/15 border border-[#E8A020]/35 text-[#E8A020] flex items-center justify-center font-bold group-hover:bg-[#E8A020] group-hover:text-[#0D0D0D] transition-colors shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#F5B83D] uppercase tracking-widest bg-[#181512] px-2.5 py-1 rounded-md border border-[#383125]">
                    ENTREGÁVEL {item.num}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#FAF7F0] mb-3 group-hover:text-[#F5B83D] transition-colors leading-snug flex items-start gap-2.5">
                  <span className="text-[#E8A020] font-black shrink-0 text-xl leading-none">✔</span>
                  <span>{item.title}</span>
                </h3>

                <p className="text-sm sm:text-base text-[#D4CDC0] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#352F24] flex items-center gap-2 text-xs text-[#E8A020] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#E8A020]" />
                <span>Prática presencial guiada na sala</span>
              </div>
            </div>
          ))}
        </div>

        {/* Linha de reforço após os 4 entregáveis */}
        <div className="mb-12 flex items-center justify-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#231F1A] border border-[#E8A020]/50 text-[#F5B83D] text-sm sm:text-base font-bold shadow-lg shadow-[#E8A020]/10 text-center">
            <Compass className="w-5 h-5 text-[#E8A020] shrink-0" />
            <span>{eventContent.method.reinforcementLine}</span>
          </div>
        </div>

        {/* Parágrafos de fechamento em destaque */}
        <div className="rounded-3xl bg-gradient-to-br from-[#24201A] via-[#2D261E] to-[#1C1813] text-[#FAF7F0] p-8 sm:p-12 mb-12 shadow-2xl border-2 border-[#E8A020]/60 relative overflow-hidden">
          <div className="space-y-6 max-w-4xl">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-relaxed border-l-4 border-[#E8A020] pl-4 sm:pl-6">
              {eventContent.method.closingParagraphs[0]}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#DDD5C6] font-medium leading-relaxed pl-4 sm:pl-6">
              {eventContent.method.closingParagraphs[1]}
            </p>
            {eventContent.method.closingParagraphs[2] && (
              <p className="text-base sm:text-lg md:text-xl text-[#DDD5C6] font-medium leading-relaxed pl-4 sm:pl-6 border-t border-[#3D3528] pt-6">
                {(() => {
                  const text = eventContent.method.closingParagraphs[2]
                  const highlight = 'você mesmo'
                  const parts = text.split(highlight)
                  if (parts.length === 2) {
                    return (
                      <>
                        {parts[0]}
                        <span className="text-[#F5B83D] font-bold">{highlight}</span>
                        {parts[1]}
                      </>
                    )
                  }
                  return text
                })()}
              </p>
            )}
          </div>
        </div>

        {/* Quick CTA to price */}
        <div className="flex justify-center w-full">
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="relative overflow-hidden w-full sm:w-auto max-w-full min-h-[3.5rem] sm:h-16 px-4 py-3 sm:px-10 bg-gradient-to-r from-[#E8A020] via-[#F5B83D] to-[#E8A020] hover:from-[#F5B83D] hover:to-[#E8A020] text-[#0D0D0D] font-black rounded-xl uppercase tracking-wider text-xs sm:text-base shadow-[0_0_25px_rgba(232,160,32,0.4)] hover:shadow-[0_0_35px_rgba(245,184,61,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all border-2 border-[#F5B83D] inline-flex items-center justify-center gap-2 whitespace-normal text-center"
          >
            <span className="absolute inset-0 w-1/3 bg-white/25 blur-sm animate-cta-shimmer pointer-events-none" />
            <span className="relative z-10 font-black leading-snug">
              Quero Viver Essa Transformação
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-[#0D0D0D] stroke-[2.5] relative z-10 shrink-0" />
          </Button>
        </div>
      </div>
    </section>
  )
}
