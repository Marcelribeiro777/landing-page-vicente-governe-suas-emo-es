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
      className="py-20 sm:py-28 bg-slate-900/60 relative border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30 inline-flex items-center gap-1.5 mb-4">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            {eventContent.logistics.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            {eventContent.logistics.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
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
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-amber-400/80 uppercase tracking-wider block mb-1">
                    {detail.label}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {detail.value}
                  </h3>
                </div>
                {detail.subtext && (
                  <p className="text-xs text-slate-400 mt-2 pt-3 border-t border-slate-900 leading-relaxed">
                    {detail.subtext}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        {/* What is Included Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-950 border-2 border-amber-500/30 max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>O que está incluso na sua inscrição:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {eventContent.logistics.included.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 text-xs text-slate-400 mb-8">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>{eventContent.logistics.note}</span>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={scrollToPricing}
              className="h-14 px-8 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black rounded-xl uppercase tracking-wider text-sm shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Sim, Quero Estar Presente No Auditório
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
