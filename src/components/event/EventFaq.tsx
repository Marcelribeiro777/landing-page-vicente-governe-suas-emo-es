import React, { useState } from 'react'
import { HelpCircle, ChevronDown, ShieldCheck } from 'lucide-react'
import { eventContent } from '@/content/event'

export function EventFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-[#FAF6EE] text-[#1E1B16] relative border-t border-[#E6DEC8] overflow-hidden"
    >
      {/* Transição suave vindo da seção de ingressos (preto #090909) para creme */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#090909]/20 via-[#090909]/5 to-transparent pointer-events-none" />

      {/* Iluminação ambiente dourada-âmbar suave compatível com o tema creme */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8A020]/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D48B12]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#B87008] bg-[#E8A020]/15 px-3.5 py-1.5 rounded-full border border-[#D48B12]/40 inline-flex items-center gap-1.5 mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#B87008]" />
            {eventContent.faq.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#14120E] tracking-tight mb-4 leading-tight">
            {eventContent.faq.title}
          </h2>
          <p className="text-[#4A4337] text-base sm:text-lg leading-relaxed">
            {eventContent.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {eventContent.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FFFFFF] border-[#D48B12] shadow-lg shadow-[#D48B12]/15 ring-1 ring-[#D48B12]/30'
                    : 'bg-[#FFFFFF] border-[#E8DFC9] shadow-sm shadow-[#2E281D]/5 hover:border-[#D48B12]/60 hover:shadow-md'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none transition-colors"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                      isOpen ? 'text-[#B87008]' : 'text-[#1F1B14]'
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#E8A020] text-[#0D0D0D] rotate-180 shadow-sm'
                        : 'bg-[#F2EBD9] text-[#6E6352] hover:text-[#B87008]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-sm sm:text-base text-[#4A4337] leading-relaxed border-t border-[#F0E8D5] animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* 7 Days Guarantee Box adaptada para tema creme */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FFFFFF] border-2 border-emerald-600/30 shadow-md shadow-emerald-950/5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1B6E1B] flex items-center justify-center shrink-0 border border-emerald-300 shadow-sm">
            <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <h4 className="text-base font-bold text-[#143B14] mb-1">
              Garantia Incondicional de 7 Dias
            </h4>
            <p className="text-xs sm:text-sm text-[#3E4D3E] leading-relaxed">
              Seu investimento está 100% protegido. Se por qualquer motivo você decidir não
              participar dentro de 7 dias após a compra, seu dinheiro será integralmente
              reembolsado.
            </p>
          </div>
        </div>
      </div>

      {/* Transição suave na base em direção ao CTA final (preto profundo #0B0A09) */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#0B0A09]/20 via-[#0B0A09]/5 to-transparent pointer-events-none" />
    </section>
  )
}
