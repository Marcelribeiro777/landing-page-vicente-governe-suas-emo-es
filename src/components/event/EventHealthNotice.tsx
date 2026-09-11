import React from 'react'
import { AlertTriangle, ShieldAlert } from 'lucide-react'
import { eventContent } from '@/content/event'

export function EventHealthNotice() {
  return (
    <section className="py-14 bg-[#1e2348] border-t border-[#6A84B7]/25">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-6 sm:p-8 bg-[#31376B] border border-[#6A84B7]/30 text-slate-300">
          <div className="flex items-center gap-3 mb-4 text-[#5BB7D0]">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide uppercase">
              {eventContent.healthNotice.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            {eventContent.healthNotice.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-xs text-slate-200">
            {eventContent.healthNotice.conditions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5BB7D0] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-[#1e2348] border border-[#5BB7D0]/30 text-xs text-cyan-200 leading-relaxed mb-3">
            <strong className="text-white">Atenção:</strong>{' '}
            {eventContent.healthNotice.medicalClearance}
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed italic">
            {eventContent.healthNotice.purposeNote}
          </p>
        </div>
      </div>
    </section>
  )
}
