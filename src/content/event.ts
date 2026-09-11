/**
 * Central de Conteúdo do Evento / Imersão
 *
 * Todos os textos, números, datas, preços e links da página de vendas
 * estão centralizados aqui para que o usuário possa facilmente personalizar
 * e substituir pelos seus textos reais.
 */

export interface EventData {
  event: {
    brandName: string
    name: string
    editionBadge: string
    subheadlineTag: string
    headline: string
    subheadline: string
    dateDisplay: string
    locationDisplay: string
    venueName: string
    venueAddress: string
    schedule: string
    daysCount: string
    targetDateISO: string // Data ISO para o contador regressivo real
    heroCtaText: string
    limitedSpotsBadge: string
  }
  painMirroring: {
    eyebrow: string
    title: string
    subtitle: string
    quoteCards: {
      quote: string
      elaboration: string
    }[]
    transitionPunchline: {
      highlight: string
      description: string
    }
  }
  authority: {
    mentorName: string
    mentorRole: string
    mentorBio: string
    mentorImage: string
    stats: {
      value: number
      prefix?: string
      suffix: string
      label: string
      helper: string
    }[]
  }
  method: {
    badge: string
    title: string
    description: string
    steps: {
      number: string
      tag: string
      title: string
      description: string
    }[]
  }
  testimonials: {
    badge: string
    title: string
    subtitle: string
    items: {
      id: string
      name: string
      city: string
      role: string
      avatar: string
      quote: string
      rating: number
    }[]
  }
  logistics: {
    badge: string
    title: string
    subtitle: string
    details: {
      icon: 'calendar' | 'clock' | 'map-pin' | 'sparkles'
      label: string
      value: string
      subtext?: string
    }[]
    included: string[]
    note: string
  }
  pricing: {
    badge: string
    title: string
    subtitle: string
    groupDiscountBadge: string
    groupDiscountText: string
    lotName: string
    cards: {
      id: string
      name: string
      tag?: string
      isPopular?: boolean
      description: string
      cashPrice: number // R$
      installments: {
        times: number
        value: number // R$
      }
      features: string[]
      ctaText: string
      checkoutUrl: string
      groupCheckoutUrl?: string
    }[]
  }
  faq: {
    badge: string
    title: string
    subtitle: string
    items: {
      question: string
      answer: string
    }[]
  }
  urgency: {
    badge: string
    title: string
    subtitle: string
    lotNotice: string
    ctaText: string
  }
  finalCta: {
    badge: string
    title: string
    description: string
    ctaText: string
    ctaSubtext: string
  }
  healthNotice: {
    title: string
    description: string
    conditions: string[]
    medicalClearance: string
    purposeNote: string
  }
  support: {
    whatsappNumber: string // Formato internacional sem + ex: 5521999999999
    whatsappMessage: string
    supportHours: string
    companyName: string
    cnpj: string
    address: string
    copyrightYear: number
    legalLinks: {
      label: string
      href: string
    }[]
  }
}

// Configuração calculada para a data do evento (30 dias no futuro para o contador sempre rodar de forma dinâmica e convincente)
const defaultEventDate = new Date()
defaultEventDate.setDate(defaultEventDate.getDate() + 27)
defaultEventDate.setHours(8, 0, 0, 0)

export const eventContent: EventData = {
  event: {
    brandName: 'IMERSÃO DESPERTE',
    name: 'Desperte Seu Poder',
    editionBadge: 'Edição Rio de Janeiro • Presencial',
    subheadlineTag: 'A MAIOR IMERSÃO DE INTELIGÊNCIA EMOCIONAL & DESENVOLVIMENTO PESSOAL DO BRASIL',
    headline:
      'O passo definitivo para romper bloqueios, destravar seu potencial e alcançar o próximo nível.',
    subheadline:
      'Três dias inteiros de imersão presencial com técnicas avançadas para eliminar a procrastinação, construir clareza absoluta de metas e consolidar resultados inabaláveis.',
    dateDisplay: '18 a 20 de Setembro',
    locationDisplay: 'Rio de Janeiro – RJ',
    venueName: 'Grand Hyatt Rio ou Centro de Convenções Barra',
    venueAddress: 'Av. das Américas, Barra da Tijuca — Rio de Janeiro, RJ',
    schedule: 'Das 08h às 20h (todos os dias)',
    daysCount: '3 Dias Imersivos',
    targetDateISO: defaultEventDate.toISOString(),
    heroCtaText: 'Quero Garantir Minha Vaga',
    limitedSpotsBadge: 'Vagas Limitadas pela Capacidade do Auditório',
  },

  painMirroring: {
    eyebrow: 'ESPELHAMENTO & DIAGNÓSTICO',
    title: 'O que você esconde do mundo, mas confessa para o espelho…',
    subtitle:
      'Identificar o que está te travando é o primeiro e mais importante passo para romper o ciclo e avançar.',
    quoteCards: [
      {
        quote: '“Por que eu ainda não cheguei lá?”',
        elaboration:
          'A falta de clareza e de direcionamento estratégico te impede de tomar decisões assertivas com convicção.',
      },
      {
        quote: '“Trabalho tanto, mas não vejo o resultado esperado…”',
        elaboration:
          'A frustração diária de entregar toda a sua energia sem colher o retorno proporcional na sua vida financeira e pessoal.',
      },
      {
        quote: '“Para onde eu estou indo, afinal?”',
        elaboration:
          'A sensação angustiante de estagnação, enquanto pessoas com menos bagagem parecem sempre avançar na sua frente.',
      },
      {
        quote: '“Eu começo cheio de energia, mas nunca termino.”',
        elaboration:
          'A autossabotagem e a falta de disciplina emocional interrompem os projetos mais importantes antes da linha de chegada.',
      },
      {
        quote: '“Eu sou o meu próprio obstáculo.”',
        elaboration:
          'O excesso de pensamentos autocríticos, a síndrome do impostor e o medo do julgamento alheio roubam sua energia e travam a ação.',
      },
      {
        quote: '“Estou aceitando uma vida mediana que não me pertence.”',
        elaboration:
          'Você termina cada semana exausto mentalmente, com a certeza incômoda de que foi feito para muito mais do que a rotina atual.',
      },
    ],
    transitionPunchline: {
      highlight: 'VOCÊ SABE QUE O SEU POTENCIAL É MAIOR DO QUE A VIDA QUE ESTÁ VIVENDO HOJE.',
      description:
        'Você não está travado por falta de talento ou capacidade. Está travado por padrões emocionais inconscientes que se repetem todos os dias. E enquanto esses padrões não forem reprogramados… nada muda.',
    },
  },

  authority: {
    mentorName: 'Fulano Silva',
    mentorRole: 'Mentor de Líderes, Especialista em Inteligência Emocional & PNL',
    mentorBio:
      'Referência nacional em desenvolvimento comportamental, alta performance e liderança. Com mais de duas décadas de atuação na capacitação de grandes empreendedores, executivos e pessoas comuns, seu método validado une neurociência aplicada, ferramentas práticas de desbloqueio mental e psicologia positiva.',
    mentorImage: 'https://img.usecurling.com/ppl/large?gender=male&seed=68',
    stats: [
      {
        value: 6,
        suffix: ' MILHÕES',
        prefix: '+',
        label: 'Vidas Impactadas',
        helper: 'Pessoas transformadas pelo método presencial e digital',
      },
      {
        value: 150,
        suffix: ' EDIÇÕES',
        prefix: '+',
        label: 'Imersões Realizadas',
        helper: 'Experiência comprovada em auditórios lotados pelo país',
      },
      {
        value: 40,
        suffix: ' PAÍSES',
        prefix: '',
        label: 'Alunos Globais',
        helper: 'Onde nossa metodologia já formou líderes e transformou histórias',
      },
      {
        value: 98,
        suffix: '%',
        prefix: '',
        label: 'Índice de Aprovação',
        helper: 'Avaliação média dos participantes ao final da imersão',
      },
    ],
  },

  method: {
    badge: 'METODOLOGIA COMPROVADA',
    title: 'O Método em 3 Passos da Imersão',
    description:
      'Esqueça o conceito de palestra motivacional superficial. Esta imersão é um processo científico e vivencial desenhado para quem busca romper barreiras definitivas.',
    steps: [
      {
        number: '01',
        tag: 'PASSO 1',
        title: 'Desbloqueio e Autocontrole',
        description:
          'Você vai identificar na raiz os padrões ocultos, crenças limitantes e feridas emocionais que te sabotam, desarmando os gatilhos que travam suas tomadas de decisão.',
      },
      {
        number: '02',
        tag: 'PASSO 2',
        title: 'Clareza e Propósito',
        description:
          'Após eliminar o ruído mental, você ganha visão de futuro nítida. Alinhe suas metas profissionais e pessoais e trace o mapa exato até seus objetivos mais audaciosos.',
      },
      {
        number: '03',
        tag: 'PASSO 3',
        title: 'Ação e Realização Massiva',
        description:
          'O momento da virada prática: você desenvolve musculatura comportamental para sustentar a disciplina, vencer a hesitação e executar seus planos com consistência diária.',
      },
    ],
  },

  testimonials: {
    badge: 'HISTÓRIAS REAIS DE TRANSFORMAÇÃO',
    title: 'Pessoas como você que despertaram o seu poder',
    subtitle:
      'Veja o que aconteceu na vida e nos negócios de quem decidiu não aceitar mais a mediocridade e sentou na cadeira da nossa imersão.',
    items: [
      {
        id: '1',
        name: 'Felipe Martiniano',
        city: 'Rio de Janeiro – RJ',
        role: 'Empresário & Palestrante',
        avatar: 'https://img.usecurling.com/ppl/medium?gender=male&seed=12',
        quote:
          '“A imersão me fez entender com clareza que eu não sou refém do meu passado. A coragem e a liderança que eu procurava fora já estavam adormecidas dentro de mim. Meu faturamento triplicou em 6 meses.”',
        rating: 5,
      },
      {
        id: '2',
        name: 'Gabriela Cardoso',
        city: 'Niterói – RJ',
        role: 'Executiva de Recursos Humanos',
        avatar: 'https://img.usecurling.com/ppl/medium?gender=female&seed=27',
        quote:
          '“Participei do evento buscando apenas técnicas de liderança e saí de lá com minha vida reestruturada. Restaurei meu equilíbrio pessoal e hoje lidero com uma segurança que jamais imaginei ter.”',
        rating: 5,
      },
      {
        id: '3',
        name: 'Rodrigo Medeiros',
        city: 'São Paulo – SP',
        role: 'Médico & Empreendedor',
        avatar: 'https://img.usecurling.com/ppl/medium?gender=male&seed=44',
        quote:
          '“Eu era cético em relação a treinamentos comportamentais até viver essa experiência na pele. É cirúrgico, denso e transformador. Você sai de lá outra pessoa, pronta para executar sem desculpas.”',
        rating: 5,
      },
      {
        id: '4',
        name: 'Iva Barbosa',
        city: 'Belo Horizonte – MG',
        role: 'Arquiteta e Gestora',
        avatar: 'https://img.usecurling.com/ppl/medium?gender=female&seed=58',
        quote:
          '“Cheguei ao evento exausta de trabalhar sem ver reconhecimento. Aprendi a colocar limites saudáveis, destravar minha autoconfiança e conquistar meu primeiro milhão de faturamento no ano seguinte.”',
        rating: 5,
      },
    ],
  },

  logistics: {
    badge: 'INFORMAÇÕES PRÁTICAS',
    title: 'A sua transformação já tem data e local marcados',
    subtitle:
      'Tudo pensado estrategicamente para garantir o seu máximo conforto, imersão profunda e networking qualificado durante os 3 dias.',
    details: [
      {
        icon: 'calendar',
        label: 'DATA DO EVENTO',
        value: '18, 19 e 20 de Setembro',
        subtext: 'Sexta, Sábado e Domingo de imersão completa',
      },
      {
        icon: 'clock',
        label: 'HORÁRIO DAS ATIVIDADES',
        value: 'Das 08h00 às 20h00',
        subtext: 'Recomendamos chegar com 30min de antecedência para credenciamento',
      },
      {
        icon: 'map-pin',
        label: 'LOCAL DO AUDITÓRIO',
        value: 'Centro de Convenções Barra & Hotel de Alto Padrão',
        subtext: 'Av. das Américas, 10500 — Barra da Tijuca, Rio de Janeiro - RJ',
      },
      {
        icon: 'sparkles',
        label: 'ESTRUTURA COMPLETA',
        value: 'Climatização, Acessibilidade e Estacionamento',
        subtext: 'Próximo a praça de alimentação com diversas opções gastronômicas',
      },
    ],
    included: [
      'Acesso presencial a todos os 3 dias inteiros de imersão',
      'Material de apoio oficial do evento (caderno de ativação + caneta)',
      'Acesso ao ambiente de networking exclusivo entre os participantes',
      'Certificado de conclusão da imersão com carga horária de 36 horas',
      'Participação em todas as dinâmicas vivenciais de quebra de crenças',
    ],
    note: '*Todos os detalhes operacionais, orientações de vestimenta e dicas de hospedagem serão enviados por e-mail e WhatsApp logo após a confirmação da sua vaga.',
  },

  pricing: {
    badge: 'ESCOLHA O SEU INGRESSO',
    title: 'Garanta sua vaga no Lote Atual com Condição Especial',
    subtitle:
      'As vagas são presenciais e estritamente limitadas pela capacidade física do auditório. Escolha o nível de experiência ideal para você.',
    groupDiscountBadge: 'DESCONTO ESPECIAL PARA GRUPOS',
    groupDiscountText:
      'Na compra de 2 ou mais ingressos, você ganha 20% de desconto automático em cada ingresso.',
    lotName: 'LOTE 2 — VAGAS PROMOCIONAIS ESGOTANDO',
    cards: [
      {
        id: 'start',
        name: 'Ingresso Individual',
        tag: 'Lote 2',
        isPopular: false,
        description:
          'Ideal para quem busca participar individualmente da imersão com acesso integral aos 3 dias.',
        cashPrice: 197,
        installments: {
          times: 12,
          value: 19.68,
        },
        features: [
          'Acesso presencial aos 3 dias inteiros de imersão',
          'Cadeira reservada no setor Geral',
          'Kit de boas-vindas com caderno de ativação',
          'Networking com centenas de profissionais',
          'Certificado digital oficial de participação (36h)',
          'Garantia incondicional de 7 dias',
        ],
        ctaText: 'Comprar Ingresso Individual',
        checkoutUrl: 'https://exemplo.checkout.com/lote2-individual',
        groupCheckoutUrl: 'https://exemplo.checkout.com/lote2-individual-grupo',
      },
      {
        id: 'dupla',
        name: 'Vaga Dupla (Mais Escolhida)',
        tag: 'Mais Vantajoso • 20% OFF',
        isPopular: true,
        description:
          '2 ingressos presenciais para você viver essa virada ao lado do cônjuge, sócio, parente ou amigo.',
        cashPrice: 297,
        installments: {
          times: 12,
          value: 29.67,
        },
        features: [
          '2 ingressos com acesso aos 3 dias inteiros (sai R$ 148,50 por pessoa)',
          'Cadeiras reservadas lado a lado no auditório',
          '2 Kits completos de ativação e anotações',
          'Networking em dupla de responsabilidade mútua',
          '2 Certificados digitais oficiais (36h cada)',
          'Acesso antecipado ao credenciamento',
          'Garantia incondicional de 7 dias',
        ],
        ctaText: 'Garantir Vaga Dupla com Desconto',
        checkoutUrl: 'https://exemplo.checkout.com/lote2-vaga-dupla',
      },
      {
        id: 'vip',
        name: 'Experiência VIP',
        tag: 'Mais Completo • Poucas Unidades',
        isPopular: false,
        description:
          'Para quem deseja a experiência mais exclusiva, máxima proximidade do palco e atendimento prioritário.',
        cashPrice: 497,
        installments: {
          times: 12,
          value: 49.65,
        },
        features: [
          'Acesso aos 3 dias na Área VIP (primeiras filas em frente ao palco)',
          'Entrada prioritária sem filas no credenciamento',
          'Kit VIP exclusivo com livro físico do mentor autografado',
          'Foto individual exclusiva com o mentor',
          'Lounge VIP com coffee break nos intervalos',
          'Encontro fechado de perguntas & respostas',
          'Certificado VIP em alta resolução',
          'Garantia incondicional de 7 dias',
        ],
        ctaText: 'Quero Minha Vaga VIP',
        checkoutUrl: 'https://exemplo.checkout.com/lote2-vip',
      },
    ],
  },

  faq: {
    badge: 'DÚVIDAS FREQUENTES',
    title: 'Perguntas Frequentes sobre a Imersão',
    subtitle:
      'Transparência e segurança para você tomar a decisão certa para a sua vida e carreira.',
    items: [
      {
        question: 'Preciso ter alguma experiência prévia para participar?',
        answer:
          'Não. O método é didático, progressivo e estruturado passo a passo. Ele atende perfeitamente desde pessoas que nunca tiveram contato com inteligência emocional até empresários e líderes experientes que desejam afiar suas competências e romper patamares estagnados.',
      },
      {
        question: 'O que acontece após a compra do meu ingresso?',
        answer:
          'Imediatamente após a aprovação do pagamento, você receberá um e-mail com a confirmação da sua vaga, os dados de acesso ao seu comprovante digital e um link exclusivo para o grupo de participantes no WhatsApp, onde enviaremos orientações de credenciamento e cronograma completo.',
      },
      {
        question: 'Qual é a política de reembolso e garantia?',
        answer:
          'Você conta com Garantia Incondicional de 7 dias após a compra, conforme o Código de Defesa do Consumidor. Caso perceba que o evento não é para você dentro desse prazo, basta solicitar pelo suporte e devolvemos 100% do valor pago, sem qualquer burocracia.',
      },
      {
        question: 'Onde será realizado o evento e como chego até lá?',
        answer:
          'A imersão acontecerá em um centro de convenções de alto padrão na Barra da Tijuca, Rio de Janeiro - RJ. O local conta com fácil acesso via transporte público, estacionamento amplo no próprio complexo e diversas opções de hospedagem parceira nas proximidades.',
      },
      {
        question: 'Para quem é e para quem NÃO é este evento?',
        answer:
          'É para profissionais, empresários e indivíduos comprometidos em assumir a responsabilidade pela sua própria evolução, vencer o medo e executar projetos de vida. NÃO é para quem busca fórmulas mágicas sem esforço ou se recusa a confrontar seus próprios pontos cegos.',
      },
      {
        question: 'Quais são as formas de pagamento disponíveis?',
        answer:
          'Aceitamos cartão de crédito em até 12 vezes (com opção de usar múltiplos cartões se necessário), PIX à vista com liberação imediata e boleto bancário (sujeito à data limite antes do evento).',
      },
      {
        question: 'O que devo levar nos dias da imersão?',
        answer:
          'Recomendamos roupas confortáveis (o auditório é climatizado com ar-condicionado central, traga um agasalho leve), garrafa de água individual para hidratação contínua e documento de identificação original com foto para o credenciamento presencial.',
      },
      {
        question: 'Como funciona o desconto para grupos e empresas?',
        answer:
          'Se você deseja levar a sua equipe, sócios ou família, compras a partir de 2 ingressos já recebem 20% de desconto automático no checkout. Para grupos corporativos maiores que 5 pessoas, você também pode solicitar atendimento personalizado pelo botão de suporte.',
      },
    ],
  },

  urgency: {
    badge: 'VIRADA DE LOTE EM ANDAMENTO',
    title: 'O tempo está acabando para garantir com este valor',
    subtitle:
      'Após o encerramento do cronômetro abaixo ou o atingimento da capacidade das cadeiras, o sistema passará automaticamente para o Lote 3 com valor superior.',
    lotNotice: 'LOTE 2 VIGENTE • RESTAM POUCAS CADEIRAS NO AUDITÓRIO',
    ctaText: 'Garantir Minha Vaga Antes da Virada de Lote',
  },

  finalCta: {
    badge: 'A SUA DECISÃO',
    title: 'Pronto para Despertar Seu Verdadeiro Poder?',
    description:
      'Daqui a um ano, você vai desejar ter começado hoje. Não permita que mais um ano passe assistindo aos outros vencerem enquanto você se contenta com menos do que merece.',
    ctaText: 'Sim, Quero Minha Vaga Presencial',
    ctaSubtext: 'Pagamento 100% Seguro • Confirmação Imediata • Garantia de 7 Dias',
  },

  healthNotice: {
    title: 'Aviso Importante de Saúde e Contraindicações',
    description:
      'A Imersão Desperte Seu Poder utiliza dinâmicas comportamentais profundas, técnicas de programação neurolinguística, meditação guiada e exercícios vivenciais intensos que exigem estabilidade clínica e psicológica. Por segurança e responsabilidade ética, NÃO é recomendada a participação de pessoas com:',
    conditions: [
      'Transtornos psicóticos ou esquizofrenia diagnosticada',
      'Transtorno afetivo bipolar em fase não compensada',
      'Transtorno de ansiedade severa ou pânico agudo ativo',
      'Epilepsia ou histórico recente de convulsões frequentes',
      'Condições cardiovasculares graves ou cirurgias cardíacas recentes',
      'Gestação de alto risco clínico',
      'Depressão clínica severa em tratamento agudo',
      'Outras condições clínicas incapacitantes sem liberação médica explícita',
    ],
    medicalClearance:
      'Caso você possua alguma dessas condições de saúde ou faça uso de medicação controlada contínua, é expressamente obrigatória a apresentação de autorização médica por escrito no momento do credenciamento.',
    purposeNote:
      'Este aviso tem como único objetivo preservar a integridade física, mental e o bem-estar de todos os participantes durante os 3 dias do treinamento.',
  },

  support: {
    whatsappNumber: '5521999999999',
    whatsappMessage: 'Olá! Vim da página do evento e gostaria de tirar uma dúvida sobre a imersão.',
    supportHours:
      'Atendimento de Segunda a Sexta, das 09h às 19h (e plantão de vendas aos fins de semana)',
    companyName: 'Instituto de Desenvolvimento Humano e Liderança Ltda.',
    cnpj: '12.345.678/0001-90',
    address: 'Av. das Américas, 10500 - Barra da Tijuca, Rio de Janeiro - RJ, 22793-082',
    copyrightYear: new Date().getFullYear(),
    legalLinks: [
      { label: 'Termos de Uso', href: '#termos' },
      { label: 'Política de Privacidade (LGPD)', href: '#privacidade' },
      { label: 'Aviso de Cookies', href: '#cookies' },
      { label: 'Fale Conosco', href: '#contato' },
    ],
  },
}
