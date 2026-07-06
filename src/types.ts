export interface AgentWorkflowStep {
  id: string;
  agentName: string;
  timestamp: string;
  status: "running" | "success" | "warning" | "info" | "error";
  message: string;
  details?: string;
}

// 1. Pipeline Optimization Types
export interface PipelineStage {
  stageName: string;
  count: number;
  value: number;
  avgDurationDays: number;
  conversionRate: number; // conversion from previous stage
}

export interface DealRisk {
  dealName: string;
  value: number;
  currentStage: string;
  stagnantDays: number;
  riskReason: string;
  mitigationStrategy: string;
}

export interface PipelineOptimizationResult {
  pipelineHealthScore: number; // 0-100
  totalValue: number;
  optimizedValueForecast: number;
  bottlenecks: string[];
  actionPlan: string[];
  stages: PipelineStage[];
  riskyDeals: DealRisk[];
  workflow: AgentWorkflowStep[];
}

// 2. Expense Rationalization Types
export interface ExpenseItem {
  id: string;
  date: string;
  merchant: string;
  category: string;
  amount: number;
  riskCategory: "low" | "medium" | "high";
  anomalyReason?: string;
  rationalizationAction?: string;
}

export interface ExpenseRationalizationResult {
  auditScore: number; // 100 is pristine, 0 is full of waste
  totalAudited: number;
  totalPotentialSavings: number;
  anomaliesDetectedCount: number;
  savingsOpportunities: string[];
  expenseItems: ExpenseItem[];
  workflow: AgentWorkflowStep[];
}

// 3. Product Innovation & Competitive Intelligence Types
export interface CompetitorAnalytic {
  name: string;
  strengths: string[];
  vulnerabilities: string[];
  estimatedMarketShare: number;
}

export interface InnovationAnalysisResult {
  marketFitScore: number; // 0-100
  marketOpportunitySize: string;
  competitiveThreatLevel: "low" | "medium" | "high";
  competitors: CompetitorAnalytic[];
  regulatoryMoats: string[];
  pivotsAndAvenues: string[];
  executiveSummary: string;
  workflow: AgentWorkflowStep[];
}
