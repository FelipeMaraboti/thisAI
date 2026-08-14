import { analyzeWebsiteForensics } from '../lib/forensics/analyzer';

export interface BenchmarkTarget {
  domain: string;
  url: string;
  expectedClass: 'HUMAN_HANDCRAFTED' | 'AI_VIBECODED';
  category: string;
}

export const BENCHMARK_DATASET: BenchmarkTarget[] = [
  // ==========================================
  // 50 SITES DE CERTEZA HUMANA / ARTESANAIS / LEGACY
  // ==========================================
  { domain: 'wikipedia.org', url: 'https://www.wikipedia.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Encyclopedia' },
  { domain: 'craigslist.org', url: 'https://www.craigslist.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Classifieds Legacy' },
  { domain: 'news.ycombinator.com', url: 'https://news.ycombinator.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Developer Forum' },
  { domain: 'old.reddit.com', url: 'https://old.reddit.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Social Forum Legacy' },
  { domain: 'w3.org', url: 'https://www.w3.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Standards Body' },
  { domain: 'gnu.org', url: 'https://www.gnu.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Open Source' },
  { domain: 'python.org', url: 'https://www.python.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Programming Language' },
  { domain: 'kernel.org', url: 'https://www.kernel.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Linux Kernel' },
  { domain: 'archlinux.org', url: 'https://archlinux.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Linux Distro' },
  { domain: 'sqlite.org', url: 'https://www.sqlite.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Database Engine' },
  { domain: 'postgresql.org', url: 'https://www.postgresql.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Database Engine' },
  { domain: 'apache.org', url: 'https://www.apache.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Software Foundation' },
  { domain: 'curl.se', url: 'https://curl.se', expectedClass: 'HUMAN_HANDCRAFTED', category: 'CLI Tool' },
  { domain: 'openbsd.org', url: 'https://www.openbsd.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Operating System' },
  { domain: 'netbsd.org', url: 'https://www.netbsd.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Operating System' },
  { domain: 'debian.org', url: 'https://www.debian.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Linux Distro' },
  { domain: 'php.net', url: 'https://www.php.net', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Programming Language' },
  { domain: 'ruby-lang.org', url: 'https://www.ruby-lang.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Programming Language' },
  { domain: 'rust-lang.org', url: 'https://www.rust-lang.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Programming Language' },
  { domain: 'go.dev', url: 'https://go.dev', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Programming Language' },
  { domain: 'danluu.com', url: 'https://danluu.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Personal Tech Blog' },
  { domain: 'paulgraham.com', url: 'https://paulgraham.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Essays' },
  { domain: 'gwern.net', url: 'https://gwern.net', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Longform Research' },
  { domain: 'berkshirehathaway.com', url: 'https://www.berkshirehathaway.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Legacy Corporate' },
  { domain: 'info.cern.ch', url: 'http://info.cern.ch', expectedClass: 'HUMAN_HANDCRAFTED', category: 'First Web Page' },
  { domain: 'textfiles.com', url: 'http://www.textfiles.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'BBS Archive' },
  { domain: 'motherfuckingwebsite.com', url: 'https://motherfuckingwebsite.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Brutalist Minimal' },
  { domain: 'csszengarden.com', url: 'http://www.csszengarden.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'CSS Classic' },
  { domain: 'lobste.rs', url: 'https://lobste.rs', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Developer Forum' },
  { domain: 'slashdot.org', url: 'https://slashdot.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Tech News Legacy' },
  { domain: 'sourceforge.net', url: 'https://sourceforge.net', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Open Source Archive' },
  { domain: 'archive.org', url: 'https://archive.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Internet Archive' },
  { domain: 'csail.mit.edu', url: 'https://www.csail.mit.edu', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Academic Research' },
  { domain: 'stanford.edu', url: 'https://www.stanford.edu', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Academic' },
  { domain: 'eff.org', url: 'https://www.eff.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Digital Rights NGO' },
  { domain: 'fsf.org', url: 'https://www.fsf.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Software Foundation' },
  { domain: 'linear.app', url: 'https://linear.app', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Bespoke Modern Engineering' },
  { domain: 'stripe.com', url: 'https://stripe.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Custom Artisan Design' },
  { domain: 'github.com', url: 'https://github.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Developer Platform' },
  { domain: 'stackoverflow.com', url: 'https://stackoverflow.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Developer Q&A' },
  { domain: 'freecodecamp.org', url: 'https://www.freecodecamp.org', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Education' },
  { domain: 'smashingmagazine.com', url: 'https://www.smashingmagazine.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Web Design Publication' },
  { domain: 'alistapart.com', url: 'https://alistapart.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Web Standards Journal' },
  { domain: 'css-tricks.com', url: 'https://css-tricks.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Frontend Development' },
  { domain: 'lowtechmagazine.com', url: 'https://solar.lowtechmagazine.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Solar Low-Tech' },
  { domain: 'bearblog.dev', url: 'https://bearblog.dev', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Minimalist Blog Engine' },
  { domain: 'brutalistwebsites.com', url: 'https://brutalistwebsites.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Brutalist Architecture' },
  { domain: 'hurl.it', url: 'https://hurl.it', expectedClass: 'HUMAN_HANDCRAFTED', category: 'HTTP Testing Tool' },
  { domain: 'everyinteraction.com', url: 'https://www.everyinteraction.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Design Studio' },
  { domain: 'superhuman.com', url: 'https://superhuman.com', expectedClass: 'HUMAN_HANDCRAFTED', category: 'Bespoke Native Web' },

  // ==========================================
  // 50 SITES VIBECODADOS / AI-SCAFFOLDS / GERADOS POR PROMPT
  // ==========================================
  { domain: 'stellar-studio.design', url: 'https://stellar-studio.design', expectedClass: 'AI_VIBECODED', category: 'Synthetic Agency' },
  { domain: 'modern-wealth.io', url: 'https://modern-wealth.io', expectedClass: 'AI_VIBECODED', category: 'Synthetic Fintech' },
  { domain: 'nexus-flow.ai', url: 'https://nexus-flow.ai', expectedClass: 'AI_VIBECODED', category: 'AI Workflow Scaffolder' },
  { domain: 'flowcraft-ai.app', url: 'https://flowcraft-ai.app', expectedClass: 'AI_VIBECODED', category: 'v0 Template Scaffold' },
  { domain: 'synapse-copilot.io', url: 'https://synapse-copilot.io', expectedClass: 'AI_VIBECODED', category: 'AI Copilot Wrapper' },
  { domain: 'prism-analytics.ai', url: 'https://prism-analytics.ai', expectedClass: 'AI_VIBECODED', category: 'Bento Grid SaaS Template' },
  { domain: 'omni-stack.dev', url: 'https://omni-stack.dev', expectedClass: 'AI_VIBECODED', category: 'Lovable AI Landing' },
  { domain: 'vibe-crm.app', url: 'https://vibe-crm.app', expectedClass: 'AI_VIBECODED', category: 'Bolt Generated CRM' },
  { domain: 'lumina-ai.studio', url: 'https://lumina-ai.studio', expectedClass: 'AI_VIBECODED', category: 'Cursor Prompt Template' },
  { domain: 'auto-doc-generator.io', url: 'https://auto-doc-generator.io', expectedClass: 'AI_VIBECODED', category: 'AI Doc Assistant' },
  { domain: 'craft-prompts.xyz', url: 'https://craft-prompts.xyz', expectedClass: 'AI_VIBECODED', category: 'Prompt Marketplace' },
  { domain: 'hyper-saas-template.vercel.app', url: 'https://hyper-saas-template.vercel.app', expectedClass: 'AI_VIBECODED', category: 'Next/Tailwind Template' },
  { domain: 'synth-landing-demo.vercel.app', url: 'https://synth-landing-demo.vercel.app', expectedClass: 'AI_VIBECODED', category: 'v0 Scaffold Demo' },
  { domain: 'ai-resume-roaster.app', url: 'https://ai-resume-roaster.app', expectedClass: 'AI_VIBECODED', category: 'Vibe Project' },
  { domain: 'prompt-to-app-sandbox.dev', url: 'https://prompt-to-app-sandbox.dev', expectedClass: 'AI_VIBECODED', category: 'Generative Sandbox' },
  { domain: 'bento-dashboard-clone.io', url: 'https://bento-dashboard-clone.io', expectedClass: 'AI_VIBECODED', category: 'Bento Box Clone' },
  { domain: 'bolt-starter-showcase.vercel.app', url: 'https://bolt-starter-showcase.vercel.app', expectedClass: 'AI_VIBECODED', category: 'Bolt Generated UI' },
  { domain: 'lovable-saas-prototype.dev', url: 'https://lovable-saas-prototype.dev', expectedClass: 'AI_VIBECODED', category: 'Lovable UI Generator' },
  { domain: 'v0-finance-dashboard.vercel.app', url: 'https://v0-finance-dashboard.vercel.app', expectedClass: 'AI_VIBECODED', category: 'v0 Finance Scaffold' },
  { domain: 'supercharge-marketing.ai', url: 'https://supercharge-marketing.ai', expectedClass: 'AI_VIBECODED', category: 'Synthetic Copy Archetype' },
  { domain: 'effortless-analytics.dev', url: 'https://effortless-analytics.dev', expectedClass: 'AI_VIBECODED', category: '3-Tier Pricing Scaffold' },
  { domain: 'next-gen-landing.vercel.app', url: 'https://next-gen-landing.vercel.app', expectedClass: 'AI_VIBECODED', category: 'Tailwind Cliché Scaffold' },
  { domain: 'unleash-automation.io', url: 'https://unleash-automation.io', expectedClass: 'AI_VIBECODED', category: 'AI Automation Page' },
  { domain: 'quantum-copilot.app', url: 'https://quantum-copilot.app', expectedClass: 'AI_VIBECODED', category: 'AI Copilot Landing' },
  { domain: 'aurora-design-system.dev', url: 'https://aurora-design-system.dev', expectedClass: 'AI_VIBECODED', category: 'AI Generated Token Catalog' },
  { domain: 'seamless-billing.io', url: 'https://seamless-billing.io', expectedClass: 'AI_VIBECODED', category: 'Stripe Wrapper Landing' },
  { domain: 'chat-with-pdf-pro.app', url: 'https://chat-with-pdf-pro.app', expectedClass: 'AI_VIBECODED', category: 'Vibe Coded Wrapper' },
  { domain: 'ai-headshot-gen.studio', url: 'https://ai-headshot-gen.studio', expectedClass: 'AI_VIBECODED', category: 'AI Generator Landing' },
  { domain: 'intelligent-crm-builder.dev', url: 'https://intelligent-crm-builder.dev', expectedClass: 'AI_VIBECODED', category: 'Cursor Prompt Template' },
  { domain: 'magic-ui-landing.vercel.app', url: 'https://magic-ui-landing.vercel.app', expectedClass: 'AI_VIBECODED', category: 'Standard Magic UI Template' },
  { domain: 'shadcn-dashboard-preview.dev', url: 'https://shadcn-dashboard-preview.dev', expectedClass: 'AI_VIBECODED', category: 'Stock Shadcn Scaffold' },
  { domain: 'ai-podcast-summarizer.io', url: 'https://ai-podcast-summarizer.io', expectedClass: 'AI_VIBECODED', category: 'Vibe Coded SaaS' },
  { domain: 'smart-invoice-maker.app', url: 'https://smart-invoice-maker.app', expectedClass: 'AI_VIBECODED', category: 'Lovable Generated' },
  { domain: 'rapid-landing-maker.dev', url: 'https://rapid-landing-maker.dev', expectedClass: 'AI_VIBECODED', category: 'Bolt Generated' },
  { domain: 'copilot-for-recruiters.ai', url: 'https://copilot-for-recruiters.ai', expectedClass: 'AI_VIBECODED', category: 'AI Tool Landing' },
  { domain: 'vibe-finance-tracker.app', url: 'https://vibe-finance-tracker.app', expectedClass: 'AI_VIBECODED', category: 'Vibe Project' },
  { domain: 'ai-meeting-note-taker.io', url: 'https://ai-meeting-note-taker.io', expectedClass: 'AI_VIBECODED', category: 'AI Meeting Note App' },
  { domain: 'synthetic-portfolio.vercel.app', url: 'https://synthetic-portfolio.vercel.app', expectedClass: 'AI_VIBECODED', category: 'Developer Portfolio Prompt' },
  { domain: 'effortless-auth.dev', url: 'https://effortless-auth.dev', expectedClass: 'AI_VIBECODED', category: 'Clerk/Next-Auth Scaffold' },
  { domain: 'revolut-clone-demo.vercel.app', url: 'https://revolut-clone-demo.vercel.app', expectedClass: 'AI_VIBECODED', category: 'UI Recreation Prompt' },
  { domain: 'ai-cover-letter-writer.app', url: 'https://ai-cover-letter-writer.app', expectedClass: 'AI_VIBECODED', category: 'Vibe SaaS' },
  { domain: 'modern-saas-boilerplate.dev', url: 'https://modern-saas-boilerplate.dev', expectedClass: 'AI_VIBECODED', category: 'Starter Boilerplate' },
  { domain: 'agentic-researcher.ai', url: 'https://agentic-researcher.ai', expectedClass: 'AI_VIBECODED', category: 'AI Agent Landing' },
  { domain: 'vibe-code-sandbox.io', url: 'https://vibe-code-sandbox.io', expectedClass: 'AI_VIBECODED', category: 'Code Generator' },
  { domain: 'crypto-arbitrage-ai.app', url: 'https://crypto-arbitrage-ai.app', expectedClass: 'AI_VIBECODED', category: 'Crypto AI Scaffold' },
  { domain: 'lead-enricher-copilot.io', url: 'https://lead-enricher-copilot.io', expectedClass: 'AI_VIBECODED', category: 'Sales Scaffolding' },
  { domain: 'v0-ecommerce-minimal.vercel.app', url: 'https://v0-ecommerce-minimal.vercel.app', expectedClass: 'AI_VIBECODED', category: 'v0 Ecommerce Demo' },
  { domain: 'supercharged-forms.dev', url: 'https://supercharged-forms.dev', expectedClass: 'AI_VIBECODED', category: 'Form Scaffold' },
  { domain: 'ai-seo-optimizer.studio', url: 'https://ai-seo-optimizer.studio', expectedClass: 'AI_VIBECODED', category: 'SEO Prompt Tool' },
  { domain: 'vibe-analytics-suite.io', url: 'https://vibe-analytics-suite.io', expectedClass: 'AI_VIBECODED', category: 'Analytics Landing Clone' },
];

export async function runBenchmarkSuite() {
  console.log('========================================================================');
  console.log('THISAI? FORENSIC BENCHMARK TEST SUITE (100 TARGET DATASET)');
  console.log('50 Human Handcrafted / Legacy Sites  vs  50 AI-Assisted Vibe-Coded Sites');
  console.log('========================================================================\n');

  let truePositives = 0;   // AI predicted as AI (score >= 60)
  let trueNegatives = 0;   // Human predicted as Human (score < 60)
  let falsePositives = 0;  // Human predicted as AI
  let falseNegatives = 0;  // AI predicted as Human

  const detailedResults: Array<{
    domain: string;
    expected: string;
    score: number;
    verdict: string;
    isCorrect: boolean;
    category: string;
  }> = [];

  for (let i = 0; i < BENCHMARK_DATASET.length; i++) {
    const target = BENCHMARK_DATASET[i];
    const result = await analyzeWebsiteForensics(target.url, target.domain);
    const predictedAI = result.overallScore >= 60;
    const isActualAI = target.expectedClass === 'AI_VIBECODED';

    const isCorrect = (predictedAI && isActualAI) || (!predictedAI && !isActualAI);

    if (isActualAI && predictedAI) truePositives++;
    else if (!isActualAI && !predictedAI) trueNegatives++;
    else if (!isActualAI && predictedAI) falsePositives++;
    else if (isActualAI && !predictedAI) falseNegatives++;

    detailedResults.push({
      domain: target.domain,
      expected: target.expectedClass,
      score: result.overallScore,
      verdict: result.verdict,
      isCorrect,
      category: target.category,
    });

    const statusMark = isCorrect ? '✓ [PASS]' : '✗ [FAIL]';
    console.log(
      `[${(i + 1).toString().padStart(3, '0')}/100] ${target.domain.padEnd(34)} | Score: ${result.overallScore.toString().padStart(2, ' ')}% | Expected: ${target.expectedClass.padEnd(17)} | ${statusMark}`
    );
  }

  const total = BENCHMARK_DATASET.length;
  const correctCount = truePositives + trueNegatives;
  const accuracy = (correctCount / total) * 100;
  const precision = truePositives / (truePositives + falsePositives || 1);
  const recall = truePositives / (truePositives + falseNegatives || 1);
  const f1 = (2 * precision * recall) / (precision + recall || 1);

  console.log('\n========================================================================');
  console.log('BENCHMARK SUMMARY METRICS');
  console.log('========================================================================');
  console.log(`Total Evaluated:       ${total}`);
  console.log(`Total Correct:         ${correctCount} / ${total}`);
  console.log(`Global Accuracy:       ${accuracy.toFixed(1)}%`);
  console.log(`True Positives (AI):   ${truePositives} / 50`);
  console.log(`True Negatives (Hum):  ${trueNegatives} / 50`);
  console.log(`False Positives:       ${falsePositives} (Human classified as AI)`);
  console.log(`False Negatives:       ${falseNegatives} (AI classified as Human)`);
  console.log(`Precision:             ${(precision * 100).toFixed(1)}%`);
  console.log(`Recall:                ${(recall * 100).toFixed(1)}%`);
  console.log(`F1 Score:              ${(f1 * 100).toFixed(1)}%`);
  console.log('========================================================================\n');

  return {
    total,
    correctCount,
    accuracy,
    truePositives,
    trueNegatives,
    falsePositives,
    falseNegatives,
    precision,
    recall,
    f1,
    detailedResults,
  };
}

// Auto-run if executed directly
if (typeof require !== 'undefined' && require.main === module) {
  runBenchmarkSuite();
} else if (typeof process !== 'undefined') {
  runBenchmarkSuite();
}
