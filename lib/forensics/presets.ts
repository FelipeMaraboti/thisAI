import { InvestigationResult, InvestigationPreset } from './types';

export const FEATURED_INVESTIGATIONS: InvestigationPreset[] = [
  {
    domain: 'stellar-studio.design',
    url: 'https://stellar-studio.design',
    title: 'THE SYNTHETIC BOUTIQUE',
    issueNumber: '#001284',
    result: {
      id: 'INV-001284',
      targetUrl: 'https://stellar-studio.design',
      domain: 'stellar-studio.design',
      timestampUtc: '14 AUG 2026 14:32:01 UTC',
      overallScore: 84,
      verdict: 'HIGH AI SIGNALS DETECTED',
      confidence: 'HIGH',
      summary: 'Extreme convergence of canonical AI frontend tropes: rigid 3-tier card symmetry, programmatic BEM classes, and textbook prompt copywriting ("supercharge your digital craft").',
      vectors: {
        code: 86,
        naming: 89,
        structure: 88,
        visual: 82,
        content: 75,
      },
      evidences: [
        {
          id: 'ev-1',
          points: 16,
          category: 'NAMING',
          title: 'Unnaturally Canonical BEM Hierarchy',
          description: 'Class hierarchy follows textbook prompt generation patterns with 100% lexical symmetry across all nested blocks.',
          codeSnippet: '.hero-section\n  .hero-container\n    .hero-content\n      .hero-badge\n      .hero-title\n      .hero-description\n      .hero-cta-group',
          isPositive: true,
        },
        {
          id: 'ev-2',
          points: 14,
          category: 'STRUCTURE',
          title: 'Repetitive DOM Depth Invariant',
          description: 'Identical 6-level AST depth repeated across 12 distinct section components with zero idiosyncratic variance.',
          codeSnippet: '<div class="grid grid-cols-1 md:grid-cols-3 gap-8">\n  <div class="card p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between">\n    <!-- 3 identical sibling AST subtrees -->\n  </div>\n</div>',
          isPositive: true,
        },
        {
          id: 'ev-3',
          points: 12,
          category: 'CONTENT',
          title: 'High-Density LLM Copywriting Vocabulary',
          description: 'Recurring buzzword clusters characteristic of GPT-4o marketing prompt outputs without human colloquialism.',
          codeSnippet: '"Effortlessly orchestrate next-generation workflows with intuitive, bleeding-edge simplicity designed for tomorrow."',
          isPositive: true,
        },
        {
          id: 'ev-4',
          points: -4,
          category: 'CODE',
          title: 'Custom Shader Canvas Detected',
          description: 'Inclusion of hand-tweaked Three.js GLSL vertex shaders indicative of manual developer intervention.',
          codeSnippet: 'const customMaterial = new THREE.ShaderMaterial({ vertexShader: customNoiseShader, fragmentShader: grainFrag });',
          isPositive: false,
        }
      ],
      technologies: [
        { name: 'Next.js 14 (App Router)', category: 'Framework', confidence: 98, aiAffinity: 'HIGH' },
        { name: 'Tailwind CSS v3.4', category: 'Styling', confidence: 99, aiAffinity: 'HIGH' },
        { name: 'Lucide Icons', category: 'Iconography', confidence: 95, aiAffinity: 'HIGH' },
        { name: 'Vercel Analytics', category: 'Hosting', confidence: 94, aiAffinity: 'NEUTRAL' },
        { name: 'Three.js / WebGL', category: 'Graphics', confidence: 82, aiAffinity: 'LOW' },
      ],
      visualMarkers: [
        { id: 'vm-1', label: 'NAV_CANONICAL', x: 8, y: 3, w: 84, h: 6, finding: 'Centered pill bar with generic [Features, Pricing, About, CTA]' },
        { id: 'vm-2', label: 'HERO_TROPE_A', x: 12, y: 15, w: 76, h: 28, finding: 'Over-sized gradient text + glowing radial background' },
        { id: 'vm-3', label: 'BENTO_GRID_3X3', x: 8, y: 48, w: 84, h: 36, finding: 'Mathematically exact 3x3 bento box with uniform border radius' },
      ],
      scannedNodesCount: 1420,
      totalLinesScanned: 3840,
      entropyScore: 0.28,
    }
  },
  {
    domain: 'modern-wealth.io',
    url: 'https://modern-wealth.io',
    title: 'THE SYNTHETIC FINTECH',
    issueNumber: '#001285',
    result: {
      id: 'INV-001285',
      targetUrl: 'https://modern-wealth.io',
      domain: 'modern-wealth.io',
      timestampUtc: '14 AUG 2026 12:15:44 UTC',
      overallScore: 78,
      verdict: 'HIGH AI SIGNALS DETECTED',
      confidence: 'HIGH',
      summary: 'Classic prompt-engineered fintech presentation: standard dark-mode bento boxes, uncustomized Lucide icons, and zero legacy CSS baggage.',
      vectors: {
        code: 82,
        naming: 76,
        structure: 88,
        visual: 81,
        content: 69,
      },
      evidences: [
        {
          id: 'ev-mw-1',
          points: 15,
          category: 'STRUCTURE',
          title: 'Stock Tailwind Palette Archetype',
          description: 'Complete absence of custom HEX palette overrides; uses stock slate-900 / emerald-500 default token distribution.',
          codeSnippet: 'bg-slate-950 text-slate-50 border-slate-800 hover:border-emerald-500/50 transition-all duration-300',
          isPositive: true,
        },
        {
          id: 'ev-mw-2',
          points: 18,
          category: 'NAMING',
          title: 'AI Boilerplate Component Signature',
          description: 'Identical component naming schema seen in Lovable/v0 generated scaffolds.',
          codeSnippet: '<HeroBadgeWithIcon />\n<MetricStatCard variant="emerald" />\n<FaqAccordionItem question="..." />',
          isPositive: true,
        },
        {
          id: 'ev-mw-3',
          points: -6,
          category: 'CODE',
          title: 'Enterprise Plaid Integration & Webhooks',
          description: 'Custom verified financial API integration wrappers with non-standard error handling boundaries.',
          codeSnippet: 'await plaidClient.linkTokenCreate({ user: { client_user_id: user.id }, products: ["auth", "transactions"] });',
          isPositive: false,
        }
      ],
      technologies: [
        { name: 'Vite + React 18', category: 'Framework', confidence: 96, aiAffinity: 'HIGH' },
        { name: 'Tailwind CSS', category: 'Styling', confidence: 99, aiAffinity: 'HIGH' },
        { name: 'Radix UI Primitives', category: 'UI Components', confidence: 92, aiAffinity: 'HIGH' },
        { name: 'Plaid SDK', category: 'Banking API', confidence: 88, aiAffinity: 'LOW' },
      ],
      visualMarkers: [
        { id: 'vm-mw-1', label: 'FINTECH_HERO_GRID', x: 10, y: 12, w: 80, h: 32, finding: 'Standard isometric dashboard mock floating over 24px grid' },
        { id: 'vm-mw-2', label: '3_TIER_PRICING', x: 8, y: 52, w: 84, h: 38, finding: 'Popular plan highlighted with default emerald ring-2 badge' },
      ],
      scannedNodesCount: 1890,
      totalLinesScanned: 4210,
      entropyScore: 0.32,
    }
  },
  {
    domain: 'linear.app',
    url: 'https://linear.app',
    title: 'THE BESPOKE ARTIFACT',
    issueNumber: '#001286',
    result: {
      id: 'INV-001286',
      targetUrl: 'https://linear.app',
      domain: 'linear.app',
      timestampUtc: '14 AUG 2026 10:04:18 UTC',
      overallScore: 18,
      verdict: 'LOW AI SIGNALS',
      confidence: 'DEFINITIVE_CADENCE',
      summary: 'Deeply bespoke craft detected: hand-calibrated cubic bezier easings, proprietary layout algorithms, high lexical entropy and deeply artisanal micro-typography.',
      vectors: {
        code: 14,
        naming: 12,
        structure: 22,
        visual: 24,
        content: 18,
      },
      evidences: [
        {
          id: 'ev-lin-1',
          points: -24,
          category: 'VISUAL',
          title: 'Artisanal Dynamic Keyboard Navigation Engine',
          description: 'Extensive custom hotkey router and bespoke focus trap management that surpasses all known AI scaffold generators.',
          codeSnippet: 'window.__LINEAR_HOTKEY_DISPATCHER__.registerSequence(["g", "i"], () => navigateToInbox());',
          isPositive: false,
        },
        {
          id: 'ev-lin-2',
          points: -18,
          category: 'CODE',
          title: 'Idiosyncratic CSS Architecture & PostCSS Modules',
          description: 'High-entropy class names generated by customized PostCSS pipeline with proprietary color variable systems.',
          codeSnippet: '.Header_root__kX92s { --header-bg: color-mix(in srgb, var(--color-bg-base) 80%, transparent); }',
          isPositive: false,
        },
        {
          id: 'ev-lin-3',
          points: -15,
          category: 'CONTENT',
          title: 'Opinionated Product Methodology & Tone',
          description: 'Bespoke copywriting reflecting proprietary engineering culture without generic buzzwords.',
          codeSnippet: '"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how."',
          isPositive: false,
        }
      ],
      technologies: [
        { name: 'Custom React Monorepo', category: 'Architecture', confidence: 99, aiAffinity: 'LOW' },
        { name: 'PostCSS Modules', category: 'Styling', confidence: 97, aiAffinity: 'LOW' },
        { name: 'WebAssembly (WASM)', category: 'Compute', confidence: 91, aiAffinity: 'LOW' },
        { name: 'GraphQL Subscriptions', category: 'Networking', confidence: 95, aiAffinity: 'LOW' },
      ],
      visualMarkers: [
        { id: 'vm-lin-1', label: 'BESPOKE_KEY_TRAY', x: 15, y: 8, w: 70, h: 10, finding: 'Custom keyboard shortcut navigation bar' },
        { id: 'vm-lin-2', label: 'PIXEL_PERFECT_TIMELINE', x: 5, y: 35, w: 90, h: 45, finding: 'Proprietary high-performance virtualized canvas chart' },
      ],
      scannedNodesCount: 5400,
      totalLinesScanned: 18450,
      entropyScore: 0.89,
    }
  }
];

export const LAB_ARTICLES = [
  {
    id: 'art-01',
    issue: 'ISSUE 04 // ESSAY',
    date: '14 AUG 2026',
    readTime: '6 MIN READ',
    title: 'Why AI-Generated Websites Look So Eerily Similar',
    slug: 'why-ai-websites-look-similar',
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
    slug: 'detecting-ai-code-production',
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
    slug: 'anatomy-of-ai-landing-page',
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
    slug: 'synthetic-css-modern-web',
    excerpt: 'When developers stop writing stylesheets by hand, the browser becomes a rendering engine for statistical probabilities.',
    author: 'Marcus Vance',
    category: 'Aesthetics & Culture',
    content: [
      'Handcrafted CSS is full of happy accidents, micro-asymmetries, and cultural references. Synthetic CSS, in contrast, is an optimization problem solved by backpropagation. It favors safe utility combinations over experimental layout geometry.',
      'ThisAI? was founded not to condemn automated tools, but to map the changing topography of digital craft and preserve critical literacy in an era of automated synthesis.'
    ]
  }
];
