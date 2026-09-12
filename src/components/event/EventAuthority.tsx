import React from 'react'
import { Award, Instagram } from 'lucide-react'
import { eventContent } from '@/content/event'

export function EventAuthority() {
  const instagramUrl = eventContent.authority.mentorInstagram
    ? `https://instagram.com/${eventContent.authority.mentorInstagram.replace('@', '')}`
    : 'https://instagram.com/vicente_carnero'

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

        {/* Mentor Presentation: Centralized Photo + Details */}
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
              {/* Photo Overlay with Name, Role & Instagram */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/90 to-transparent p-6 pt-16 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-[#E8A020] bg-[#E8A020]/15 px-3 py-1 rounded-md border border-[#E8A020]/40 inline-block mb-2">
                  Condução Presencial
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {eventContent.authority.mentorName}
                </h3>

                {/* Cargo (Master Trainer) */}
                {eventContent.authority.mentorRole && (
                  <p className="text-[#E8A020] text-sm sm:text-base font-bold tracking-wide mt-1">
                    {eventContent.authority.mentorRole}
                  </p>
                )}

                {/* Instagram (@vicente_carnero) */}
                {eventContent.authority.mentorInstagram && (
                  <div className="mt-3 flex items-center justify-center">
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1A1A]/80 border border-[#E8A020]/40 text-[#E8A020] hover:text-white hover:border-[#E8A020] text-xs font-semibold transition-colors duration-200"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#E8A020]" />
                      <span>{eventContent.authority.mentorInstagram}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Presentation Text below the photo */}
          {eventContent.authority.presentationParagraphs && (
            <div className="mt-8 max-w-2xl w-full text-center px-4 sm:px-6">
              <div className="space-y-4 text-base sm:text-lg leading-relaxed">
                {/* Paragraph 1 */}
                <p className="text-[#D1CBC1] font-normal">
                  <span className="font-semibold text-white">Vicente Carneiro</span> é Doutor em
                  Psicologia, mentor, palestrante e escritor, com mais de 20 anos de prática
                  clínica, docência universitária e supervisão.
                </p>

                {/* Paragraph 2 - Core idea highlighted */}
                <p className="text-[#F5B83D] italic font-medium border-y border-[#E8A020]/20 py-3 sm:py-4 px-2 sm:px-4 bg-[#E8A020]/5 rounded-xl">
                  Acredita numa ideia simples e exigente:{' '}
                  <span className="text-white not-italic font-semibold">
                    “seus padrões não precisam ser o seu destino — o corpo sabe o caminho antes da
                    mente admitir.”
                  </span>
                </p>

                {/* Paragraph 3 */}
                <p className="text-[#D1CBC1] font-normal">
                  No <span className="font-semibold text-white">Governe Suas Emoções</span>, ele
                  leva essa ideia da teoria para a prática, com você, na sala.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
