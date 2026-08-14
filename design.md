# ThisAI? — Design System & Especificação de Arquitetura

> **Brand Identity & Investigative Digital Forensics Platform**  
> *"Diz aí, foi feito com IA?"*

---

## 1. Conceito & Posicionamento da Marca

**ThisAI?** é uma publicação e plataforma de inteligência forense digital que analisa superfícies públicas de websites para identificar **sinais e padrões compatíveis com desenvolvimento assistido por Inteligência Artificial**.

### 1.1 O Trocadilho & Filosofia
* **Inglês**: *This AI?* (Isto é IA?)
* **Português (Brasil)**: *Diz aí?* (Expressão coloquial brasileira de curiosidade e provocação investigativa)
* **Atmosfera**: Jornalismo investigativo técnico, revista editorial suíça, laboratório de computação visual e ciber-forense refinada.
* **Princípio Ético Fundamental**: O sistema **não declara autoria binária absoluta** ("Este site FOI feito por IA"). Ele quantifica e expõe **vetores de evidência probatória**, rotulando como *High AI Signals Detected* ou *Likely AI-Assisted*.

### 1.2 Anti-Padrões Proibidos (O que NÃO ser)
* ❌ Aparência de SaaS genérico ou template Tailwind/shadcn.
* ❌ Gradientes roxos/azuis neon ou "AI glow" genérico.
* ❌ Hero centralizado com botão gigante redondo e blur excessivo.
* ❌ Cards convencionais flutuantes com sombras pesadas.
* ❌ Ícones clichês de IA (robôs, cérebros, circuitos, varinhas mágicas).
* ❌ Gauges circulares coloridos comuns de dashboard.

---

## 2. Direção Visual & Estética

**Estilo:** *Dark Editorial + Investigative Technology (Swiss Forensics)*

* **Grid & Layout**: Composição assimétrica editorial, diagramação modular rígida com linhas estruturais finas de precisão (`1px solid #1f1f1f` / `#262624`), amplas áreas de respiro, blocos tipográficos de grande escala contrastando com metadados microscópicos.
* **Profundidade**: Não baseada em sombras ou blur, mas em **sobreposição de camadas editoriais, parallax em multi-velocidade e tipografia cinética**.
* **Texturas**: Micro-ruído analógico sutil opcional, wireframes e reticulados técnicos de coordenadas `[X, Y, W, H]`.

---

## 3. Paleta Cromática & Design Tokens

A paleta é severamente contida, escura e densa, com **um único tom de acento ácido** utilizado com extrema parcimônia e rigor técnico.

```css
:root {
  /* Bases de Fundo */
  --bg-primary: #080808;       /* Fundo principal ultra-profundo */
  --bg-surface: #0D0D0D;       /* Superfície de cartuchos e blocos */
  --bg-subtle: #141414;        /* Destaque sutil de blocos / inputs */
  --bg-elevated: #1A1A1A;      /* Tooltips e cursores customizados */

  /* Linhas e Contornos Técnicos */
  --border-hairline: #1F1F1E;  /* Linhas divisórias estruturais */
  --border-focus: #3A3A36;     /* Linhas ativas */

  /* Tipografia */
  --text-headline: #F2F0EA;    /* Branco quente editorial / osso */
  --text-body: #B7B5AE;        /* Cinza pergaminho de leitura */
  --text-muted: #77746E;       /* Metadados e legendas técnicas */
  --text-dim: #454440;         /* Números desativados e grid marks */

  /* Cor de Acento (Ácido Forense - Uso Restrito) */
  --accent-acid: #D7FF3F;       /* Verde-amarelo ácido elétrico */
  --accent-acid-dim: rgba(215, 255, 63, 0.15);
  --accent-acid-ghost: rgba(215, 255, 63, 0.05);

  /* Vetores de Sinal (Severidade) */
  --signal-high: #D7FF3F;      /* Alto sinal detectado */
  --signal-neutral: #B7B5AE;   /* Neutro / inconclusivo */
  --signal-organic: #68826F;   /* Padrão orgânico / artesanal */
}
```

---

## 4. Tipografia & Escala Editorial

A força do design reside na tensão tipográfica entre três famílias:

| Função | Família Sugerida | Estilo / Peso | Aplicação |
| :--- | :--- | :--- | :--- |
| **Headlines** | *Bricolage Grotesque* / *Syne* / *Playfair* / *Editorial Serif* | ExtraBold / Condensed / Display | Títulos impactantes, numeração gigante de capa, "Is this AI?" |
| **Body / Leitura** | *Plus Jakarta Sans* / *Inter* / *Hanken Grotesk* | Regular (400), Medium (500) | Artigos do Lab, explicações narrativas, descrições de evidências |
| **Metadata / Forensics** | *JetBrains Mono* / *Space Mono* | Mono 400, Mono 700 (Uppercase) | Scores, URLs, tags técnicas, timestamps, diffs de código, coordenadas |

### 4.1 Wordmark & Identidade
```
ThisAI?
```
* **"This"**: Peso Regular / Medium (`#F2F0EA`)
* **"AI"**: Peso Black / Bold (`#D7FF3F` ou `#F2F0EA` destacado)
* **"?"**: Glifo especial acentuado, elemento gráfico que funciona como mirador investigativo.

---

## 5. Arquitetura da Interface & Seções da Home

### 5.1 Hero Forense Assimétrico & Ticker 4-Slot em Tempo Real
* **Cabeçalho**: Wordmark `ThisAI?`, navegação compacta em mono (`[ABOUT]`, `[METHODOLOGY]`, `[THE LAB]`), status do crawler (`SYSTEM READY / FORENSICS 2026`).
* **Composição Editorial**:
  * Tag superior: `DIGITAL FORENSICS / 2026 // ISSUE #01`
  * Título monumental quebrado assimetricamente:
    ```
    Is this
    AI?
    ```
  * Declaração de intenção: `"Enter a website URL. We dissect source code, topology, naming cadence and layout genetics to estimate machine origin."`
  * Input de URL integrado: Linha técnica horizontal pura com cursor piscante, botão de ação estético `INVESTIGATE [→]`.
* **Micro-feed em tempo real (4 Slots FIFO Seguro)**: Fila circular restrita a estritamente 4 itens. Quando um novo escaneamento é concluído, o item mais antigo (o 4º) é automaticamente descartado e o novo entra na posição `01` com animação de destaque, sanitização estrita de domínio contra XSS/injeção e validação anti-SSRF.

### 5.2 Latest Investigations (Capa de Revista)
* Grid assimétrico 3 colunas / 2 linhas irregulares.
* Cada item exibe:
  * Número monumental (ex: `01`, `02`, `03`)
  * Domínio e Timestamp UTC
  * Screenshot wireframe técnico com marcações sobrepostas
  * Score tipográfico (`84 AI SIGNAL`) e etiqueta de vetor primário (`VETOR: REPETITIVE DOM NODES`).

### 5.3 Seção Conceitual: "We Don't Guess. We Investigate."
* Pinning via **GSAP ScrollTrigger**.
* 6 Pilares técnicos revelados dinamicamente via horizontal slide ou vertical stagger reveal:
  1. `CODE` (Identação, comentários sintetizados, boilerplates)
  2. `NAMING` (BEM excessivamente canônico, semântica previsível)
  3. `STRUCTURE` (Profundidade de árvore DOM invariante, repetição de flex/grid)
  4. `DESIGN` (Paletas não moduladas, proporções padronizadas de hero/cards)
  5. `CONTENT` (Sintaxe de copywriting sintético, densidade frasal)
  6. `TECHNOLOGY` (Assinatura de frameworks, bundlers e bibliotecas comuns em prompts)

### 5.4 How It Works (Narrativa Vertical em 4 Atos)
1. `01 / CRAWL` — Raspagem e renderização headless via Playwright.
2. `02 / DECODE` — Análise de AST (Abstract Syntax Tree), tokens de CSS e classes.
3. `03 / OBSERVE` — Análise de densidade de layout, mapa de calor e micro-espaçamentos.
4. `04 / SCORE` — Agregação ponderada em matriz probatória com pontuação de 0 a 100.

### 5.5 Visual Forensics (Dissecação Gráfica)
* Mockup interativo em alta fidelidade com camadas transparentes:
  * Camada 0: Renderização visual real.
  * Camada 1: Reticulado de bounding boxes `[NAV]`, `[HERO]`, `[CTA]`, `[GRID]`.
  * Camada 2: Vetores conectores e métricas de simetria matemática gerada.

### 5.6 Code Forensics (Anatomia Sintática)
* Bloco editorial de código com numeração de linhas customizada, mostrando padrões sintéticos versus código artesanal, com métricas de consistência de nomenclatura (`87/100`).

### 5.7 The Lab (Artigos e Publicações Investigativas)
* Matérias com estética de jornal tecnológico:
  * *"Why AI-generated websites look so eerily similar"*
  * *"Can you actually detect AI-written code in production?"*
  * *"The anatomy of an LLM landing page: 12 recurring tropes"*
  * *"Synthetic CSS: How prompt engineering shapes the modern web"*

### 5.8 Rodapé Minimalista
* Wordmark, copyright `© 2026 THISAI? LAB`, manifesto de ética forense, links metodológicos e link para documentação técnica de API.

---

## 6. Experiência de Análise & Relatório de Investigação

### 6.1 Estado de Carregamento Cinematográfico (Scanner)
Quando uma URL é enviada, a tela se transforma em um terminal de escaneamento em tempo real animado via GSAP:
```
[SCANNING: target-website.com]
├─ 01/05 CRAWLING PUBLIC SURFACE ........... [DONE]
├─ 02/05 PARSING DOM & TAILWIND CADENCE .... [DONE]
├─ 03/05 COMPUTING TOPOLOGICAL ASYMMETRY ... [RUNNING]
├─ 04/05 RUNNING HEURISTIC COMPARATORS ..... [PENDING]
└─ 05/05 GENERATING FORENSIC MATRIX ........ [PENDING]
```

### 6.2 Relatório Forense (`/investigation/[id]`)
* **Header do Laudo**: ID único da investigação (`#001284`), timestamp UTC, domínio e screenshot com overlay de coordenadas.
* **Score Primário**: Dígito monumental em destaque (`78`), acompanhado da insígnia `HIGH AI SIGNAL DETECTED`.
* **Vetores de Evidência com Barras Minimalistas**:
  * `CODE FORENSICS` (82%)
  * `NAMING CADENCE` (76%)
  * `STRUCTURE & AST` (88%)
  * `VISUAL ARCHITECTURE` (81%)
  * `SYNTHETIC COPYWRITING` (69%)
* **Evidence Explorer (Positivos & Negativos)**:
  * `+14 pts` | *Padrão de nomenclatura ultraconsistente estilo assistente*
  * `+16 pts` | *Estrutura de 3 colunas e badges característicos de templates gerados*
  * `-08 pts` | *Scripts proprietários legados e irregularidades manuais detectadas*
* **Stack Tecnológico Detectado**: Exibido em tipografia mono elegante.
* **Nível de Confiança & Isenção Ética**: Selo de confiança estatística com nota explicativa metodológica.

---

## 7. Interatividade, Animações e GSAP

* **Custom Cursor**: Mirador técnico circular com texto de estado dinâmico (`[INVESTIGATE]`, `[INSPECT]`, `[READ]`, `[DISSECT]`).
* **Text Reveal Staggers**: Títulos revelados por palavras / linhas com `clip-path` e pequenos deslocamentos em Y com curvas `power3.out`.
* **Parallax de Multi-Camadas**: Coordenadas e marcações técnicas deslizam com atrito e velocidades diferenciadas durante o scroll.
* **Microinterações Sonoras / Hápticas Visuais**: Flash discreto de acento ácido ao clicar em nós de evidência.
* **Modo Redução de Movimento**: Suporte completo a `prefers-reduced-motion: reduce`.

---

## 8. Arquitetura do Sistema & Pipeline Forense

```
   [ User Interface / Next.js Client ]
                    │
                    ▼ POST /api/investigate
   [ Investigation Orchestrator / API Route ]
                    │
           ┌────────┴────────┐
           ▼                 ▼
   [ Cache / DB ]    [ Crawler Queue ]
   (PostgreSQL)              │
                             ▼
                    [ Playwright Engine ]
                    ├─ HTML & CSS Scrape
                    ├─ DOM Tree Snapshot
                    ├─ High-Res Viewport Screenshot
                    └─ Network & Asset Manifest
                             │
                             ▼
              [ Modular Heuristic Analyzers ]
    ┌────────────────┬────────────────┬────────────────┐
    │ Code & Naming  │ Structural DOM │ Visual Topology│
    │ AST Cadence    │ Depth & Flex   │ Symmetry & Gaps│
    └────────────────┴────────────────┴────────────────┘
    ┌────────────────┬────────────────┬────────────────┐
    │ Synthetic Copy │ Asset / Prompt │ Tech Detector  │
    │ Entropy & Flow │ Patterns       │ CDN & Libs     │
    └────────────────┴────────────────┴────────────────┘
                             │
                             ▼
                    [ Scoring Engine ]
                    (Weighted Multi-Vector Matrix)
                             │
                             ▼
               [ Report Generator & Storage ]
```

---

## 9. Segurança & Proteção do Crawler

1. **Proteção Rigorosa Anti-SSRF**:
   * Validação de esquema (`http://` ou `https://` estritamente).
   * Resolução prévia de DNS para bloquear:
     * `localhost`, `127.0.0.1`, `::1`
     * Faixas de IP privadas RFC 1918 (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`)
     * Link-local e metadados de nuvem (`169.254.169.254`, `fc00::/7`).
2. **Rate Limiting & DoS Mitigation**:
   * Limite por IP de origem via token bucket / in-memory rate limiter.
   * Timeout de crawling estrito (máximo 12s por requisição).
   * Limite de tamanho de resposta HTTP (máximo 8MB) e descarte de recursos de mídia pesada desnecessários (vídeos, downloads de binários).
3. **Isolamento de Sandbox**:
   * Instâncias de Playwright em contexto isolado e descartável (`incognito context`), com execução restrita de scripts invasivos.
