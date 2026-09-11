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
      className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] overflow-hidden"
    >
      {/* Background Gradients & Ambient Glow (Black base with warm gold/amber center glow like the banner) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E8A020]/20 via-[#141414] to-[#0D0D0D] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E8A020]/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#F5B83D]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid subtle texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Date and Location Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 py-2 rounded-full bg-[#141414]/90 border border-[#2E2B25] text-xs sm:text-sm font-semibold text-[#F2EFE6] mb-6 shadow-lg shadow-black/60 backdrop-blur-md">
          <span className="flex items-center gap-1.5 text-[#E8A020] font-bold">
            <Calendar className="w-4 h-4 text-[#E8A020]" />
            {eventContent.event.dateDisplay}
          </span>
          <span className="text-[#6E685E] hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 text-[#CFC9B8]">
            <Clock className="w-4 h-4 text-[#E8A020]" />
            {eventContent.event.schedule}
          </span>
          <span className="text-[#6E685E] hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 text-[#CFC9B8]">
            <MapPin className="w-4 h-4 text-[#E8A020]" />
            {eventContent.event.locationDisplay}
          </span>
          <span className="text-[#6E685E] hidden sm:inline">•</span>
          <span className="bg-[#E8A020]/15 text-[#E8A020] text-[11px] font-bold px-2 py-0.5 rounded-full uppercase border border-[#E8A020]/40">
            Presencial
          </span>
        </div>

        {/* Subtitle tag / Eyebrow */}
        <span className="inline-block text-xs sm:text-base md:text-xl lg:text-2xl font-extrabold tracking-wide text-[#F2EFE6] mb-5 px-3 sm:px-4 py-1.5 max-w-3xl leading-snug drop-shadow-sm">
          <span className="text-[#E8A020]">A MELHOR</span> imersão presencial de{' '}
          <span className="text-[#E8A020]">AUTOGOVERNO EMOCIONAL</span> do ano
        </span>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 max-w-4xl leading-[1.12] drop-shadow-md">
          {/* Nome do evento com fonte Afacad e gradiente suave creme/branco */}
          <span className="block font-afacad font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F2EFE6] to-[#E8A020] drop-shadow-sm tracking-tight">
            {eventContent.event.name}
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block font-extrabold text-[#F2EFE6] leading-snug">
            {eventContent.event.headline}
          </span>
        </h1>

        {/* Subheadline description */}
        <p className="text-base sm:text-xl text-[#CFC9B8] max-w-3xl mb-8 leading-relaxed font-normal">
          {eventContent.event.subheadline}
        </p>

        {/* Primary Hero CTA Button with Pulse & Shimmer */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md mb-8">
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="relative overflow-hidden w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 bg-[#228B22] hover:bg-[#2FA32B] text-white font-black rounded-xl shadow-[0_0_30px_rgba(34,139,34,0.45)] hover:shadow-[0_0_40px_rgba(47,163,43,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all text-base sm:text-lg uppercase tracking-wider flex items-center justify-center gap-3 border-2 border-[#2FA32B]"
          >
            <span className="absolute inset-0 w-1/3 bg-white/20 blur-sm animate-cta-shimmer pointer-events-none" />
            <span className="relative z-10 font-black tracking-wider text-white">
              {eventContent.event.heroCtaText}
            </span>
            <ArrowRight className="w-5 h-5 text-white stroke-[2.5] relative z-10" />
          </Button>
        </div>

        {/* Scarcity / Limited spots banner marquee-like */}
        <div className="w-full max-w-3xl py-2.5 sm:py-3.5 md:py-4 px-3 sm:px-6 md:px-8 rounded-2xl bg-[#E8A020]/15 border-2 border-[#E8A020]/60 backdrop-blur-md flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-10 animate-urgency-pulse motion-reduce:animate-none">
          <span className="flex h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 rounded-full bg-[#E8A020] animate-ping motion-reduce:animate-none" />
          <span className="font-afacad uppercase tracking-wider font-extrabold flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 text-white text-sm sm:text-lg md:text-2xl lg:text-3xl drop-shadow-sm text-center">
            <Flame className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#E8A020] shrink-0 fill-[#E8A020]/30" />
            <span>{eventContent.event.limitedSpotsBadge}</span>
          </span>
        </div>

        {/* Trust bullet markers */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-xs sm:text-sm text-[#CFC9B8]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Garantia de 7 dias incondicional</span>
          </div>
          <div className="flex items-center gap-2">
            <Users2 className="w-4 h-4 text-[#E8A020]" />
            <span>Condução presencial com Vicente Carnero</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#E8A020]" />
            <span>6 horas de imersão direta e vivencial</span>
          </div>
        </div>
      </div>
    </section>
  )
}
