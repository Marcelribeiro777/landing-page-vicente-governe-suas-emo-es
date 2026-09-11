import React, { useEffect } from 'react'
import { EventHero } from '@/components/event/EventHero'
import { EventPainMirroring } from '@/components/event/EventPainMirroring'
import { EventAuthority } from '@/components/event/EventAuthority'
import { EventMethod } from '@/components/event/EventMethod'
import { EventTestimonials } from '@/components/event/EventTestimonials'
import { EventLogistics } from '@/components/event/EventLogistics'
import { EventPricing } from '@/components/event/EventPricing'
import { EventFaq } from '@/components/event/EventFaq'
import { EventUrgencyBanner } from '@/components/event/EventUrgencyBanner'
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
      {/* 1. Hero (Above the Fold) */}
      <EventHero />

      {/* 2. Dor / Espelhamento Emocional */}
      <EventPainMirroring />

      {/* 3. Autoridade com Contador Animado */}
      <EventAuthority />

      {/* 4. Método em 3 Passos */}
      <EventMethod />

      {/* 5. Depoimentos / Prova Social */}
      <EventTestimonials />

      {/* 6. Logística do Evento (Data, Horário, Local, Incluso) */}
      <EventLogistics />

      {/* 7. Precificação — Um Único Bloco Consolidado */}
      <EventPricing />

      {/* 8. FAQ — Accordion com Política de Reembolso e Dúvidas */}
      <EventFaq />

      {/* 9. Barra de Urgência + Contador Regressivo Real */}
      <EventUrgencyBanner />

      {/* 10. CTA Final Emocional */}
      <EventFinalCta />

      {/* 11. Aviso de Saúde e Contraindicações Clínicas */}
      <EventHealthNotice />
    </div>
  )
}
