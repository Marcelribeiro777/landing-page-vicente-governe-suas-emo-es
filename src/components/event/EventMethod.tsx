import React from 'react'
import { Sparkles, ArrowRight, CheckCircle2, Quote } from 'lucide-react'
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
          <span className="text-xs font-black uppercase tracking-widest text-[#E8A020] bg-[#E8A020]/10 px-3.5 py-1.5 rounded-full border border-[#E8A020]/30 inline-flex items-center gap-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E8A020]" />
            {eventContent.method.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            {eventContent.method.title}
          </h2>
          <p className="text-[#CFC9B8] text-base sm:text-lg leading-relaxed">
            {eventContent.method.description}
          </p>
        </div>

        {/* 4 Deliverables Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {eventContent.method.deliverables.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#1A1A1A] border border-[#2E2B25] p-7 sm:p-8 hover:border-[#E8A020]/60 hover:shadow-2xl hover:shadow-[#E8A020]/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Big decorative background number */}
              <span className="absolute -top-3 right-3 text-7xl font-black text-[#141414] select-none pointer-events-none group-hover:text-[#E8A020]/15 transition-colors font-mono">
                0{idx + 1}
              </span>

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#E8A020]/15 border border-[#E8A020]/30 text-[#E8A020] flex items-center justify-center font-bold group-hover:bg-[#E8A020] group-hover:text-[#0D0D0D] transition-colors">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#E8A020] uppercase tracking-widest bg-[#141414] px-2.5 py-1 rounded-md border border-[#2E2B25]">
                    ENTREGÁVEL 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white mb-3 group-hover:text-[#E8A020] transition-colors leading-snug">
                  ✔ {item.title}
                </h3>

                <p className="text-sm text-[#CFC9B8] leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2E2B25] flex items-center gap-2 text-xs text-[#E8A020] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#E8A020]" />
                <span>Prática presencial guiada na sala</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco de Redefinição: "Governar não é controlar o que você sente..." */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1A1A1A] via-[#221F1A] to-[#141414] text-[#F2EFE6] p-8 sm:p-12 mb-12 shadow-2xl border-2 border-[#E8A020]/50 relative overflow-hidden">
          <div className="flex items-center gap-2 text-[#E8A020] font-bold text-xs uppercase tracking-widest mb-4">
            <Quote className="w-4 h-4 text-[#E8A020]" />
            <span>Redefinição Fundamental</span>
          </div>

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-snug mb-4">
            {eventContent.method.quoteRedefinition.quote}
          </blockquote>

          <p className="text-base sm:text-lg md:text-xl text-[#CFC9B8] font-medium leading-relaxed max-w-3xl border-l-4 border-[#E8A020] pl-4 sm:pl-6">
            {eventContent.method.quoteRedefinition.complement}
          </p>
        </div>

        {/* Quick CTA to price */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="h-14 px-8 bg-gradient-to-r from-[#E8A020] via-[#F5B83D] to-[#E8A020] hover:from-[#F5B83D] hover:to-[#E8A020] text-[#0D0D0D] font-black rounded-xl uppercase tracking-wider text-sm shadow-lg shadow-[#E8A020]/25 hover:scale-[1.02] active:scale-[0.98] transition-all border border-[#F5B83D]/60"
          >
            <span>Quero Viver Essa Transformação</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#0D0D0D]" />
          </Button>
        </div>
      </div>
    </section>
  )
}
