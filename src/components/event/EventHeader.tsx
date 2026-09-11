import React, { useState, useEffect } from 'react'
import { Menu, X, Sparkles, Ticket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { eventContent } from '@/content/event'

export function EventHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'O Evento', href: '#sobre' },
    { label: 'Para Quem É', href: '#dor' },
    { label: 'Mentor', href: '#autoridade' },
    { label: 'Método', href: '#metodo' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Local e Data', href: '#logistica' },
    { label: 'Dúvidas', href: '#faq' },
  ]

  const scrollToAnchor = (href: string) => {
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-xl shadow-black/40'
            : 'bg-transparent py-4 sm:py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Placeholder */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollToAnchor('#hero')
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-orange-500 text-slate-950 font-black flex items-center justify-center shadow-md shadow-amber-500/30 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-none">
                {eventContent.event.name}
              </span>
              <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase mt-0.5">
                {eventContent.event.editionBadge}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToAnchor(link.href)
                }}
                className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              onClick={() => scrollToAnchor('#precos')}
              className="bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold shadow-lg shadow-amber-500/25 px-5 h-10 rounded-lg text-xs sm:text-sm uppercase tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Ticket className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Ingressos</span>
            </Button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative ml-auto w-full max-w-xs bg-slate-950 border-l border-amber-500/20 h-full shadow-2xl flex flex-col p-6 z-10 animate-slide-up">
            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-extrabold text-white text-base">
                  {eventContent.event.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-md text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 py-6 flex flex-col space-y-3 overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToAnchor(link.href)
                  }}
                  className="text-sm font-semibold uppercase tracking-wider text-slate-200 hover:text-amber-400 hover:bg-slate-900/60 px-3 py-2.5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-5 border-t border-slate-800">
              <Button
                onClick={() => scrollToAnchor('#precos')}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold uppercase tracking-wider py-3 shadow-lg shadow-amber-500/30"
              >
                Garantir Ingresso
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
