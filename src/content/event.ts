/**
 * Central de Conteúdo do Evento / Imersão — GOVERNE SUAS EMOÇÕES
 *
 * Todos os textos, números, datas, logística, entregáveis e links da página
 * estão centralizados aqui, com base na copy verbatim do evento conduzido por
 * Vicente Carnero em Fortaleza/CE.
 */

export interface EventData {
  event: {
    brandName: string
    name: string
    logoUrl?: string
    logoAlt?: string
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
    contextParagraphs: string[]
    quoteCards: {
      quote: string
      elaboration: string
      tag?: string
    }[]
    transitionPunchline: {
      highlight: string
      description: string
    }
  }
  normalization: {
    badge: string
    title: string
    lead: string
    explanation: string
    repeatHighlight: string
    costHeadline: string
    costItems: {
      title: string
      description: string
    }[]
  }
  authority: {
    mentorName: string
    mentorRole: string
    mentorBio: string
    mentorImage: string
    sectionTitle: string
    highlightPhrase: string
    stats: {
      value: number
      prefix?: string
      suffix: string
      label: string
      helper: string
    }[]
    credentials: string[]
  }
  method: {
    badge: string
    title: string
    description: string
    deliverables: {
      title: string
      description: string
    }[]
    quoteRedefinition: {
      quote: string
      complement: string
    }
  }
  valueBanner: {
    badge: string
    hoursHighlight: string
    headline: string
    description: string
    ctaText: string
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
      cashPrice: number // R$ provisório
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
    hook: string
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
    whatsappNumber: string
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

// Data real do evento: 07/11/2026 das 14h00 às 20h00 (horário de Fortaleza / Brasília -03:00)
const eventTargetDate = new Date('2026-11-07T14:00:00-03:00')

export const eventContent: EventData = {
  event: {
    brandName: 'GOVERNE SUAS EMOÇÕES',
    name: 'Governe suas emoções',
    logoUrl: '/logo-jvc.png',
    logoAlt: 'Logo Vicente Carnero - Governe suas emoções',
    editionBadge: '07 de novembro de 2026 · Fortaleza/CE · Presencial',
    subheadlineTag: 'A MELHOR imersão presencial de AUTOGOVERNO EMOCIONAL do ano',
    headline: 'Você se autogoverna na medida em que entende o que governa você.',
    subheadline:
      'Governar não é controlar o que você sente. É ter mais opções na hora em que sente, pensa e decide. Em 6 horas, você aprende a fazer isso.',
    dateDisplay: '07 de Novembro de 2026',
    locationDisplay: 'Fortaleza/CE',
    venueName: 'Local a divulgar – Fortaleza/CE',
    venueAddress: 'Local a divulgar – Fortaleza, CE (Presencial)',
    schedule: '14h às 20h',
    daysCount: '6 horas de imersão',
    targetDateISO: eventTargetDate.toISOString(),
    heroCtaText: 'Quero Garantir Minha Vaga',
    limitedSpotsBadge: 'Vagas Limitadas pela Capacidade da Sala',
  },

  painMirroring: {
    eyebrow: 'ESPELHAMENTO',
    title: 'Por que você reage de um jeito que não combina com quem você é?',
    subtitle:
      'Você resolve problema difícil no trabalho o dia inteiro. Mas numa conversa de cinco minutos em casa ou no trabalho, o descontrole toma conta — e depois você se arrepende.',
    contextParagraphs: [
      'Você resolve problema difícil no trabalho o dia inteiro. Mas numa conversa de cinco minutos com a esposa, o marido, com a mãe ou com o sócio, você perde a paciência e depois se arrepende.',
      'Naquele momento você não escolhe. Você repete.',
    ],
    quoteCards: [
      {
        quote:
          '“Você resolve problema difícil no trabalho o dia inteiro, mas perde a paciência numa conversa de cinco minutos em casa — e depois se arrepende.”',
        elaboration:
          'No ambiente profissional você mantém o comando e a estratégia. Mas em relações íntimas e importantes, a reação emocional escapa ao seu controle.',
        tag: 'A REAÇÃO INVOLUNTÁRIA',
      },
      {
        quote: '“Naquele momento você não escolhe. Você repete.”',
        elaboration:
          'Não é uma decisão racional sua. É um circuito gravado que entra no piloto automático exatamente na hora em que você mais precisava de clareza.',
        tag: 'O PADRÃO AUTOMÁTICO',
      },
      {
        quote: '“Você não consegue controlar o que sente na hora.”',
        elaboration:
          'A emoção chega antes do pensamento lógico. Tentar engolir ou forçar controle na hora do impacto só aumenta a frustração interna.',
        tag: 'A TENSÃO IMEDIATA',
      },
      {
        quote: '“O sócio que virou ex-sócio.”',
        elaboration:
          'Parcerias construídas com anos de esforço rompidas por discussões desnecessárias, palavras precipitadas ou defesas que falaram mais alto.',
        tag: 'O CUSTO NAS DECISÕES',
      },
      {
        quote: '“A conversa que você adiou por anos.”',
        elaboration:
          'O medo do confronto, a tensão de não saber como conduzir o que sente e o silêncio que vai corroendo sua paz e seus resultados.',
        tag: 'A PROCRASTINAÇÃO EMOCIONAL',
      },
      {
        quote: '“A distância que foi crescendo dentro de casa.”',
        elaboration:
          'A sensação dolorosa de se afastar gradualmente de quem você mais ama porque as conversas viraram campos minados de reatividade.',
        tag: 'O CUSTO NAS RELAÇÕES',
      },
    ],
    transitionPunchline: {
      highlight: 'POR QUE VOCÊ NÃO CONSEGUE CONTROLAR O QUE SENTE NA HORA?',
      description:
        'Naquele momento você não escolhe. Você repete. E isso custa caro para a sua vida, para os seus negócios e para as relações que você mais valoriza.',
    },
  },

  normalization: {
    badge: 'NORMALIZAÇÃO & ORIGEM',
    title: 'Isso não quer dizer que você tem um defeito.',
    lead: 'Quando você era mais jovem, aprendeu um jeito de se proteger. Era o único jeito que existia naquela hora, e funcionou.',
    explanation:
      'Esse jeito ficou gravado no seu corpo e continua ligado hoje, em situações que não têm nada a ver. Por isso você não consegue controlar o que sente na hora.',
    repeatHighlight: 'Naquele momento você não escolhe. Você repete.',
    costHeadline: 'E isso custa caro.',
    costItems: [
      {
        title: 'O sócio que virou ex-sócio.',
        description:
          'Parcerias e sociedades desfeitas por reações que poderiam ter sido governadas.',
      },
      {
        title: 'A conversa que você adiou por anos.',
        description:
          'Tópicos cruciais não enfrentados pelo desconforto de lidar com a carga emocional.',
      },
      {
        title: 'A distância que foi crescendo dentro de casa.',
        description: 'O afastamento silencioso de pessoas essenciais na sua convivência diária.',
      },
    ],
  },

  authority: {
    sectionTitle: 'Quem conduz',
    mentorName: 'Vicente Carnero',
    mentorRole: 'Psicólogo e Doutor em Psicologia',
    mentorBio:
      'Vicente Carnero, psicólogo e doutor em psicologia, com mais de 20 anos de prática clínica, docência universitária e supervisão. Duas décadas ajudando pessoas a sentirem mais profundamente e se libertarem de tensões que as aprisionam. É a esse trabalho que ele irá se dedicar com você na sala.',
    mentorImage: 'https://img.usecurling.com/ppl/large?gender=male&seed=68',
    highlightPhrase:
      'Duas décadas ajudando pessoas a sentirem mais profundamente e se libertarem de tensões que as aprisionam.',
    stats: [
      {
        value: 20,
        prefix: '+',
        suffix: ' ANOS',
        label: 'Prática Clínica e Docência',
        helper: 'Mais de 20 anos de prática clínica, docência universitária e supervisão',
      },
    ],
    credentials: [
      'Doutor em Psicologia com trajetória de rigor acadêmico e vivencial',
      'Mais de 20 anos de prática clínica, docência universitária e supervisão',
      'Especialista em conduzir pessoas à liberação de tensões gravadas no corpo',
      'Dedicação direta e presencial com cada participante dentro da sala',
    ],
  },

  method: {
    badge: 'ENTREGÁVEIS & PRÁTICA',
    title: 'No GOVERNE SUAS EMOÇÕES, você vai:',
    description:
      'Uma experiência presencial desenhada para ir direto à raiz do que governa seu comportamento e abrir um novo espaço de escolha.',
    deliverables: [
      {
        title: 'Identificar as emoções básicas e senti-las no corpo, uma a uma.',
        description:
          'Entender a geografia das suas emoções primárias no próprio corpo físico, aprendendo a reconhecer o sinal antes da reação desgovernada.',
      },
      {
        title: 'Reconhecer as proteções que um dia você precisou e hoje te atrapalham.',
        description:
          'Mapear com exatidão as defesas antigas que você criou quando jovem e que continuam sendo disparadas em momentos que não têm nada a ver.',
      },
      {
        title: 'Expandir o que você consegue sentir, pensar e decidir.',
        description:
          'Aumentar a sua capacidade de suportar e processar estados internos complexos sem recorrer à fuga, à agressividade ou à paralisia.',
      },
      {
        title: 'Praticar, guiado na sala, seu primeiro exercício de governar o que você sente.',
        description:
          'Vivenciar no ambiente seguro da sala a prática orientada pelo Dr. Vicente Carnero de como conduzir a emoção no momento em que ela surge.',
      },
    ],
    quoteRedefinition: {
      quote:
        '“Governar não é controlar o que você sente. É ter mais opções na hora em que você sente, pensa e decide.”',
      complement:
        'E é exatamente essa opção que faltou nas vezes em que você repetiu algo que te custou caro.',
    },
  },

  valueBanner: {
    badge: 'VALOR DE 6 HORAS',
    hoursHighlight: '6 Horas de Imersão Presencial',
    headline:
      'Em 6 horas, você sai daqui com o que levaria anos para aprender por tentativa e erro: a consciência de como conduzir o que você sente.',
    description:
      'Não é teoria nem motivação passageira. É a experiência prática de autogoverno para você nunca mais ser refém daquilo que não escolheu repetir.',
    ctaText: 'Quero Minha Vaga na Imersão',
  },

  testimonials: {
    badge: 'RELATOS DA EXPERIÊNCIA',
    title: 'O que dizem os participantes',
    subtitle:
      'Relatos de quem já esteve sob a supervisão clínica e metodológica do Dr. Vicente Carnero.',
    items: [
      {
        id: '1',
        name: 'Felipe Martiniano',
        city: 'Fortaleza – CE',
        role: 'Empresário',
        avatar: 'https://img.usecurling.com/ppl/medium?gender=male&seed=12',
        quote:
          '“Entender o que governa minhas reações mudou a forma como lidero e tomo decisões difíceis. A clareza adquirida no presencial foi imediata.”',
        rating: 5,
      },
      {
        id: '2',
        name: 'Gabriela Cardoso',
        city: 'Fortaleza – CE',
        role: 'Executiva de Recursos Humanos',
        avatar: 'https://img.usecurling.com/ppl/medium?gender=female&seed=27',
        quote:
          '“A condução do Dr. Vicente é cirúrgica e segura. Consegui reconhecer proteções antigas que me travavam há mais de uma década.”',
        rating: 5,
      },
      {
        id: '3',
        name: 'Rodrigo Medeiros',
        city: 'Fortaleza – CE',
        role: 'Médico & Gestor',
        avatar: 'https://img.usecurling.com/ppl/medium?gender=male&seed=44',
        quote:
          '“Eu achava que autogoverno era segurar a raiva ou engolir o sentimento. Aprendi na sala que governar é ter opções reais de escolha.”',
        rating: 5,
      },
      {
        id: '4',
        name: 'Iva Barbosa',
        city: 'Fortaleza – CE',
        role: 'Arquiteta',
        avatar: 'https://img.usecurling.com/ppl/medium?gender=female&seed=58',
        quote:
          '“Em poucas horas você compreende coisas sobre o próprio corpo que anos de tentativa e erro não ensinam. Recomendo de olhos fechados.”',
        rating: 5,
      },
    ],
  },

  logistics: {
    badge: 'LOGÍSTICA DO EVENTO',
    title: 'Informações Práticas da Imersão',
    subtitle:
      'Um único encontro presencial de 6 horas, focado, profundo e com condução direta na sala.',
    details: [
      {
        icon: 'calendar',
        label: 'DATA',
        value: '07 de novembro de 2026',
        subtext: 'Sábado de imersão presencial profunda',
      },
      {
        icon: 'clock',
        label: 'HORÁRIO',
        value: '14h às 20h',
        subtext: '6 horas de imersão e prática direta',
      },
      {
        icon: 'map-pin',
        label: 'LOCAL',
        value: 'Local a divulgar – Fortaleza/CE',
        subtext: 'Espaço reservado, confortável e climatizado em Fortaleza/CE',
      },
      {
        icon: 'sparkles',
        label: 'FORMATO',
        value: '100% Presencial',
        subtext: 'Conduzido diretamente pelo Dr. Vicente Carnero',
      },
    ],
    included: [
      'Acesso presencial às 6 horas de imersão com o Dr. Vicente Carnero',
      'Exercícios práticos guiados na sala para sentir e governar as emoções',
      'Material de apoio oficial do evento para acompanhamento dos exercícios',
      'Ambiente reservado com vagas estritamente limitadas para garantir a profundidade',
      'Certificado de participação oficial do evento',
    ],
    note: '*O endereço exato em Fortaleza/CE e todas as orientações práticas para a imersão serão confirmados por e-mail e WhatsApp com antecedência.',
  },

  pricing: {
    badge: 'INSCRIÇÃO',
    title: 'Garanta sua vaga no Governe suas emoções',
    subtitle:
      'As vagas são presenciais e estritamente limitadas pela capacidade física da sala para preservar a qualidade da condução.',
    groupDiscountBadge: 'CONDIÇÃO ESPECIAL',
    groupDiscountText: 'Valores provisórios do lote atual. Garanta sua vaga com antecedência.',
    lotName: 'LOTE ATUAL — VAGAS LIMITADAS',
    cards: [
      {
        id: 'individual',
        name: 'Ingresso Individual',
        tag: 'Lote Atual',
        isPopular: false,
        description:
          'Acesso presencial completo às 6 horas de imersão com o Dr. Vicente Carnero em Fortaleza/CE.',
        cashPrice: 197,
        installments: {
          times: 12,
          value: 19.68,
        },
        features: [
          'Acesso presencial às 6 horas de imersão',
          'Condução direta com o Dr. Vicente Carnero',
          'Primeiro exercício prático guiado na sala',
          'Material de apoio oficial do evento',
          'Certificado de participação',
          'Garantia incondicional de 7 dias',
        ],
        ctaText: 'Garantir Ingresso Individual',
        checkoutUrl: 'https://exemplo.checkout.com/governe-individual',
        groupCheckoutUrl: 'https://exemplo.checkout.com/governe-individual-grupo',
      },
      {
        id: 'dupla',
        name: 'Ingresso Dupla (Mais Escolhida)',
        tag: 'Recomendado para Casais ou Sócios',
        isPopular: true,
        description:
          '2 ingressos presenciais para vivenciar a imersão ao lado do cônjuge, mãe, pai ou sócio.',
        cashPrice: 297,
        installments: {
          times: 12,
          value: 29.67,
        },
        features: [
          '2 ingressos presenciais completos (6 horas)',
          'Cadeiras reservadas lado a lado na sala',
          '2 kits de material oficial de acompanhamento',
          'Prática conjunta de autogoverno para relações próximas',
          '2 Certificados de participação',
          'Garantia incondicional de 7 dias',
        ],
        ctaText: 'Garantir Ingresso Dupla',
        checkoutUrl: 'https://exemplo.checkout.com/governe-dupla',
      },
      {
        id: 'vip',
        name: 'Experiência VIP',
        tag: 'Vagas Restritas',
        isPopular: false,
        description:
          'Para quem deseja máxima proximidade na condução e momento reservado com o Dr. Vicente Carnero.',
        cashPrice: 497,
        installments: {
          times: 12,
          value: 49.65,
        },
        features: [
          'Acesso completo às 6 horas na primeira fileira',
          'Momento reservado de dúvidas com o Dr. Vicente',
          'Kit VIP de materiais do evento',
          'Acesso prioritário à sala',
          'Certificado VIP em alta resolução',
          'Garantia incondicional de 7 dias',
        ],
        ctaText: 'Garantir Ingresso VIP',
        checkoutUrl: 'https://exemplo.checkout.com/governe-vip',
      },
    ],
  },

  faq: {
    badge: 'DÚVIDAS FREQUENTES',
    title: 'Perguntas Frequentes sobre a Imersão',
    subtitle: 'Informações claras para você garantir sua vaga com total segurança.',
    items: [
      {
        question: 'Quando e onde acontecerá a imersão Governe suas emoções?',
        answer:
          'O evento será 100% presencial em Fortaleza/CE, no dia 07 de novembro de 2026, das 14h às 20h (6 horas de duração). O endereço exato (Local a divulgar – Fortaleza/CE) será enviado a todos os inscritos com antecedência.',
      },
      {
        question: 'Governar é controlar ou reprimir o que sinto?',
        answer:
          'Não. Como o Dr. Vicente ensina, governar não é controlar o que você sente. É ter mais opções na hora em que você sente, pensa e decide. Você aprende a reconhecer o padrão gravado no corpo e agir com consciência em vez de apenas repetir.',
      },
      {
        question: 'Preciso ter formação em psicologia ou conhecimento prévio?',
        answer:
          'Não. A imersão foi desenvolvida tanto para pessoas leigas quanto para profissionais e empresários que desejam entender e conduzir suas emoções nas relações pessoais e profissionais.',
      },
      {
        question: 'Qual é a duração da imersão?',
        answer:
          'São 6 horas de imersão direta e prática (das 14h às 20h), um período concentrado para você sair com o que levaria anos para aprender por tentativa e erro.',
      },
      {
        question: 'Como funciona a garantia de 7 dias?',
        answer:
          'Você conta com Garantia Incondicional de 7 dias após a compra. Se perceber que a imersão não é para você nesse prazo, basta enviar uma mensagem ao suporte e devolvemos 100% do valor pago.',
      },
      {
        question: 'Quais são as formas de pagamento disponíveis?',
        answer:
          'Você pode se inscrever via PIX à vista ou cartão de crédito parcelado em até 12 vezes através de checkout 100% seguro.',
      },
      {
        question: 'Por que o número de vagas é limitado?',
        answer:
          'Como o trabalho envolve exercícios práticos guiados na sala e acompanhamento próximo do Dr. Vicente Carnero, o número de vagas é estritamente limitado pela capacidade da sala.',
      },
    ],
  },

  urgency: {
    badge: 'VAGAS LIMITADAS PELA SALA',
    title: 'O tempo está acabando para garantir no lote atual',
    subtitle:
      'A sala possui capacidade restrita para garantir a qualidade da condução prática do Dr. Vicente Carnero.',
    lotNotice: 'LOTE ATUAL VIGENTE • VAGAS LIMITADAS PELA SALA EM FORTALEZA',
    ctaText: 'Garantir Minha Vaga Antes do Término do Lote',
  },

  finalCta: {
    badge: 'A SUA DECISÃO',
    title: 'Governe suas emoções',
    hook: 'Você se autogoverna na medida em que entende o que governa você.',
    description:
      'Em 6 horas, você sai daqui com o que levaria anos para aprender por tentativa e erro: a consciência de como conduzir o que você sente. 07 de novembro de 2026 · 14h às 20h · Fortaleza/CE · Presencial.',
    ctaText: 'Quero Garantir Minha Vaga Presencial',
    ctaSubtext: 'Pagamento 100% Seguro • Condução Direta de Vicente Carnero • Garantia de 7 Dias',
  },

  healthNotice: {
    title: 'Aviso Importante e Ética do Treinamento',
    description:
      'A imersão Governe suas emoções é um treinamento presencial de desenvolvimento pessoal e autogoverno emocional conduzido pelo Dr. Vicente Carnero. Embora baseado em mais de 20 anos de prática clínica e acadêmica, o evento tem caráter educativo e vivencial de grupo, não substituindo psicoterapia individual ou acompanhamento psiquiátrico quando clinicamente indicado.',
    conditions: [
      'Pessoas com quadros psiquiátricos graves ou em crise aguda',
      'Transtornos psicóticos ou episódios de descompensação recente',
      'Quadros de pânico agudo ativo sem acompanhamento',
      'Condições de saúde física que impeçam a permanência na sala',
    ],
    medicalClearance:
      'Caso esteja em tratamento para condições psiquiátricas graves ou utilize medicação de uso controlado para quadros agudos, consulte seu médico ou psicólogo assistente.',
    purposeNote:
      'Este aviso reflete o compromisso ético e a responsabilidade profissional que norteiam o trabalho do Dr. Vicente Carnero.',
  },

  support: {
    whatsappNumber: '5521999999999',
    whatsappMessage:
      'Olá! Vim da página do Governe suas emoções e gostaria de tirar uma dúvida sobre a imersão em Fortaleza.',
    supportHours: 'Atendimento de Segunda a Sexta, das 09h às 19h',
    companyName: 'Governe suas emoções — Vicente Carnero',
    cnpj: '12.345.678/0001-90',
    address: 'Fortaleza – CE, Brasil',
    copyrightYear: new Date().getFullYear(),
    legalLinks: [
      { label: 'Termos de Uso', href: '#termos' },
      { label: 'Política de Privacidade', href: '#privacidade' },
      { label: 'Aviso Legal', href: '#aviso' },
      { label: 'Fale Conosco', href: '#contato' },
    ],
  },
}
