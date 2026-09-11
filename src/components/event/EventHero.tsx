import React from 'react'
import { Calendar, MapPin, ArrowRight, ShieldCheck, Flame, Users2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { eventContent } from '@/content/event'

export function EventHero() {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector('#precos')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-[#31376B] overflow-hidden"
    >
      {/* Background Gradients & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5BB7D0]/20 via-[#31376B] to-[#1e2348] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#5BB7D0]/15 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#6A84B7]/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid subtle texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Date and Location Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 py-2 rounded-full bg-[#1e2348]/90 border border-[#6A84B7]/40 text-xs sm:text-sm font-semibold text-slate-100 mb-6 shadow-lg shadow-[#31376B]/40 backdrop-blur-md">
          <span className="flex items-center gap-1.5 text-[#5BB7D0] font-bold">
            <Calendar className="w-4 h-4 text-[#5BB7D0]" />
            {eventContent.event.dateDisplay}
          </span>
          <span className="text-[#6A84B7] hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 text-slate-200">
            <MapPin className="w-4 h-4 text-[#6A84B7]" />
            {eventContent.event.locationDisplay}
          </span>
          <span className="text-[#6A84B7] hidden sm:inline">•</span>
          <span className="bg-[#5BB7D0]/20 text-[#5BB7D0] text-[11px] font-bold px-2 py-0.5 rounded-full uppercase border border-[#5BB7D0]/30">
            Presencial
          </span>
        </div>

        {/* Subtitle tag / Eyebrow */}
        <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#5BB7D0] uppercase mb-4 px-3">
          {eventContent.event.subheadlineTag}
        </span>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 max-w-4xl leading-[1.12] drop-shadow-md">
          O passo definitivo para{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BB7D0] via-cyan-200 to-[#6A84B7]">
            romper bloqueios
          </span>
          , ter clareza e transformar sua vida.
        </h1>

        {/* Subheadline description */}
        <p className="text-base sm:text-xl text-slate-200 max-w-3xl mb-8 leading-relaxed font-normal">
          {eventContent.event.subheadline}
        </p>

        {/* Primary Hero CTA Button with Pulse */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md mb-8">
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 bg-gradient-to-r from-[#5BB7D0] via-cyan-300 to-[#6A84B7] hover:from-cyan-300 hover:to-[#5BB7D0] text-[#31376B] font-black rounded-xl shadow-xl shadow-[#5BB7D0]/30 hover:shadow-[#5BB7D0]/50 hover:scale-[1.03] active:scale-[0.98] transition-all text-base sm:text-lg uppercase tracking-wider flex items-center justify-center gap-3 border border-cyan-200/50"
          >
            <span>{eventContent.event.heroCtaText}</span>
            <ArrowRight className="w-5 h-5 text-[#31376B]" />
          </Button>
        </div>

        {/* Scarcity / Limited spots banner marquee-like */}
        <div className="w-full max-w-2xl py-2.5 px-4 rounded-xl bg-[#5BB7D0]/15 border border-[#5BB7D0]/40 backdrop-blur-md flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-cyan-200 mb-10 shadow-inner">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#5BB7D0] animate-ping" />
          <span className="uppercase tracking-wider font-extrabold flex items-center gap-1.5 text-white">
            <Flame className="w-4 h-4 text-[#5BB7D0]" />
            {eventContent.event.limitedSpotsBadge}
          </span>
        </div>

        {/* Trust bullet markers */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Garantia de 7 dias incondicional</span>
          </div>
          <div className="flex items-center gap-2">
            <Users2 className="w-4 h-4 text-[#5BB7D0]" />
            <span>Networking qualificado e presencial</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#6A84B7]" />
            <span>36 horas de vivência transformadora</span>
          </div>
        </div>
      </div>
    </section>
  )
}
