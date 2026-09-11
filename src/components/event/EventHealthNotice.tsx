import React from 'react'
import { AlertTriangle, ShieldAlert } from 'lucide-react'
import { eventContent } from '@/content/event'

export function EventHealthNotice() {
  return (
    <section className="py-14 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/60 border border-slate-800 text-slate-400">
          <div className="flex items-center gap-3 mb-4 text-amber-400">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <h3 className="text-sm sm:text-base font-bold text-slate-200 tracking-wide uppercase">
              {eventContent.healthNotice.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
            {eventContent.healthNotice.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-xs text-slate-300">
            {eventContent.healthNotice.conditions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-500/20 text-xs text-amber-300/90 leading-relaxed mb-3">
            <strong>Atenção:</strong> {eventContent.healthNotice.medicalClearance}
          </div>

          <p className="text-[11px] text-slate-500 leading-relaxed italic">
            {eventContent.healthNotice.purposeNote}
          </p>
        </div>
      </div>
    </section>
  )
}
