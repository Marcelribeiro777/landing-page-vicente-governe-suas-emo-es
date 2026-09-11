import React from 'react'
import { AlertTriangle, ShieldAlert } from 'lucide-react'
import { eventContent } from '@/content/event'

export function EventHealthNotice() {
  return (
    <section className="py-14 bg-[#0D0D0D] border-t border-[#2E2B25]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-6 sm:p-8 bg-[#141414] border border-[#2E2B25] text-[#CFC9B8]">
          <div className="flex items-center gap-3 mb-4 text-[#E8A020]">
            <ShieldAlert className="w-5 h-5 shrink-0 text-[#E8A020]" />
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide uppercase">
              {eventContent.healthNotice.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#CFC9B8] leading-relaxed mb-4">
            {eventContent.healthNotice.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-xs text-[#F2EFE6]">
            {eventContent.healthNotice.conditions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8A020] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-[#0D0D0D] border border-[#E8A020]/30 text-xs text-[#F5B83D] leading-relaxed mb-3">
            <strong className="text-white">Atenção:</strong>{' '}
            {eventContent.healthNotice.medicalClearance}
          </div>

          <p className="text-[11px] text-[#A89F91] leading-relaxed italic">
            {eventContent.healthNotice.purposeNote}
          </p>
        </div>
      </div>
    </section>
  )
}
