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
    <section id="metodo" className="py-20 sm:py-28 bg-[#111111] relative border-t border-[#2E2B25]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            {eventContent.method.title}
          </h2>

          <div className="space-y-3">
            <p className="text-base sm:text-xl font-bold text-[#E8A020] uppercase tracking-wide">
              {eventContent.method.introPrefix}
            </p>
            <p className="text-[#CFC9B8] text-base sm:text-lg leading-relaxed">
              {eventContent.method.introText}
            </p>
          </div>
        </div>

        {/* 4 Deliverables Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {eventContent.method.deliverables.map((item) => (
            <div
              key={item.num}
              className="rounded-2xl bg-[#1A1A1A] border border-[#2E2B25] p-7 sm:p-8 hover:border-[#E8A020]/60 hover:shadow-2xl hover:shadow-[#E8A020]/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Big decorative background number */}
              <span className="absolute -top-3 right-3 text-7xl font-black text-[#141414] select-none pointer-events-none group-hover:text-[#E8A020]/15 transition-colors font-mono">
                {item.num}
              </span>

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#E8A020]/15 border border-[#E8A020]/30 text-[#E8A020] flex items-center justify-center font-bold group-hover:bg-[#E8A020] group-hover:text-[#0D0D0D] transition-colors">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#E8A020] uppercase tracking-widest bg-[#141414] px-2.5 py-1 rounded-md border border-[#2E2B25]">
                    ENTREGÁVEL {item.num}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white mb-3 group-hover:text-[#E8A020] transition-colors leading-snug flex items-start gap-2.5">
                  <span className="text-[#E8A020] font-black shrink-0 text-xl leading-none">✔</span>
                  <span>{item.title}</span>
                </h3>

                <p className="text-sm sm:text-base text-[#CFC9B8] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2E2B25] flex items-center gap-2 text-xs text-[#E8A020] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#E8A020]" />
                <span>Prática presencial guiada na sala</span>
              </div>
            </div>
          ))}
        </div>

        {/* Linha de reforço após os 4 entregáveis */}
        <div className="mb-12 flex items-center justify-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#1A1A1A] border border-[#E8A020]/40 text-[#F5B83D] text-sm sm:text-base font-bold shadow-lg shadow-[#E8A020]/5 text-center">
            <Compass className="w-5 h-5 text-[#E8A020] shrink-0" />
            <span>{eventContent.method.reinforcementLine}</span>
          </div>
        </div>

        {/* Dois parágrafos de fechamento em destaque */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1A1A1A] via-[#221F1A] to-[#141414] text-[#F2EFE6] p-8 sm:p-12 mb-12 shadow-2xl border-2 border-[#E8A020]/50 relative overflow-hidden">
          <div className="space-y-6 max-w-4xl">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-relaxed border-l-4 border-[#E8A020] pl-4 sm:pl-6">
              {eventContent.method.closingParagraphs[0]}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#CFC9B8] font-medium leading-relaxed pl-4 sm:pl-6">
              {eventContent.method.closingParagraphs[1]}
            </p>
          </div>
        </div>

        {/* Quick CTA to price */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="relative overflow-hidden h-14 sm:h-16 px-8 sm:px-10 bg-gradient-to-r from-[#E8A020] via-[#F5B83D] to-[#E8A020] hover:from-[#F5B83D] hover:to-[#E8A020] text-[#0D0D0D] font-black rounded-xl uppercase tracking-wider text-sm sm:text-base shadow-[0_0_25px_rgba(232,160,32,0.35)] hover:shadow-[0_0_35px_rgba(245,184,61,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all border-2 border-[#F5B83D]"
          >
            <span className="absolute inset-0 w-1/3 bg-white/25 blur-sm animate-cta-shimmer pointer-events-none" />
            <span className="relative z-10 font-black">Quero Viver Essa Transformação</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-[#0D0D0D] stroke-[2.5] relative z-10" />
          </Button>
        </div>
      </div>
    </section>
  )
}
