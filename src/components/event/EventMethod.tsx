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
    <section
      id="metodo"
      className="py-20 sm:py-28 bg-[#1e2348] relative border-t border-[#6A84B7]/25"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#5BB7D0] bg-[#5BB7D0]/10 px-3.5 py-1.5 rounded-full border border-[#5BB7D0]/30 inline-flex items-center gap-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#5BB7D0]" />
            {eventContent.method.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            {eventContent.method.title}
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            {eventContent.method.description}
          </p>
        </div>

        {/* 4 Deliverables Cards (Verbatim itens dos ✔) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {eventContent.method.deliverables.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#31376B] border border-[#6A84B7]/30 p-7 sm:p-8 hover:border-[#5BB7D0]/60 hover:shadow-2xl hover:shadow-[#5BB7D0]/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Big decorative background number */}
              <span className="absolute -top-3 right-3 text-7xl font-black text-[#1e2348] select-none pointer-events-none group-hover:text-[#5BB7D0]/15 transition-colors font-mono">
                0{idx + 1}
              </span>

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#5BB7D0]/15 border border-[#5BB7D0]/30 text-[#5BB7D0] flex items-center justify-center font-bold group-hover:bg-[#5BB7D0] group-hover:text-[#31376B] transition-colors">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#5BB7D0] uppercase tracking-widest bg-[#1e2348] px-2.5 py-1 rounded-md border border-[#6A84B7]/30">
                    ENTREGÁVEL 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white mb-3 group-hover:text-[#5BB7D0] transition-colors leading-snug">
                  ✔ {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#6A84B7]/20 flex items-center gap-2 text-xs text-[#5BB7D0] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#5BB7D0]" />
                <span>Prática presencial guiada na sala</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco de Redefinição: "Governar não é controlar o que você sente..." */}
        <div className="rounded-3xl bg-gradient-to-br from-white via-slate-50 to-cyan-50 text-slate-900 p-8 sm:p-12 mb-12 shadow-2xl border-2 border-[#5BB7D0] relative overflow-hidden">
          <div className="flex items-center gap-2 text-[#31376B] font-bold text-xs uppercase tracking-widest mb-4">
            <Quote className="w-4 h-4 text-[#5BB7D0]" />
            <span>Redefinição Fundamental</span>
          </div>

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-black text-[#31376B] tracking-tight leading-snug mb-4">
            {eventContent.method.quoteRedefinition.quote}
          </blockquote>

          <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-3xl border-l-4 border-[#5BB7D0] pl-4 sm:pl-6">
            {eventContent.method.quoteRedefinition.complement}
          </p>
        </div>

        {/* Quick CTA to price */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="h-14 px-8 bg-gradient-to-r from-[#5BB7D0] to-[#6A84B7] hover:from-[#6A84B7] hover:to-[#5BB7D0] text-[#31376B] hover:text-white font-black rounded-xl uppercase tracking-wider text-sm shadow-lg shadow-[#5BB7D0]/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Quero Viver Essa Transformação</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
