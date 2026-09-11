import React from 'react'
import { Calendar, MapPin, Clock, ArrowRight, ShieldCheck, Flame, Users2 } from 'lucide-react'
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
            <Clock className="w-4 h-4 text-[#5BB7D0]" />
            {eventContent.event.schedule}
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
        <span className="inline-block text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide text-slate-100 mb-5 px-4 py-1.5 max-w-3xl leading-snug drop-shadow-sm">
          <span className="text-[#5BB7D0]">A MELHOR</span> imersão presencial de{' '}
          <span className="text-[#5BB7D0]">AUTOGOVERNO EMOCIONAL</span> do ano
        </span>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 max-w-4xl leading-[1.12] drop-shadow-md">
          {/* Nome do evento com fonte Afacad e gradiente suave */}
          <span className="block font-afacad font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-100 drop-shadow-sm tracking-tight">
            {eventContent.event.name}
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block font-extrabold text-slate-100 leading-snug">
            {eventContent.event.headline}
          </span>
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
        <div className="w-full max-w-3xl py-3.5 sm:py-4 px-5 sm:px-8 rounded-2xl bg-[#5BB7D0]/20 border-2 border-[#5BB7D0]/60 backdrop-blur-md flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 animate-urgency-pulse motion-reduce:animate-none">
          <span className="flex h-3.5 w-3.5 rounded-full bg-[#5BB7D0] animate-ping motion-reduce:animate-none" />
          <span className="font-afacad uppercase tracking-wider font-extrabold flex items-center justify-center gap-2 sm:gap-3 text-white text-xl sm:text-2xl md:text-3xl drop-shadow-sm text-center">
            <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-[#5BB7D0] shrink-0 fill-[#5BB7D0]/30" />
            <span>{eventContent.event.limitedSpotsBadge}</span>
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
            <span>Condução presencial com Vicente Carnero</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#6A84B7]" />
            <span>6 horas de imersão direta e vivencial</span>
          </div>
        </div>
      </div>
    </section>
  )
}
