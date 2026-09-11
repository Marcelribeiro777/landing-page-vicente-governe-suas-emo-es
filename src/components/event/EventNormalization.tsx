import React from 'react'
import { Shield, Sparkles, ArrowRight, AlertTriangle } from 'lucide-react'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5BB7D0]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6A84B7]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge superior */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#31376B]/10 border border-[#31376B]/20 text-[#31376B] text-xs font-black uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5 text-[#31376B]" />
            {eventContent.normalization.badge}
          </span>
        </div>

        {/* Título de normalização */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#31376B] tracking-tight leading-tight mb-6">
            {eventContent.normalization.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
            {eventContent.normalization.lead}
          </p>
        </div>

        {/* Bloco explicativo central */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 mb-12 shadow-sm">
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p className="border-l-4 border-[#5BB7D0] pl-4 sm:pl-6 text-slate-800 text-lg sm:text-xl font-medium">
              {eventContent.normalization.explanation}
            </p>

            <div className="p-6 rounded-2xl bg-[#31376B] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-[#5BB7D0] shrink-0" />
                <span className="text-lg sm:text-xl font-bold tracking-tight">
                  {eventContent.normalization.repeatHighlight}
                </span>
              </div>
              <span className="text-xs font-mono font-semibold text-cyan-200 uppercase tracking-widest">
                O circuito automático
              </span>
            </div>
          </div>
        </div>

        {/* O Custo — Destaque com 3 itens */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-rose-600 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200 inline-block mb-3">
              O impacto real na sua vida
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#31376B] tracking-tight">
              {eventContent.normalization.costHeadline}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventContent.normalization.costItems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#5BB7D0] hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#31376B] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-[#6A84B7]">
                  Repetição inconsciente
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA rápido para quebrar e direcionar */}
        <div className="text-center pt-4">
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="h-14 px-8 bg-[#31376B] hover:bg-[#242952] text-white font-extrabold rounded-xl uppercase tracking-wider text-sm shadow-lg shadow-[#31376B]/20 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2"
          >
            <span>Quero Mudar Esse Ciclo na Imersão</span>
            <ArrowRight className="w-4 h-4 text-[#5BB7D0]" />
          </Button>
        </div>
      </div>
    </section>
  )
}
