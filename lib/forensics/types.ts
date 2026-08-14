export type ConfidenceLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'DEFINITIVE_CADENCE';

export type SignalVerdict = 'LOW AI SIGNALS' | 'MODERATE AI SIGNALS' | 'LIKELY AI-ASSISTED' | 'HIGH AI SIGNALS DETECTED';

export interface EvidenceItem {
  id: string;
  points: number; // e.g. +14, +16, -08
  category: 'CODE' | 'NAMING' | 'STRUCTURE' | 'VISUAL' | 'CONTENT' | 'TECH';
  title: string;
  description: string;
  codeSnippet?: string;
  isPositive: boolean; // positive means pointing towards AI, negative means human craft / legacy
}

export interface ScoreVectors {
  code: number;       // 0 - 100
  naming: number;     // 0 - 100
  structure: number;  // 0 - 100
  visual: number;     // 0 - 100
  content: number;    // 0 - 100
}

export interface TechStackItem {
  name: string;
  category: string;
  confidence: number;
  aiAffinity: 'HIGH' | 'NEUTRAL' | 'LOW';
}

export interface VisualMarker {
  id: string;
  label: string;
  x: number; // percentage
  y: number; // percentage
  w: number; // percentage
  h: number; // percentage
  finding: string;
}

export interface InvestigationResult {
  id: string;
  targetUrl: string;
  domain: string;
  timestampUtc: string;
  overallScore: number;
  verdict: SignalVerdict;
  confidence: ConfidenceLevel;
  summary: string;
  vectors: ScoreVectors;
  evidences: EvidenceItem[];
  technologies: TechStackItem[];
  visualMarkers: VisualMarker[];
  scannedNodesCount: number;
  totalLinesScanned: number;
  entropyScore: number;
  screenshotUrl?: string;
}

export interface ScanStage {
  id: number;
  code: string;
  label: string;
  details: string;
  status: 'pending' | 'active' | 'completed';
}

export interface InvestigationPreset {
  domain: string;
  url: string;
  title: string;
  issueNumber: string;
  previewImage?: string;
  result: InvestigationResult;
}
