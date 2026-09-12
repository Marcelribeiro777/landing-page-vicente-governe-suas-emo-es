import React from 'react'
import { Calendar, Clock, MapPin, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { eventContent } from '@/content/event'

export function EventLogistics() {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector('#precos')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const iconMap = {
    calendar: Calendar,
    clock: Clock,
    'map-pin': MapPin,
    sparkles: Sparkles,
  }

  return (
    <section
      id="logistica"
      className="py-20 sm:py-28 bg-[#111111] relative border-t border-[#2E2B25]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#E8A020] bg-[#E8A020]/15 px-3.5 py-1.5 rounded-full border border-[#E8A020]/30 inline-flex items-center gap-1.5 mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#E8A020]" />
            {eventContent.logistics.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            {eventContent.logistics.title}
          </h2>
          <p className="text-[#CFC9B8] text-base sm:text-lg leading-relaxed">
            {eventContent.logistics.subtitle}
          </p>
        </div>

        {/* 4 Logistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {eventContent.logistics.details.map((detail, idx) => {
            const Icon = iconMap[detail.icon] || Calendar
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#2E2B25] hover:border-[#E8A020]/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E8A020]/15 text-[#E8A020] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#E8A020] uppercase tracking-wider block mb-1">
                    {detail.label}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {detail.value}
                  </h3>
                </div>
                {detail.subtext && (
                  <p className="text-xs text-[#CFC9B8] mt-2 pt-3 border-t border-[#2E2B25] leading-relaxed">
                    {detail.subtext}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        {/* What is Included Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#1A1A1A] border-2 border-[#E8A020]/40 max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#E8A020]" />
            <span>O que está incluso na sua inscrição:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {eventContent.logistics.included.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E8A020] shrink-0 mt-0.5" />
                <span className="text-sm text-[#F2EFE6]">{item}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#141414] border border-[#2E2B25] flex items-start gap-3 text-xs text-[#CFC9B8] mb-8">
            <AlertCircle className="w-4 h-4 text-[#E8A020] shrink-0 mt-0.5" />
            <span>{eventContent.logistics.note}</span>
          </div>

          <div className="flex justify-center w-full">
            <Button
              size="lg"
              onClick={scrollToPricing}
              className="relative overflow-hidden w-full sm:w-auto max-w-full min-h-[3.5rem] sm:h-16 px-4 py-3 sm:px-10 bg-gradient-to-r from-[#E8A020] via-[#F5B83D] to-[#E8A020] hover:from-[#F5B83D] hover:to-[#E8A020] text-[#0D0D0D] font-black rounded-xl uppercase tracking-wider text-xs sm:text-base shadow-[0_0_25px_rgba(232,160,32,0.35)] hover:shadow-[0_0_35px_rgba(245,184,61,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all border-2 border-[#F5B83D] inline-flex items-center justify-center gap-2 whitespace-normal text-center"
            >
              <span className="absolute inset-0 w-1/3 bg-white/25 blur-sm animate-cta-shimmer pointer-events-none" />
              <span className="relative z-10 font-black leading-snug">
                Sim, Quero Estar Presente No Auditório
              </span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D0D0D] relative z-10 shrink-0" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
