import React from 'react'
import { Ticket, CheckCircle2, Users, ArrowRight, ShieldCheck, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { eventContent } from '@/content/event'

export function EventPricing() {
  const handleCheckout = (url: string) => {
    // Para demo/placeholder, se for link externo ou se usuário quiser integrar checkout
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="precos"
      className="py-20 sm:py-28 bg-[#31376B] relative border-t border-[#6A84B7]/25 overflow-hidden"
    >
      {/* Background radial spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#5BB7D0]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#5BB7D0] bg-[#5BB7D0]/15 px-3.5 py-1.5 rounded-full border border-[#5BB7D0]/30 inline-flex items-center gap-1.5 mb-4">
            <Ticket className="w-3.5 h-3.5 text-[#5BB7D0]" />
            {eventContent.pricing.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            {eventContent.pricing.title}
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            {eventContent.pricing.subtitle}
          </p>

          {/* Group Discount Announcement Ribbon */}
          <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-[#5BB7D0]/20 via-[#6A84B7]/25 to-[#5BB7D0]/20 border border-[#5BB7D0]/40 text-center max-w-2xl mx-auto backdrop-blur-md">
            <span className="inline-block text-[11px] font-black uppercase tracking-widest bg-[#5BB7D0] text-[#31376B] px-2.5 py-0.5 rounded-full mb-1 font-bold">
              {eventContent.pricing.groupDiscountBadge}
            </span>
            <p className="text-sm font-bold text-white">{eventContent.pricing.groupDiscountText}</p>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {eventContent.pricing.cards.map((card) => {
            return (
              <div
                key={card.id}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  card.isPopular
                    ? 'bg-gradient-to-b from-[#1e2348] to-[#161a38] border-2 border-[#5BB7D0] shadow-2xl shadow-[#5BB7D0]/20 lg:-translate-y-4'
                    : 'bg-[#1e2348]/90 border border-[#6A84B7]/30 hover:border-[#6A84B7]/60 hover:shadow-xl'
                }`}
              >
                {/* Popular Ribbon */}
                {card.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5BB7D0] via-cyan-300 to-[#6A84B7] text-[#31376B] px-4 py-1 rounded-full text-xs font-black tracking-wider uppercase shadow-lg shadow-[#5BB7D0]/30 flex items-center gap-1.5 whitespace-nowrap">
                    <Zap className="w-3.5 h-3.5 fill-[#31376B]" />
                    <span>{card.tag}</span>
                  </div>
                )}

                <div>
                  {/* Card Title & Tag */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-black text-white">{card.name}</h3>
                    {!card.isPopular && card.tag && (
                      <span className="text-[11px] font-bold text-[#5BB7D0] bg-[#5BB7D0]/10 px-2 py-0.5 rounded border border-[#5BB7D0]/30">
                        {card.tag}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 mb-6 leading-relaxed">{card.description}</p>

                  {/* Price Box */}
                  <div className="p-4 rounded-xl bg-[#31376B]/70 border border-[#6A84B7]/30 mb-6">
                    <div className="text-xs text-slate-300 uppercase font-semibold mb-1">
                      À vista no PIX ou Cartão:
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-bold text-[#5BB7D0]">R$</span>
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-mono">
                        {card.cashPrice}
                      </span>
                      <span className="text-xs text-slate-300">à vista</span>
                    </div>

                    <div className="text-xs text-cyan-200 font-semibold mt-2 pt-2 border-t border-[#6A84B7]/25">
                      ou em até{' '}
                      <strong className="text-white font-mono text-sm">
                        {card.installments.times}x de R${' '}
                        {card.installments.value.toFixed(2).replace('.', ',')}
                      </strong>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6A84B7] block mb-2">
                      O que está incluso:
                    </span>
                    {card.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            card.isPopular ? 'text-[#5BB7D0]' : 'text-[#6A84B7]'
                          }`}
                        />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="space-y-3 pt-4 border-t border-[#6A84B7]/25">
                  <Button
                    onClick={() => handleCheckout(card.checkoutUrl)}
                    className={`w-full h-12 uppercase tracking-wider font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-lg ${
                      card.isPopular
                        ? 'bg-gradient-to-r from-[#5BB7D0] via-cyan-300 to-[#6A84B7] hover:from-cyan-300 hover:to-[#5BB7D0] text-[#31376B] shadow-[#5BB7D0]/25 hover:scale-[1.02] active:scale-[0.98]'
                        : 'bg-[#31376B] hover:bg-[#242952] border border-[#6A84B7]/40 text-white hover:text-[#5BB7D0]'
                    }`}
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Checkout Seguro • 7 dias de garantia</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
