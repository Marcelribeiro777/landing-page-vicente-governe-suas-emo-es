import React from 'react'
import { Award, CheckCircle2, Globe, Flame } from 'lucide-react'
import { AnimatedCounter } from './AnimatedCounter'
import { eventContent } from '@/content/event'

export function EventAuthority() {
  return (
    <section
      id="autoridade"
      className="py-20 sm:py-28 bg-slate-950 relative border-t border-slate-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mentor Introduction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-20">
          {/* Mentor Photo Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer Golden Border & Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-300 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-amber-500/40 shadow-2xl">
                <img
                  src={eventContent.authority.mentorImage}
                  alt={eventContent.authority.mentorName}
                  className="w-full h-96 sm:h-[440px] object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Photo Badge overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6 pt-12">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-400/20 px-2.5 py-1 rounded-md border border-amber-400/30 inline-block mb-1">
                    Mentor & Condução
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {eventContent.authority.mentorName}
                  </h3>
                  <p className="text-xs text-slate-300">{eventContent.authority.mentorRole}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mentor Bio & Details Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4 w-fit">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Quem vai guiar você nessa jornada?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              {eventContent.authority.mentorName}
            </h2>

            <p className="text-amber-400 font-semibold text-base sm:text-lg mb-6">
              {eventContent.authority.mentorRole}
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              {eventContent.authority.mentorBio}
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-800 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Metodologia vivencial com base em neurociência e comportamento humano</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Ferramentas práticas para aplicar no dia seguinte na vida e carreira</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Auditórios lotados com participantes dos mais diversos estados e países</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Numerical Counters Grid */}
        <div className="pt-10 border-t border-slate-800/80">
          <div className="text-center mb-10">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Resultados Concretos do Método
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {eventContent.authority.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center hover:border-amber-500/40 transition-colors flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-400 font-mono tracking-tight mb-2 group-hover:scale-105 transition-transform">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2200}
                    />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-2">
                    {stat.label}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-snug">{stat.helper}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
