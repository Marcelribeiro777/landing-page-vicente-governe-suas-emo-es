import { useState, useEffect } from 'react'
import { Ticket } from 'lucide-react'
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
          ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#2E2B25] py-3 shadow-xl shadow-black/60'
          : 'bg-transparent py-4 sm:py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Nome do Evento à esquerda */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            scrollToAnchor('#hero')
          }}
          className="flex flex-col min-w-0 group"
          title={eventContent.event.name}
        >
          <span className="font-afacad font-black text-base sm:text-xl md:text-2xl lg:text-3xl tracking-tight text-[#F2EFE6] group-hover:text-white leading-tight truncate drop-shadow-sm transition-colors">
            {eventContent.event.name}
          </span>
          <span className="text-[10px] sm:text-xs font-semibold text-[#E8A020] tracking-wider uppercase truncate mt-0.5 font-sans">
            {eventContent.event.editionBadge}
          </span>
        </a>
        {/* Botão de Destaque Ingressos à direita */}
        <div className="flex items-center shrink-0 ml-2">
          <Button
            size="sm"
            onClick={() => scrollToAnchor('#precos')}
            className="relative overflow-hidden bg-[#228B22] hover:bg-[#2FA32B] text-white font-black shadow-[0_0_20px_rgba(34,139,34,0.4)] hover:shadow-[0_0_28px_rgba(47,163,43,0.65)] px-3.5 sm:px-5 h-8 sm:h-10 rounded-lg text-[11px] sm:text-sm uppercase tracking-wider hover:scale-[1.04] active:scale-[0.98] transition-all flex items-center gap-1.5 sm:gap-2 shrink-0 border-2 border-[#2FA32B]"
          >
            <span className="absolute inset-0 w-1/3 bg-white/20 blur-sm animate-cta-shimmer pointer-events-none" />
            <Ticket className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-white relative z-10" />
            <span className="relative z-10 font-black">INGRESSOS</span>
          </Button>
        </div>{' '}
      </div>
    </header>
  )
}
