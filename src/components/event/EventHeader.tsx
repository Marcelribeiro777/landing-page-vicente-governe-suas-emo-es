import { useState, useEffect } from 'react'
import { Ticket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { eventContent } from '@/content/event'

// Placeholder elegante em SVG para fallback caso a imagem falhe ou não seja fornecida
function LogoPlaceholder() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full object-contain" aria-hidden="true">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="50%" stopColor="#C88210" />
          <stop offset="100%" stopColor="#E8A020" />
        </linearGradient>
      </defs>
      {/* Círculo externo / globo */}
      <circle cx="50" cy="50" r="44" fill="none" stroke="url(#logoGrad)" strokeWidth="3.5" />
      {/* Meridianos / arcos de globo */}
      <ellipse
        cx="50"
        cy="50"
        rx="26"
        ry="44"
        fill="none"
        stroke="#E8A020"
        strokeWidth="2"
        opacity="0.85"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="44"
        ry="20"
        fill="none"
        stroke="#F5B83D"
        strokeWidth="2"
        opacity="0.6"
      />
      {/* Silhueta humana centralizada */}
      {/* Cabeça */}
      <circle cx="50" cy="34" r="6.5" fill="#E8A020" />
      {/* Tronco e braços */}
      <path
        d="M50 43 C43 43 38 48 38 55 L38 65 C38 66.5 39.5 67 41 67 C42.5 67 43 65.5 43 64 L43 57 C43 56 44 55 45 55 L45 78 C45 79.5 46.5 80 48 80 C49.5 80 50 78.5 50 77 L50 63 L50 77 C50 78.5 50.5 80 52 80 C53.5 80 55 79.5 55 78 L55 55 C56 55 57 56 57 57 L57 64 C57 65.5 57.5 67 59 67 C60.5 67 62 66.5 62 65 L62 55 C62 48 57 43 50 43 Z"
        fill="url(#logoGrad)"
      />
    </svg>
  )
}

export function EventHeader() {
  const [imageError, setImageError] = useState(false)
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
          ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#2E2B25] py-3 shadow-xl shadow-black/60'
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
          className="flex items-center gap-3 group min-w-0"
        >
          {/* Logo do evento com suporte a imagem configurada em eventContent.event.logoUrl */}
          {eventContent.event.logoUrl && !imageError ? (
            <div className="flex-shrink-0 flex items-center justify-center h-10 sm:h-11">
              <img
                src={eventContent.event.logoUrl}
                alt={eventContent.event.logoAlt || eventContent.event.name}
                onError={() => setImageError(true)}
                className="h-9 sm:h-11 w-auto max-w-[140px] sm:max-w-[180px] object-contain group-hover:brightness-110 transition-all duration-200 drop-shadow-sm"
              />
            </div>
          ) : (
            <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 rounded-xl bg-[#141414] p-1 border border-[#2E2B25] shadow-md shadow-[#E8A020]/15 group-hover:scale-105 transition-transform duration-200 flex items-center justify-center">
              <LogoPlaceholder />
            </div>
          )}

          <div className="flex flex-col min-w-0">
            <span className="font-afacad font-black text-sm sm:text-xl md:text-2xl lg:text-3xl tracking-tight text-[#F2EFE6] leading-tight truncate drop-shadow-sm">
              {eventContent.event.name}
            </span>
            <span className="text-[9px] sm:text-xs font-semibold text-[#E8A020] tracking-wider uppercase truncate mt-0.5 sm:mt-1 font-sans">
              {eventContent.event.editionBadge}
            </span>
          </div>
        </a>

        {/* Botão de Destaque Ingressos à direita */}
        <div className="flex items-center shrink-0 ml-2">
          <Button
            size="sm"
            onClick={() => scrollToAnchor('#precos')}
            className="relative overflow-hidden bg-gradient-to-r from-[#E8A020] via-[#F5B83D] to-[#E8A020] hover:from-[#F5B83D] hover:to-[#E8A020] text-[#0D0D0D] font-black shadow-[0_0_20px_rgba(232,160,32,0.35)] hover:shadow-[0_0_28px_rgba(245,184,61,0.6)] px-3.5 sm:px-5 h-8 sm:h-10 rounded-lg text-[11px] sm:text-sm uppercase tracking-wider hover:scale-[1.04] active:scale-[0.98] transition-all flex items-center gap-1.5 sm:gap-2 shrink-0 border-2 border-[#F5B83D]"
          >
            <span className="absolute inset-0 w-1/3 bg-white/25 blur-sm animate-cta-shimmer pointer-events-none" />
            <Ticket className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#0D0D0D] text-[#0D0D0D] relative z-10" />
            <span className="relative z-10 font-black">Ingressos</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
