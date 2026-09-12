import React, { useEffect } from 'react'
import { EventHero } from '@/components/event/EventHero'
import { EventPainMirroring } from '@/components/event/EventPainMirroring'
import { EventNormalization } from '@/components/event/EventNormalization'
import { EventAuthority } from '@/components/event/EventAuthority'
import { EventMethod } from '@/components/event/EventMethod'
import { EventLogistics } from '@/components/event/EventLogistics'
import { EventPricing } from '@/components/event/EventPricing'
import { EventFaq } from '@/components/event/EventFaq'
import { EventFinalCta } from '@/components/event/EventFinalCta'
import { EventHealthNotice } from '@/components/event/EventHealthNotice'

export default function Index() {
  // Configuração de scroll suave nativo e checagem de hash de âncora inicial se existir
  useEffect(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash)
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [])

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero (Above the Fold): Título Afacad, Hook principal, badges de data/local */}
      <EventHero />

      {/* 2. Dor / Realidade Emocional: "Por que você reage de um jeito que não combina com quem você é?" */}
      <EventPainMirroring />

      {/* 3. Normalização / Explicação (Quebra com fundo branco): "Isso não quer dizer que você tem um defeito..." + O Custo */}
      <EventNormalization />

      {/* 4. Quem conduz (Autoridade do Mentor Vicente Carnero) */}
      <EventAuthority />

      {/* 5. Entregáveis & Método: "No GOVERNE SUAS EMOÇÕES, você vai:" + Redefinição de autogoverno */}
      <EventMethod />

      {/* 6. Logística do Evento (07 de novembro de 2026 · das 14h às 20:30h · Fortaleza/CE) */}
      <EventLogistics />

      {/* 7. Ingressos / Preços */}
      <EventPricing />

      {/* 8. FAQ — Dúvidas Frequentes */}
      <EventFaq />

      {/* 9. CTA Final Emocional com Hook */}
      <EventFinalCta />

      {/* 10. Aviso Ético / Saúde */}
      <EventHealthNotice />
    </div>
  )
}
