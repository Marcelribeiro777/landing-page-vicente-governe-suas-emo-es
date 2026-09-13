import { useState } from 'react'
import { Printer, Copy, Check, ArrowLeft, AlertTriangle, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { eventContent } from '@/content/event'
import packageInfo from '../../package.json'

export default function Conteudo() {
  const [copied, setCopied] = useState(false)
  const appVersion = packageInfo.version

  const formatPrice = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  // Gera a cópia em texto plano formatado para fácil colagem em Word / Google Docs
  const generatePlainText = () => {
    const e = eventContent
    const lines: string[] = []

    lines.push('====================================================================')
    lines.push('GOVERNE SUAS EMOÇÕES — CONTEÚDO COMPLETO DA LANDING PAGE')
    lines.push(`Documento de revisão de copy | Versão ${appVersion}`)
    lines.push('Fonte da verdade: src/content/event.ts')
    lines.push('====================================================================\n')

    // Bloco 1
    lines.push('--- BLOCO 1: TOPO DA PÁGINA (HERO) ---')
    lines.push(`Nome do Evento: ${e.event.name}`)
    lines.push(`Edição / Badge: ${e.event.editionBadge}`)
    lines.push(`Tag de Subheadline: ${e.event.subheadlineTag}`)
    lines.push(`Headline: ${e.event.headline}`)
    lines.push(`Subheadline: ${e.event.subheadline}`)
    lines.push(`Data: ${e.event.dateDisplay}`)
    lines.push(`Local: ${e.event.locationDisplay} (${e.event.venueAddress})`)
    lines.push(`Horário: ${e.event.schedule} (${e.event.daysCount})`)
    lines.push(`CTA do Hero: ${e.event.heroCtaText}`)
    lines.push(`Selo de Vagas: ${e.event.limitedSpotsBadge}\n`)

    // Bloco 2
    lines.push('--- BLOCO 2: SEÇÃO DE DOR (ESPELHAMENTO) ---')
    lines.push(`Título: ${e.painMirroring.title}`)
    lines.push(`Subtítulo: ${e.painMirroring.subtitle}`)
    lines.push('Parágrafos de contexto:')
    e.painMirroring.contextParagraphs.forEach((p, idx) => {
      lines.push(`  [${idx + 1}] ${p}`)
    })
    lines.push('Cards de citação:')
    e.painMirroring.quoteCards.forEach((q, idx) => {
      lines.push(`  Card ${idx + 1} (${q.tag || 'Citação'}): ${q.quote}`)
      lines.push(`    Elaboração: ${q.elaboration}`)
    })
    lines.push('')

    // Bloco 3
    lines.push('--- BLOCO 3: SEÇÃO "ISSO NÃO QUER DIZER QUE VOCÊ TEM UM DEFEITO" ---')
    lines.push(`Título: ${e.normalization.title}`)
    lines.push(`Lead: ${e.normalization.lead}`)
    lines.push(`Destaque de Custo: ${e.normalization.costHighlight}`)
    lines.push('Cards de impacto:')
    e.normalization.quoteCards.forEach((c, idx) => {
      lines.push(`  Card ${idx + 1}: ${c.title}`)
      lines.push(`    ${c.text}`)
    })
    lines.push('')

    // Bloco 4
    lines.push('--- BLOCO 4: QUEM CONDUZ (AUTORIDADE) ---')
    lines.push(`Título da Seção: ${e.authority.sectionTitle}`)
    lines.push(`Nome: ${e.authority.mentorName}`)
    if (e.authority.mentorRole) lines.push(`Cargo/Papel: ${e.authority.mentorRole}`)
    if (e.authority.mentorInstagram) lines.push(`Instagram: ${e.authority.mentorInstagram}`)
    if (e.authority.presentationParagraphs) {
      lines.push('Apresentação:')
      lines.push(`  [1] ${e.authority.presentationParagraphs.p1}`)
      lines.push(`  [2] ${e.authority.presentationParagraphs.p2Highlight}`)
      lines.push(`  [3] ${e.authority.presentationParagraphs.p3}`)
    }
    if (e.authority.highlightPhrase) {
      lines.push(`Frase de Destaque: ${e.authority.highlightPhrase}`)
    }
    lines.push('Credenciais:')
    e.authority.credentials.forEach((c) => {
      lines.push(`  • ${c}`)
    })
    lines.push('')

    // Bloco 5
    lines.push('--- BLOCO 5: O QUE É O GOVERNE SUAS EMOÇÕES (MÉTODO) ---')
    lines.push(`Título: ${e.method.title}`)
    lines.push(`Introdução: ${e.method.introPrefix} ${e.method.introText}`)
    lines.push('Entregáveis:')
    e.method.deliverables.forEach((d) => {
      lines.push(`  [${d.num}] ${d.title}`)
      lines.push(`       ${d.description}`)
    })
    lines.push(`Linha de Reforço: ${e.method.reinforcementLine}`)
    lines.push('Parágrafos de Fechamento:')
    e.method.closingParagraphs.forEach((p, idx) => {
      lines.push(`  [${idx + 1}] ${p}`)
    })
    lines.push('')

    // Bloco 6
    lines.push('--- BLOCO 6: LOGÍSTICA ---')
    lines.push(`Badge: ${e.logistics.badge}`)
    lines.push(`Título: ${e.logistics.title}`)
    lines.push(`Subtítulo: ${e.logistics.subtitle}`)
    lines.push('Detalhes:')
    e.logistics.details.forEach((d) => {
      lines.push(`  • ${d.label}: ${d.value}${d.subtext ? ` (${d.subtext})` : ''}`)
    })
    lines.push('Itens Inclusos:')
    e.logistics.included.forEach((item) => {
      lines.push(`  • ${item}`)
    })
    lines.push(`Nota: ${e.logistics.note}\n`)

    // Bloco 7
    lines.push('--- BLOCO 7: INGRESSOS (PREÇOS E PLANOS) ---')
    lines.push(`Badge: ${e.pricing.badge}`)
    lines.push(`Título: ${e.pricing.title}`)
    lines.push(`Subtítulo: ${e.pricing.subtitle}`)
    lines.push(`Nome do Lote: ${e.pricing.lotName}`)
    lines.push(`Aviso de Condição: ${e.pricing.groupDiscountText}`)
    lines.push('Cards de Ingressos:')
    e.pricing.cards.forEach((card, idx) => {
      lines.push(`  [${idx + 1}] ${card.name} ${card.tag ? `(${card.tag})` : ''}`)
      lines.push(`      Descrição: ${card.description}`)
      lines.push(`      Preço à vista: ${formatPrice(card.cashPrice)}`)
      lines.push(
        `      Parcelamento: ${card.installments.times}x de ${formatPrice(card.installments.value)}`,
      )
      lines.push('      Benefícios/Features:')
      card.features.forEach((f) => lines.push(`        - ${f}`))
      lines.push(`      Texto do Botão: ${card.ctaText}`)
      lines.push(`      Link de Checkout: ${card.checkoutUrl}`)
    })
    lines.push('')

    // Bloco 8
    lines.push('--- BLOCO 8: FAQ (PERGUNTAS FREQUENTES) ---')
    lines.push(`Badge: ${e.faq.badge}`)
    lines.push(`Título: ${e.faq.title}`)
    lines.push(`Subtítulo: ${e.faq.subtitle}`)
    e.faq.items.forEach((item, idx) => {
      const isPending =
        idx === 8 ||
        idx === 9 ||
        item.answer.includes('Em breve:') ||
        item.answer.includes('divulgada em breve')
      const tag = isPending ? ' [⚠️ AGUARDANDO CONTEÚDO DEFINITIVO]' : ''
      lines.push(`  Pergunta ${idx + 1}${tag}: ${item.question}`)
      lines.push(`  Resposta: ${item.answer}\n`)
    })

    // Bloco 9
    lines.push('--- BLOCO 9: CTA FINAL ---')
    lines.push('Parágrafos de Fechamento:')
    e.finalCta.paragraphs.forEach((p, idx) => {
      lines.push(`  [${idx + 1}] ${p}`)
    })
    lines.push(`Texto do Botão: ${e.finalCta.ctaText}`)
    lines.push(`Subtexto: ${e.finalCta.ctaSubtext}\n`)

    // Bloco 10
    lines.push('--- BLOCO 10: AVISO ÉTICO E DE SAÚDE ---')
    lines.push(`Título: ${e.healthNotice.title}`)
    lines.push(`Descrição: ${e.healthNotice.description}`)
    lines.push('Condições com restrição / contraindicação:')
    e.healthNotice.conditions.forEach((c) => {
      lines.push(`  • ${c}`)
    })
    lines.push(`Orientação Médica: ${e.healthNotice.medicalClearance}`)
    lines.push(`Nota de Compromisso Ético: ${e.healthNotice.purposeNote}\n`)

    // Bloco 11
    lines.push('--- BLOCO 11: RODAPÉ E SUPORTE ---')
    lines.push(`Empresa: ${e.support.companyName}`)
    lines.push(`CNPJ: ${e.support.cnpj}`)
    lines.push(`Endereço: ${e.support.address}`)
    lines.push(`WhatsApp de Suporte: ${e.support.whatsappNumber}`)
    lines.push(`Mensagem Padrão WhatsApp: "${e.support.whatsappMessage}"`)
    lines.push(`Horário de Atendimento: ${e.support.supportHours}`)
    lines.push('Links Institucionais:')
    e.support.legalLinks.forEach((l) => {
      lines.push(`  • ${l.label} (${l.href})`)
    })
    lines.push(
      `Copyright: © ${e.support.copyrightYear} ${e.support.companyName}. Todos os direitos reservados.`,
    )

    return lines.join('\n')
  }

  const handleCopy = async () => {
    try {
      const text = generatePlainText()
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback simples
      const textarea = document.createElement('textarea')
      textarea.value = generatePlainText()
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const e = eventContent

  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif antialiased print:bg-white print:text-black">
      {/* Barra de Ações Superior (escondida na impressão) */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm print:hidden">
        <div className="max-w-[840px] mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 font-sans">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-black font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Voltar à Landing
            </Link>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-1.5 text-xs text-gray-700 font-semibold">
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Documento de Copy</span>
              <span className="ml-1 text-[11px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200">
                v{appVersion}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gray-600" />
                  <span>Copiar tudo</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Salvar em PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal do Documento */}
      <main className="max-w-[840px] mx-auto px-6 sm:px-10 py-10 print:p-0 print:max-w-none text-[15px] leading-relaxed">
        {/* Aviso no topo da página de documento */}
        <aside className="mb-10 p-4 bg-amber-50/80 border-l-4 border-amber-500 rounded-r text-amber-950 font-sans text-xs leading-relaxed print:border-l-2 print:p-3 print:mb-6 print:text-[11px]">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 print:hidden" />
            <div>
              <p className="font-semibold text-amber-900">
                Documento gerado automaticamente do conteúdo atual da landing. Versão {appVersion}.
              </p>
              <p className="text-amber-800 mt-1">
                Alterações de copy devem ser feitas neste documento e repassadas para atualização.
                Este documento contém 100% do texto em produção presente em{' '}
                <code className="font-mono text-[11px] bg-amber-100 px-1 py-0.5 rounded text-amber-900">
                  src/content/event.ts
                </code>
                .
              </p>
            </div>
          </div>
        </aside>

        {/* Cabeçalho do Documento */}
        <header className="border-b-2 border-gray-900 pb-6 mb-10 print:mb-6">
          <p className="font-sans text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">
            Revisão de Conteúdo Textual (Copywriting)
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight">
            Governe Suas Emoções — Vicente Carnero
          </h1>
          <p className="text-sm text-gray-600 mt-2 font-sans">
            Imersão Presencial em Fortaleza/CE · 07 de Novembro de 2026
          </p>
        </header>

        <div className="space-y-12 print:space-y-8">
          {/* BLOCO 1: Topo da página */}
          <section className="border-b border-gray-200 pb-8 break-inside-avoid print:pb-6 print:break-inside-avoid">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wider bg-gray-900 text-white px-2 py-0.5 rounded">
                Bloco 01
              </span>
              <h2 className="text-xl font-bold text-gray-900">Topo da Página (Hero)</h2>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded p-4 space-y-3 font-sans text-xs text-gray-700 mb-4 print:bg-white">
              <div>
                <strong className="text-gray-900">Badge de edição:</strong>{' '}
                <span className="font-serif text-sm text-gray-900">{e.event.editionBadge}</span>
              </div>
              <div>
                <strong className="text-gray-900">Tag da subheadline:</strong>{' '}
                <span className="font-serif text-sm text-gray-900">{e.event.subheadlineTag}</span>
              </div>
              <div>
                <strong className="text-gray-900">Data e Local:</strong>{' '}
                <span className="font-serif text-sm text-gray-900">
                  {e.event.dateDisplay} · {e.event.locationDisplay} ({e.event.venueAddress})
                </span>
              </div>
              <div>
                <strong className="text-gray-900">Horário e Duração:</strong>{' '}
                <span className="font-serif text-sm text-gray-900">
                  {e.event.schedule} ({e.event.daysCount})
                </span>
              </div>
              <div>
                <strong className="text-gray-900">CTA do Hero:</strong>{' '}
                <span className="font-serif text-sm font-semibold text-gray-900">
                  &ldquo;{e.event.heroCtaText}&rdquo;
                </span>
              </div>
              <div>
                <strong className="text-gray-900">Selo de Vagas:</strong>{' '}
                <span className="font-serif text-sm text-gray-900">
                  {e.event.limitedSpotsBadge}
                </span>
              </div>
            </div>

            <div className="space-y-3 pl-2 border-l-2 border-amber-500">
              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-1">
                  HEADLINE PRINCIPAL:
                </span>
                <p className="text-2xl font-bold text-gray-950 leading-snug">{e.event.headline}</p>
              </div>
              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-1">
                  SUBHEADLINE:
                </span>
                <p className="text-base text-gray-800 leading-relaxed">{e.event.subheadline}</p>
              </div>
            </div>
          </section>

          {/* BLOCO 2: Seção de dor */}
          <section className="border-b border-gray-200 pb-8 break-inside-avoid print:pb-6 print:break-inside-avoid">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wider bg-gray-900 text-white px-2 py-0.5 rounded">
                Bloco 02
              </span>
              <h2 className="text-xl font-bold text-gray-900">
                Seção de Dor (Espelhamento do Padrão)
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-1">
                  TÍTULO DA SEÇÃO:
                </span>
                <h3 className="text-lg font-bold text-gray-900">{e.painMirroring.title}</h3>
              </div>

              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-1">
                  SUBTÍTULO DA SEÇÃO:
                </span>
                <p className="text-base text-gray-800 italic">{e.painMirroring.subtitle}</p>
              </div>

              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-2">
                  PARÁGRAFOS DE CONTEXTO:
                </span>
                <div className="space-y-2">
                  {e.painMirroring.contextParagraphs.map((par, idx) => (
                    <p key={idx} className="text-gray-800">
                      {par}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-2">
                  CARDS DE CITAÇÃO E ELABORAÇÃO:
                </span>
                <div className="space-y-3">
                  {e.painMirroring.quoteCards.map((quote, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 border border-gray-200 rounded p-3 text-sm print:bg-white"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-sans text-[11px] font-bold text-amber-700 uppercase">
                          {quote.tag || `Citação 0${idx + 1}`}
                        </span>
                      </div>
                      <p className="font-bold text-gray-900 text-base mb-1">{quote.quote}</p>
                      <p className="text-gray-700 text-xs sm:text-sm font-sans">
                        {quote.elaboration}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* BLOCO 3: Seção "Isso não quer dizer que você tem um defeito" */}
          <section className="border-b border-gray-200 pb-8 break-inside-avoid print:pb-6 print:break-inside-avoid">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wider bg-gray-900 text-white px-2 py-0.5 rounded">
                Bloco 03
              </span>
              <h2 className="text-xl font-bold text-gray-900">
                Seção de Normalização e Custo Real
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-1">
                  TÍTULO:
                </span>
                <h3 className="text-xl font-bold text-gray-900">{e.normalization.title}</h3>
              </div>

              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-1">LEAD:</span>
                <p className="text-base text-gray-800">{e.normalization.lead}</p>
              </div>

              <div className="bg-amber-50/70 border border-amber-200 rounded p-3 print:bg-white">
                <span className="font-sans text-xs text-amber-800 font-bold block mb-1">
                  DESTAQUE DE CUSTO:
                </span>
                <p className="text-lg font-bold text-amber-950">{e.normalization.costHighlight}</p>
              </div>

              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-2">
                  OS 3 CARDS DE IMPACTO:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {e.normalization.quoteCards.map((card, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded p-3 bg-gray-50 print:bg-white"
                    >
                      <span className="font-sans text-[11px] font-bold text-gray-500 block mb-1">
                        Exemplo 0{idx + 1}
                      </span>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{card.title}</h4>
                      <p className="text-xs text-gray-700">{card.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* BLOCO 4: Quem conduz */}
          <section className="border-b border-gray-200 pb-8 break-inside-avoid print:pb-6 print:break-inside-avoid">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wider bg-gray-900 text-white px-2 py-0.5 rounded">
                Bloco 04
              </span>
              <h2 className="text-xl font-bold text-gray-900">
                Quem Conduz (Autoridade do Mentor)
              </h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs bg-gray-50 p-3 rounded border border-gray-200 print:bg-white">
                <div>
                  <span className="text-gray-500 block">Título da Seção:</span>
                  <strong className="text-gray-900 text-sm">{e.authority.sectionTitle}</strong>
                </div>
                <div>
                  <span className="text-gray-500 block">Nome do Condutor:</span>
                  <strong className="text-gray-900 text-sm">{e.authority.mentorName}</strong>
                </div>
                <div>
                  <span className="text-gray-500 block">Cargo / Instagram:</span>
                  <strong className="text-gray-900 text-sm">
                    {e.authority.mentorRole} · {e.authority.mentorInstagram}
                  </strong>
                </div>
              </div>

              {e.authority.presentationParagraphs && (
                <div>
                  <span className="font-sans text-xs text-gray-500 font-bold block mb-2">
                    PARÁGRAFOS DE APRESENTAÇÃO:
                  </span>
                  <div className="space-y-2 text-gray-800">
                    <p>{e.authority.presentationParagraphs.p1}</p>
                    <p className="font-semibold italic text-gray-950 pl-3 border-l-2 border-amber-500">
                      {e.authority.presentationParagraphs.p2Highlight}
                    </p>
                    <p>{e.authority.presentationParagraphs.p3}</p>
                  </div>
                </div>
              )}

              {e.authority.highlightPhrase && (
                <div className="bg-gray-100 p-3 rounded border-l-2 border-gray-900 italic text-sm text-gray-900 print:bg-white">
                  &ldquo;{e.authority.highlightPhrase}&rdquo;
                </div>
              )}

              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-2">
                  CREDENCIAS E PONTOS DE AUTORIDADE:
                </span>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
                  {e.authority.credentials.map((cred, idx) => (
                    <li key={idx}>{cred}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* BLOCO 5: O que é o Governe Suas Emoções */}
          <section className="border-b border-gray-200 pb-8 break-inside-avoid print:pb-6 print:break-inside-avoid">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wider bg-gray-900 text-white px-2 py-0.5 rounded">
                Bloco 05
              </span>
              <h2 className="text-xl font-bold text-gray-900">
                O que é o Governe Suas Emoções (Entregáveis e Método)
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-1">
                  TÍTULO:
                </span>
                <h3 className="text-xl font-bold text-gray-900">{e.method.title}</h3>
              </div>

              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-1">
                  INTRODUÇÃO:
                </span>
                <p className="text-base text-gray-800">
                  <strong className="text-gray-950">{e.method.introPrefix}</strong>{' '}
                  {e.method.introText}
                </p>
              </div>

              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-2">
                  ENTREGÁVEIS 01 A 04:
                </span>
                <div className="space-y-3">
                  {e.method.deliverables.map((item) => (
                    <div
                      key={item.num}
                      className="border border-gray-200 rounded p-3 bg-gray-50 print:bg-white"
                    >
                      <div className="flex items-start gap-2">
                        <span className="font-sans text-xs font-bold text-white bg-gray-900 px-1.5 py-0.5 rounded shrink-0">
                          {item.num}
                        </span>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded p-3 print:bg-white">
                <span className="font-sans text-xs text-amber-800 font-bold block mb-1">
                  LINHA DE REFORÇO:
                </span>
                <p className="font-bold text-amber-950 text-sm sm:text-base">
                  {e.method.reinforcementLine}
                </p>
              </div>

              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-2">
                  PARÁGRAFOS DE FECHAMENTO:
                </span>
                <div className="space-y-2 text-sm sm:text-base text-gray-800">
                  {e.method.closingParagraphs.map((par, idx) => (
                    <p key={idx}>{par}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* BLOCO 6: Logística */}
          <section className="border-b border-gray-200 pb-8 break-inside-avoid print:pb-6 print:break-inside-avoid">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wider bg-gray-900 text-white px-2 py-0.5 rounded">
                Bloco 06
              </span>
              <h2 className="text-xl font-bold text-gray-900">Logística e Informações Práticas</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-[11px] font-bold uppercase bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded">
                  {e.logistics.badge}
                </span>
                <h3 className="text-lg font-bold text-gray-900">{e.logistics.title}</h3>
              </div>
              <p className="text-sm text-gray-700">{e.logistics.subtitle}</p>

              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-2">
                  DETALHES LOGÍSTICOS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans text-xs">
                  {e.logistics.details.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded p-2.5 bg-gray-50 print:bg-white"
                    >
                      <span className="text-gray-500 uppercase font-bold text-[10px] block">
                        {item.label}
                      </span>
                      <strong className="text-gray-900 text-sm font-serif block mt-0.5">
                        {item.value}
                      </strong>
                      {item.subtext && <span className="text-gray-600 block">{item.subtext}</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-2">
                  ITENS INCLUSOS NA IMERSÃO:
                </span>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-800">
                  {e.logistics.included.map((inc, idx) => (
                    <li key={idx}>{inc}</li>
                  ))}
                </ul>
              </div>

              <p className="font-sans text-xs text-gray-600 italic bg-gray-50 p-2.5 rounded border border-gray-200 print:bg-white">
                {e.logistics.note}
              </p>
            </div>
          </section>

          {/* BLOCO 7: Ingressos */}
          <section className="border-b border-gray-200 pb-8 break-inside-avoid print:pb-6 print:break-inside-avoid">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wider bg-gray-900 text-white px-2 py-0.5 rounded">
                Bloco 07
              </span>
              <h2 className="text-xl font-bold text-gray-900">
                Ingressos (Lotes, Preços e Oferta)
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-sans text-[11px] font-bold uppercase bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded">
                  {e.pricing.badge}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">{e.pricing.title}</h3>
                <p className="text-sm text-gray-700 mt-0.5">{e.pricing.subtitle}</p>
              </div>

              <div className="font-sans text-xs bg-gray-50 p-2.5 rounded border border-gray-200 flex flex-wrap gap-4 print:bg-white">
                <div>
                  <span className="text-gray-500">Nome do lote:</span>{' '}
                  <strong className="text-gray-900">{e.pricing.lotName}</strong>
                </div>
                <div>
                  <span className="text-gray-500">Aviso especial:</span>{' '}
                  <span className="text-gray-700">{e.pricing.groupDiscountText}</span>
                </div>
              </div>

              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-2">
                  CARDS DE INGRESSOS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {e.pricing.cards.map((card) => (
                    <div
                      key={card.id}
                      className="border border-gray-300 rounded p-4 bg-gray-50 space-y-2 print:bg-white"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-gray-950 text-base">{card.name}</h4>
                        {card.tag && (
                          <span className="font-sans text-[10px] uppercase font-bold bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded border border-amber-200">
                            {card.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-700 font-sans">{card.description}</p>

                      <div className="py-2 border-y border-gray-200">
                        <div className="text-xl font-bold text-gray-950">
                          {formatPrice(card.cashPrice)}{' '}
                          <span className="text-xs font-normal text-gray-600 font-sans">
                            à vista
                          </span>
                        </div>
                        <div className="text-xs text-gray-700 font-sans">
                          ou {card.installments.times}x de {formatPrice(card.installments.value)}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="font-sans text-[11px] font-bold text-gray-600 uppercase block">
                          Benefícios inclusos:
                        </span>
                        <ul className="list-disc pl-4 space-y-0.5 text-xs text-gray-800">
                          {card.features.map((f, fIdx) => (
                            <li key={fIdx}>{f}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 font-sans text-xs">
                        <span className="text-gray-500">Texto do botão:</span>{' '}
                        <strong className="text-gray-900">&ldquo;{card.ctaText}&rdquo;</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* BLOCO 8: FAQ */}
          <section className="border-b border-gray-200 pb-8 break-inside-avoid print:pb-6 print:break-inside-avoid">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wider bg-gray-900 text-white px-2 py-0.5 rounded">
                Bloco 08
              </span>
              <h2 className="text-xl font-bold text-gray-900">FAQ (Perguntas Frequentes)</h2>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-sans text-[11px] font-bold uppercase bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded">
                  {e.faq.badge}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">{e.faq.title}</h3>
                <p className="text-sm text-gray-700">{e.faq.subtitle}</p>
              </div>

              <div className="space-y-3">
                {e.faq.items.map((item, idx) => {
                  const isPending =
                    idx === 8 ||
                    idx === 9 ||
                    item.answer.includes('Em breve:') ||
                    item.answer.includes('divulgada em breve')

                  return (
                    <div
                      key={idx}
                      className={`border rounded p-3 text-sm ${
                        isPending
                          ? 'border-amber-300 bg-amber-50/50 print:bg-white print:border-amber-400'
                          : 'border-gray-200 bg-gray-50 print:bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-bold text-gray-950">
                          {idx + 1}. {item.question}
                        </h4>
                        {isPending && (
                          <span className="inline-flex items-center gap-1 font-sans text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300 shrink-0">
                            <AlertTriangle className="w-3 h-3 text-amber-600 print:hidden" />
                            ⚠️ Aguardando conteúdo
                          </span>
                        )}
                      </div>
                      <p className="text-gray-800 text-xs sm:text-sm pl-4 border-l-2 border-gray-300 mt-2">
                        {item.answer}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* BLOCO 9: CTA Final */}
          <section className="border-b border-gray-200 pb-8 break-inside-avoid print:pb-6 print:break-inside-avoid">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wider bg-gray-900 text-white px-2 py-0.5 rounded">
                Bloco 09
              </span>
              <h2 className="text-xl font-bold text-gray-900">CTA Final de Fechamento</h2>
            </div>

            <div className="space-y-3">
              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-2">
                  PARÁGRAFOS DO CTA FINAL:
                </span>
                <div className="space-y-2 text-base text-gray-900">
                  {e.finalCta.paragraphs.map((par, idx) => (
                    <p key={idx} className="font-medium">
                      {par}
                    </p>
                  ))}
                </div>
              </div>

              <div className="font-sans text-xs bg-gray-50 p-3 rounded border border-gray-200 space-y-1 print:bg-white">
                <div>
                  <span className="text-gray-500">Texto do botão de conversão:</span>{' '}
                  <strong className="text-gray-900 text-sm font-serif">
                    &ldquo;{e.finalCta.ctaText}&rdquo;
                  </strong>
                </div>
                <div>
                  <span className="text-gray-500">Subtexto de apoio:</span>{' '}
                  <span className="text-gray-700">{e.finalCta.ctaSubtext}</span>
                </div>
              </div>
            </div>
          </section>

          {/* BLOCO 10: Aviso Ético e de Saúde */}
          <section className="border-b border-gray-200 pb-8 break-inside-avoid print:pb-6 print:break-inside-avoid">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wider bg-gray-900 text-white px-2 py-0.5 rounded">
                Bloco 10
              </span>
              <h2 className="text-xl font-bold text-gray-900">
                Aviso Ético e Responsabilidade em Saúde
              </h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-gray-950">{e.healthNotice.title}</h3>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                {e.healthNotice.description}
              </p>

              <div>
                <span className="font-sans text-xs text-gray-500 font-bold block mb-1">
                  CONDIÇÕES E CONTRAINDICAÇÕES EXPRESSAS:
                </span>
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-800">
                  {e.healthNotice.conditions.map((cond, idx) => (
                    <li key={idx}>{cond}</li>
                  ))}
                </ul>
              </div>

              <div className="text-xs text-gray-800 bg-gray-50 p-3 rounded border border-gray-200 space-y-1 print:bg-white">
                <p>
                  <strong className="text-gray-950">Orientação médica:</strong>{' '}
                  {e.healthNotice.medicalClearance}
                </p>
                <p className="text-gray-600 italic mt-1">{e.healthNotice.purposeNote}</p>
              </div>
            </div>
          </section>

          {/* BLOCO 11: Rodapé e Suporte */}
          <section className="break-inside-avoid print:break-inside-avoid">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wider bg-gray-900 text-white px-2 py-0.5 rounded">
                Bloco 11
              </span>
              <h2 className="text-xl font-bold text-gray-900">
                Rodapé, Atendimento e Dados Institucionais
              </h2>
            </div>

            <div className="font-sans text-xs bg-gray-50 p-4 rounded border border-gray-200 space-y-2 print:bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <span className="text-gray-500 block">Empresa / Razão:</span>
                  <strong className="text-gray-900">{e.support.companyName}</strong>
                </div>
                <div>
                  <span className="text-gray-500 block">CNPJ:</span>
                  <strong className="text-gray-900">{e.support.cnpj}</strong>
                </div>
                <div>
                  <span className="text-gray-500 block">Endereço:</span>
                  <span className="text-gray-800">{e.support.address}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Horário de Atendimento:</span>
                  <span className="text-gray-800">{e.support.supportHours}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200">
                <span className="text-gray-500 block">WhatsApp de Atendimento:</span>
                <span className="text-gray-800 font-mono">+{e.support.whatsappNumber}</span>
                <p className="text-gray-600 italic mt-0.5">
                  Mensagem padrão: &ldquo;{e.support.whatsappMessage}&rdquo;
                </p>
              </div>

              <div className="pt-2 border-t border-gray-200">
                <span className="text-gray-500 block mb-1">Links Institucionais e Legais:</span>
                <div className="flex flex-wrap gap-3">
                  {e.support.legalLinks.map((link, idx) => (
                    <span key={idx} className="text-gray-700 underline">
                      {link.label} ({link.href})
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-gray-500 text-[11px]">
                © {e.support.copyrightYear} {e.support.companyName}. Todos os direitos reservados.
              </div>
            </div>
          </section>
        </div>

        {/* Rodapé do Documento */}
        <footer className="mt-12 pt-6 border-t border-gray-300 text-center font-sans text-xs text-gray-500 print:mt-8 print:text-[10px]">
          Fim do documento · Governe Suas Emoções · Gerado para revisão e edição de copy
        </footer>
      </main>
    </div>
  )
}
