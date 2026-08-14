export type Language = 'pt' | 'en';

export interface Translations {
  nav: {
    about: string;
    methodology: string;
    investigations: string;
    lab: string;
    status: string;
    langToggle: string;
  };
  hero: {
    issueTag: string;
    archiveTag: string;
    systemActive: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    inputPlaceholder: string;
    buttonInvestigate: string;
    buttonScanning: string;
    sampleDossiers: string;
    missionTag: string;
    missionText: string;
    vectorsEvaluated: string;
    vectorList: string[];
    ethicalScanner: string;
  };
  liveFeed: {
    tag: string;
    subTag: string;
    aiScore: string;
  };
  latest: {
    tag: string;
    liveTag: string;
    title: string;
    subtitle: string;
    viewAutopsy: string;
    codeAst: string;
    namingBem: string;
    domDepth: string;
    scoreTag: string;
  };
  weInvestigate: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3Highlight: string;
    description: string;
    versionTag: string;
    vectorTag: string;
    calibratedTag: string;
    benchmarkVector: string;
    typicalSignal: string;
    pillars: Array<{
      id: string;
      name: string;
      tagline: string;
      description: string;
      metric: string;
      signal: string;
    }>;
  };
  howItWorks: {
    tag: string;
    title: string;
    subtitle: string;
    pipelineTag: string;
    steps: Array<{
      num: string;
      title: string;
      subtitle: string;
      desc: string;
      details: string[];
    }>;
  };
  visualForensics: {
    tag: string;
    title: string;
    subtitle: string;
    dissectorTag: string;
    layerModes: string;
    modeComposite: string;
    modeBoundingBoxes: string;
    modeTopologyMesh: string;
    summaryTag: string;
    summaryTitle: string;
    summaryDesc: string;
    markers: Array<{
      id: string;
      tag: string;
      label: string;
      finding: string;
    }>;
  };
  codeForensics: {
    tag: string;
    title: string;
    subtitle: string;
    snippetSynthetic: string;
    snippetArtisanal: string;
    cadenceAnalysis: string;
    namingConsistency: string;
    syntheticDesc: string;
    artisanalDesc: string;
    astVarianceLabel: string;
    astVarianceValSynthetic: string;
    astVarianceValArtisanal: string;
    copyScoreLabel: string;
    copyScoreValSynthetic: string;
    copyScoreValArtisanal: string;
    originLabel: string;
    originValSynthetic: string;
    originValArtisanal: string;
  };
  lab: {
    tag: string;
    title: string;
    subtitle: string;
    readEssay: string;
    closeEssay: string;
    labDispatchTag: string;
    articles: Array<{
      id: string;
      issue: string;
      date: string;
      readTime: string;
      title: string;
      excerpt: string;
      author: string;
      category: string;
      content: string[];
    }>;
  };
  scanner: {
    tag: string;
    sandboxTag: string;
    targetTag: string;
    completed: string;
    processing: string;
    queued: string;
    safeguard: string;
    stages: Array<{
      id: number;
      name: string;
      desc: string;
    }>;
  };
  report: {
    returnHome: string;
    sealedDossier: string;
    calibratedAccuracy: string;
    aiSignalScore: string;
    vectorsTag: string;
    breakdownTitle: string;
    confidenceRating: string;
    confidenceExplanation: string;
    detectedTechTag: string;
    explainabilityTag: string;
    evidenceExplorerTitle: string;
    syntheticSignal: string;
    artisanalSignal: string;
    ethicalDisclaimerTitle: string;
    ethicalDisclaimerText: string;
    verdicts: {
      high: string;
      moderate: string;
      low: string;
    };
    vectors: Array<{
      key: string;
      label: string;
      desc: string;
    }>;
  };
  methodologyModal: {
    sopTag: string;
    title: string;
    versionTag: string;
    sec1Title: string;
    sec1Text: string;
    sec2Title: string;
    sec3Title: string;
    sec3Text: string;
    dismissButton: string;
  };
  footer: {
    subtitle: string;
    tagline: string;
    indexTag: string;
    legalTag: string;
    legalText: string;
    copyright: string;
    privacy: string;
  };
  cursor: {
    examine: string;
    investigate: string;
    read: string;
    inspect: string;
    select: string;
    close: string;
  };
}

export const DICTIONARY: Record<Language, Translations> = {
  pt: {
    nav: {
      about: 'Sobre',
      methodology: 'Metodologia',
      investigations: 'Investigações',
      lab: 'Laboratório',
      status: 'PERÍCIA / 2026',
      langToggle: 'PT-BR',
    },
    hero: {
      issueTag: '[EDIÇÃO_01]',
      archiveTag: 'ARQUIVO DE PERÍCIA DIGITAL',
      systemActive: 'VARREDURA_SUPERFÍCIE: ATIVA',
      titleLine1: 'Is this',
      titleLine2: 'AI?',
      description: 'Digite a URL de qualquer site. Iremos dissecar seu código-fonte, analisar padrões estruturais e emitir um laudo pericial probabilístico de geração artificial.',
      inputPlaceholder: 'https://exemplo.com ou dominio.com.br',
      buttonInvestigate: 'INVESTIGAR',
      buttonScanning: 'ESCANEANDO...',
      sampleDossiers: 'DOSSIÊS DE AMOSTRA:',
      missionTag: '[MISSÃO_FORENSE]',
      missionText: 'Não adivinhamos. Inspecionamos árvores de código público, invariantes topológicos, profundidade de AST e clichês de copywriting sintético.',
      vectorsEvaluated: '[VETORES AVALIADOS]',
      vectorList: ['01. AST DE CÓDIGO', '02. NOMENCLATURA', '03. TOPOLOGIA', '04. REDAÇÃO'],
      ethicalScanner: 'Scanner Ético: Inspecionamos estritamente superfícies públicas com zero ações invasivas.',
    },
    liveFeed: {
      tag: 'FEED AO VIVO',
      subTag: '/ BUFFER FIFO DE 4 SLOTS (ATUALIZA A CADA 5 MIN)',
      aiScore: 'IA',
    },
    latest: {
      tag: '[ARQUIVO DE DOSSIÊS]',
      liveTag: 'FEED DINÂMICO AO VIVO (5 MIN)',
      title: 'ÚLTIMAS INVESTIGAÇÕES',
      subtitle: 'Autópsias periciais recentes conduzidas em superfícies públicas. Analisadas quanto a padrões de AST generativos, cadência lexical e invariantes de layout.',
      viewAutopsy: 'VER LAUDO COMPLETO',
      codeAst: 'AST CÓDIGO',
      namingBem: 'NOMENCLATURA',
      domDepth: 'PROFUNDIDADE',
      scoreTag: 'SCORE DE SINAL IA',
    },
    weInvestigate: {
      tag: '[O MÉTODO]',
      titleLine1: 'NÃO ADIVINHAMOS.',
      titleLine2: 'NÓS',
      titleLine3Highlight: 'INVESTIGAMOS.',
      description: 'Não dependemos de redes neurais opacas de caixa-preta. Analisamos anomalias estruturais, lexicais e topológicas objetivas em 6 vetores de engenharia calibrados.',
      versionTag: 'METODOLOGIA v2.4 // 6 VETORES FORENSES',
      vectorTag: 'VETOR',
      calibratedTag: 'HEURÍSTICA CALIBRADA',
      benchmarkVector: 'VETOR DE BENCHMARK',
      typicalSignal: 'SINAL TÍPICO',
      pillars: [
        {
          id: '01',
          name: 'CÓDIGO',
          tagline: 'Profundidade AST e Regularidade de Indentação',
          description: 'Medimos a complexidade ciclomática e invariantes da árvore sintática abstrata (AST). Assistentes de IA geram estruturas de parâmetros de função extremamente previsíveis e encadeamentos opcionais (?.) defensivos em excesso.',
          metric: 'TAXA DE ENTROPIA AST',
          signal: '0.14 - 0.92',
        },
        {
          id: '02',
          name: 'NOMENCLATURA',
          tagline: 'Cadência Hiper-Canônica BEM e Tokens Tailwind',
          description: 'Modelos seguem à risca convenções de documentação oficial. Calculamos a distância semântica entre nomes de classes, detectando padrões didáticos como .hero-title, .feature-badge-icon e cadeias repetitivas de classes utilitárias.',
          metric: 'DISTÂNCIA LEXICAL',
          signal: '94% PREVISÍVEL',
        },
        {
          id: '03',
          name: 'ESTRUTURA',
          tagline: 'Invariantes de DOM e Hierarquia de Nós',
          description: 'Desenvolvedores humanos criam assimetrias de layout e soluções específicas. O código de IA gera aninhamento matematicamente uniforme e camadas redundantes de contêineres em seções independentes da página.',
          metric: 'VARIÂNCIA DE PROFUNDIDADE',
          signal: 'σ = 0.18',
        },
        {
          id: '04',
          name: 'DESIGN',
          tagline: 'Bento Grids e Raios de Borda Não-Modulados',
          description: 'Extraímos caixas delimitadoras visuais (bounding boxes) e calculamos a uniformidade geométrica. Landing pages de IA exibem divisões de 3 cartuchos, ritmos verticais de 64px e paletas de cores padrão sem customização.',
          metric: 'SIMETRIA GEOMÉTRICA',
          signal: '88% ACURÁCIA',
        },
        {
          id: '05',
          name: 'CONTEÚDO',
          tagline: 'Expressões Sintéticas de Copywriting',
          description: 'Nosso scanner de linguagem natural identifica palavras-chave super-representadas em prompts ("supercharge", "unleash", "effortless", "revolucione") e cadências frasais formulaicas típicas de LLMs.',
          metric: 'DENSIDADE DE CLICHÊS DE PROMPT',
          signal: '7.8x A MÉDIA',
        },
        {
          id: '06',
          name: 'TECNOLOGIA',
          tagline: 'Assinatura de Scaffolds e Fingerprinting',
          description: 'Cruzamento de configurações de pacotes frontend, bundles de CDN, assinaturas de carregamento de fontes e metadados de hospedagem com motores conhecidos de geração (v0, Lovable, Bolt, Cursor).',
          metric: 'CONFIANÇA DO FINGERPRINT',
          signal: 'ALTA CORRELAÇÃO',
        },
      ],
    },
    howItWorks: {
      tag: '[PIPELINE]',
      title: 'COMO FUNCIONA',
      subtitle: 'Do handshake inicial da URL ao dossiê pericial final: uma pipeline analítica transparente em 4 fases.',
      pipelineTag: '[PONTOS DE CONTROLE DA PIPELINE]',
      steps: [
        {
          num: '01',
          title: 'RASPAGEM',
          subtitle: 'Inspeção de Superfície Pública',
          desc: 'Renderizamos o domínio alvo em um motor headless isolado (Playwright). Capturamos snapshots da árvore DOM, manifestos de rede, cascatas de CSS e métricas de viewport sob rigoroso controle anti-SSRF.',
          details: ['Playwright Chrome Headless', 'Sandbox Isolada', 'Timeout Rígido de 12s'],
        },
        {
          num: '02',
          title: 'DECODIFICAÇÃO',
          subtitle: 'Estrutura, Nomenclatura e Padrões AST',
          desc: 'Nosso analisador decompõe o DOM em Árvores Sintáticas Abstratas (AST), avaliando entropia de nomes de classes, encapsulamento de componentes e distribuição de utilitários Tailwind.',
          details: ['Profundidade Topológica AST', 'Previsibilidade Lexical BEM', 'Índice de Monocultura Tailwind'],
        },
        {
          num: '03',
          title: 'OBSERVAÇÃO',
          subtitle: 'Topologia Visual e Copy Sintética',
          desc: 'Extraímos caixas delimitadoras e calculamos o equilíbrio espacial. Concomitantemente, modelos de linguagem natural escaneiam o texto de marketing em busca de clichês e fórmulas sintáticas de prompt.',
          details: ['Detecção de Bento Grid 3-Colunas', 'Densidade de Expressões de IA', 'Análise de Assimetria Espacial'],
        },
        {
          num: '04',
          title: 'PONTUAÇÃO',
          subtitle: 'Agregação Multi-Vetorial de Evidências',
          desc: 'Os pontos probatórios são agregados em 6 vetores calibrados. Geramos um relatório pericial explicável com sinais positivos (indicativos de IA) e negativos (de artesanato humano).',
          details: ['Matriz Heurística Ponderada', 'Calibração de Confiança', 'Dossiê Explicável de Evidências'],
        },
      ],
    },
    visualForensics: {
      tag: '[DESCONSTRUÇÃO]',
      title: 'PERÍCIA VISUAL',
      subtitle: 'Motor interativo de sobreposição topológica. Desmontamos visualmente layouts de sites em caixas delimitadoras geométricas, detectando simetria generativa e arquétipos de templates.',
      dissectorTag: 'DISSECADOR_TOPOLÓGICO_v2',
      layerModes: 'MODOS DE CAMADA:',
      modeComposite: '[COMPOSTO]',
      modeBoundingBoxes: '[CAIXAS DELIMITADORAS]',
      modeTopologyMesh: '[MALHA TOPOLÓGICA]',
      summaryTag: '[RESUMO DA VARREDURA TOPOLÓGICA]',
      summaryTitle: 'Simetria Geométrica: 91/100',
      summaryDesc: 'Passe o cursor sobre as caixas destacadas à esquerda para inspecionar os padrões estruturais e invariantes espaciais.',
      markers: [
        {
          id: 'box-nav',
          tag: '01 / NAV',
          label: 'BARRA_PILULA_CANONICA',
          finding: 'Navegação em pílula centralizada padrão com logo à esquerda, 4 links e botão de CTA à direita (94% de conformidade com prompts).',
        },
        {
          id: 'box-hero',
          tag: '02 / HERO',
          label: 'CONTAINER_TITULO_GRADIENTE',
          finding: 'Tipografia gigante em gradiente (h1) combinada com fundo em spotlight radial iluminado e input centralizado.',
        },
        {
          id: 'box-cta',
          tag: '03 / CTA',
          label: 'BOTAO_PILULA_ACENTO',
          finding: 'Botão de ação em pílula de alto contraste com ícone clássico de seta do Lucide Icons.',
        },
        {
          id: 'box-grid',
          tag: '04 / GRID',
          label: 'MATRIZ_BENTO_3_COLUNAS',
          finding: 'Bento box simétrico de 3 cartuchos com padding de 24px e cantos rounded-2xl idênticos aos templates de v0 e Lovable.',
        },
      ],
    },
    codeForensics: {
      tag: '[AUTÓPSIA SINTÁTICA]',
      title: 'PERÍCIA DE CÓDIGO',
      subtitle: 'Examinando a previsibilidade lexical de nomes e aninhamento de AST. Compare o forte contraste entre código gerado por LLMs e engenharia de software humana.',
      snippetSynthetic: '[PADRÃO SINTÉTICO]',
      snippetArtisanal: '[ARTESANATO HUMANO]',
      cadenceAnalysis: '[ANÁLISE DE CADÊNCIA]',
      namingConsistency: 'CONSISTÊNCIA DE NOMENCLATURA',
      syntheticDesc: 'Hierarquia de prefixos de classes excessivamente rígida (.hero-*)',
      artisanalDesc: 'Arquitetura modular idiossincrática com entropia personalizada',
      astVarianceLabel: 'Variância de Profundidade AST:',
      astVarianceValSynthetic: '0.04 (Uniforme)',
      astVarianceValArtisanal: '0.78 (Dinâmica)',
      copyScoreLabel: 'Densidade de Clichês de Copy:',
      copyScoreValSynthetic: '92% Sintético',
      copyScoreValArtisanal: '5% Humano',
      originLabel: 'Origem Provável:',
      originValSynthetic: 'GPT-4o / v0 / Cursor',
      originValArtisanal: 'Engenheiro de Software Humano',
    },
    lab: {
      tag: '[DESPACHOS & ENSAIOS]',
      title: 'DO LABORATÓRIO',
      subtitle: 'Jornalismo investigativo e ensaios técnicos investigando a estética, a linguística e a genética de código da web assistida por máquina.',
      readEssay: 'LER ARTIGO',
      closeEssay: 'FECHAR ARTIGO',
      labDispatchTag: 'LABORATÓRIO DE PERÍCIA FORENSE THISAI?',
      articles: [
        {
          id: 'art-01',
          issue: 'EDIÇÃO 04 // ENSAIO',
          date: '14 AGO 2026',
          readTime: '6 MIN DE LEITURA',
          title: 'Por Que Sites Gerados por IA Parecem Tão Estranhamente Semelhantes',
          excerpt: 'Uma autópsia investigativa no espaço latente de templates de LLMs. Como prompts criaram a monocultura de bento grids escuros, cartuchos rounded-2xl e o mesmo vocabulário de marketing.',
          author: 'Despacho do Laboratório Forense',
          category: 'Topologia Visual',
          content: [
            'Nos últimos 24 meses, a web pública experimentou uma convergência sem precedentes na topologia estética. Onde o design humano historicamente se caracterizou pelo atrito, hacks de CSS e peculiaridades de navegadores, a geração assistida por IA introduziu uma uniformidade matemática estéril.',
            'Quando um LLM recebe a instrução de criar uma landing page moderna, ele recorre a milhões de tokens de treinamento fortemente focados na documentação do Tailwind, repositórios populares e componentes padronizados. O resultado é o mesmo padrão: 3 colunas, padding vertical de 64px, radial glow em #6366f1 e badges em formato de pílula.',
            'Nosso crawler analisou 14.000 domínios registrados recentemente. Mais de 71% dos sites com score acima de 75 compartilhavam profundidades de nós idênticas (6.2 ± 0.3) e prefixos lexicais perfeitamente simétricos.'
          ]
        },
        {
          id: 'art-02',
          issue: 'EDIÇÃO 03 // AUDITORIA TÉCNICA',
          date: '02 AGO 2026',
          readTime: '8 MIN DE LEITURA',
          title: 'É Possível Detectar Código Escrito por IA em Produção?',
          excerpt: 'Dissecando assinaturas de AST, frequência de comentários e entropia de tokens em bundles minificados para rastrear origens generativas.',
          author: 'Dr. V. Aris (Perito Chefe de Forense)',
          category: 'Genética de Código',
          content: [
            'Um equívoco comum é achar que a minificação apaga todas as pistas de autoria por IA. Embora nomes de variáveis sejam ofuscados, a topologia estrutural, a complexidade ciclomática e as árvores de dependências permanecem intactas.',
            'Assistentes de IA possuem vícios claros: super-encapsulam componentes simples em tags <div> redundantes, abusam de encadeamento opcional (?.) e geram assinaturas de funções rigidamente didáticas.',
            'Comparando a entropia da AST do JavaScript de produção com repositórios humanos calibrados, calculamos um índice de alta probabilidade sem precisar de acesso ao código fonte privado.'
          ]
        },
        {
          id: 'art-03',
          issue: 'EDIÇÃO 02 // FORENSE LEXICAL',
          date: '18 JUL 2026',
          readTime: '5 MIN DE LEITURA',
          title: 'A Anatomia de uma Landing Page de LLM: 12 Clichês Recorrentes',
          excerpt: 'De "Revolucione sua produtividade" a métricas flutuantes em badges: um catálogo forense dos clichês lexicais gerados por modelos de ponta.',
          author: 'Despacho do Laboratório Forense',
          category: 'Análise Linguística',
          content: [
            'Modelos de linguagem possuem um tom característico ao gerar textos publicitários. Palavras como "Seamless", "Supercharge", "Effortless", "Next-Gen" e "Revolutionize" aparecem com frequência 8.4x maior em sites de IA em relação a páginas humanas.',
            'Além disso, a sintaxe segue uma fórmula matemática: Verbo de Ação + Adjetivo + Substantivo + "desenhado para" + Complemento. Uma vez identificada a cadência, torna-se impossível não notar.'
          ]
        },
        {
          id: 'art-04',
          issue: 'EDIÇÃO 01 // CRÍTICA',
          date: '05 JUL 2026',
          readTime: '7 MIN DE LEITURA',
          title: 'CSS Sintético: Como a Engenharia de Prompts Molda a Web Moderna',
          excerpt: 'Quando desenvolvedores deixam de escrever CSS manualmente, o navegador se torna um motor de renderização para probabilidades estatísticas.',
          author: 'Marcus Vance',
          category: 'Estética & Cultura',
          content: [
            'O CSS feito à mão é repleto de acasos felizes, micro-assimetrias e identidade cultural. O CSS sintético, por outro lado, é um problema de otimização de backpropagation, priorizando utilitários seguros em detrimento de layouts experimentais.',
            'O ThisAI? não nasceu para condenar ferramentas automatizadas, mas para mapear a mudança no artesanato digital e preservar o discernimento crítico na era da síntese automatizada.'
          ]
        }
      ]
    },
    scanner: {
      tag: '[SCANNER_FORENSE_EM_TEMPO_REAL]',
      sandboxTag: 'SANDBOX ISOLADA',
      targetTag: 'ALVO EM PROCESSAMENTO',
      completed: '[CONCLUÍDO]',
      processing: 'PROCESSANDO...',
      queued: 'NA FILA',
      safeguard: 'PROTEÇÃO: BLINDAGEM_ANTI_SSRF_ATIVA',
      stages: [
        { id: 1, name: 'RASPAGEM', desc: 'Conectando à superfície pública e renderizando DOM via motor headless Playwright' },
        { id: 2, name: 'LEITURA', desc: 'Decompondo cascatas de CSS, densidade de tokens Tailwind e hierarquia de AST' },
        { id: 3, name: 'OBSERVAÇÃO', desc: 'Extraindo caixas delimitadoras, simetria de bento box e invariantes espaciais' },
        { id: 4, name: 'COMPARAÇÃO', desc: 'Cruzando dados contra biblioteca calibrada de impressões digitais de scaffolds de IA' },
        { id: 5, name: 'PONTUAÇÃO', desc: 'Compilando a matriz de evidências ponderadas e formatando o laudo pericial' },
      ],
    },
    report: {
      returnHome: '[VOLTAR À PÁGINA INICIAL]',
      sealedDossier: 'STATUS: DOSSIÊ_FORENSE_LACRADO',
      calibratedAccuracy: 'ACURÁCIA: CALIBRADA',
      aiSignalScore: 'SCORE DE SINAL IA',
      vectorsTag: '[VETORES]',
      breakdownTitle: 'DISSECAÇÃO FORENSE',
      confidenceRating: 'ÍNDICE DE CONFIANÇA:',
      confidenceExplanation: 'O score é calculado a partir de sinais observáveis na engenharia pública. Trata-se de uma estimativa algorítmica probatória de desenvolvimento assistido por IA, não de prova jurídica irrefutável.',
      detectedTechTag: '[TECNOLOGIAS DETECTADAS]',
      explainabilityTag: '[EXPLICABILIDADE]',
      evidenceExplorerTitle: 'EXPLORER DE EVIDÊNCIAS',
      syntheticSignal: 'SINAL SINTÉTICO (IA)',
      artisanalSignal: 'SINAL ARTESANAL (HUMANO)',
      ethicalDisclaimerTitle: 'Transparência Ética:',
      ethicalDisclaimerText: 'ThisAI? identifica padrões arquiteturais associados ao desenvolvimento assistido por Inteligência Artificial. Não é possível determinar de forma binária ou absoluta se um humano utilizou IA na construção.',
      verdicts: {
        high: 'ALTOS SINAIS DE IA DETECTADOS',
        moderate: 'PROVAVELMENTE ASSISTIDO POR IA',
        low: 'BAIXOS SINAIS DE IA (HUMANO)',
      },
      vectors: [
        { key: 'code', label: 'CÓDIGO FORENSE', desc: 'Profundidade ciclomática da AST e regularidade de indentação' },
        { key: 'naming', label: 'CADÊNCIA DE NOMENCLATURA', desc: 'Previsibilidade BEM e tokens de classes Tailwind' },
        { key: 'structure', label: 'ESTRUTURA & AST', desc: 'Invariantes da árvore DOM e proporções de encapsulamento' },
        { key: 'visual', label: 'TOPOLOGIA VISUAL', desc: 'Simetria bento box e ritmo de espaçamento de cartuchos' },
        { key: 'content', label: 'COPYWRITING SINTÉTICO', desc: 'Densidade de clichês e expressões formulaicas de IA' },
      ],
    },
    methodologyModal: {
      sopTag: '[PROCEDIMENTO OPERACIONAL PADRÃO]',
      title: 'METODOLOGIA & ÉTICA',
      versionTag: 'VERSÃO 2.4 // REVISADA EM AGOSTO DE 2026 // ESTRUTURA FORENSE AUDITADA',
      sec1Title: '1. Filosofia Probabilística Não-Binária',
      sec1Text: 'ThisAI? não emite vereditos absolutos preto-no-branco. O desenvolvimento de software moderno existe em um espectro contínuo entre artesanato manual e síntese generativa automatizada. Calculamos um índice de probabilidade explicável baseado em artefatos arquiteturais observáveis.',
      sec2Title: '2. Os 6 Vetores de Medição Forense',
      sec3Title: '3. Safe Harbor, Segurança e Privacidade',
      sec3Text: 'Nosso crawler respeita rigorosamente as diretrizes do robots.txt, bloqueia faixas de IPs privados para prevenir vulnerabilidades SSRF, impõe limites de taxa e inspeciona exclusivamente estruturas públicas do DOM sem realizar testes invasivos de segurança.',
      dismissButton: 'ENTENDIDO & FECHAR',
    },
    footer: {
      subtitle: 'PERÍCIA FORENSE DIGITAL',
      tagline: 'Investigue a web.',
      indexTag: '[ÍNDICE]',
      legalTag: '[LEGAL & ÉTICA]',
      legalText: 'ThisAI? é um observatório forense independente. Todas as análises são baseadas em HTML público, CSS e topologia do DOM.',
      copyright: '© 2026 LABORATÓRIO FORENSE THISAI?. TODOS OS DIREITOS RESERVADOS.',
      privacy: 'Privacidade & Ética de Dados',
    },
    cursor: {
      examine: 'EXAMINAR',
      investigate: 'INVESTIGAR',
      read: 'LER',
      inspect: 'INSPECIONAR',
      select: 'SELECIONAR',
      close: 'FECHAR',
    },
  },
  en: {
    nav: {
      about: 'About',
      methodology: 'Methodology',
      investigations: 'Investigations',
      lab: 'Lab',
      status: 'FORENSICS / 2026',
      langToggle: 'EN-US',
    },
    hero: {
      issueTag: '[ISSUE_01]',
      archiveTag: 'DIGITAL FORENSICS ARCHIVE',
      systemActive: 'SURFACE_SCAN: ACTIVE',
      titleLine1: 'Is this',
      titleLine2: 'AI?',
      description: 'Enter a website URL. We will dissect its source, analyze structural patterns, and output a forensic probability score of artificial generation.',
      inputPlaceholder: 'https://example.com or domain.com',
      buttonInvestigate: 'INVESTIGATE',
      buttonScanning: 'SCANNING...',
      sampleDossiers: 'SAMPLE DOSSIERS:',
      missionTag: '[FORENSIC_MISSION]',
      missionText: 'We don’t guess. We inspect public source trees, topological invariants, AST depths, and synthetic copywriting tropes.',
      vectorsEvaluated: '[VECTORS EVALUATED]',
      vectorList: ['01. CODE AST', '02. NAMING', '03. TOPOLOGY', '04. COPYWRITING'],
      ethicalScanner: 'Ethical Scanner: We inspect only publicly accessible surfaces with zero intrusive actions.',
    },
    liveFeed: {
      tag: 'LIVE FEED',
      subTag: '/ 4-SLOT FIFO BUFFER (POLLS EVERY 5 MIN)',
      aiScore: 'AI',
    },
    latest: {
      tag: '[DOSSIER ARCHIVE]',
      liveTag: 'LIVE DYNAMIC FEED (5 MIN)',
      title: 'LATEST INVESTIGATIONS',
      subtitle: 'Recent forensic autopsies conducted on public web surfaces. Scanned for generative AST patterns, lexical cadence and layout invariants.',
      viewAutopsy: 'VIEW FULL AUTOPSY',
      codeAst: 'CODE AST',
      namingBem: 'NAMING BEM',
      domDepth: 'DOM DEPTH',
      scoreTag: 'AI SIGNAL SCORE',
    },
    weInvestigate: {
      tag: '[THE METHOD]',
      titleLine1: "WE DON'T",
      titleLine2: 'GUESS.',
      titleLine3Highlight: 'INVESTIGATE.',
      description: 'We do not rely on opaque black-box neural networks. Instead, we analyze measurable structural, lexical, and topological anomalies across 6 objective engineering vectors.',
      versionTag: 'METHODOLOGY v2.4 // 6 FORENSIC VECTORS',
      vectorTag: 'VECTOR',
      calibratedTag: 'CALIBRATED HEURISTIC',
      benchmarkVector: 'BENCHMARK VECTOR',
      typicalSignal: 'TYPICAL SIGNAL',
      pillars: [
        {
          id: '01',
          name: 'CODE',
          tagline: 'AST Depth & Indentation Regularity',
          description: 'We measure cyclomatic complexity and abstract syntax tree invariants. AI assistants generate distinctly predictable function parameter structures and over-defensive optional chaining sequences.',
          metric: 'AST ENTROPY RATIO',
          signal: '0.14 - 0.92',
        },
        {
          id: '02',
          name: 'NAMING',
          tagline: 'Hyper-Canonical BEM & Tailwind Cadence',
          description: 'Models strictly adhere to standard documentation conventions. We calculate the semantic distance between class names, detecting textbook patterns like .hero-title, .feature-badge-icon, and repetitive utility chains.',
          metric: 'LEXICAL DISTANCE',
          signal: '94% PREDICTABLE',
        },
        {
          id: '03',
          name: 'STRUCTURE',
          tagline: 'DOM Invariants & Node Hierarchy',
          description: 'Human developers introduce layout asymmetries and idiosyncratic workarounds. AI code produces mathematically balanced container nesting and uniform wrapper layers across unrelated page modules.',
          metric: 'TREE DEPTH VARIANCE',
          signal: 'σ = 0.18',
        },
        {
          id: '04',
          name: 'DESIGN',
          tagline: 'Bento Grids & Unmodulated Radii',
          description: 'We extract visual bounding boxes and calculate geometric uniformity. AI landing pages exhibit characteristic 3-tier card splits, 64px vertical rhythms, and uncustomized stock color palettes.',
          metric: 'GEOMETRIC SYMMETRY',
          signal: '88% ACCURACY',
        },
        {
          id: '05',
          name: 'CONTENT',
          tagline: 'Synthetic Marketing Idioms',
          description: 'Our natural language scanner parses marketing copy for over-represented LLM buzzwords ("supercharge", "unleash", "effortless") and formulaic sentence cadences characteristic of prompt outputs.',
          metric: 'PROMPT IDIOM DENSITY',
          signal: '7.8x BASELINE',
        },
        {
          id: '06',
          name: 'TECHNOLOGY',
          tagline: 'Scaffold & Fingerprint Matching',
          description: 'Cross-referencing frontend package configurations, CDN bundles, font loading signatures, and hosting configurations with known generative scaffolding engines (v0, Lovable, Bolt, Cursor).',
          metric: 'FINGERPRINT CONFIDENCE',
          signal: 'HIGH CORRELATION',
        },
      ],
    },
    howItWorks: {
      tag: '[PIPELINE]',
      title: 'HOW IT WORKS',
      subtitle: 'From initial URL handshake to final forensic dossier: a 4-stage transparent analytical pipeline.',
      pipelineTag: '[PIPELINE CHECKPOINTS]',
      steps: [
        {
          num: '01',
          title: 'CRAWL',
          subtitle: 'Public Surface Inspection',
          desc: 'We render the target domain in a sandboxed headless engine. We capture DOM tree snapshots, network manifests, stylesheet cascades, and high-fidelity viewport metrics with strict SSRF controls.',
          details: ['Playwright Headless Chrome', 'Resource Sandbox', '12s Hard Timeout'],
        },
        {
          num: '02',
          title: 'DECODE',
          subtitle: 'Structure, Naming & AST Patterns',
          desc: 'Our parser deconstructs the DOM tree into Abstract Syntax Trees, evaluating class name entropy, component encapsulation patterns, and Tailwind utility chain distributions.',
          details: ['AST Topological Depth', 'BEM Lexical Predictability', 'Tailwind Monoculture Index'],
        },
        {
          num: '03',
          title: 'OBSERVE',
          subtitle: 'Visual Topology & Synthetic Copy',
          desc: 'We extract visual bounding boxes and calculate spatial balance. Concurrently, natural language models scan marketing copy for over-represented prompt cliches and formulaic syntax.',
          details: ['3-Column Bento Detection', 'Linguistic Idiom Density', 'Spatial Asymmetry Analysis'],
        },
        {
          num: '04',
          title: 'SCORE',
          subtitle: 'Multi-Vector Evidence Aggregation',
          desc: 'Evidence points are aggregated across 6 calibrated vectors. We generate an explainable forensic report with both positive (AI-indicative) and negative (human-crafted) signals.',
          details: ['Weighted Heuristic Matrix', 'Confidence Calibration', 'Explainable Evidence Dossier'],
        },
      ],
    },
    visualForensics: {
      tag: '[DECONSTRUCTION]',
      title: 'VISUAL FORENSICS',
      subtitle: 'Interactive topological overlay engine. We visually dismantle website layouts into geometric bounding boxes, detecting generative symmetry and template archetypes.',
      dissectorTag: 'TOPOLOGICAL_DISSECTOR_v2',
      layerModes: 'LAYER MODES:',
      modeComposite: '[COMPOSITE]',
      modeBoundingBoxes: '[BOUNDING BOXES]',
      modeTopologyMesh: '[TOPOLOGY MESH]',
      summaryTag: '[TOPOLOGICAL SCAN SUMMARY]',
      summaryTitle: 'Geometric Symmetry: 91/100',
      summaryDesc: 'Hover over the highlighted bounding boxes on the left to inspect structural patterns and spatial invariants.',
      markers: [
        {
          id: 'box-nav',
          tag: '01 / NAV',
          label: 'CANONICAL_PILL_NAV',
          finding: 'Standard centered pill navigation with logo-left, 4 links, and right CTA button (94% prompt conformity).',
        },
        {
          id: 'box-hero',
          tag: '02 / HERO',
          label: 'GRADIENT_HEADLINE_CONTAINER',
          finding: 'Over-sized gradient typography (h1) paired with glowing radial spotlight background and centered input.',
        },
        {
          id: 'box-cta',
          tag: '03 / CTA',
          label: 'ACCENT_PILL_ACTION',
          finding: 'High-contrast glowing pill action button with standard Lucide arrow icon.',
        },
        {
          id: 'box-grid',
          tag: '04 / GRID',
          label: '3_COLUMN_BENTO_MATRIX',
          finding: 'Symmetrical 3-card bento box with 24px padding and rounded-2xl corners matching v0 template archetype.',
        },
      ],
    },
    codeForensics: {
      tag: '[SYNTACTIC AUTOPSY]',
      title: 'CODE FORENSICS',
      subtitle: 'Examining lexical naming predictability and AST nesting traits. Compare the stark difference between LLM-generated code and human engineering craft.',
      snippetSynthetic: '[SYNTHETIC PATTERN]',
      snippetArtisanal: '[ARTISANAL CRAFT]',
      cadenceAnalysis: '[CADENCE ANALYSIS]',
      namingConsistency: 'NAMING CONSISTENCY',
      syntheticDesc: 'Unnaturally rigid class prefix hierarchy (.hero-*)',
      artisanalDesc: 'Idiosyncratic modular architecture with bespoke entropy',
      astVarianceLabel: 'AST Depth Variance:',
      astVarianceValSynthetic: '0.04 (Uniform)',
      astVarianceValArtisanal: '0.78 (Dynamic)',
      copyScoreLabel: 'Copywriting Idiom Score:',
      copyScoreValSynthetic: '92% Synthetic',
      copyScoreValArtisanal: '5% Human',
      originLabel: 'Likely Origin:',
      originValSynthetic: 'GPT-4o / v0 / Cursor',
      originValArtisanal: 'Human Software Engineer',
    },
    lab: {
      tag: '[DISPATCHES & ESSAYS]',
      title: 'FROM THE LAB',
      subtitle: 'Investigative journalism and technical essays probing the evolving aesthetics, linguistics, and code genetics of the machine-assisted web.',
      readEssay: 'READ ESSAY',
      closeEssay: 'CLOSE ESSAY',
      labDispatchTag: 'THISAI? FORENSIC LABORATORY',
      articles: [
        {
          id: 'art-01',
          issue: 'ISSUE 04 // ESSAY',
          date: '14 AUG 2026',
          readTime: '6 MIN READ',
          title: 'Why AI-Generated Websites Look So Eerily Similar',
          excerpt: 'An investigative autopsy into the latent space of LLM web scaffolds. How prompt conditioning created the modern monoculture of dark bento grids, rounded-2xl cards, and identical marketing vocabulary.',
          author: 'Forensics Lab Dispatch',
          category: 'Visual Topology',
          content: [
            'Over the past 24 months, the public web has experienced an unprecedented convergence in aesthetic topology. Where human web design was historically characterized by friction, idiosyncratic CSS hacks, and browser-specific quirks, AI-assisted frontend generation has introduced a sterile, mathematically balanced uniformity.',
            'When an LLM is asked to create a modern SaaS landing page, it pulls from millions of training tokens heavily weighted towards Tailwind documentation examples, popular GitHub boilerplates, and standardized component registries. The result is a repeating pattern: 3-column feature grids, 64px padding-y, radial glow backgrounds in #6366f1 or #10b981, and pill-shaped badges.',
            'Our crawler analyzed 14,000 newly registered domains in Q2 2026. Over 71% of websites displaying AI signal scores above 75 shared identical DOM node tree depths (average depth 6.2 ± 0.3) and identical lexical class prefixes.'
          ]
        },
        {
          id: 'art-02',
          issue: 'ISSUE 03 // TECHNICAL AUDIT',
          date: '02 AUG 2026',
          readTime: '8 MIN READ',
          title: 'Can You Actually Detect AI-Written Code in Production?',
          excerpt: 'Dissecting AST signatures, comment frequencies, and token entropy in minified production bundles to trace generative origins.',
          author: 'Dr. V. Aris (Senior Forensics Analyst)',
          category: 'Code Genetics',
          content: [
            'A common misconception is that minification and bundlers erase all evidence of AI authorship. While variable names are mangled, structural topology, cyclomatic complexity patterns, and library dependency graphs remain strikingly intact.',
            'AI coding assistants have measurable habits: they over-encapsulate simple UI components into redundant wrapper <div> tags, generate hyper-defensive optional chaining operators (?.), and produce perfectly uniform function argument schemas.',
            'By comparing the AST entropy of production JavaScript with calibrated baselines of human git repositories, we can calculate a high-confidence generative probability score without needing access to private server repositories.'
          ]
        },
        {
          id: 'art-03',
          issue: 'ISSUE 02 // LEXICAL FORENSICS',
          date: '18 JUL 2026',
          readTime: '5 MIN READ',
          title: 'The Anatomy of an LLM Landing Page: 12 Recurring Tropes',
          excerpt: 'From "Unlock the power of" to floating badge metrics—a forensic catalog of the lexical and structural tropes generated by frontier models.',
          author: 'Forensics Lab Dispatch',
          category: 'Linguistic Analysis',
          content: [
            'Language models have a distinct tonal signature when generating marketing copy. Words like "Seamless", "Supercharge", "Effortless", "Next-Gen", and "Revolutionize" appear with 8.4x higher statistical frequency in AI-generated sites compared to human-authored corporate pages.',
            'Furthermore, the sentence structure follows a strict formula: Verb + Adjective + Noun + "designed to" + Verb Phrase. Once you learn to spot the cadence, it becomes impossible to unsee.'
          ]
        },
        {
          id: 'art-04',
          issue: 'ISSUE 01 // CRITIQUE',
          date: '05 JUL 2026',
          readTime: '7 MIN READ',
          title: 'Synthetic CSS: How Prompt Engineering Shapes the Modern Web',
          excerpt: 'When developers stop writing stylesheets by hand, the browser becomes a rendering engine for statistical probabilities.',
          author: 'Marcus Vance',
          category: 'Aesthetics & Culture',
          content: [
            'Handcrafted CSS is full of happy accidents, micro-asymmetries, and cultural references. Synthetic CSS, in contrast, is an optimization problem solved by backpropagation. It favors safe utility combinations over experimental layout geometry.',
            'ThisAI? was founded not to condemn automated tools, but to map the changing topography of digital craft and preserve critical literacy in an era of automated synthesis.'
          ]
        }
      ]
    },
    scanner: {
      tag: '[REALTIME_FORENSIC_SCANNER]',
      sandboxTag: 'ISOLATED SANDBOX',
      targetTag: 'TARGET IN PROCESS',
      completed: '[COMPLETED]',
      processing: 'PROCESSING...',
      queued: 'QUEUED',
      safeguard: 'SAFEGUARD: SSRF_SHIELD_ENABLED',
      stages: [
        { id: 1, name: 'CRAWLING', desc: 'Handshaking public surface & rendering DOM via Playwright headless engine' },
        { id: 2, name: 'READING', desc: 'Parsing stylesheet cascades, Tailwind token density & AST class hierarchy' },
        { id: 3, name: 'OBSERVING', desc: 'Extracting visual bounding boxes, bento symmetry & spatial invariants' },
        { id: 4, name: 'COMPARING', desc: 'Cross-referencing against calibrated database of LLM scaffold fingerprints' },
        { id: 5, name: 'SCORING', desc: 'Aggregating weighted multi-vector evidence matrix & compiling forensic dossier' },
      ],
    },
    report: {
      returnHome: '[RETURN TO HOMEPAGE]',
      sealedDossier: 'STATUS: SEALED_FORENSIC_DOSSIER',
      calibratedAccuracy: 'ACCURACY: CALIBRATED',
      aiSignalScore: 'AI SIGNAL SCORE',
      vectorsTag: '[VECTORS]',
      breakdownTitle: 'FORENSIC BREAKDOWN',
      confidenceRating: 'CONFIDENCE RATING:',
      confidenceExplanation: 'The score is computed from observable public engineering signals. It is an algorithmic estimation of AI-assisted generation, not absolute legal proof of origin.',
      detectedTechTag: '[DETECTED TECHNOLOGIES]',
      explainabilityTag: '[EXPLAINABILITY]',
      evidenceExplorerTitle: 'EVIDENCE EXPLORER',
      syntheticSignal: 'SYNTHETIC SIGNAL',
      artisanalSignal: 'ARTISANAL SIGNAL',
      ethicalDisclaimerTitle: 'Ethical Transparency:',
      ethicalDisclaimerText: 'ThisAI? identifies architectural patterns associated with AI-assisted development. It cannot definitively determine whether AI was used to build a website.',
      verdicts: {
        high: 'HIGH AI SIGNALS DETECTED',
        moderate: 'LIKELY AI-ASSISTED',
        low: 'LOW AI SIGNALS',
      },
      vectors: [
        { key: 'code', label: 'CODE FORENSICS', desc: 'AST cyclomatic depth & indentation regularity' },
        { key: 'naming', label: 'NAMING CADENCE', desc: 'BEM predictability & Tailwind utility token chains' },
        { key: 'structure', label: 'STRUCTURE & AST', desc: 'DOM tree invariants & wrapper encapsulation ratios' },
        { key: 'visual', label: 'VISUAL TOPOLOGY', desc: 'Bento box symmetry & standard 3-tier card spacing' },
        { key: 'content', label: 'SYNTHETIC COPYWRITING', desc: 'LLM marketing idiom clustering & syntactic tropes' },
      ],
    },
    methodologyModal: {
      sopTag: '[STANDARD OPERATING PROCEDURE]',
      title: 'METHODOLOGY & ETHICS',
      versionTag: 'VERSION 2.4 // REVISED AUGUST 2026 // PEER-REVIEWED FORENSIC FRAMEWORK',
      sec1Title: '1. Non-Binary Probabilistic Philosophy',
      sec1Text: 'ThisAI? does not render binary absolute verdicts. Software development in 2026 exists on a continuous spectrum between purely artisanal craftsmanship and full automated generative synthesis. We compute an explainable probability index based on observable architectural artifacts.',
      sec2Title: '2. The 6 Forensic Measurement Vectors',
      sec3Title: '3. Safe Harbor, Security & Privacy',
      sec3Text: 'Our crawler strictly respects robots.txt directives, blocks private IP and intranet ranges to prevent SSRF vulnerabilities, imposes strict rate limits, and inspects only publicly exposed DOM structures without performing intrusive security tests or penetration attempts.',
      dismissButton: 'UNDERSTOOD & DISMISS',
    },
    footer: {
      subtitle: 'DIGITAL FORENSICS',
      tagline: 'Investigate the web.',
      indexTag: '[INDEX]',
      legalTag: '[LEGAL & ETHICS]',
      legalText: 'ThisAI? is an independent forensic observatory. All analyses are based on public HTML, CSS, and DOM topology.',
      copyright: '© 2026 THISAI? INVESTIGATIVE LAB. ALL RIGHTS RESERVED.',
      privacy: 'Privacy & Data Ethics',
    },
    cursor: {
      examine: 'EXAMINE',
      investigate: 'INVESTIGATE',
      read: 'READ',
      inspect: 'INSPECT',
      select: 'SELECT',
      close: 'CLOSE',
    },
  },
};
