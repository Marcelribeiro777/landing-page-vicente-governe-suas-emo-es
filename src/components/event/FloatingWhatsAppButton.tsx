import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { eventContent } from '@/content/event'

export function FloatingWhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true)

  const encodedMessage = encodeURIComponent(eventContent.support.whatsappMessage)
  const whatsappUrl = `https://wa.me/${eventContent.support.whatsappNumber}?text=${encodedMessage}`

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-2 group">
      {/* Optional dismissable floating tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900/95 text-white border border-emerald-500/40 text-xs py-2 px-3.5 rounded-xl shadow-xl shadow-black/50 animate-bounce duration-1000">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Dúvidas sobre o evento? Fale com a equipe!</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setShowTooltip(false)
            }}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco via WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white/20 relative"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-[10px] text-slate-950 font-black flex items-center justify-center shadow">
          1
        </span>
        <MessageCircle className="w-7 h-7 fill-white text-white" />
      </a>
    </div>
  )
}
