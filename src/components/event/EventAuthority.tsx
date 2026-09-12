import React from 'react'
import { Award } from 'lucide-react'
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
        {/* Section Header: Quem conduz */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8A020]/15 border border-[#E8A020]/30 text-[#E8A020] text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-4 h-4 text-[#E8A020]" />
            <span>{eventContent.authority.sectionTitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {eventContent.authority.mentorName}
          </h2>
        </div>

        {/* Mentor Presentation: Centralized Photo + Name */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative group max-w-md w-full">
            {/* Outer Border & Glow (Golden warm gradient) */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#0D0D0D] via-[#E8A020]/60 to-[#F5B83D] rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-500" />

            <div className="relative rounded-2xl overflow-hidden bg-[#141414] border border-[#2E2B25] shadow-2xl">
              <img
                src={eventContent.authority.mentorImage}
                alt={eventContent.authority.mentorName}
                className="w-full h-[420px] sm:h-[480px] object-cover object-[78%_20%] filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              {/* Photo Overlay with Name */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/85 to-transparent p-6 pt-16 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-[#E8A020] bg-[#E8A020]/15 px-3 py-1 rounded-md border border-[#E8A020]/40 inline-block mb-2">
                  Condução Presencial
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {eventContent.authority.mentorName}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
