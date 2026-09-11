import React from 'react'
import { Award, CheckCircle2 } from 'lucide-react'
import { AnimatedCounter } from './AnimatedCounter'
import { eventContent } from '@/content/event'

export function EventAuthority() {
  return (
    <section
      id="autoridade"
      className="py-20 sm:py-28 bg-[#0D0D0D] relative border-t border-[#2E2B25] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#E8A020]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mentor Introduction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14">
          {/* Mentor Photo Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer Border & Glow (Golden warm gradient) */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#0D0D0D] via-[#E8A020]/60 to-[#F5B83D] rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl overflow-hidden bg-[#141414] border border-[#2E2B25] shadow-2xl">
                <img
                  src={eventContent.authority.mentorImage}
                  alt={eventContent.authority.mentorName}
                  className="w-full h-96 sm:h-[440px] object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Photo Badge overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/85 to-transparent p-6 pt-12">
                  <span className="text-xs font-black uppercase tracking-wider text-[#E8A020] bg-[#E8A020]/15 px-2.5 py-1 rounded-md border border-[#E8A020]/40 inline-block mb-1">
                    Condução Presencial
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {eventContent.authority.mentorName}
                  </h3>
                  <p className="text-xs text-[#CFC9B8]">{eventContent.authority.mentorRole}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mentor Bio & Details Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8A020]/15 border border-[#E8A020]/30 text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-4 w-fit">
              <Award className="w-4 h-4 text-[#E8A020]" />
              <span>{eventContent.authority.sectionTitle}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
              {eventContent.authority.mentorName}
            </h2>

            <p className="text-[#E8A020] font-semibold text-base sm:text-lg mb-6">
              {eventContent.authority.mentorRole}
            </p>

            <p className="text-[#F2EFE6] text-base sm:text-lg leading-relaxed mb-6 font-normal">
              {eventContent.authority.mentorBio}
            </p>

            <div className="p-4 rounded-xl bg-[#141414] border border-[#2E2B25] mb-6">
              <p className="text-sm sm:text-base font-semibold text-[#F2EFE6] italic">
                “{eventContent.authority.highlightPhrase}”
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#2E2B25] text-sm text-[#CFC9B8]">
              {eventContent.authority.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E8A020] shrink-0" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Numerical Counters Grid */}
        {eventContent.authority.stats.length > 0 && (
          <div className="pt-8 border-t border-[#2E2B25] max-w-xl mx-auto">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#141414] border border-[#2E2B25] text-center hover:border-[#E8A020]/60 transition-colors shadow-lg">
              <div className="text-4xl sm:text-6xl font-black text-[#E8A020] font-mono tracking-tight mb-2">
                <AnimatedCounter
                  value={eventContent.authority.stats[0].value}
                  prefix={eventContent.authority.stats[0].prefix}
                  suffix={eventContent.authority.stats[0].suffix}
                  duration={2200}
                />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider mb-2">
                {eventContent.authority.stats[0].label}
              </h4>
              <p className="text-xs sm:text-sm text-[#CFC9B8] leading-relaxed max-w-md mx-auto">
                {eventContent.authority.stats[0].helper}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
