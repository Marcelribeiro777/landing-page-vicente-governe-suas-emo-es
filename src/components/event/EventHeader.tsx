import React, { useState, useEffect } from 'react'
import { Sparkles, Ticket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { eventContent } from '@/content/event'

export function EventHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToAnchor = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#31376B]/95 backdrop-blur-md border-b border-[#6A84B7]/30 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-4 sm:py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Nome do Evento à esquerda */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            scrollToAnchor('#hero')
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#31376B] via-[#6A84B7] to-[#5BB7D0] text-white font-black flex items-center justify-center shadow-md shadow-[#5BB7D0]/30 group-hover:scale-105 transition-transform duration-200">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-xl font-extrabold tracking-tight text-white leading-none">
              {eventContent.event.name}
            </span>
            <span className="text-[10px] font-bold text-[#5BB7D0] tracking-wider uppercase mt-0.5">
              {eventContent.event.editionBadge}
            </span>
          </div>
        </a>

        {/* Botão de Destaque Ingressos à direita (sem itens de menu) */}
        <div className="flex items-center">
          <Button
            size="sm"
            onClick={() => scrollToAnchor('#precos')}
            className="bg-gradient-to-r from-[#5BB7D0] to-[#6A84B7] hover:from-[#6A84B7] hover:to-[#5BB7D0] text-[#31376B] hover:text-white font-extrabold shadow-lg shadow-[#5BB7D0]/25 px-4 sm:px-5 h-9 sm:h-10 rounded-lg text-xs sm:text-sm uppercase tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <Ticket className="w-4 h-4 fill-current" />
            <span>Ingressos</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
