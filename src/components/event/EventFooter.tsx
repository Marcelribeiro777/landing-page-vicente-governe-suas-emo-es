import React from 'react'
import { Sparkles, MapPin, Building, ShieldCheck } from 'lucide-react'
import { eventContent } from '@/content/event'

export function EventFooter() {
  return (
    <footer className="bg-[#181b36] text-slate-300 border-t border-[#6A84B7]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          {/* Brand & Mission column */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#31376B] to-[#5BB7D0] text-white font-black flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-afacad text-2xl font-black tracking-tight text-white">
                {eventContent.event.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
              {eventContent.event.subheadlineTag} — Uma experiência transformadora desenhada para
              romper barreiras e construir clareza absoluta de futuro.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 pt-2">
              <Building className="w-4 h-4 text-[#6A84B7]" />
              <span>{eventContent.support.companyName}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="font-semibold text-slate-300">CNPJ:</span>
              <span>{eventContent.support.cnpj}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#6A84B7] shrink-0" />
              <span>{eventContent.support.address}</span>
            </div>
          </div>

          {/* Institutional Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Institucional
            </h4>
            <ul className="space-y-2.5 text-xs">
              {eventContent.support.legalLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-[#5BB7D0] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Security & Support info */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Atendimento e Segurança
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {eventContent.support.supportHours}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Ambiente de Inscrição Seguro (SSL 256-bit)</span>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {eventContent.support.copyrightYear} {eventContent.support.companyName}. Todos os
            direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>Este site não faz parte do Facebook, Instagram ou Meta Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
